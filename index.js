 import { GoogleGenAI } from "@google/genai";
 import pkg from "readline-sync";
const readlineSync = pkg;


const ai = new GoogleGenAI({apiKey:"AIzaSyDIdRh4p-e2MRp7k78WQm4DzJa86ZPU0Ak"});
const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },]})

async function main() {
   const userProblem = readlineSync.question("Ask me anything---");
   const response1 = await chat.sendMessage({
    message: userProblem,
  });
  console.log(response1.text )
   main();
}

main();