import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../service/user.service"; 
import { User } from "../model/User";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: User;
  public param; 
  constructor(
    private route: ActivatedRoute, 
    private _user: UserService) { 

  }

  ngOnInit() {
    this.route.params.subscribe( param => {
      this._user.userProfile(param.worker_id).subscribe(
        (responce: User) => {
          this.user = responce;
        }
      ) 
    })
  }

}
