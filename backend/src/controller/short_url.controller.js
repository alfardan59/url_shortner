import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl=wrapAsync(async(req,res,next)=>{
    const {url}=req.body;
    const shortUrl=await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL+shortUrl)
})

export const redictFromShortUrl=wrapAsync(async(req,res)=>{

    const {id}=req.params;
    const url=await getShortUrl(id);  
    if(!url){
        throw new Error("URL not found");
        // return res.status(404).send("URL not found");
    }   
    res.redirect(url.full_url);
})