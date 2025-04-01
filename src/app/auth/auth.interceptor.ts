import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = sessionStorage.getItem('auth_token');

    if (token) {
      const cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
