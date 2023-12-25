import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000'

  registerUserService(name,surname,username,password,town,birthDate,phoneNumber,email,type,agency,licenceNumber){
    
    const data={
      name:name,
      surname:surname,
      username:username,
      password:password,
      town:town,
      birthDate:birthDate,
      phoneNumber:phoneNumber,
      email:email,
      type:type,
      agency:agency,
      licenceNumber:licenceNumber,
      
    }
    
    return this.http.post(`${this.uri}/request/register`,data)
  }

  uploadImageService(img,username){
    const fd = new FormData();
    fd.append('username', username);
    fd.append('img', img, img.name);
    
    return this.http.post(`${this.uri}/request/uploadImage`, fd);
  }

  getAllRequests(){
    const data={
    }
    return this.http.post(`${this.uri}/request/getAllRequests`, data);
  }

  addNewAgency(name,address,town,phone,pib){
    const data={
      name:name,
      address:address,
      town:town,
      phone:phone,
      pib:pib
    }
    return this.http.post(`${this.uri}/request/addNewAgency`, data);
  }

  odobri(user){
    const data={
      user:user
    }
    return this.http.post(`${this.uri}/request/odobri`, data);
  }

  odbij(user){
    const data={
      user:user
    }
    return this.http.post(`${this.uri}/request/odbij`, data);
  }
}


