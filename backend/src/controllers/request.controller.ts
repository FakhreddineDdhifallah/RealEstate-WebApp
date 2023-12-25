import express from 'express';
import Zahtev from '../models/request';
import Agency from '../models/agency'
import User from'../models/user'
import { Request } from 'express';
import {MulterRequest} from '../multerrequest'

export class ZahtevController{

    register=(req:express.Request,res:express.Response)=>{
        let zahtev=new Zahtev(req.body);

        zahtev.save().then((user)=>{
            res.status(200).json({'message':'user added'});
        }).catch((err)=>{
            res.status(400).json({'message':err})
        })
        
    }

    uploadImage = (req: MulterRequest, res:express.Response) =>{
        let slika = req.file.filename;
        let username=req.body.username;
        //console.log("IME SLIKE",slika);
        Zahtev.updateOne({'username':username}, {'image':slika}, (err, file)=>{
            if(err) console.log(err);
            else res.json(file);
        });    
    }

    getAllRequests=(req: express.Request, res:express.Response) =>{
        Zahtev.find({},
            (err,zahtev)=>{
                if(err)console.log(err);
                else{
                    res.json(zahtev);
                }
            })
    }

   

    odobri=(req: express.Request, res:express.Response)=>{
        
        let user=req.body.user;
        let username=user.username;
        let name=user.name;
        let surname=user.surname;
        let password=user.password;
        let town=user.town;
        let birthDate=user.birthDate;
        let phone=user.phoneNumber;
        let email=user.email;
        let type=user.type;
        let image=user.image;
        let agency=user.agency;
        let licenceNumber=user.licenceNumber;
        User.insertMany({"name":name,"surname":surname,"username":username,"password":password,
        "town":town,"birthDate":birthDate,"phoneNumber":phone,"email":email,"type":type,
        "image":image,"agency":agency,"licenceNumber":licenceNumber});
       Zahtev.collection.deleteOne(
            {"username":username}
        );
    }

    odbij=(req: express.Request, res:express.Response)=>{
        let user=req.body.user;
        let username=user.username;
        //console.log(user.username);
       Zahtev.collection.deleteOne(
            {"username":username}
        )
    }
}