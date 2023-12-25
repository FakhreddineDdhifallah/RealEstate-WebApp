import express from 'express'
import Agency from '../models/agency'

export class AgencyController{

    addNewAgency=(req: express.Request, res:express.Response)=>{
        let name=req.body.name;
        let address=req.body.address;
        let town=req.body.town;
        let phone=req.body.phone;
        let pib=req.body.pib;
        Agency.insertMany({"name":name,"address":address,"town":town,"phone":phone,"PIB":pib},
        (err,re)=>{
            if(err)console.log(err);
            else{
                res.json({'message':'agency added'})
            }
        });
    }

    getAgency=(req: express.Request, res:express.Response)=>{
        let name=req.body.name;
        console.log(name)
        Agency.findOne({
            "name":name
        },(err,agency)=>{
            if(err) console.log(err);
            else res.json(agency);
        })
    }

    getAll=(req: express.Request, res:express.Response)=>{
        Agency.find({
        },
        (err,agency)=>{
            if(err)console.log(err);
            else{
                res.json(agency);
            }
        })
    }
}