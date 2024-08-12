import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  formSearch: FormControl = new FormControl();

  constructor(private countryService: CountriesService){}

  ngOnInit(): void {
    this.formSearch.valueChanges
      .pipe(debounceTime(500))
      .subscribe();
  }

  onSubmit(){
    this.countryService.getContryByName(this.formSearch.value)
        .subscribe( response => console.log(response));
  }

}
