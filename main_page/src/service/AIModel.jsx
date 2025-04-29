// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseModalities: [
//   ],
//   responseMimeType: "application/json",
// };


//   export const chatSession = model.startChat({
//     generationConfig,
//     history: [
//     ],
//   });

//   const instruction = "Give me the data of gujarat {district} with all the {hotels} and the {places} to visit in the {district}";

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   const candidates = result.response.candidates;
//   for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
//     for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
//       const part = candidates[candidate_index].content.parts[part_index];
//       if(part.inlineData) {
//         try {
//           const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
//           fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
//           console.log(`Output written to: ${filename}`);
//         } catch (err) {
//           console.error(err);
//         }
//       }
//     }
//   }
//   console.log(result.response.text());




import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
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
