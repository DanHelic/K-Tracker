import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './Auth';
import { timeout, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SinglePurchase {

  constructor(private http: HttpClient, private auth: Auth) {}

  getPurchaseItems(purchase_id: number) {
    return this.http.get('/api/purchaseItem/purchaseItemByPurchase/'+purchase_id);
  }

  getPurchase(purchase_id: number) {
    return this.http.get('/api/purchase/purchaseWithoutItems/'+purchase_id);
  }

  getAllItems() {
    return this.http.get('/api/item/allItems');
  }

  createNewPurchaseItem(purchase_id: number, item_id: number, item_total_price: number, amount: number, item_name: string | null) {
    return this.http.post('/api/purchaseItem/createPurchaseItem', {
      "purchase_id": purchase_id,
      "item_id": item_id,
      "item_total_price": item_total_price,
      "amount": amount,
      "item_name": item_name
    })
  }

  updatePurchaseItem(purchase_item_id: number, purchase_id: number, item_id: number, item_total_price: number, amount: number, item_name: string | null) {
    return this.http.put('/api/purchaseItem/updatePurchaseItem', {
      "purchase_item_id": purchase_item_id,
      "purchase_id": purchase_id,
      "item_id": item_id,
      "item_total_price": item_total_price,
      "amount": amount,
      "item_name": item_name
    })
  }

  deletePurchaseItem(purchase_item_id: number){
    return this.http.delete('/api/purchaseItem/deletePurchaseItem/'+purchase_item_id);
  }
}