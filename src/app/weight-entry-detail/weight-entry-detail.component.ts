import { Component, OnInit } from '@angular/core';
import {WeightEntriesService} from "../weight-entries.service";
import {ActivatedRoute} from "@angular/router";
import {Entry} from "../model/entry";

@Component({
  selector: 'ng-crash-course-weight-entry-detail',
  templateUrl: './weight-entry-detail.component.html',
  styleUrls: ['./weight-entry-detail.component.scss']
})
export class WeightEntryDetailComponent implements OnInit {

  private entry: Entry;

  constructor(private entriesSvc: WeightEntriesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // +: cast to a number
    let id = +this.route.snapshot.params.id;
    this.entriesSvc.getEntries().subscribe( entries => {
      this.entry = entries.find( e => {
        return e.id === id;
      });
    });
  }
}
