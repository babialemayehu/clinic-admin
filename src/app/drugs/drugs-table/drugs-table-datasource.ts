import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Order } from '../../model/Order'; 

export class DrugsTableDataSource extends DataSource<Order> {
  constructor(private paginator: MatPaginator, private sort: MatSort, private data) {
    super();
  }

  connect(): Observable<Order[]> {

    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}

  private getPagedData(data: Order[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: Order[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Drug': return compare(a.drug.name, b.drug.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'date': return compare(a.created_at, b.created_at, isAsc); 
        case 'quantity': return compare(a.ordered_quantity, b.ordered_quantity, isAsc); 
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
