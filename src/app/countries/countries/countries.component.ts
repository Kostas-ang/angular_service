import { Component, OnInit } from '@angular/core';
import { CountriesService, Country } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.countriesService.getCountries().subscribe((country) => {
      this.countries = country;
      console.log(this.countries);
});
}

}
