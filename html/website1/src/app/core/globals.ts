import { Injectable, signal } from '@angular/core';
import  IPurchase  from './IPurchase';

@Injectable({
  providedIn: 'root'
})
export class Globals {
  confirmedUsername = signal('');
}