import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { OpenAI } from "openai";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    res.status(200).send({
        message: "Hello from davis"
    })
});

app.listen(3000, () => console.log("Server is running on port http://localhost:3000"));
