import express from 'express';

import { AgencyController } from '../controllers/agency.controller';

const agencyRouter=express.Router();

agencyRouter.route('/addNewAgency').post(
    (req,res)=>new AgencyController().addNewAgency(req,res)
);

agencyRouter.route('/getAgency').post(
    (req,res)=>new AgencyController().getAgency(req,res)
);

agencyRouter.route('/getAll').post(
    (req,res)=>new AgencyController().getAll(req,res)
);




export default agencyRouter;

