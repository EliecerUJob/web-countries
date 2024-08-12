import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countriespage',
  templateUrl: './countriespage.component.html',
  styleUrls: ['./countriespage.component.css']
})
export class CountriespageComponent implements OnInit {
  
  countries:any[]=[];
  searchText: any='';
  
  constructor( private countryService: CountriesService, private router: Router ){ }
  
  ngOnInit(): void {
    this.countryService.getData().subscribe( (data:any) => this.countries = data);
  }

}
