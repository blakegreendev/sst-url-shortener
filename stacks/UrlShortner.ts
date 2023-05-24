import { StackContext, Api, Table, NextjsSite } from "sst/constructs";

export function UrlShortner({ stack }: StackContext) {
  const table = new Table(stack, "table", {
    fields: {
      pk: "string",
      sk: "string",
    },
    primaryIndex: { partitionKey: "pk", sortKey: "sk" },
  })
  const api = new Api(stack, "api", {
    defaults: {
      function: {
        bind: [table],
        environment: {
          TABLE_NAME: table.tableName,
          // BASE_URL: this.api.url
        },
      },
    },
    routes: {
      "GET /{code}": "packages/functions/src/getUrl.handler",
      "POST /": "packages/functions/src/setUrl.handler",
    },

  });
  api.getFunction("POST /").addEnvironment("BASE_URL", api.url);
  const site = new NextjsSite(stack, "site", {
    path: "packages/site",
    bind: [api],
    environment: {
      NEXT_PUBLIC_API_ENDPOINT: api.url,
    },
  });
  stack.addOutputs({
    Table: table.tableName,
    ApiEndpoint: api.url,
    SiteUrl: site.url,
  });
}
