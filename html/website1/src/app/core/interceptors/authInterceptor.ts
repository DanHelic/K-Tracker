import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '../../api/Auth'
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(Auth);

  const token = localStorage.getItem('accessToken');

  let authReq = req;

  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(authReq).pipe(
    catchError(err => {

      if (err.status === 401) {

        return authService.refreshToken().pipe(
          switchMap(res => {

            localStorage.setItem('accessToken', res.accessToken);

            const retryReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${res.accessToken}`
              }
            });
            console.log("token refreshed");
            return next(retryReq);
          }),
          catchError(refreshErr => {
            //localStorage.removeItem('accessToken');
            return throwError(() => refreshErr);
          })
        );
      }

      return throwError(() => err);
    })
  );
};