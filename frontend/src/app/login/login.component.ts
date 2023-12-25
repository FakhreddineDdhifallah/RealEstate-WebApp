import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstate } from '../models/realestate';
import { User } from '../models/user';
import { RealestateService } from '../realestate.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,private reService:RealestateService,private reRouter:Router) { }

  ngOnInit(): void {
      this.reService.show().subscribe((data:RealEstate[])=>{
        this.realestate=data;
      })
  }

  name:string;
  surname:string;
  username:string;
  password:string;
  town:string;
  birthDate:Number;
  phoneNumber:Number;
  email:string;
  agency:string;
  licenceNumber:Number;
  type:string;
  err:string; 
  

  signIn(){
    this.userService.signInService(this.username,this.password).subscribe((user:User)=>
    {
      if(user){
        //console.log(user)
        localStorage.setItem('ulogovan', JSON.stringify(user));
        if(user.type=="kupac"){
          this.router.navigate(['kupac'])
        }
        else{
          if(user.type=="oglasivac")
            this.router.navigate(['oglasivac']);
          else{
            if(user.type=="admin")
            this.router.navigate(['admin']);
          }
        }
      }
      else{
        this.err="Niste uneli ispravne podatke"
        this.router.navigate(['']);
      }
    })
  }
  realestate:RealEstate[]
  pretraga:string;
  show(){
    this.reService.show().subscribe((data:RealEstate[])=>{
      this.realestate=data;
    })
  }
}
