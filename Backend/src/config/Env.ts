import { config } from "dotenv";
config();

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const PORT = process.env.PORT;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY


export {
    MONGO_DB_URI, 
    PORT, 
    OPENAI_API_KEY
}