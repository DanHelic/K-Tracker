import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Purchase } from '../../api/Purchase';
import { RouterLink } from '@angular/router';

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
  imports: [RouterLink, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})

export class Purchases implements AfterViewInit {
  displayedColumns: string[] = ['purchase_name', 'total_price', 'item_count', 'purchased_at', 'store'];
  dataSource = new MatTableDataSource<IPurchase>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private purchase: Purchase) {}

  totalItems = 0;
  pageSize = 15;
  pageIndex = 1;
  orderBy = "purchased_at"
  order = "desc"
  searchTerm = '';
  searchTimeout: any;
  sortTimeout: any;

  ngAfterViewInit() {
    this.paginator.page.subscribe(e => {
      this.pageIndex = e.pageIndex+1;
      this.pageSize = e.pageSize;
      this.loadPage();
    });

    this.sort.sortChange.subscribe(e => {
      this.orderBy = e.active;
      this.order = e.direction;
      clearTimeout(this.sortTimeout);
      this.sortTimeout = setTimeout(() => {
        this.loadPage();
      }, 200);
    });

    this.loadPage();
  }


  loadPage(){
    this.purchase.getPurchasesSearch(this.pageIndex, this.pageSize, this.orderBy, this.order, this.searchTerm).subscribe( res => {
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


  applySearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.trim().toLowerCase();
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.loadPage();
    }, 400);
  }


}
