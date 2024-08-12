import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriespageComponent } from './pages/countriespage/countriespage.component';
import { CountryDetailPageComponent } from './pages/country-detail-page/country-detail-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchComponent } from './components/search/search.component';
import { CountryComponent } from './components/country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountriespageComponent,
    CountryDetailPageComponent,
    NavbarComponent,
    FilterComponent,
    // SearchComponent,
    CountryComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    // ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
