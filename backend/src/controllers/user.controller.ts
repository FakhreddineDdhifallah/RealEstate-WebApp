import express from 'express';
import User from '../models/user';
import Zahtev from '../models/request';
import user from '../models/user';
import {MulterRequest} from '../multerrequest'


export class UserController{
    login=(req: express.Request, res: express.Response)=>{
        let username=req.body.username;
        let password=req.body.password;
        
        User.findOne({'username':username,'password':password},
        (err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }

    getAdvertiser=(req: express.Request, res:express.Response) =>{
        let username=req.body.username;
        User.findOne({
            "username":username
        },(err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }

    usernameCheck=(req: express.Request, res:express.Response) =>{
        let username=req.body.username;
        
        User.findOne({"username":username},(err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        });
    }

    emailCheck=(req: express.Request, res:express.Response) =>{
        let email=req.body.email;
        User.findOne({"email":email},(err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        });
    }

    addToFavorites=(req: express.Request, res:express.Response) =>{
        let id=req.body.id;
        
    }
    

}