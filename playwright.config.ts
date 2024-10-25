import { defineConfig } from 'playwright/test';
import config from './config';

export default defineConfig({
  use: {
    baseURL: config.baseURL,
    viewport: { width: config.viewportWidth as number, height: config.viewportHeight as number },
    },
});