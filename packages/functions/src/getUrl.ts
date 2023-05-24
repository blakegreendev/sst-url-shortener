import { ApiHandler } from "sst/node/api";
import { Url } from '@sst-url-shortner/core/url'

export const handler = ApiHandler(async (evt) => {
    try {
        const { code } = evt.pathParameters || {};
        if (!code) {
            return {
                statusCode: 400,
                data: {
                    message: "missing code in path",
                },
            };
        }

        const record = await Url.get(code);

        const originalUrl = record.originalUrl;
        return {
            data: {},
            statusCode: 301,
            headers: {
                Location: originalUrl,
            },
        };
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