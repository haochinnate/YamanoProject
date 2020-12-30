import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn: boolean = false;
  // currentUser$: Observable<User>;

  constructor(public accountService: AccountService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.currentUser$ = this.accountService.currentUser$;
    // this.getCurrentUser();
  }

  login() {
    // response 會是 UserDto, 在 AccountController 的 Login method
    this.accountService.login(this.model)
      .subscribe(response => {
        this.router.navigateByUrl('/course/members')
        console.log(response);
        // this.loggedIn = true;
      }, error => {
        console.log(error);
        this.toastr.error(error.error);
      });

    // console.log(this.model);
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
    // this.loggedIn = false;
  }

  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe(user => {
  //     // !! turn the object to boolean
  //     this.loggedIn = !!user;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
