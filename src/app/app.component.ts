import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { utf8Encode } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  globalData: any = {};
  allCountriesData: any = [];
  INData: any = {};
  constructor(public http: HttpClient) {
    this.http
      .get('https://api.covid19api.com/summary')
      .subscribe((value: any) => {
        this.globalData = value.Global;
        this.allCountriesData = value.Countries;

        this.allCountriesData.forEach((countryList) => {
          if (countryList.CountryCode == 'IN') {
            this.INData = countryList;
          }
        });
      });
  }
  title = 'CovidApplication';
}
