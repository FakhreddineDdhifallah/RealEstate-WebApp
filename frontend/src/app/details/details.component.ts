import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AgencyService } from '../agency.service';
import { Agency } from '../models/agency';
import { RealEstate } from '../models/realestate';
import { User } from '../models/user';
import { RealestateService } from '../realestate.service';
import { UserService } from '../user.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private reService:RealestateService,private router:Router,private userService:UserService,private agencyService:AgencyService) { }

  ngOnInit(): void {
    //this.id=JSON.parse(localStorage.getItem('chosenRe'));
   this.id=this.route.snapshot.paramMap.get('id');
   this.getDetails();
   
    
  }

  id:String;
  realestate:RealEstate;
  advertiserName:String;
  advertiserSurname:String;
  advertiserPhone:String;
  agencyName:String;
  agencyTown:String;
  agencyAddress:String;
  agencyPIB:String;
  licenceNum:String;
  
  

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  
  getDetails(){
    
    this.reService.getDetails(this.id).subscribe((data:RealEstate)=>{
      this.realestate=data;
      this.getAdvertiser();
      if(this.realestate.advertiser=='agencija') this.getAgency();
    });
  
  }


  getAgency(){
    this.agencyService.getAgency(this.realestate.agencyName).subscribe((data:Agency)=>{
     this.agencyTown=data.town;
     this.agencyPIB=data.PIB;
    this.agencyAddress=data.address;
    });
  }

  kliknuto:boolean=false;
  showPhone(){
    this.kliknuto=!this.kliknuto;
  }

  getAdvertiser(){
    this.userService.getAdvertiser(this.realestate.advertiserUsername).subscribe((data:User)=>{
        this.advertiserName=data.name;
        this.advertiserSurname=data.surname;
        this.advertiserPhone=data.phoneNumber;
    });
  }


  addToFavorites(){
    
  }
  
  
}
  

