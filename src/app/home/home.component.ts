import { Component, OnInit } from '@angular/core';
import {WeightEntriesService} from "../weight-entries.service";

@Component({
  selector: 'ng-crash-course-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private entrySvc: WeightEntriesService) { }

  ngOnInit() {
  }

}
