import {  Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { MyGenApi } from '../../api/my-gen-api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seite2',
  imports: [],
  templateUrl: './seite2.html',
  styleUrl: './seite2.css',
})
export class Seite2 implements OnInit{
  constructor(private api: MyGenApi, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  user:any;

  ngOnInit(): void {
    this.api.getUserName().subscribe( res => {
      this.user = res;
      this.cdr.detectChanges();
    });
  }


}
