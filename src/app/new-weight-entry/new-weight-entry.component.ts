import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ng-crash-course-new-weight-entry',
  templateUrl: './new-weight-entry.component.html',
  styleUrls: ['./new-weight-entry.component.scss']
})
export class NewWeightEntryComponent implements OnInit {
  model: any;

  @Input()
  showBodyFat: boolean;

  @Output()
  createNewEntryEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  createEntry() {
    let newEntry = Object.assign({}, this.model, {
      bodyfat: this.model.bodyfat / 100,
      date: new Date(this.model.date)
    });
    this.createNewEntryEvent.emit(newEntry);
  }

  resetForm() {
    this.model = {};
  }
}
