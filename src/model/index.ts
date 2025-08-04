import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  temperature: 0,
  apiKey:process.env.GOOGLE_API_KEY
})


