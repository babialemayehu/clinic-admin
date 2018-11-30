import { Component, OnInit, Input } from '@angular/core';
import { MatTab, MatTableDataSource } from '@angular/material';
import { Order } from '../model/Order';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  private orderDataSource: MatTableDataSource<Order> = new MatTableDataSource<Order>(); 
  private $orders: Order[] = []; 
  public displayedColumns = [
      'no',
      'drug',
      'quantity',
      'autorized',
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
  }
  constructor() { }

  ngOnInit() {
  }

}
