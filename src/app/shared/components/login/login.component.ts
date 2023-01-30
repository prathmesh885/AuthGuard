import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isHavingAccount: boolean = true;
  isPasswordVisible: boolean = false;
  isPasswordVisible2: boolean = false;
  LoggedInStatus: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    // if (!this.global.LoggedInStatus) {
    //   this.router.navigate(['../login'])
    // }
  }

  login() {
    this.authService.logInToApplication();
    this.router.navigate(['dashboard'])
  }
}
