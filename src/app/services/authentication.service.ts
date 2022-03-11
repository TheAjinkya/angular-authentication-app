import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { usersKey } from "../backend/fakebackend.interceptor";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    console.log("Loginuser");
    const formData = { userName: userName, password: password };
    return this.http.post("users/login", formData);
  }

  registerUser(userName: string, password: string) {
    console.log("registerUser");
    const formData = { userName: userName, password: password };
    return this.http.post("users/register", formData);
  }

  isLoggedIn() {
    const users = localStorage.getItem(usersKey)
    console.log("isLoggedIn", users)
  }

  

}
