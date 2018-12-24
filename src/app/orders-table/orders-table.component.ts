import { Component, OnInit, Input } from '@angular/core';
import { MatTab, MatTableDataSource, MatDialog } from '@angular/material';
import { Order } from '../model/Order';
import { AlertComponent } from '../alert/alert.component'; 
import { FormControl } from '@angular/forms';
import { OrderService } from '../service/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  private orderDataSource: MatTableDataSource<Order> = new MatTableDataSource<Order>(); 
  private $orders: Order[] = []; 
  private $selectedOrders: Order[] = []; 
  private adjustedQuantity: FormControl = new FormControl(); 
  private $auth: User; 
  private all: boolean; 

  public displayedColumns = [
      'autorize', 
      'no',
      'drug',
      'quantity',
    //  'autorized',
      'ordered_quantity',
      'adjusted_quantity',
      'issued_quantity',   
      'expier_at',
      'is_recived',
      'recived_at']; 


  @Input() orders; 


  ngOnChanges(){
    this.$orders = this.orders;
    this.orderDataSource.data = this.orders;
    this.refresh(); 
  }
  constructor(
    private _dialog: MatDialog, 
    private _order: OrderService, 
    private _activeRoute: ActivatedRoute, 
    private _route: Router, 
    private _user: UserService
  ) { }

  ngOnInit() {
    this._user.authUser().subscribe(
      (user) => {
        this.$auth = user; 
      }
    )
  }
  select(e, order: Order){
    order.selected = e.checked; 
    order.autorized_by = this.$auth.id; 
    this.refresh(); 
  }

  selectAll(e){
    this.$orders.forEach((order)=>{
      if(order.issued_by != null){
        if(e.checked){
          order.selected = true; 
        }else
          order.selected = false; 
      }
    }); 

    this.orderDataSource.data = this.orders;
  }

  refresh(){
    let temp = true;
    this.$orders.forEach(
      (order) => {
        order.adjusted_quantity = order.ordered_quantity; 
        if(!order.selected){ temp = false; }
      }
    ); 
    this.all = temp; 
  }
  autorize(){
    let dialogRef = this._dialog.open(AlertComponent, {
      width: "400px", 
      data: {
        message: "Are you shure you want to autorize the checked drugs", 
        dialog: "confirm"
      }
    }); 
    //let orders = this.$selectedOrders; 
    dialogRef.afterClosed().subscribe(
      (response)=> {
        if(response.responce){
          this._order.autorize(this.$orders)
          .subscribe(
            (r) => {
              this._route.navigate(["/drugs"]); 
            }
          )
        }
      }
    ); 
  }
}
