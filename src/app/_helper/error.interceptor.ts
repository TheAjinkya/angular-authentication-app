import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Error Interceptor: ", request)
    const endResult = next.handle(request).pipe(catchError(err => {
      if (['401', '404', '403'].includes(err.status)) {
        console.log("err detected as follow: ")
      }
      const error = err.error?.message || err.error?.statusText
      console.error(err)
      return throwError(err)
    }))

    return endResult;
  }
}
