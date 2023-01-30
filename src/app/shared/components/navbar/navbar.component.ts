import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onUserLogin() {
    this.authService.logInToApplication()
  }
  onUserLogOut() {
    this.authService.logOutFormApplication()
    // this.router.navigate(['/'])
    this.router.navigate(['/'], { replaceUrl: true });
  }
}
