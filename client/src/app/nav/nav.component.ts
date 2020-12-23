import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    // response 會是 UserDto, 在 AccountController 的 Login method
    this.accountService.login(this.model)
      .subscribe(response => {
        console.log(response);
        this.loggedIn = true;
      }, error => {
        console.log(error);
      });

    // console.log(this.model);
  }

  logout() {
    this.loggedIn = false;
  }
}
