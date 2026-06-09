import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Globals {
  confirmedUsername = signal('');
}