import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnChanges {
  @Input() INData;
  constructor() {}

  ngOnChanges() {
    console.log(this.INData);
  }
}
