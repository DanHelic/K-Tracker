import {  Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { MyGenApi } from '../../api/my-gen-api';
import { HttpClient } from '@angular/common/http';
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
    this.api.getData().subscribe( res => {
      this.data = res;
      this.cdr.detectChanges();
    });
  }
}
