import bodyParser from 'body-parser';
import cors from 'cors'
import express from 'express';
import mongoose from 'mongoose';
import agencyRouter from './routes/agency.routes';
import reRouter from './routes/realestate.routes';
import reqRouter from './routes/request.routes';
import userRouter from './routes/user.routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/nekretnine");
const conn=mongoose.connection;
conn.once('open',()=>{
    console.log("Konekcija sa bazom je uspesna");
})

const router=express.Router();


router.use('/users',userRouter)
router.use('/realestate',reRouter)
router.use('/request',reqRouter)
router.use('/agency',agencyRouter)
app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));