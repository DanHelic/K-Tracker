import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Purchase } from '../../api/Purchase';

export interface IPurchase {
  purchase_id: number,
  purchase_name: string;
  total_price: string;
  item_count: string;
  purchased_at: string;
  store: string;
}

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.html',
  styleUrl: './purchases.css',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})

export class Purchases implements AfterViewInit {
  displayedColumns: string[] = ['purchase_name', 'total_price', 'item_count', 'purchased_at', 'store'];
  dataSource = new MatTableDataSource<IPurchase>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private purchase: Purchase) {}

  totalItems = 0;
  pageSize = 0;
  pageIndex = 1;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

    this.paginator.page.subscribe(e => {
      this.pageIndex = e.pageIndex+1;
      this.pageSize = e.pageSize;
      this.loadPage(this.pageIndex, this.pageSize);
    });

    this.loadPage(1, 5);
  }

  loadPage(page: number, size: number){
    console.log(page + " hi " + size);
    this.purchase.getPurchasesSearch(page, size, "", true, this.searchTerm).subscribe( res => {
      console.log(res);

      let pageData = ((res as any).data as IPurchase[]).map( p => ({
        ...p,
        purchased_at: p.purchased_at.split('T')[0]
      }));

      this.dataSource.data = pageData as IPurchase[];

      this.totalItems = (res as any).dataCount;
    });
    console.log(this.searchTerm);
  }

  searchTimeout: any;
  searchTerm = '';

  applySearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.trim().toLowerCase();
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.loadPage(this.pageIndex, this.pageSize);
    }, 400);
  }


}
