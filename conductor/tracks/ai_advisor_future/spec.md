# Specification: AI Implementation Advisor (Draft)

## 1. Architecture
- **Model**: Gemini Pro / DeepSeek Chat via API.
- **Context Window (RAG)**:
  - Source 1: `IndustrySolutions` (Descriptions, Pain Points).
  - Source 2: `Resources` (PDF content - parsed).
- **Vector DB**: Payload Vector Search plugin OR simple in-memory vector store (e.g., `hnswlib-node`) for initial MVP.

## 2. API Route (`/api/chat`)
- **Input**: User message ("我该选什么方案？").
- **Process**:
  1. Embed user query.
  2. Search Knowledge Base for top 3 relevant chunks.
  3. Construct Prompt: "Act as a Boran Expert. Context: {chunks}. Question: {query}".
  4. Stream response to frontend.

## 3. Frontend (`ChatWidget`)
- Floating button (bottom-right).
- Chat window with markdown support.
- "Reference Cards": If AI recommends a solution, render a mini-card linking to `/solutions/[slug]`.
