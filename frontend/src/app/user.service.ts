import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri='http://localhost:4000'
  constructor(private http:HttpClient) { }

  signInService(username,password){
    const data={
      username:username,
      password:password,
    }

    return this.http.post(`${this.uri}/users/login`, data);
  }

  getAdvertiser(username){
    const data={
      username:username
    }
    return this.http.post(`${this.uri}/users/getAdvertiser`, data);
  }

  usernameCheck(username){
    const data={
      username:username
    }
    
    return this.http.post(`${this.uri}/users/usernameCheck`, data);
  }

  emailCheck(email){
    const data={
      email:email
    }
    
    return this.http.post(`${this.uri}/users/emailCheck`, data);
  }
  addToFavorites(id){
    const data={
      id:id
    }
    return this.http.post(`${this.uri}/users/addToFavorites`, data);
  }

 
}
