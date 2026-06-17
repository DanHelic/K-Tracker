import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SinglePurchase } from '../../api/SinglePurchase';
import { RouterLink } from '@angular/router';
import ISinglePurchase from '../../core/ISinglePurchase';
import IItem from '../../core/IItem';

@Component({
  selector: 'app-purchase',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './purchase.html',
  styleUrl: './purchase.css',
})
export class Purchase implements AfterViewInit, OnInit {


  displayedColumns: string[] = ['item_name', 'item_total_price', 'amount', 'price_per_amount'];
  dataSource = new MatTableDataSource<ISinglePurchase>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private singlePurchase: SinglePurchase) {}

  totalItems = 0;
  pageSize = 15;
  pageIndex = 1;
  orderBy = "item_name"
  order = "asc"
  searchTerm = '';
  searchTimeout: any;
  sortTimeout: any;
  allItems: any;
  pageData: any;

  selectedItem: any;
  itemId: any;
  producerField: any;
  amountUnitField: any;
  countryField: any;

  customItemName: any;
  priceField: any;
  amountField: any;
  pricePerUnitField: any;



  ngOnInit(): void {
    this.loadData();
    this.singlePurchase.getAllItems().subscribe( res => {
      this.allItems = res as IItem[];
      console.log(this.allItems);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }
      return data[sortHeaderId];
    }
  }


  loadData(){
    this.singlePurchase.getPurchase(11).subscribe( res => {

      this.pageData = (res as ISinglePurchase[]).map( p => ({
        ...p,
        price_per_amount: p.item_total_price / (p.amount??1),
        item_name: p.item_name ?? p.item?.name
      }));

      this.dataSource.data = this.pageData as ISinglePurchase[];
      console.log(this.pageData);
    });
  }

  applySearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setItem(event: IItem | null) {
    if(!event) {
      this.producerField = "";
      this.amountUnitField = "";
      this.countryField = ""; 
      this.itemId = "";
    }
    else {
      this.producerField = event.item_producer?.item_producer_name ?? "";
      this.amountUnitField = event.value + " " + event.unit;
      this.countryField = event.country?.country_code ?? "";  
      this.itemId = event.item_id;  
    }
  }

  setPurchaseItem(event: ISinglePurchase) {
    this.setItem(event.item);
    this.selectedItem = this.allItems.find((item: IItem) => item.item_id === event.item?.item_id) ?? null;

    this.customItemName = event.item ? "" : event.item_name;
    this.priceField = event.item_total_price;
    this.amountField = event.amount;
    this.pricePerUnitField = event.price_per_amount;
    
  }
  
  dN() {

  }

  
}
