import express, { Request } from 'express';
import { ZahtevController } from '../controllers/request.controller';
import {MulterRequest} from '../multerrequest'

const reqRouter=express.Router();

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req: any, file: any, cb: (arg0: any, arg1: string) => void){
        cb(null, '/Users/Anica/Desktop/projekat/backend/src/uploads');
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

reqRouter.route('/register').post(
    (req,res)=>new ZahtevController().register(req,res)
);

reqRouter.route('/uploadImage').post(
    upload.single('img'), (req:MulterRequest, res)=>{
        new ZahtevController().uploadImage(req, res);
    }
)

reqRouter.route('/getAllRequests').post(
    (req,res)=>new ZahtevController().getAllRequests(req,res)
);


reqRouter.route('/odobri').post(
    (req,res)=>new ZahtevController().odobri(req,res)
);

reqRouter.route('/odbij').post(
    (req,res)=>new ZahtevController().odbij(req,res)
);


export default reqRouter;

