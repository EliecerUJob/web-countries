import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriespageComponent } from './pages/countriespage/countriespage.component';
import { CountryDetailPageComponent } from './pages/country-detail-page/country-detail-page.component';

const routes: Routes = [
  { path:"countries", component: CountriespageComponent },
  { path:"country/:name", component:CountryDetailPageComponent },
  { path:"**", pathMatch:"full", redirectTo:"countries" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
