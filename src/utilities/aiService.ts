import { GroundingChunk } from "../types/ai";

export interface ChatMessagePart {
  text: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: ChatMessagePart[];
  groundingChunks?: GroundingChunk[];
  clientMessageId?: string;
  deliveryStatus?: 'sending' | 'sent' | 'read';
}

export interface AIResponse {
  text: string;
  groundingChunks?: GroundingChunk[];
}

export class AIService {
  /**
   * Generates a conversational response using server-side API proxy.
   * @param history Chat history (Gemini format: parts[0].text)
   * @param systemInstruction The "brain" of the AI.
   */
  async getConsultantResponse(history: ChatMessage[], systemInstruction: string): Promise<AIResponse> {
    try {
      // Convert history format for server API
      const messages = history.map(msg => ({
        role: msg.role,
        content: msg.parts[0].text
      }));

      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          history: messages,
          systemInstruction
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("AI API Error Response:", errorData);
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();

      return {
        text: data.text || '',
        groundingChunks: data.groundingChunks || []
      };

    } catch (error) {
      console.error("AI Service Error:", error);
      throw error;
    }
  }
}

export const aiService = new AIService();
