export class RealEstate{
    _id:string;
    name:string;
    town:string; 
    municipality:string;  
    microlocation:string; 
    street:string;
    area:number;
    rooms:number;
    constructionYear: number;
    state:string;
    heating:string;
    floor:number;
    totalFloors: number;
    parking:string;
    monthlyUtilities:number
    price:number
    about:string
    advertiser:string
    advertiserUsername:string
    agencyName:string;
    transport:Array<String>
    images:Array<String>
    sold:String;
    avgPrice:number;
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
}