import { defineConfig } from "cypress";

const envbaseUrl = process.env.TEST_BASE_URL;

export default defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure : false,
    setupNodeEvents(on, config) {
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

});
