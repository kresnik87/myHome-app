import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth_service: AuthService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let auth = this.auth_service.getLocalAuth();
    if (this.auth_service.isGranted()) {

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${auth.getAccess_token()}`
        }
      });
    }
    return next.handle(request);
  }
}
