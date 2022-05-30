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

  setData(emailForm) {
    this.http.post(this.apiurl, { email: emailForm }).subscribe(data => {
      console.log('SET DATA ', data);
    });
  }
}
