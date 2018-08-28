import { Component, OnInit } from '@angular/core';
import { ContextMenuComponent } from '../context-menu/context-menu.component'; 

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss']
})
export class ContextComponent implements OnInit {

  menu = ContextMenuComponent; 
  constructor() { }
  ngOnInit() {
    
  }
  handleClose(e) {
    console.log('this it'); 
  }
}
