import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  isHavingAccount: boolean = true;
  isPasswordVisible: boolean = false;
  isPasswordVisible2: boolean = false;
  LoggedInStatus: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
