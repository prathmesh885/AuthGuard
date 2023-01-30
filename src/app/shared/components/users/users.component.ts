import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../../model/product';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userData: Iuser[] = []
  activeUserId: number =1;
  constructor(private router: Router, private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userData = this.userService.getAllUsers();
  }

  onGoToProducts() {
    this.router.navigate(['products'])
    // this.router.navigate(['products'], { relativeTo: this.route }) // by default >> Absolute

  }

}
