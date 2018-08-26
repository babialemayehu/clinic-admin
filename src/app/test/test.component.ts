import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms'; 

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  testFrom:FormGroup; 
  
  constructor (private formBuilder:FormBuilder) { }
  
  ngOnInit() {
    this.testFrom = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email] ],
      name: ['', [Validators.required]]
    });
    this.testFrom.valueChanges.subscribe(console.log); 
  }
  get email(){
    return this.testFrom.get("email"); 
  }
}
