import { Component, OnInit } from '@angular/core';
import {WeightEntriesService} from "../weight-entries.service";

@Component({
  selector: 'ng-crash-course-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private showBodyFat: boolean = false;
  private labelShowBodyFat: string = 'Show Body Fat';

  constructor(private entrySvc: WeightEntriesService) { }

  ngOnInit() {
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
    if (this.showBodyFat) {
      this.labelShowBodyFat = 'Hide Body Fat';
    } else {
      this.labelShowBodyFat = 'Show Body Fat';
    }
  }
}
