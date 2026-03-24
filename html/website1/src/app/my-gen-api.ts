import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyGenApi {

  constructor(private http: HttpClient) {}

  getData(){
    let ret = this.http.get('/api/user/0');
    console.log(ret);
    return ret;
  }

}
