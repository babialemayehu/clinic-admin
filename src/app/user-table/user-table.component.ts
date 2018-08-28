import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserTableDataSource } from './user-table-datasource';
import { UserService } from '../service/user.service'; 
import { MatDialog } from '@angular/material'; 
import { RegisterationFormComponent } from '../registeration-form/registeration-form.component'; 
import { RoleService } from '../service/role.service'; 
import { ContextMenuComponent } from '../context-menu/context-menu.component'; 

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserTableDataSource;


  contextMenu = ContextMenuComponent; 
  menuItems = [
    {icon: 'edit', text:'Edit'}
  ];

  displayedColumns = ['worker_id', 'name', 'role' , 'gender'/* , 'email' , 'phone'*/];
  public roles; 
  constructor(public registrationDialog: MatDialog,  public _roles: RoleService, public _user: UserService){}
  ngOnInit() {
    this.dataSource = new UserTableDataSource(this.paginator, this.sort, []);

    this._user.getUsers().subscribe(
      data =>{
        this.dataSource = new UserTableDataSource(this.paginator, this.sort, data);
      }
    );
    this._roles.getRoles().subscribe(
      result => {
        this.roles = result; 
      }
    )
  }
  onContextMenu(responce){
    let dialog = this.registrationDialog.open(RegisterationFormComponent,{
      width: '600px', 
      data: {
        roles: this.roles,
        user: responce.data
      }, 
    } ); 
    console.log(responce); 
  }
}
