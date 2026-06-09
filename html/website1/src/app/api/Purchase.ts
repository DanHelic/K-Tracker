import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './Auth';

@Injectable({
  providedIn: 'root',
})

export class Purchase {

  constructor(private http: HttpClient, private auth: Auth) {}

  getPurchases(page: number, limit: number, orderBy: string, orderDesc: boolean){
    return this.http.get('/api/purchase/purchases',{
      params: {
        "page": page,
        "limit": limit,
        "orderBy": orderBy,
        "order": orderDesc?"desc":"asc"
      }
    });
  }

  getPurchasesSearch(page: number, limit: number, orderBy: string, orderDesc: boolean, purchase_name: string){
    return this.http.get('/api/purchase/purchasesSearch',{
      params: {
        "page": page,
        "limit": limit,
        "orderBy": orderBy,
        "order": orderDesc?"desc":"asc",
        "purchase_name": purchase_name
      }
    });
  }


}