import { Component } from '@angular/core';
import {WeightEntriesService} from "./weight-entries.service";

@Component({
  selector: 'ng-crash-course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private entrySvc: WeightEntriesService) {

  }


}
