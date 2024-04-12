import { HttpInterceptorFn } from '@angular/common/http';
import { EMPTY, catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((res) => {
      if (res.status == 404) {
        alert('404 error');
      }
      return EMPTY;
    })
  );
};
