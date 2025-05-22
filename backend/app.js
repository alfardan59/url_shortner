import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config("./.env");
import connectDB from "./src/config/mongo.config.js"
import {nanoid} from 'nanoid';

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/api/create",(req,res)=>{
    // res.send("Hello World");
    const url=req.body;
    console.log(url);
    res.send(nanoid(10));
});

app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on http://localhost:3000");
})

//GET - REDIRECTION
//POST - CREATE SHORT URL

//nano id stops from duplicacy