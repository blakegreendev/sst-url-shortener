import { ApiHandler } from "sst/node/api";
import { v4 as uuid } from "uuid";
import { Url } from '@sst-url-shortner/core/url'


export const handler = ApiHandler(async (event) => {
    try {
        const body = JSON.parse(event.body);
        const baseUrl = process.env.BASE_URL;

        const originalUrl = body.url;

        const code = uuid().slice(0, 8);

        const shortUrl = `${baseUrl}/${code}`;

        const data = {
            id: code,
            shortUrl,
            originalUrl,
        };
        console.log("data", data);
        await Url.create(data);

        return { data: { shortUrl, originalUrl } };
    } catch (error) {
        console.log("error", error);
        return {
            statusCode: 502,
            data: {
                message: error,
            },
        };
    }
});