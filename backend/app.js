import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config("./.env");
import connectDB from "./src/config/mongo.config.js"
import {nanoid} from 'nanoid';

import short_url from './src/routes/short_url.route.js';

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/create",short_url);

// app.get("/:id",async (req,res)=>{
//     const {id}=req.params;
//     const url=await urlSchema.findOne({short_url:id});
//     if(url){
//         return res.redirect(url.full_url);
//     } else{
//         res.status(401).send("Not Found");
//     }
// })

app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on http://localhost:3000");
})

//GET - REDIRECTION
//POST - CREATE SHORT URL

//nano id stops from duplicacy