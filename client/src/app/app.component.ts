import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

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
  constructor(private http: HttpClient, private accountService: AccountService) {}

  ngOnInit(): void {
    this.getCarManufacturers();
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }


  getCarManufacturers(): void {
    this.http.get('https://localhost:5001/api/cars').subscribe(
      response => {
        this.carmanufacturers = response;
      }, error => {
        console.log(error);
      }
    );
  }

  getUsers(): void {
    this.http.get('https://localhost:5001/api/users').subscribe(
      response => {
        this.users = response;
      }, error => {
        console.log(error);
      }
    );
  }
}
