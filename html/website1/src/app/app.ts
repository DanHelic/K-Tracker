import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from './api/Auth'
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyGenApi } from './api/my-gen-api';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('website1!');

  constructor(private api: MyGenApi, private auth: Auth, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('accessToken')){
      this.api.getUserName()
        .pipe(timeout(300))
        .subscribe({
          next: (res) => {
          this.hideLogin(true);
          },
          error: () => {
            this.hideLogin(false);
          }
      });
    }
    else{
      this.hideLogin(false);
    }

  }

  user_name = '';
  password = '';
  confirmedUserName = '';

  login() {
    this.auth.login(this.user_name, this.password).subscribe(res => {
      localStorage.setItem('accessToken', res.accessToken);
      this.router.navigate(['']);
      console.log("login sucessful");
      this.confirmedUserName = this.user_name;
      this.hideLogin(true);
    });
  }

  createAccount() {
    this.router.navigate(['createAccount']);
  }

  logout() {
    this.auth.logout().subscribe(res => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['']);
      console.log("logout sucessful");
      this.confirmedUserName = '';
      this.hideLogin(false);
    })
  }

  hideLogin(hide = true){
    const form = document.getElementById("loginForm") as HTMLElement;
    const loginButton = document.getElementById("loginButton") as HTMLElement;
    const createAccountButton = document.getElementById("createAccountButton") as HTMLElement;
    const logoutButton = document.getElementById("logoutButton") as HTMLElement;
    if(hide){
      form.style = "display: none;";
      loginButton.hidden = true;
      createAccountButton.hidden = true;
      logoutButton.hidden = false;
      console.log("login hidden");
    }
    else{
      form.style = "display: flex;";
      loginButton.hidden = false;
      createAccountButton.hidden = false;
      logoutButton.hidden = true;
      console.log("lougout hidden");
    }
  }

}
