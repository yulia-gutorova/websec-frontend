import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config({ path: ".env"});

const baseUrl = process.env.TEST_BASE_URL;

export default defineConfig({
  e2e: {
    baseUrl : baseUrl,
    video: false,
    screenshotOnRunFailure : false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    },
  },
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

});
