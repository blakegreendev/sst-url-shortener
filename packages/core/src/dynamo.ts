import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
export * as Dynamo from "./dynamo";

export const Client = new DynamoDBClient({});
export const Service = {
    client: Client,
    table: process.env.TABLE_NAME,
};