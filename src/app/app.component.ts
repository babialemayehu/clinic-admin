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
  
  ok(){ 
    let alertRef = this.alert.open(AlertComponent, {
      data: {
        title: "the title", 
        type: "error", 
        message: "Theis the massesage ", 
        color: 'green',
        dialog: 'confirm'
      }
    }); 

    alertRef.afterClosed().subscribe(
      result => {console.log(result); }
    ); 
  }
}
