import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl=wrapAsync(async(req,res,next)=>{
    const data=req.body;
    let shortUrl;
    if(req.user){
        shortUrl=await createShortUrlWithUser(data.url,req.user._id,data.slug);
    }else{    
        shortUrl=await createShortUrlWithoutUser(data.url);
    }
    res.status(200).json({shortUrl:process.env.APP_URL+shortUrl})
})

export const createShortUrlAuth=wrapAsync(async(req,res,next)=>{
    const {url}=req.body;
    const shortUrl=await createShortUrlWithUser(url,req.user._id);
    res.status(200).json({shortUrl:process.env.APP_URL+shortUrl})
})

export const redictFromShortUrl=wrapAsync(async(req,res)=>{
    const {id}=req.params;
    const url=await getShortUrl(id);  
    if(!url){
        throw new Error("URL not found");
    }   
    res.redirect(url.full_url);
})

export const createCustomShortUrl=wrapAsync(async(req,res)=>{
    const {url,slug}=req.body;
    const shortUrl=await createShortUrlWithoutUser(url,customUrl);
    res.status(200).json({shortUrl:process.env.APP_URL+shortUrl})
})