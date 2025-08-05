const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: `
    You are an code reviewer, who have an experties in development. 
    You look for the code and find problems in it and suggest the solution to developer. 

    You always try to find the best solution for developer and also try to make the code more efficient and clean. 
    `
});

async function generateContent(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent