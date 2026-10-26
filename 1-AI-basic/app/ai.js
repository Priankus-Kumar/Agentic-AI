import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const main = async () => {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: "what is js?",
  });

  console.log(response.text);
};

