import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
})
export class AllCountriesComponent implements OnChanges {
  @Input() allCountriesData: any;
  constructor() {}

  ngOnChanges() {
    this.allCountriesData.sort((a, b) => {
      return b.TotalConfirmed - a.TotalConfirmed;
    });
    console.log(this.allCountriesData);
  }
}
