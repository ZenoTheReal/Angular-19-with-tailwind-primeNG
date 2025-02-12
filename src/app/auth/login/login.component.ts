import { Component, signal, WritableSignal, effect } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { login } from 'src/app/interfaces/loginform';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ButtonModule, CardModule, ReactiveFormsModule, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  
  submitTrigger = signal(false); // Boolean trigger

  loginform: FormGroup<login> = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {
    // Effect will run only when submitTrigger changes to true
    effect(() => {
      if (this.submitTrigger() === true) {
        this.SubmitLogin(
          this.loginform.getRawValue() as { email: string; password: string },
        );
        this.submitTrigger.set(false); // Reset trigger after request
      }
    });
  }

  SubmitLogin(data: { email: string; password: string }): Observable<any> {
    this.loginform.markAllAsTouched();
    console.log('Login Submitted:', data);
    return of({ success: true }); // Simulating an API call
  }

  onSubmit() {
    this.submitTrigger.set(true); // Triggers API request
  }
}
