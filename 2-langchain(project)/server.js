import express from "express";
import dotenv from "dotenv";
import AiRoute from "./app.js/ai.js"
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/ai/",AiRoute)

const port = process.env.PORT;

app.listen(port,()=>{
    console.log("server is running")
});
