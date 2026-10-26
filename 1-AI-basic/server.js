import express from "express";
import dotenv from "dotenv";
import {main} from "./app/ai.js";


dotenv.config();

const app = express();
app.use(express.json());

main()

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});