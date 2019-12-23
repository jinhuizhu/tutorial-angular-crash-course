import { Component } from '@angular/core';
import {IdentityService} from "./identity.service";

@Component({
  selector: 'ng-crash-course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private identitySvc: IdentityService) {
  }
}
