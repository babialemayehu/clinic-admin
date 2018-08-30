import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'; 
import { AlertComponent } from  './alert/alert.component'

declare var M; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin2';
  constructor(public alert: MatDialog) { }

  ngOnInit(){
    document.addEventListener('DOMContentLoaded', function() {
      M.AutoInit(); 
    });
  }
    

}
