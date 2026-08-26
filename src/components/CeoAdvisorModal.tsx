import React, { useState, useEffect, useRef } from "react";
import { sound } from "../utils/audio";
import { Sparkles, Send, X, Bot, RefreshCw } from "lucide-react";

interface Message {
  role: "user" | "ceo";
  text: string;
  timestamp: string;
}

interface CeoAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

export const CeoAdvisorModal: React.FC<CeoAdvisorModalProps> = ({
  isOpen,
  onClose,
  initialPrompt = ""
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ceo",
      text: "Greetings. I'm Nehemiah Nesanathan's Executive AI Digital Twin at UNAI TECH. We are engineering the intelligent layer of tomorrow's economy. What would you like to explore about our AI-native systems, ventures like My Vidyon or UEOS, or our technology philosophy?",
      timestamp: "Just now"
    }
  ]);
  const [input, setInput] = useState(initialPrompt);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "What is UNAI TECH's approach to AI-native systems?",
    "Tell me about My Vidyon and its learning intelligence.",
    "What is the vision for UNAI Eleven / UEOS?",
    "How does Nehemiah define his technology moat?",
    "How can we partner or collaborate with UNAI TECH?"
  ];

  useEffect(() => {
    if (initialPrompt && isOpen) {
      setInput(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim() || loading) return;

    sound.playScribble();
    const userMsg: Message = {
      role: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ceo-advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: textToSend,
          userContext: "Portfolio Visitor / Executive Partner"
        })
      });

      const data = await res.json();
      sound.playPaperRustle();
      const ceoMsg: Message = {
        role: "ceo",
        text: data.answer || "Thank you. Let's build the intelligent future together at UNAI TECH.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, ceoMsg]);
    } catch (err) {
      sound.playClick();
      setMessages((prev) => [
        ...prev,
        {
          role: "ceo",
          text: "At UNAI TECH, we don't just add AI to software — we build software around intelligence. Feel free to connect directly with Nehemiah at ceo@unaitech.com or +91 84282 93603.",
          timestamp: "Just now"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060b19]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl h-[640px] max-h-[90vh] flex flex-col rounded-2xl bg-white border-2 border-cyan-400/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0a1226] text-white flex items-center justify-between border-b border-cyan-500/30">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.7)] shrink-0">
              <img
                src="/images/nehemiah-avatar.png"
                alt="Nehemiah AI"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="display text-base font-black text-white m-0">NEHEMIAH AI</h3>
                <span className="eyebrow text-[9px] bg-[#1d4ed8] text-cyan-200 px-2 py-0.5 rounded-full font-bold border border-cyan-400/30">
                  CEO DIGITAL TWIN
                </span>
              </div>
              <p className="eyebrow text-[10px] text-cyan-200/70 m-0">UNAI TECH &bull; STRATEGY & ADVISORY DESK</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-[#1d4ed8] text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Stream */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-zinc-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.role === "user"
                    ? "bg-[#1d4ed8] text-white rounded-br-xs"
                    : "bg-white text-black border-2 border-zinc-200 rounded-bl-xs shadow-sm font-medium"
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1 text-[10px] opacity-75">
                  <span className="font-bold uppercase tracking-wider">
                    {msg.role === "user" ? "You" : "Nehemiah Nesanathan AI"}
                  </span>
                  <span>{msg.timestamp}</span>
                </div>
                <div className="whitespace-pre-wrap">{msg.text}</div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs font-bold text-[#1d4ed8] bg-white p-3 rounded-xl border border-zinc-200 w-fit shadow-xs">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Synthesizing intelligence...</span>
            </div>
          )}
        </div>

        {/* Suggested Prompts Pill Tray */}
        <div className="px-4 py-2 bg-white border-t border-zinc-200 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="eyebrow text-[9px] text-zinc-500 whitespace-nowrap font-bold">SUGGESTED:</span>
          {suggestedPrompts.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(p)}
              className="text-[10px] font-bold text-black bg-zinc-100 hover:bg-[#1d4ed8] hover:text-white px-2.5 py-1 rounded-full whitespace-nowrap border border-zinc-200 transition-colors cursor-pointer"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t-2 border-zinc-200 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask Nehemiah about UNAI TECH, AI architecture, My Vidyon, or UEOS..."
            className="flex-1 px-4 py-2.5 rounded-full bg-zinc-100 border border-zinc-300 text-xs font-medium text-black focus:outline-none focus:border-[#1d4ed8] focus:ring-1 focus:ring-[#1d4ed8]"
          />

          <button
            type="button"
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="p-2.5 rounded-full bg-[#0a1226] text-white hover:bg-[#1d4ed8] disabled:opacity-40 transition-colors cursor-pointer shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
