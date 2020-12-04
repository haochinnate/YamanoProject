import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Yamano Project';
  carmanufacturers: any;
  users: any;

  /**
   *
   */
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCarManufacturers();
  }

  getCarManufacturers(): void {
    this.http.get('https://localhost:5001/carmanufacturers').subscribe(
      response => {
        this.carmanufacturers = response;
      }, error => {
        console.log(error);
      }
    );
  }
}
