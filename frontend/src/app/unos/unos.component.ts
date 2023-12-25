import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RealEstate } from '../models/realestate';
import { User } from '../models/user';
import { RealestateService } from '../realestate.service';
import { RequestService } from '../request.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-unos',
  templateUrl: './unos.component.html',
  styleUrls: ['./unos.component.css']
})
export class UnosComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute,private reService:RealestateService,private reqService:RequestService) { }

  ngOnInit(): void {
    //let _id=this.route.snapshot.paramMap.get('_id');
    //alert(_id);
    this.user=JSON.parse(localStorage.getItem('ulogovan'));
  }


  type:string;
  town:string;
  municipality:string;
  microlocation:string;
  street:string;
  area:number;
  rooms:number;
  year:number;
  state:string;
  heating:string;
  floor:number;
  totalFloors:number;
  parking:string;
  monthlyUtilities:number;
  price:number;
  about:string;
  lines:string[];
  images:File[]=[];
  
  id:string;
  user:User;
  re:RealEstate;
  sameLocationRE:RealEstate[];
  avg:number;

  errEmptyData:string;
  dataValid:string;

  errImages:string;
  imagesValid:boolean;

  terasa:boolean;
  lodja:boolean;
  franc:boolean;
  lift:boolean;
  podrum:boolean;
  garaza:boolean;
  basta:boolean;
  klima:boolean;
  internet:boolean;
  interfon:boolean;
  telefon:boolean;
  

  insert(){
    
    this.errImages="";
    //if(this.type && this.town && this.municipality && this.microlocation && this && this.street,this.area && this.rooms &&
     // this.year && this.state && this.parking && this.price && this.about){
    if(this.images.length>2 && this.images.length<7){
      this.reService.insert(this.type,this.town,this.municipality,this.microlocation,this.street,this.area,this.rooms,
        this.year,this.floor,this.totalFloors,this.state,this.heating,this.parking,this.price,this.monthlyUtilities,
        this.about,this.lines,this.user.username,this.user.agency,this.terasa,this.lodja,this.franc,this.lift,this.podrum,
        this.garaza,this.basta,this.klima,this.internet,this.interfon,this.telefon).subscribe((res)=>{
            if(res['message']=='realestate added')
              alert("Uspesno ste dodali novu nekretninu")
              this.getLastInserted();          
  }); 
}
else{
  this.errImages="Možete uneti najmanje 3 slike, a najviše 6"; 
}
 // }else{
  //  this.errEmptyData="Niste uneli sve neophodne podatke";
 // }
  
  }

  getLastInserted(){
    
    this.reService.getLastInserted().subscribe((res:RealEstate[])=>{
      this.id=res[0]._id;
      this.getREOnSameLocation();

      for(let i=0;i<this.lines.length;i++){
        this.reService.addLine(this.lines[i],this.id).subscribe((response)=>{
        if(response['message']=='realestate added'){
          //alert("Uspesno ste dodali novu liniju")
      }
    }); 
  }
    for(let i=0;i<this.images.length;i++){
    this.reService.uploadImage(this.images[i],this.id).subscribe((response)=>{
    if(response['message']=='image added'){
      alert("Uspesno ste dodali novu sliku")
  }
}); 
}
    })
  }
  
  onFileSelected(event){
    this.images=<File[]>event.target.files;
   }


  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  getREOnSameLocation(){
    this.reService.getREOnSameLocation(this.microlocation,this.town).subscribe((data:RealEstate[])=>{
      this.sameLocationRE=data;
      this.avgSquare();
    });
  }

  
  avgSquare(){
    
    let square:number[]=[];
   for(let i=0;i<this.sameLocationRE.length;i++){
        let price=this.sameLocationRE[i].price;
        let area=this.sameLocationRE[i].area;
        square.push(price/area);
    }
    square.push(this.price/this.area)
    let sum=0;
    
    for(let i=0;i<square.length;i++){
      sum=sum+square[i];
    }
    this.avg=Math.round(sum/square.length);
    console.log(this.sameLocationRE)
    
   this.reService.updateAvg(this.id,this.avg).subscribe((res)=>{
    if(res['message']=='realestate updated'){
      //alert("Update uspesan")
    }
   })
   for(let i=0;i<this.sameLocationRE.length;i++){
     this.reService.updateAvg(this.sameLocationRE[i]._id,this.avg).subscribe(()=>{

     });
   }
   console.log(this.avg)
}
}
