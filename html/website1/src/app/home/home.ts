import {  Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { MyGenApi } from '../my-gen-api';
import { HttpClient, httpResource } from '@angular/common/http';
import { AsyncPipe, JsonPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit{
  data: any;
  data2 = 23;

  constructor(private api: MyGenApi, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log("hey");
    this.api.getData().subscribe( res => {
      this.data = res;
      console.log(res);
      this.cdr.detectChanges();
    });
    console.log("ho");
  }
}
