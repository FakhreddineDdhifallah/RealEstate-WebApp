import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstate } from '../models/realestate';
import { User } from '../models/user';
import { RealestateService } from '../realestate.service';

@Component({
  selector: 'app-oglasivac',
  templateUrl: './oglasivac.component.html',
  styleUrls: ['./oglasivac.component.css']
})
export class OglasivacComponent implements OnInit {

  constructor(private router:Router,private reService: RealestateService,private rService: RealestateService) { 
    
  }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('ulogovan'));
    this.reService.getMyRE(this.user.username).subscribe((data:RealEstate[])=>{
      this.myREs=data;
    })
  }
  user:User;
  myREs:RealEstate[];
  
  

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  markAsSold(re){
    this.reService.markAsSold(re).subscribe((data)=>{
   })
   this.ngOnInit();
  }

  

}
