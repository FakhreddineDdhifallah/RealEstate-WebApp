import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let User=new Schema(
    {
        name:{
            type:String
        },
        surname:{
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        },
        town:{
            type: String
        },
        birthDate:{
            type: String
        },
        phoneNumber:{
            type:String
        },
        email:{
            type:String
        },
        type:{
            type:String
        },
        image:{
            type:String
        },
        favorites:{
            type:Array
        },
        agency:{
            type:String
        },
        licenceNumber:{
            type:Number
        }
    }
);

export default mongoose.model('user', User,'korisnici');