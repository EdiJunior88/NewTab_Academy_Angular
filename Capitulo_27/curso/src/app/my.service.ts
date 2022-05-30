import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  private apiurl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
  showTodayDate() {
    return new Date();
  }

  getData() {
    return this.http.get(this.apiurl);
  }
}
