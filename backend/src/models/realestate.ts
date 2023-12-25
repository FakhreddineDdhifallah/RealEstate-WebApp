import mongoose from 'mongoose';
import {ObjectId} from 'mongodb'

const Schema=mongoose.Schema;

let RealEstate=new Schema(
    {
            _id:{
                type:ObjectId
            },
            name:{
                type:String
            },
            town:{
                type:String
            },
            municipality:{
                type: String
            },
            microlocation:{
                type: String
            },
            street:{
                type:String
            },
            area:{
                type: Number
            },
            rooms:{
                type: Number
            },
            constructionYear:{
                type: Number
            },
            state:{
                type: String
            },
            heating:{
                type: String
            },
            floor:{
                type:Number
            },
            totalFloors:{
                type: Number
            },
            parking:{
                type: String
            },
            monthlyUtilities:{
                type:Number
            },
            price:{
                type:Number
            },
            about:{
                type:String
            },
            advertiser:{
                type:String
            },
            advertiserUsername:{
                type:String
            },
            agencyName:{
                type:String
            },
            transport:{
                type:Array
            },
            images:{
                type:Array
            },
            sold:{
                type:String
            },
            avgPrice:{
                type:Number
            },
            terasa:{
                type:Boolean
            },
            lodja:{
                type:Boolean
            },
            franc:{
                type:Boolean
            },
            lift:{
                type:Boolean
            },
            podrum:{
                type:Boolean
            },
            garaza:{
                type:Boolean
            },
            basta:{
                type:Boolean
            },
            klima:{
                type:Boolean
            },
            internet:{
                type:Boolean
            },
            interfon:{
                type:Boolean
            },
            telefon:{
                type:Boolean
            }
        }


);

export default mongoose.model('realestate', RealEstate,'objekti');