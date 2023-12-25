import { Request } from "express";

const multer = require('multer')
export interface MulterRequest extends Request {
    file: any;
}