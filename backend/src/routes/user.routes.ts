import express, { Request } from 'express';

import { UserController } from '../controllers/user.controller';
import {MulterRequest} from '../multerrequest'
const userRouter=express.Router();

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
    limits: {fileSize: 300*300*3},
    fileFilter:fileFilter
});

userRouter.route('/login').post(
    (req, res)=>new UserController().login(req,res)
);
userRouter.route('/getAdvertiser').post(
    (req,res)=>new UserController().getAdvertiser(req,res)
);
userRouter.route('/usernameCheck').post(
    (req,res)=>new UserController().usernameCheck(req,res)
);

userRouter.route('/emailCheck').post(
    (req,res)=>new UserController().emailCheck(req,res)
);
userRouter.route('/addToFavorites').post(
    (req,res)=>new UserController().addToFavorites(req,res)
);

export default userRouter;

