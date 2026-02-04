const openai=require('openai')
require("dotenv").config();

const client = new openai.OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});



exports.getGroqCompletion=async function name(systemPrompt, userPrompt) {
    return client.chat.completions.create({
        messages:[
            {role:"system", content:systemPrompt},
            {role:"user", content:userPrompt}
        ],
        model:"llama-3.3-70b-versatile",
        temperature: 0.3,
    });

}

