import express from 'express'
import RealEstate from '../models/realestate'
import {MulterRequest} from '../multerrequest'

export class RealEstateController{

    search=(req:express.Request,res:express.Response)=>{
        let type,location,price,area,rooms;

        if(req.body.type){type=req.body.type;}
        else {type="";}

        if(req.body.location){location=req.body.location;}
        else {location="";}

        if(req.body.price){price=req.body.price;}
        else {price=Number.MAX_SAFE_INTEGER}

        if(req.body.area){area=req.body.area;}
        else {area=0}
        
        if(req.body.rooms){rooms=req.body.rooms;}
        else {rooms=0} 
        
        RealEstate.find(
            {
                $and:[
                    {"name":{$regex:type}},
                    {$or:[
                        {"town":{$regex:location}},
                        {"municipality":{$regex:location}},
                        {"microlocation":{$regex:location}}
                        ]
                    },
                    {"price":{$lte:price}},
                    {"area":{$gte:area}},
                    {"rooms":{$gte:rooms}},
                    {"sold":"ne"}
                    ]
            },
        (err,realestate)=>{
            if(err)console.log(err);
            else{
                res.json(realestate);
            }
        });
    }

    show=(req:express.Request,res:express.Response)=>{
        RealEstate.find({
            "sold":"ne"
        },
        (err,realestate)=>{
            if(err)console.log(err);
            else{
                res.json(realestate);
            }
        }).sort({_id:-1}).limit(5)
    }

    showAll=(req:express.Request,res:express.Response)=>{
        RealEstate.find({
            "sold":"ne"
        },
        (err,realestate)=>{
            if(err)console.log(err);
            else{
                res.json(realestate);
            }
        })
    }

    getDetails=(req:express.Request,res:express.Response)=>{
        let id=req.body.id;
        RealEstate.findOne({"_id":id},
            (err,realestate)=>{
                if(err)console.log(err);
                else{
                    res.json(realestate);
                }
            })
    }
    addLine=(req:express.Request,res:express.Response)=>{
        let line=req.body.line;
        let id=req.body.id;
        let lines:String[]=[];
        
        RealEstate.updateOne({"_id":id},{
            $push:{"transport":line}
        }, (err,re)=>{
            if(err)console.log(err);
            else{
                res.json({'message':'realestate added'})
            }
        });
    }

    addCh=(req:express.Request,res:express.Response)=>{
        let ch=req.body.ch;
        let id=req.body.id;
        RealEstate.updateOne({"_id":id},{
            $push:{"characteristics":ch}
        }, (err,re)=>{
            if(err)console.log(err);
            else{
                res.json({'message':'characteristic added'})
            }
        });
    }

    insert=(req:express.Request,res:express.Response)=>{
        let type=req.body.type;
        let town=req.body.town;
        let municipality=req.body.municipality;
        let microlocation=req.body.microlocation;
        let street=req.body.street;
        let area=req.body.area;
        let floor=req.body.floor;
        let rooms=req.body.rooms;
        let totalFloors=req.body.totalFloors;
        let state=req.body.state;
        let heating=req.body.heating;
        let parking=req.body.parking;
        let price=req.body.price;
        let monthlyUtilities=req.body.monthlyUtilities;
        let about=req.body.about;
        let images:String[]=[];
        let lines:String[]=[];
        let adv=req.body.username;
        let agency=req.body.agency;
        let year=req.body.year;
        let terasa=req.body.terasa;
        let lodja=req.body.lodja;
        let franc=req.body.franc;
        let lift=req.body.lift;
        let podrum=req.body.podrum;
        let garaza=req.body.garaza;
        let basta=req.body.basta;
        let klima=req.body.klima;
        let internet=req.body.internet;
        let interfon=req.body.interfon;
        let telefon=req.body.telefon;
        let advertiser;
        if(agency){advertiser="agencija";}
        else {advertiser="vlasnik"}
        
        
        RealEstate.insertMany({"name":type,"town":town,"municipality":municipality,"microlocation":microlocation,"street":street,
            "area":area,"floor":floor,"rooms":rooms,"totalFloors":totalFloors,"state":state,"heating":heating,"parking":parking,
            "price":price,"monthlyUtilities":monthlyUtilities,"about":about,"transport":lines,"images":images,"sold":"ne",
        "advertiser":advertiser,"advertiserUsername":adv,"agencyName":agency,"constructionYear":year,"avgPrice":0,"terasa":terasa,
        "lodja":lodja,"franc":franc,"lift":lift,"podrum":podrum,"garaza":garaza,"basta":basta,"klima":klima,"internet":internet,
    "interfon":interfon,"telefon":telefon},
            (err,re)=>{
                if(err)console.log(err);
                else{
                    res.json({'message':'realestate added'});
                }
            });
    }

    updateAvg=(req: express.Request, res:express.Response) =>{
        let id=req.body.id;
        let avg=req.body.avg;
        console.log(avg)
        console.log(id)

        RealEstate.updateOne({
            "_id":id
        },{
            $set:{"avgPrice":avg}
        },(err,re)=>{
            if(err)console.log(err);
            else{
                res.json({'message':'realestate updated'});
            }
        });
    }

    getLastInserted=(req: express.Request, res:express.Response) =>{
        RealEstate.find({},(err,realestate)=>{
            if(err)console.log(err);
            else{
                res.json(realestate);
            }}).sort({_id:-1}).limit(1)
    }
    

    uploadImage = (req: MulterRequest, res:express.Response) =>{
        let image = req.file.filename;
        let id=req.body.id;
        RealEstate.updateOne({"_id":id},{
            $push:{"images":image}
        }, (err,re)=>{
            if(err)console.log(err);
            else{
                res.json({'message':'image added'})
            }
        });
   
    }

    getMyRE=(req: express.Request, res:express.Response) =>{
        let username=req.body.username;
        RealEstate.find({
            "advertiserUsername":username
        },
        (err,re)=>{
            if(err)console.log(err);
            else{
                res.json(re);
            }
        })
    }

    markAsSold=(req: express.Request, res:express.Response) =>{
        let id=req.body.id;
        console.log(id)
        RealEstate.updateOne({"_id":id},{$set:{"sold":"da"}},
        (err,realestate)=>{
            if(err)console.log(err);
            else{
                res.json(realestate);
            }
        })
    }

   

    getSameLocation=(req: express.Request, res:express.Response) =>{
        let microlocation=req.body.microlocation;
        let town=req.body.town;
        RealEstate.find({
            $and:[
            {"microlocation":microlocation},
            {"town":town}
            ]
        },
        (err,realestate)=>{
            if(err)console.log(err);
            else{
                res.json(realestate);
            }
        })
    }

    
}