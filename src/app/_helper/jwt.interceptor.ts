import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const modifiedRequest = request.clone({
      setHeaders: {
        'Authorization':'Token Bearer'
      }
    })
    console.log("request:", request);
    console.log("modifiedRequest:",modifiedRequest)

    return next.handle(request);
  }
}
