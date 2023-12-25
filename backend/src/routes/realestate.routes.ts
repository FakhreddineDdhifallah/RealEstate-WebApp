import { Request } from 'express';
import express from 'express'
import { RealEstateController } from '../controllers/realestate.controller';
import {MulterRequest} from '../multerrequest'

const reRouter=express.Router();

const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req: any, file: any, cb: (arg0: any, arg1: string) => void){
        cb(null, 'C:/Users/Anica/Desktop/projekat/frontend/app/src/assets');
    },
    filename: function(req: any, file: { filename: string; originalname:string}, cb: (arg0: any, arg1: any) => void){
        
        cb(null, String(new Date().getTime())+'.'+ file.originalname.split('.')[1]);
    } 
});

const fileFilter = (req: any, file: { mimetype: string; }, cb: (arg0: any, arg1: boolean) => void) =>{
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}
const upload = multer({storage: storage, 
    limits: {fileSize: 300*300*3*30},
    fileFilter:fileFilter
});

reRouter.route('/search').post(
    (req,res)=>new RealEstateController().search(req,res)
);

reRouter.route('/show').post(
    (req,res)=>new RealEstateController().show(req,res)
);

reRouter.route('/showAll').post(
    (req,res)=>new RealEstateController().showAll(req,res)
);

reRouter.route('/getDetails').post(
    (req,res)=>new RealEstateController().getDetails(req,res)
);

reRouter.route('/insert').post(
    (req,res)=>new RealEstateController().insert(req,res)
);

reRouter.route('/getLastInserted').post(
    (req,res)=>new RealEstateController().getLastInserted(req,res)
);

reRouter.route('/getMyRE').post(
    (req,res)=>new RealEstateController().getMyRE(req,res)
);

reRouter.route('/markAsSold').post(
    (req,res)=>new RealEstateController().markAsSold(req,res)
);

reRouter.route('/getSameLocation').post(
    (req,res)=>new RealEstateController().getSameLocation(req,res)
);

reRouter.route('/addLine').post(
    (req,res)=>new RealEstateController().addLine(req,res)
);

reRouter.route('/addCh').post(
    (req,res)=>new RealEstateController().addCh(req,res)
);
reRouter.route('/updateAvg').post(
    (req,res)=>new RealEstateController().updateAvg(req,res)
);

reRouter.route('/uploadImage').post(
    upload.single('img'), (req:MulterRequest, res)=>{
        new RealEstateController().uploadImage(req, res);
    }
)

export default reRouter;