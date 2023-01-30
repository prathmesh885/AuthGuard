import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/product';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId: number | undefined;
  userInfo: Iuser | undefined;

  constructor(private usersService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = +params['id']
      this.getUserDetails()
    })
  }

  getUserDetails() {
    this.userInfo = this.usersService.getSingleUser(this.userId!)
  }

  onUserUpdate(userName: HTMLInputElement) {
    // this.router.navigate(['/users'])
    this.usersService.getUpdateUser(userName.value, this.userId!)
    this.router.navigate(['users/' + this.userId])

  }

}
