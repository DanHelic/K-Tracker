import { Component } from '@angular/core';
import { User } from '../../api/User';
import { App } from '../../app';
import { FormControl, Validators } from '@angular/forms'
import { Subscription } from 'rxjs/internal/Subscription';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  imports: [FormsModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css',
})
export class CreateAccount {
  constructor(private user: User, private app: App, private router: Router) {}
  
  user_name = '';
  password = '';
  email = '';
  first_name = '';
  last_name = '';
  awaitingUsername = false;

  ngOnInit(): void {
    try{
      this.user.getUserName(true).subscribe( res => {
      if(res){
        console.log("user already logged in.");
        this.router.navigate(['']);
      }
      });
    }
    catch{
      
    }
  }

  createUser(event: SubmitEvent){
    let email = document.getElementById("email") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;
    let username = document.getElementById("user_name") as HTMLInputElement;
    if(email.classList.contains("validationError") ||
      password.classList.contains("validationError") ||
      username.classList.contains("validationError") ||
      this.awaitingUsername
    )
    { 
      console.log("cannot create user due to errors");
      event.preventDefault();
      return;
    }
    this.user.createUser(this.user_name, this.password, this.email, this.first_name, this.last_name).subscribe( res => {
      this.app.user_name = this.user_name;
      this.app.password = this.password;
      this.app.login();
      event.preventDefault();
    });
  }

  private usernameTimeout: any;
  private usernameCheckSub?: Subscription;
  checkUsername(){
    let invalidUsername = document.getElementById("invalidUsername") as HTMLElement;
    let username = document.getElementById("user_name") as HTMLInputElement;
    if(!username.value){
      invalidUsername.innerHTML = "Bitte Benutzername eingeben."
      invalidUsername.hidden = false;
      username.classList.add("validationError");
      return;
    }

    const pattern = /^[a-zA-Z0-9]{0,63}$/;
    if(!pattern.test(username.value)){
      invalidUsername.innerHTML = "Bitte nur Buchstaben und Zahlen."
      invalidUsername.hidden = false;
      username.classList.add("validationError");
      return;
    }

    clearTimeout(this.usernameTimeout);
    this.awaitingUsername = true;
    this.usernameTimeout = setTimeout(() => {
      this.usernameCheckSub?.unsubscribe();
      if(username.value){
        this.usernameCheckSub = this.user.usernameAvailable(username.value).subscribe( res => {
          console.log(res);
          if(!(res as any).available){
            invalidUsername.innerHTML = "Benutzername bereits vergeben."
            invalidUsername.hidden = false;
            username.classList.add("validationError");
            this.awaitingUsername = false;
            return;
          }
          this.awaitingUsername = false;
        });
      }
    }, 450);

    invalidUsername.hidden = true;
    username.classList.remove("validationError");
  }

  checkPassword(){
    let invalidPassword = document.getElementById("invalidPassword") as HTMLElement;
    let password = document.getElementById("password") as HTMLInputElement;
    if(password.value.length<8){
      invalidPassword.hidden = false;
      password.classList.add("validationError");
    }
    else{
      invalidPassword.hidden = true;
      password.classList.remove("validationError");
    }
  }

  checkEmail(){
    let invalidEmail = document.getElementById("invalidEmail") as HTMLElement;
    let email = document.getElementById("email") as HTMLInputElement;
    let control = new FormControl(email.value, Validators.email);
    if(control.errors){
      invalidEmail.hidden = false;
      email.classList.add("validationError");
    }
    else{
      invalidEmail.hidden = true;
      email.classList.remove("validationError");
    }
  }
}
