import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


export interface Country {  
  flag: string;  
  name: string; 
  capital: string;
  region: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly endpoint = 'https://restcountries.eu/rest/v2/ ';
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {    
    return this.http.get<Country[]>(this.endpoint);
  }
}
