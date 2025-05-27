import { generateNanoId } from "../utils/helper.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUser =async (url) => {
    const shortUrl=generateNanoId(10);
    if(!shortUrl){
        throw new Error("Error generating short URL");
    }
    await saveShortUrl(shortUrl,url);
    return shortUrl;
    
}

export const createShortUrlWithUser =async (url,userId,slug=null) => {
    const shortUrl=slug || generateNanoId(10);
    const exist=await getCustomShortUrl(slug);
    if(exist){
        throw new Error("Custom short URL already exists");
    }
    await saveShortUrl(shortUrl,url,userId);
    return shortUrl;
}