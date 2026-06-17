import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './Auth';
import { timeout, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SinglePurchase {

  constructor(private http: HttpClient, private auth: Auth) {}

  getPurchase(purchase_id: number) {
    return this.http.get('/api/purchaseItem/purchaseItemByPurchase/'+purchase_id);
  }

  getAllItems() {
    return this.http.get('/api/item/allItems');
  }
}