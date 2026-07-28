import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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
import IPurchase from '../../core/IPurchase';
import IStore from '../../core/IStore';

@Component({
  selector: 'app-purchase',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatAutocompleteModule, ReactiveFormsModule],
  templateUrl: './purchase.html',
  styleUrl: './purchase.css',
})
export class Purchase implements AfterViewInit, OnInit {


  displayedColumns: string[] = ['item_name', 'item_total_price', 'amount', 'price_per_amount', 'delete']; 
  dataSource = new MatTableDataSource<IPurchaseItem>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private singlePurchase: SinglePurchase, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  purchaseId!: number;
  purchaseDate: any;
  purchaseStore: IStore | null = null;
  purchaseName: any;
  totalItems = 0;
  pageSize = 15;
  pageIndex = 1;
  orderBy = "item_name"
  order = "asc"
  searchTerm = '';
  searchTimeout: any;
  sortTimeout: any;
  lastClickedDeleteIcon: any;

  allItems: IItem[] = [];
  pageData: any;
  itemControl = new FormControl('');
  filteredItems = this.allItems;
  itemGroups!: Map<number, IItem[]>;
  sortedGroups!: [number, IItem[]][];

  selectedItem: any; //item
  itemId: any;
  producerField: any;
  amountUnitField: any;
  countryField: any;

  purchaseItemId: number | null = null; //purchaseItem
  customItemName = new FormControl('');
  priceField = new FormControl('');
  amountField = new FormControl('');
  pricePerUnitField = new FormControl('');


  ngOnInit(): void {
    this.purchaseId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadData();
    this.itemGroups = new Map<number, IItem[]>();

    this.singlePurchase.getPurchase(this.purchaseId).subscribe( res => {
      console.log("purchase");
      const purchase = res as IPurchase;
      this.purchaseDate = new Date(purchase.purchased_at).toLocaleDateString();
      this.purchaseStore = purchase.store;
      this.purchaseName = purchase.purchase_name;
      this.cdr.markForCheck();
    });

    this.singlePurchase.getAllItems().subscribe( res => { //get all Standard-Items
      this.allItems = res as IItem[];
      this.filteredItems = this.allItems;
      this.doItemGroups();
      console.log(this.itemGroups);
      this.cdr.markForCheck();
    });

    this.itemControl.valueChanges.subscribe(value => { //filter of all Items in list for name, type, value, producer
      if (typeof value !== 'string') return;
      const search = value.toLowerCase() ?? "";
      this.filteredItems = this.allItems.filter(item =>
        item.name.toLowerCase().includes(search) ||
        item.item_type?.item_type_name.toLowerCase().includes(search) ||
        search.includes(String(item.value)) ||
        item.item_producer?.item_producer_name.toLowerCase().includes(search)
      );
      this.doItemGroups();
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

  loadData(){ //get items of purchase
    if(!this.purchaseId) return;
    this.singlePurchase.getPurchaseItems(this.purchaseId).subscribe( res => {

      this.pageData = (res as IPurchaseItem[]).map( p => ({
        ...p,
        price_per_amount: Number((p.item_total_price / (p.amount??1)).toFixed(2)),
        item_total_price: Number(p.item_total_price),
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

  setItem(event: IItem | null) { //sets the top row for the item
    if(!event) {
      this.itemControl.setValue("");
      this.producerField = "";
      this.amountUnitField = "";
      this.countryField = ""; 
      this.itemId = "";
    }
    else {
      if(typeof(this.itemControl.getRawValue())==="string") this.itemControl.setValue(event.name);
      this.producerField = event.item_producer?.item_producer_name ?? "";
      this.amountUnitField = event.value + " " + event.unit;
      this.countryField = event.country?.country_code ?? "";  
      this.itemId = event.item_id;  
      this.customItemName.setValue('');
    }
    this.selectedItem = this.allItems.find((item: IItem) => item.item_id === event?.item_id) ?? null;
    this.filteredItems = this.allItems;
    this.doItemGroups();
  }

  setPurchaseItem(event: IPurchaseItem) { //called after clicking an item, sets all of the top fields
    this.setItem(event.item);
    //this.selectedItem = this.allItems.find((item: IItem) => item.item_id === event.item?.item_id) ?? null;
     
    this.customItemName.setValue(event.item ? "" : event.item_name);
    this.priceField.setValue(String(event.item_total_price));
    this.amountField.setValue(String(event.amount));
    this.pricePerUnitField.setValue(String(event.price_per_amount));
    this.purchaseItemId = event.purchase_item_id;
  }
  
  dN() {
    this.setItem(null);
  }

  displayItem(item: any): string {
    if(typeof(item)==="string") return item;
    return item?.name ?? '';
  }

  saveOrCreate(){
    if(!this.itemId && !this.customItemName.getRawValue()) return;
    if(!this.purchaseItemId) {
      console.log("creating item");
      this.singlePurchase.createNewPurchaseItem(this.purchaseId, this.itemId, Number(this.priceField.getRawValue()), 
        Number(this.amountField.getRawValue()), this.customItemName.getRawValue()).subscribe( res => {
          this.reset();
          this.loadData();
        });
    }
    else {
      console.log("updating item");
      this.singlePurchase.updatePurchaseItem(this.purchaseItemId, this.purchaseId, this.itemId, Number(this.priceField.getRawValue()), 
        Number(this.amountField.getRawValue()), this.customItemName.getRawValue()).subscribe( res => {
          this.loadData();
        });
    }
  }

  reset(){
    this.setItem(null);
    this.customItemName.setValue(null);
    this.priceField.setValue(null);
    this.amountField.setValue(null);
    this.pricePerUnitField.setValue(null);
    this.purchaseItemId = null;
  }

  deletePurchaseItem(row: any){
    if(!row.isMarked){
      row.isMarked = true;
      if(this.lastClickedDeleteIcon) this.lastClickedDeleteIcon.isMarked = false;
      this.lastClickedDeleteIcon = row;
    }
    else {
      this.singlePurchase.deletePurchaseItem(Number(row.purchase_item_id)).subscribe( res => {
        this.loadData();
      });
    }
  }

}
