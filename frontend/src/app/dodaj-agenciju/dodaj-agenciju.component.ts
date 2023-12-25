import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyService } from '../agency.service';
import { User } from '../models/user';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-dodaj-agenciju',
  templateUrl: './dodaj-agenciju.component.html',
  styleUrls: ['./dodaj-agenciju.component.css']
})
export class DodajAgencijuComponent implements OnInit {

  constructor(private agencyService:AgencyService,private router:Router) {
    
   }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('ulogovan'));
  }

  name:String;
  address:string;
  town:string;
  phone:string;
  pib:string;
  user:User
  errMessage:string;
  

  logout(){
    localStorage.clear();
    this.router.navigate(['']);

  }

  addNewAgency(){
    if(this.name && this.address && this.town && this.phone && this.pib){
    this.agencyService.addNewAgency(this.name,this.address,this.town,this.phone,this.pib).subscribe((response)=>{
      if(response['message']=='agency added') alert("Uspesno ste dodali novu agenciju")
    });
  }
  else{
    this.errMessage='Morate uneti sve podatke'
  }
    this.ngOnInit();
  }

}
