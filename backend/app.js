import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config("./.env");
import connectDB from "./src/config/mongo.config.js"
import {nanoid} from 'nanoid';

import short_url from './src/routes/short_url.route.js';
import { redictFromShortUrl } from './src/controller/short_url.controller.js';

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/create",short_url);

app.get("/:id",redictFromShortUrl)

app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on http://localhost:3000");
})

//GET - REDIRECTION
//POST - CREATE SHORT URL

//nano id stops from duplicacy