import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-detail-page',
  templateUrl: './country-detail-page.component.html',
  styleUrls: ['./country-detail-page.component.css']
})
export class CountryDetailPageComponent implements OnInit {
  
  countrySelected:any={}

  constructor(private route: ActivatedRoute, private countryService: CountriesService, private router: Router) { }
  
  ngOnInit(): void {
    this.getCountrySelected();
  }

  private getCountrySelected() {
    const name = this.route.snapshot.paramMap.get("name");
    this.countryService.getData().subscribe(response => {
      response.forEach((country: any) => {
        country.name == name ? this.countrySelected = country : null;
      }
      );
    });
  }
}
