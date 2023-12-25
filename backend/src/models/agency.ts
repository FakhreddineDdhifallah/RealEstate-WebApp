import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let Agency=new Schema(
    {
        name:{
            type:String
        },
        address:{
            type: String
        },
        town: {
            type: String
        },
        phone:{
            type:String
        },
        PIB:{
            type:String
        },
    }
);

export default mongoose.model('agency', Agency,'agencije');