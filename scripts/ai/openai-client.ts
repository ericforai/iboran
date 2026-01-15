
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const API_KEY = process.env.OPENAI_API_KEY;
const API_BASE_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';

if (!API_KEY) {
  console.warn('⚠️  WARNING: OPENAI_API_KEY is not set in .env file. AI generation will fail.');
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface CompletionOptions {
  model?: string;
  temperature?: number;
  max_tokens?: number;
  jsonMode?: boolean;
}

export async function chatCompletion(messages: ChatMessage[], options: CompletionOptions = {}) {
  if (!API_KEY) throw new Error('OPENAI_API_KEY is missing');

  const model = options.model || 'gpt-4o'; // Default to a smart model
  
  const body: any = {
    model,
    messages,
    temperature: options.temperature ?? 0.7,
    max_tokens: options.max_tokens ?? 4000,
  };

  if (options.jsonMode) {
    body.response_format = { type: 'json_object' };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenAI API Error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('AI Request Failed:', error);
    throw error;
  }
}

export async function generateImage(prompt: string, size: '1024x1024' = '1024x1024') {
   if (!API_KEY) throw new Error('OPENAI_API_KEY is missing');

   try {
     const response = await fetch(`${API_BASE_URL}/images/generations`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${API_KEY}`,
       },
       body: JSON.stringify({
         model: 'dall-e-3',
         prompt,
         n: 1,
         size,
         response_format: 'b64_json', // Use b64_json to save file locally
       }),
     });

     if (!response.ok) {
       const errorText = await response.text();
       throw new Error(`OpenAI Image API Error: ${response.status} ${response.statusText} - ${errorText}`);
     }

     const data = await response.json();
     return data.data[0].b64_json;
   } catch (error) {
     console.error('AI Image Request Failed:', error);
     throw error;
   }
}
