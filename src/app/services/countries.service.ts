import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Mis importaciones
import { apiServer } from "../../../src/apiServer";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl: string = apiServer.serverUrl;

  constructor( private http: HttpClient ) { }

  getData():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  getContryByName(query:string):Observable<any>{
    return this.http.get(this.baseUrl+`/${query}`);
  }

}
