import { Entity, EntityItem } from "electrodb"
import { Dynamo } from "./dynamo"
export * as Url from "./url"

const UrlEntity = new Entity(
    {
        model: {
            entity: "url",
            version: "1",
            service: "urlShortner",
        },
        attributes: {
            id: {
                type: "string",
                required: true,
            },
            shortUrl: {
                type: "string",
                required: true,
            },
            originalUrl: {
                type: "string",
                required: true,
            },
        },
        indexes: {
            primary: {
                pk: {
                    field: "pk",
                    composite: ["id"],
                },
                sk: {
                    field: "sk",
                    composite: [],
                },
            },
        },
    },
    Dynamo.Service
)

export type Info = EntityItem<typeof UrlEntity>


export async function create(input: {
    id: string
    shortUrl: string
    originalUrl: string
}): Promise<Info> {
    try {
        const result = await UrlEntity.client
            .transactWrite({
                TransactItems: [
                    {
                        Put: UrlEntity.create({
                            ...input,
                        }).params(),
                    },
                ],
            })
            .promise()
        return result
    } catch {
        return create(input)
    }
}

export async function get(code: string) {
    const result = await UrlEntity.get({
        id: code,
    }).go()
    return result.data
}