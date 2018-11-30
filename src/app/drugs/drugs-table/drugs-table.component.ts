import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DrugsTableDataSource } from './drugs-table-datasource';
import { Order} from '../../model/Order'; 

@Component({
  selector: 'app-drugs/drugs-table',
  templateUrl: './drugs-table.component.html',
  styleUrls: ['./drugs-table.component.css']
})
export class DrugsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DrugsTableDataSource;
  @Input() orders: Order[] = []; 
  displayedColumns = ['no', 'drug', 'quantity', 'adjusted'];

  ngOnInit() {
    this.dataSource = new DrugsTableDataSource(this.paginator, this.sort, this.orders);
  }
}
