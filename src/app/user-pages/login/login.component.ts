import { Component, OnInit } from "@angular/core";
import { EMPTY, range } from "rxjs";
import { first, take } from "rxjs/operators";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  login(userName: string, password: string) {
    console.log(userName, password);
    this.authService.loginUser(userName, password).pipe(first())
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  register(userName: string, password: string) {
    console.log(userName, password);
    this.authService
      .registerUser(userName, password)
      .pipe(first())
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
