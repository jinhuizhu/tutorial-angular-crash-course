import { Component, OnInit } from '@angular/core';
import {IdentityService} from "../identity.service";

@Component({
  selector: 'ng-crash-course-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private identitySvc: IdentityService) { }

  ngOnInit() {
  }

  logout() {
    this.identitySvc.loggedIn = false;
  }

  login() {
    this.identitySvc.loggedIn = true;
  }
}
