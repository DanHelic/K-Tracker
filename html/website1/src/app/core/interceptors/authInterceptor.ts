import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '../../api/Auth'
import { catchError, switchMap, throwError } from 'rxjs';
import { SKIP_AUTH_REFRESH } from './auth-token';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(Auth);

  const token = localStorage.getItem('accessToken');

  const skipRefresh = req.context.get(SKIP_AUTH_REFRESH);

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

      if (err.status === 401 && !skipRefresh) {

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