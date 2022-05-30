import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor() {}
  showTodayDate() {
    return new Date();
  }
}
