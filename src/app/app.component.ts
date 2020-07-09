import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response: any;
  constructor(public http: HttpClient) {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe((r) => {
        this.response = r
        console.log("r", r);
      });
  }
}
