import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from './api/Auth'
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('website1!');

  constructor(private auth: Auth, private http: HttpClient, private router: Router) {}

  user_name = '';
  password = '';

  login() {
    this.auth.login(this.user_name, this.password).subscribe(res => {
      localStorage.setItem('accessToken', res.accessToken);
      this.router.navigate(['']);
      console.log("login sucessful");
    });
  }
}
