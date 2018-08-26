import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 
import { FormGroup, FormBuilder , Validators} from '@angular/forms';

import { RoleService } from '../service/role.service'; 
import { UserService } from '../service/user.service'; 

import { User } from '../model/User'; 

declare var M; 
@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.scss'],
  providers: [RoleService,UserService], 
})
export class RegisterationFormComponent implements OnInit {

  public loading = false; 
  public regForm: FormGroup; 
  public roles: object; 

  constructor(
    public thisDialog: MatDialogRef<RegisterationFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any, 
    public formBuilder: FormBuilder, 
    public _user: UserService
  ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      worker_id: ['', [Validators.required]], 
      first_name: ['', [Validators.required]], 
      father_name: ['', [ Validators.required]], 
      grand_father_name: ['', [Validators.required]], 
      gender: ['', [Validators.required]],
      role_id: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', [Validators.required]],
    }); 
  }
  onSubmit(){
    this.loading = true; 
    this._user.postCreateUser(this.regForm.value).subscribe(
      responce => {
        M.toast({
          classes: 'green white-text', 
          // @ts-ignore
          html: '<strong>You have succefully created account for <b> '+responce.first_name+' </b></strong>'
        }) 
      }, 
      error => {
        this.loading = false;
        let message = ''; 

        if(error.status == 0) message = "Error: Please check your connection!"; 
        else if(error.status == 500 ) message = "Error: we have got some problem please try again letter"; 
        else message = "Some error occured"; 
        
        M.toast({
          classes: 'red white-text', 
          html: '<strong>'+ message +'</strong>'
        })
      }
    ) 
  }

  get worker_id(){return this.regForm.get("worker_id"); }
  get first_name(){return this.regForm.get("first_name"); }
  get father_name(){return this.regForm.get("father_name"); }
  get grand_father_name(){return this.regForm.get("grand_father_name"); }
  get gender(){return this.regForm.get("gender"); }
  get role_id(){return this.regForm.get("role_id"); }
  get email(){return this.regForm.get("email"); }
  get phone(){return this.regForm.get("phone"); }
}
