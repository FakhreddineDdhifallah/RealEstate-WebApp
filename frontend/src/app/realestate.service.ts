import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealestateService {

  uri='http://localhost:4000'

  constructor(private http:HttpClient) { }

  search(type,location,price,area,rooms){
    const data={
      type:type,
      location:location,
      price:price,
      area:area,
      rooms:rooms
    }
    
    return this.http.post(`${this.uri}/realestate/search`, data);
  }

  show(){
    const data={
    }
    return this.http.post(`${this.uri}/realestate/show`, data);
  }

  showAll(){
    const data={
    }
    return this.http.post(`${this.uri}/realestate/showAll`, data);
  }

  getDetails(id){
    const data={
      id:id
    }
    return this.http.post(`${this.uri}/realestate/getDetails`, data);
  }

  insert(type,town,municipality,microlocation,street,area,rooms,year,floor,totalFloors,state,heating,parking,price,monthlyUtilities,
    about,lines,username,agency,terasa,lodja,franc,lift,podrum,garaza,basta,klima,internet,interfon,telefon){
    
    const data={
        type:type,
        town:town,
        municipality:municipality,
        microlocation:microlocation,
        street:street,
        area:area,
        rooms:rooms,
        year:year,
        floor:floor,
        totalFloors:totalFloors,
        state:state,
        heating:heating,
        parking:parking,
        price:price,
        monthlyUtilities:monthlyUtilities,
        about:about,
        lines:lines,
        username:username,
        agency:agency,
        terasa:terasa,
        lodja:lodja,
        franc:franc,
        lift:lift,
        podrum:podrum,
        garaza:garaza,
        basta:basta,
        klima:klima,
        internet:internet,
        interfon:interfon,
        telefon:telefon
    }
    return this.http.post(`${this.uri}/realestate/insert`, data);
  }

  updateAvg(id,avg){
    const data={
      id:id,
      avg:avg
    }
    return this.http.post(`${this.uri}/realestate/updateAvg`, data);
  }

  getLastInserted(){
    const data={

    }
    return this.http.post(`${this.uri}/realestate/getLastInserted`, data);
  }

  uploadImage(image,id){
    const fd=new FormData();
    fd.append('id', id);
    fd.append('img', image, image.name);
  
    return this.http.post(`${this.uri}/realestate/uploadImage`, fd);
  }

  getMyRE(username){
    const data={
      username:username
    }
    return this.http.post(`${this.uri}/realestate/getMyRE`, data);
  }

  markAsSold(id){
    const data={
      id:id
    }
    return this.http.post(`${this.uri}/realestate/markAsSold`, data);
  }

 
  getREOnSameLocation(microlocation,town){
    const data={
      microlocation:microlocation,
      town:town
    }
    return this.http.post(`${this.uri}/realestate/getSameLocation`, data);
  }

  addLine(line,id){
    const data={
      line:line,
      id:id
    }
    return this.http.post(`${this.uri}/realestate/addLine`, data);
  }

  addCharact(ch,id){
    const data={
      ch:ch,
      id:id
    }
    return this.http.post(`${this.uri}/realestate/addCh`, data);
  }
  
}
