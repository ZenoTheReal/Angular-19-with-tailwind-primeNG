import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};


export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
