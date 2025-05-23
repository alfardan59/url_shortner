import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUser =async (url) => {
    const shortUrl=await generateNanoId(10);
    await saveShortUrl(shortUrl,url);
    return shortUrl;
}

export const createShortUrlWithUser =async (url,userId) => {
    const shortUrl=await generateNanoId(10);
    await saveShortUrl(url,shortUrl,userId);
    return shortUrl;
}