import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './Auth';
import { timeout, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Purchase {

  constructor(private http: HttpClient, private auth: Auth) {}

  getPurchases(page: number, limit: number, orderBy: string, order: string){
    return this.http.get('/api/purchase/purchases',{
      params: {
        "page": page,
        "limit": limit,
        "orderBy": orderBy,
        "order": order
      }
    });
  }

  getPurchasesSearch(page: number, limit: number, orderBy: string, order: string, purchase_name: string){
    return this.http.get('/api/purchase/purchasesSearch',{
      params: {
        "page": page,
        "limit": limit,
        "orderBy": orderBy,
        "order": order,
        "purchase_name": purchase_name
      }
    }).pipe(
      timeout(2000),
      retry(2)
    );
  }


}