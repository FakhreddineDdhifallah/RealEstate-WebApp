import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zahtev } from '../models/request';
import { User } from '../models/user';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private reqService:RequestService) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('ulogovan'));
    this.reqService.getAllRequests().subscribe((data:Zahtev[])=>{
      this.zahtevi=data;
    })
  }

  user:User;
  zahtevi:Zahtev[];

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  odobri(z){
    this.reqService.odobri(z).subscribe(()=>{
      
    })
    this.ngOnInit();
  }

  odbij(z){
      console.log(z);
      this.reqService.odbij(z).subscribe(()=>{
      
      })
      this.ngOnInit();
  }

  
}
