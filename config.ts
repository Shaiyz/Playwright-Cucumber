import dotenv from 'dotenv';
import path from 'path';

const env = process.env.TEST_ENV || 'qa';  

dotenv.config({ path: path.resolve(__dirname, `./env/.env.${env}`) });

const config = {
  baseURL: process.env.BASE_URL,
  timeout: process.env.TIMEOUT || 10000,
  viewportWidth:1920,
  viewportHeight:1080,
};

export default config;