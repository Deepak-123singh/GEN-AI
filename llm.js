 import { GoogleGenAI } from "@google/genai";
 import pkg from "readline-sync";
const readlineSync = pkg;


const ai = new GoogleGenAI({apiKey:"AIzaSyDIdRh4p-e2MRp7k78WQm4DzJa86ZPU0Ak"});
let history = []
async function chatting(userProblem) {

    history.push({
        role:"user",
        parts:[{text:userProblem}]
    })
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:history
  });
   history.push({
        role:"model",
        parts:[{text:response.text}]
    })
    console.log("\n")
  console.log(response.text);
}

async function main() {
   const userProblem = readlineSync.question("Ask me anything---");
  await chatting(userProblem);
   main();
}

main();