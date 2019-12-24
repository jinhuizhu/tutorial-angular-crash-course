import { Component, OnInit } from '@angular/core';
import {WeightEntriesService} from "../weight-entries.service";
import {Entry} from "../model/entry";

@Component({
  selector: 'ng-crash-course-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private showBodyFat: boolean = false;
  private labelShowBodyFat: string = 'Show Body Fat';
  private entries: Entry[];

  constructor(private entriesService: WeightEntriesService) { }

  ngOnInit() {
    this.updateData();
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
    if (this.showBodyFat) {
      this.labelShowBodyFat = 'Hide Body Fat';
    } else {
      this.labelShowBodyFat = 'Show Body Fat';
    }
  }

  createNewEntry(entry: Entry) {
    this.entriesService.addEntry(entry).subscribe( () => {
      this.updateData();
    });
  }

  private updateData() {
    this.entriesService.getEntries().subscribe( entries => {
      this.entries = entries;
    });
  }

  deleteEntry(id: number) {
    this.entriesService.deleteEntry(id).subscribe();
    this.updateData();
  }
}
