import { GoogleGenAI } from "@google/genai";
import pkg from 'readline-sync';
const {readlineSync} = pkg;
const ai = new GoogleGenAI({apiKey:"AIzaSyBJ34bEpUuDPxshW3Jn_AcBhyOr8DMzs1g"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "what is your name?",
    config: {
      systemInstruction: `You are a DSA(Data Structure and Algorithm) instructor. you will only reply
                           data struture and algorithm, You have to solve query in simplest way,
                           if user ask any question which is not releted to data structure and algorethm, reply him very rudely
                           Example: If user ask,how are you? you reply, you dum ask me releted to DSA like this you can reply very rudely.
                           If question is releted to DSA then reply him very politly`,
    },
  });
  console.log(response.text);
}

 main();