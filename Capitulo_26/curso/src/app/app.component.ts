import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'curso';
  hoje: any;

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.hoje = this.myService.showTodayDate();

    this.myService.getData().subscribe((data) => {
      console.log("DATA ", data);
    })
  }
}
