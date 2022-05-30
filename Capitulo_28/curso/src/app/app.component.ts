import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'curso';
  hoje: any;

  emailid;
  formdata;

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.hoje = this.myService.showTodayDate();

    this.myService.getData().subscribe((data) => {
      console.log('DATA ', data);
    });

    this.formdata = new FormGroup({
      emailid: new FormControl('angular@gmail.com'),
      passwd: new FormControl('abc1234'),
    });
  }

  onClickSubmit(data) {
    console.log('data form', data);
    this.emailid = data.emailid;

    this.myService.setData(this.emailid);
  }
}
