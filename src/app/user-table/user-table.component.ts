import { Component, OnInit, ViewChild } from '@angular/core' ;
import { MatPaginator, MatSort } from '@angular/material' ;
import { UserTableDataSource } from './user-table-datasource' ;
import { UserService } from '../service/user.service' ; 
import { MatDialog } from '@angular/material' ; 
import { RegisterationFormComponent } from '../registeration-form/registeration-form.component' ; 
import { RoleService } from '../service/role.service' ; 
import { ContextMenuComponent } from '../context-menu/context-menu.component' ; 
import { UserProfileModalComponent } from '../user-profile-modal/user-profile-modal.component' ;
import { AlertComponent } from '../alert/alert.component' ; 
import { User } from '../model/User' ; 

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator ;
  @ViewChild(MatSort) sort: MatSort ;
  dataSource: UserTableDataSource ;


  contextMenu = ContextMenuComponent ; 
  menuItems = [
    {icon: 'edit', text: 'Edit'},
    {icon: 'visibility', text: 'View profile'},
    {icon: 'delete', text: 'Remove user'},
  ] ;

  displayedColumns = ['worker_id', 'name', 'role' , 'gender'/* , 'email' , 'phone'*/] ;
  public roles ; 
  public users: User[] ;

  constructor(public modal: MatDialog,  public _roles: RoleService, public _user: UserService){}
  ngOnInit() {
    this.dataSource = new UserTableDataSource(this.paginator, this.sort, []) ;

    this._user.getUsers().subscribe(
      data => {
        this.users = data ;
        this.dataSource = new UserTableDataSource(this.paginator, this.sort, data) ;
      }
    ) ;
    this._roles.getRoles().subscribe(
      result => {
        this.roles = result ; 
      }
    )
  }
  onContextMenu(responce) {
    switch(responce.index) {
      case 0: 
        let registerDialog = this.modal.open(RegisterationFormComponent,{
          width: '600px', 
          data: {
            roles: this.roles,
            user: responce.data
          },
        }) ; 

        registerDialog.afterClosed().subscribe(
          (responce) => {
            if(responce.responce){
             
              let i = this.users.findIndex(function(value: User){ 
                return (responce.data.id == value.id);
              });
              this.users[i] = responce.data;
              this.dataSource = new UserTableDataSource(this.paginator, this.sort, this.users) ;
            } 
          }
        ) ;
        break ;
      case 1: 
        let profileDialog = this.modal.open(UserProfileModalComponent,{
          width: '600px',
          data: {
            user: responce.data
          },
        }) ;

        profileDialog.afterClosed().subscribe(
          responce => {
            console.log(responce) ; 
          }
        ) ;
      break ; 
      case 2:
        let deleteDialog = this.modal.open(AlertComponent, {
          data:{
            title: "Remove User", 
            message: "Are you shure? Do you want to remove <b>"+responce.data.first_name+ " " +responce.data.father_name + "</b>",
            dialog: "confirm",
            data: responce.data,
          }
        }) ; 

        deleteDialog.afterClosed().subscribe(
          confirmed => {
            if(confirmed.responce){
              this._user.deleteUser(confirmed.data.id).subscribe(
                responce => {
                  let newTableData = this.users.filter(function(value, index, arr){
                    return value != confirmed.data; 
                  }); 
                  this.dataSource = new UserTableDataSource(this.paginator, this.sort, newTableData) ;
                }
              ) ; 
            } 
          }
        )
      break ;
    }
   
    console.log(responce) ; 
  }
}
