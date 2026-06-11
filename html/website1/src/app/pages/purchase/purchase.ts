import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase',
  imports: [],
  templateUrl: './purchase.html',
  styleUrl: './purchase.css',
})
export class Purchase {

  constructor(private route: ActivatedRoute) {}

  purchase: any;

  ngOnInit() {
    this.purchase = this.route.snapshot.paramMap.get('mode');
  }
}
