import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { User } from '../model/User'; 
import { UserService } from '../service/user.service'; 

export class UserTableDataSource extends DataSource<User> {

  constructor(private paginator: MatPaginator, private sort: MatSort, public data: User[]) {
    super();
  }

  connect(): Observable<User[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      console.log("next"); 
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }


  disconnect() {}

  private getPagedData(data: User[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: User[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.first_name, b.first_name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'role': return compare(a.first_name, b.first_name, isAsc);
        case 'phone': return compare(+a.id, +b.id, isAsc);
        case 'gender': return compare(a.first_name, b.first_name, isAsc);
        case 'email': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
