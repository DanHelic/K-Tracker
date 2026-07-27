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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SinglePurchase } from '../../api/SinglePurchase';
import { RouterLink } from '@angular/router';
import IPurchaseItem from '../../core/IPurchaseItem';
import IItem from '../../core/IItem';

@Component({
  selector: 'app-purchase',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatAutocompleteModule, ReactiveFormsModule],
  templateUrl: './purchase.html',
  styleUrl: './purchase.css',
})
export class Purchase implements AfterViewInit, OnInit {


  displayedColumns: string[] = ['item_name', 'item_total_price', 'amount', 'price_per_amount']; 
  dataSource = new MatTableDataSource<IPurchaseItem>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private singlePurchase: SinglePurchase, private route: ActivatedRoute) {}

  purchaseId!: number;
  totalItems = 0;
  pageSize = 15;
  pageIndex = 1;
  orderBy = "item_name"
  order = "asc"
  searchTerm = '';
  searchTimeout: any;
  sortTimeout: any;

  allItems: IItem[] = [];
  pageData: any;
  itemControl = new FormControl('');
  filteredItems = this.allItems;
  itemGroups!: Map<number, IItem[]>;
  sortedGroups!: [number, IItem[]][];

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
    this.purchaseId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadData();
    this.singlePurchase.getAllItems().subscribe( res => { //get all Standard-Items
      this.allItems = res as IItem[];
      this.filteredItems = this.allItems;
      this.itemGroups = new Map<number, IItem[]>();
      this.doItemGroups();
      console.log(this.itemGroups);
    });

    this.itemControl.valueChanges.subscribe(value => { //filter of all Items in list for name, type, value, producer
      const search = typeof value === 'string' ? value.toLowerCase() : '';
      this.filteredItems = this.allItems.filter(item =>
        item.name.toLowerCase().includes(search) ||
        item.item_type?.item_type_name.toLowerCase().includes(search) ||
        search.includes(String(item.value)) ||
        item.item_producer?.item_producer_name.toLowerCase().includes(search)
      );
      this.doItemGroups();
    });
  }

  doItemGroups() {
    this.itemGroups.clear();
    this.filteredItems.forEach(item => {
      if(item.item_type){
        if(this.itemGroups.get(item.item_type.item_type_id)) this.itemGroups.get(item.item_type.item_type_id)?.push(item);
        else this.itemGroups.set(item.item_type.item_type_id, new Array(item))
      }
    });
    this.sortedGroups = [...this.itemGroups.entries()]
      .sort(([idA, itemsA], [idB, itemsB]) => {

        // no itemType to the back
        if (idA === -1) return 1;
        if (idB === -1) return -1;

        const nameA = itemsA[0]?.item_type?.item_type_name ?? '';
        const nameB = itemsB[0]?.item_type?.item_type_name ?? '';

        return nameA.localeCompare(nameB);
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


  loadData(){ //get items of purchase
    if(!this.purchaseId) return;
    this.singlePurchase.getPurchase(this.purchaseId).subscribe( res => {

      this.pageData = (res as IPurchaseItem[]).map( p => ({
        ...p,
        price_per_amount: p.item_total_price / (p.amount??1),
        item_name: p.item_name ?? p.item?.name
      }));

      this.dataSource.data = this.pageData as IPurchaseItem[];
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

  setPurchaseItem(event: IPurchaseItem) {
    this.setItem(event.item);
    this.selectedItem = this.allItems.find((item: IItem) => item.item_id === event.item?.item_id) ?? null;

    this.customItemName = event.item ? "" : event.item_name;
    this.priceField = event.item_total_price;
    this.amountField = event.amount;
    this.pricePerUnitField = event.price_per_amount;
    
  }
  
  dN() {

  }

  displayItem(item: any): string {
    return item?.name ?? '';
  }
}
