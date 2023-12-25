import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstate } from '../models/realestate';
import { User } from '../models/user';
import { RealestateService } from '../realestate.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  constructor(private router:Router,private reService: RealestateService) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('ulogovan'));
    this.reService.showAll().subscribe((data:RealEstate[])=>{
      this.realEstates=data;
    })
    
  }

  user:User;

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  type:string;
  location:string;
  price:Number;
  area:Number;
  rooms:Number;
  realEstates:RealEstate[];
  chosenRE:RealEstate;
  id:string;
  
  search(){
    this.reService.search(this.type,this.location,this.price,this.area,this.rooms).subscribe((data:RealEstate[])=>{
      this.realEstates=data;
    })
  }

  getDetails(id){
    localStorage.setItem('chosenRe',JSON.stringify(id));
    this.reService.getDetails(id).subscribe((data:RealEstate)=>{
      this.chosenRE=data;
      
    })
  }
  
}
