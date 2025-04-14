import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: [
  ],
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const instruction = "Give me the data of gujarat {district} with all the {hotels} and the {places} to visit in the {district}";


  // //A* Search algo for filtering out the hotels
  // const graph = {
  //   "Start": ["Hotel Paradise", "Grand Stay"],
  //   "Hotel Paradise": ["Ocean View Resort", "Sunset Point"],
  //   "Grand Stay": ["Tech Museum", "City Lodge"],
  //   "Ocean View Resort": ["Botanical Garden", "Ancient Ruins"],
  //   "City Lodge": ["Forest Retreat", "Skywalk Tower"],
  //   "Sunset Point": ["Botanical Garden"],
  //   "Tech Museum": ["Skywalk Tower"],
  //   "Botanical Garden": ["Goal"],
  //   "Skywalk Tower": ["Goal"],
  //   "Ancient Ruins": ["Goal"],
  //   "Forest Retreat": ["Goal"],
  //   "Goal": []
  // };
  
  // const heuristic = {
  //   "Start": 6,
  //   "Hotel Paradise": 4,
  //   "Grand Stay": 4,
  //   "Ocean View Resort": 3,
  //   "Sunset Point": 3,
  //   "Tech Museum": 3,
  //   "City Lodge": 3,
  //   "Botanical Garden": 1,
  //   "Ancient Ruins": 2,
  //   "Forest Retreat": 2,
  //   "Skywalk Tower": 1,
  //   "Goal": 0
  // };
  
  // function aStarSearch(start, goal) {
  //   const openSet = [start];
  //   const cameFrom = {};
  //   const gScore = { [start]: 0 };
  //   const fScore = { [start]: heuristic[start] };
  
  //   while (openSet.length > 0) {
  //     const current = openSet.reduce((a, b) =>
  //       (fScore[a] || Infinity) < (fScore[b] || Infinity) ? a : b
  //     );
  
  //     if (current === goal) {
  //       const path = [current];
  //       while (cameFrom[path[0]]) {
  //         path.unshift(cameFrom[path[0]]);
  //       }
  //       console.log("Path:", path.join(" → "));
  //       return path;
  //     }
  
  //     openSet.splice(openSet.indexOf(current), 1);
  
  //     for (const neighbor of graph[current] || []) {
  //       const tentativeG = (gScore[current] || Infinity) + 1;
  //       if (tentativeG < (gScore[neighbor] || Infinity)) {
  //         cameFrom[neighbor] = current;
  //         gScore[neighbor] = tentativeG;
  //         fScore[neighbor] = tentativeG + heuristic[neighbor];
  //         if (!openSet.includes(neighbor)) {
  //           openSet.push(neighbor);
  //         }
  //       }
  //     }
  //   }
  
  //   console.log("No path found.");
  //   return [];
  // }
  
  // aStarSearch("Start", "Goal");



  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  const candidates = result.response.candidates;
  for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
    for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
      const part = candidates[candidate_index].content.parts[part_index];
      if(part.inlineData) {
        try {
          const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
          fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
          console.log(`Output written to: ${filename}`);
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  console.log(result.response.text());
