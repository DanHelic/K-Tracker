import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Auth } from './Auth';
import { SKIP_AUTH_REFRESH } from '../core/interceptors/auth-token';

@Injectable({
  providedIn: 'root',
})

export class User {

  constructor(private http: HttpClient, private auth: Auth) {}

  getUser(){
    return this.http.get('/api/user/user'); 
  }

  createUser(user_name: string, password: string, email: string, first_name: string, last_name: string){
    console.log("creating");
    return this.http.post('/api/user/createUser',{
      "user_name": user_name,
      "password": password,
      "email": email,
      "first_name": first_name,
      "last_name": last_name
    });
  }

  usernameAvailable(username: string){
    return this.http.get('/api/user/usernameAvailable/'+username); 
  }

  getUserName(noRetry: boolean = false){
    if(noRetry){
      return this.http.get('/api/user/user', {
        context: new HttpContext().set(SKIP_AUTH_REFRESH, true)
      });
    }
    return this.http.get('/api/user/user'); 
  }
}