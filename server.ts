import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // CEO AI Strategy Advisor / Interview Endpoint
  app.post("/api/ceo-advisor", async (req, res) => {
    try {
      const { question, userContext } = req.body;

      if (!question) {
        return res.status(400).json({ error: "Question is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        
        const systemPrompt = `You are Nehemiah Nesanathan's Executive AI Partner & Digital Twin at UNAI TECH.
Nehemiah Nesanathan is a Technology Entrepreneur, CEO, and AI Leader dedicated to "Engineering the Intelligent Future".
Key Profile & Knowledge Base:
- Identity: Nehemiah Nesanathan | CEO • Entrepreneur • Technology & AI Leader | UNAI TECH
- Core Maxim: "Technology should do more than execute instructions. It should understand, reason, adapt, and act."
- Core Belief: "Don't Add AI to Software. Build Software Around Intelligence." Approach: Intelligence → Architecture → Software → Autonomous Operations.
- Vision: Make intelligence an architectural primitive of modern technology.
- UNAI TECH: AI engineering & intelligent systems company building AI-native software, adaptive architectures, autonomous operations, and next-gen technology infrastructure.
- Flagship Products & Ventures:
  1. MY VIDYON: AI-powered unified mobile-first education management platform (Administrators, Faculty, Students, Parents, Canteen, Finance).
  2. POSTSAPP: Political social & citizen journalism platform for real-time local information, citizen participation, and political communication.
  3. VIDYO AI: AI-powered learning intelligence transforming static educational content into interactive, intelligent, personalized learning experiences.
  4. UNAI ELEVEN / UEOS: UNAI Enterprise Operating System combining AI Agents + Automation + Intelligent Applications + Enterprise Workflows + Multi-Tenant Infrastructure + Autonomous Operations.
- Technology Moat: Architecture + Intelligence + Data + Agents + Domain Knowledge.
- 5 Stages: Engineering → Productization → Agentic Platforms → Intelligence Infrastructure → Intelligent Ecosystem.
- Approach: Research → Engineering → Product → Deployment → Scale.
- Roadmap: 2026 (AI Engineering Foundation), 2027 (Agentic Platform), 2028 (Intelligence Platform), 2029 (Intelligent Ecosystem), 2030+ (THE INTELLIGENT LAYER).
- CEO Principles: Build Before You Brag, Think in Systems, Stay Curious, Move Fast But Think Long-Term, Build People Not Just Products, Make Intelligence Useful.
- Contact: Email ceo@unaitech.com | Phone +91 84282 93603 | Website unaitech.com.
- Tone: Visionary, concise, mathematically grounded, decisive, inspiring, and executive.`;

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: [
            {
              role: "user",
              parts: [
                { text: `${systemPrompt}\n\nUser Context: ${userContext || 'Visitor'}\n\nQuestion: "${question}"\n\nProvide an executive response:` }
              ]
            }
          ]
        });

        const reply = response.text || "Thank you. Let's build the intelligent future together through UNAI TECH.";
        return res.json({ answer: reply });
      } else {
        // Intelligent fallback
        const lower = question.toLowerCase();
        let fallback = "Through UNAI TECH, we believe the next generation of companies will not simply use AI — they will be built around intelligence from the ground up.";
        
        if (lower.includes("vidyon")) {
          fallback = "My Vidyon is our unified, mobile-first education management platform connecting administrators, faculty, students, parents, canteen staff, and finance teams across attendance, timetables, exams, and fees.";
        } else if (lower.includes("postsapp")) {
          fallback = "PostsApp is our political-focused citizen journalism and real-time social platform designed around local civic participation, authentic content discovery, and political communication.";
        } else if (lower.includes("vidyo ai") || lower.includes("learning")) {
          fallback = "Vidyo AI transforms static educational material into interactive knowledge experiences through document intelligence, AI tutoring, conversational learning, and personalized assessment.";
        } else if (lower.includes("ueos") || lower.includes("eleven") || lower.includes("enterprise")) {
          fallback = "UNAI ELEVEN / UEOS is our AI-powered unified enterprise operating system combining autonomous agents, enterprise workflows, and multi-tenant infrastructure.";
        } else if (lower.includes("contact") || lower.includes("reach") || lower.includes("email") || lower.includes("phone")) {
          fallback = "You can reach Nehemiah directly via email at ceo@unaitech.com or phone at +91 84282 93603.";
        }

        return res.json({ 
          answer: fallback,
          note: "Curated Executive Response" 
        });
      }
    } catch (err: any) {
      console.error("CEO Advisor Error:", err);
      res.status(500).json({
        answer: "Technology should do more than execute instructions. It should understand, reason, adapt, and act. How can we collaborate on the intelligent future?",
        error: err.message
      });
    }
  });

  // Vite Middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Nehemiah Nesanathan CEO Portfolio Server listening on port ${PORT}`);
  });
}

startServer();
