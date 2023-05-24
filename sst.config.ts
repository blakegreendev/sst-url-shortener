import { SSTConfig } from "sst";
import { UrlShortner } from "./stacks/UrlShortner";

export default {
  config(_input) {
    return {
      name: "sst-url-shortner",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(UrlShortner);
  }
} satisfies SSTConfig;
