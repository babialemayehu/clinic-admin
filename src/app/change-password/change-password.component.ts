import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators }  from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      current_password: ['', [Validators.min(6),Validators.required]], 
      new_password: ['', [Validators.min(6),Validators.required]], 
      confirm_password: ['',[Validators.min(6),Validators.required]],
    });

    this.changePasswordForm.valueChanges.subscribe(
      values => {
        console.log(values); 
      }
    )
 console.log(this.changePasswordForm); 
  }
  confirm(confirm: FormControl){
    
    const newPass = this.changePasswordForm.value.new_password; 
    if(newPass == confirm.value){
      return ({validConfirm_password: true});
    } else {
      return (null);
    }
  }

  get current_password(){return this.changePasswordForm.get('current_password')}
  get new_password(){return this.changePasswordForm.get('new_password')}
  get confirm_password(){return this.changePasswordForm.get('confirm_password')}
}
