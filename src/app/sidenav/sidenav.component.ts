import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service'; 
import { User } from '../model/User'; 

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [UserService]
})
export class SidenavComponent implements OnInit {
  public $auth: object; 
  constructor(public _user: UserService) {
    this.$auth  = {
      fist_name: '', 
      father_name: '', 
      email: '', 
    }
    // this.$auth.first_name = ''; 
    // this.$auth.father_name = ''; 
    // this.$auth.email = ''; 
    this._user.authUser().subscribe(
      result => {
        this.$auth = result; 
      }
    ) 
   }

  ngOnInit() {
   
  }
}
