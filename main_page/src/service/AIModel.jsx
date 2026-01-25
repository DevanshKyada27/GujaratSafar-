import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 4096, //8192
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [],
});

// Optional helper for external usage
export const sendTripPrompt = async (prompt) => {
  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
};
