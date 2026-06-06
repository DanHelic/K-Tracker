import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './Auth';

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
}