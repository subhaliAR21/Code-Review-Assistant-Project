require('dotenv').config(); // MUST be the first line

// Import the Google GenAI SDK
const { GoogleGenAI } = require('@google/genai');
const express = require('express');
const cors = require('cors');

// Initialize the Gemini Client
// The key is automatically read from process.env
const ai = new GoogleGenAI({});

console.log('API Key Loaded:', process.env.GEMINI_API_KEY ? 'Yes' : 'No'); // Temp check

// 1. Initialize Express App
const app = express();
const PORT = 5000;

// 2. Middleware
app.use(cors());
app.use(express.json()); // Allows parsing JSON body from requests


// POST endpoint for code review
app.post('/api/review', async (req, res) => {
  const { code, language } = req.body; // Expect code and language from the frontend

  if (!code) {
    return res.status(400).json({ error: 'Code content is required for review.' });
  }

  // 1. Define the Prompt
  const prompt = `
    You are an expert Code Review Assistant. 
    Analyze the following ${language} code snippet. 
    Provide feedback in the following structure:
    1.  **Summary:** A brief, positive overview of the code quality.
    2.  **Identified Errors/Bugs:** List any errors, potential bugs, or security vulnerabilities found. If none, state "None found."
    3.  **Optimization Recommendations:** Suggest specific ways to improve performance, readability, or adherence to best practices. Use code examples where necessary.
    
    ---
    
    Code to analyze:
    ${code}
    `;

  try {
    // 2. Call the Gemini API
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // Excellent for fast, complex analysis like this
      contents: [prompt],
      config: {
        // Higher temperature makes the output slightly more creative/varied, which is good for detailed analysis
        temperature: 0.5, 
      },
    });

    const reviewText = response.text;

    // 3. Send the AI's response back to the frontend
    res.json({ review: reviewText });

  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: 'Failed to perform code review. Check server logs.' });
  }
});

// 3. Simple Test Route (keep this)
app.get('/', (req, res) => {
  res.json({ message: 'Server is running! API is ready.' });
});

// 4. Start Server (keep this)
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

