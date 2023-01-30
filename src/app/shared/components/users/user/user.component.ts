import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/product';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId: number = 1;
  // userDetails: Iuser | undefined;
  userDetails !: Iuser
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.userId = +this.route.snapshot.params['id']
    this.route.params.subscribe((myparams: Params) => {
      console.log(myparams);
      this.userId = +myparams['id']
      this.getUserDetails();
      console.log(this.userId);
    })

    // console.log(this.route.snapshot.params);
  }
  getUserDetails() {
    this.userDetails = this.userService.getSingleUser(this.userId)!;
    // this.userDetails = this.userService.getSingleUser(this.userId);
    // console.log(this.userDetails);
  }
  onEditUsere() {
    this.router.navigate(['/users', this.userId, 'edit'])

  }
}
