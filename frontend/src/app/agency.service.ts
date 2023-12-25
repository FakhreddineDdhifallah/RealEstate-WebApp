import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  uri='http://localhost:4000'
  constructor(private http:HttpClient) { }

  addNewAgency(name,address,town,phone,pib){
    const data={
      name:name,
      address:address,
      town:town,
      phone:phone,
      pib:pib
    }
    return this.http.post(`${this.uri}/agency/addNewAgency`, data);
  }

  getAgency(name){
    const data={
      name:name
    }
    return this.http.post(`${this.uri}/agency/getAgency`, data);
  }

  getAll(){
    const data={

    }
    return this.http.post(`${this.uri}/agency/getAll`, data);
  }
}
