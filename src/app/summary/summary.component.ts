import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnChanges {
  @Input() globalData;
  constructor() {
    console.log(this.globalData); //undefined -> because it ran first before Input decorator
  }
  ngOnChanges(): void {
    if (Object.keys(this.globalData).length != 0) {
      console.log(this.globalData);
    }
  }
}
