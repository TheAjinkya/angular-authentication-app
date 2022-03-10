import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize } from 'rxjs/operators';

 
const usersKey = "angular-10-registration-login-example";
const users = JSON.parse(localStorage.getItem(usersKey)) || [];

@Injectable()
export class FakebackendInterceptor implements HttpInterceptor {

  constructor() { }
 

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const {url, method, headers, body } = request
    console.log("Fake ", url, method, headers, body);
    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith('users/login') && method === 'POST':
          return authenticate()
          break;
        case url.endsWith('users/register') && method === 'POST':
          return register()
          break;
        default:
          return next.handle(request)
          break;
      }
    }

    function authenticate() {
      const { userName, password } = body
      const user = (users.find(x => x.userName === userName && x.password === password))
      if (!user) return error("Credentials are not matched!")
      return ok({
        ...user,
        token:'fake-jwt-token'
      });


    }

    function register() {
      const user = body
      if (users.find(x => x.userName === user.userName)) {
        return error("Username "+ user.userName +" is already taken!")
      }
      user.id = user.length ? Math.max(...users.map(x => x.id)) + 1 : 1
      users.push(user);
      localStorage.setItem(usersKey, JSON.stringify(users))
      console.log("User Created: ", user);
      return ok()
    }

    function ok(body?) {
     return of(new HttpResponse({status:200, body})).pipe(delay(4000))
    }

    function error(message) {
      return throwError({ error: { message } }).pipe(materialize(), delay(500), dematerialize())
    }

  }
}
