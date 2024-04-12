import { HttpInterceptorFn } from '@angular/common/http';

export const attachHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  const updatedReq = req.clone({
    headers: req.headers.set('X-BG-TEST', 'Arnel'),
  });
  return next(updatedReq);
};
