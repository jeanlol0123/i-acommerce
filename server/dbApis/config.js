import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || 'ol4tbn74ayph7t1c';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'txc3tbb5vob16ec2';
export const DB_HOST = process.env.DB_HOST || 'p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
export const DB_DATABASE = process.env.DB_NAME || 'sl2nfube1bxd0u3u'; 
export const DB_PORT = process.env.DB_PORT || 3306;