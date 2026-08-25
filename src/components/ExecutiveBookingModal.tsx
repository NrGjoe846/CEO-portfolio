import React, { useState } from "react";
import { sound } from "../utils/audio";
import { CEO_PROFILE } from "../data/portfolioData";
import { Calendar, Clock, User, Mail, MessageSquare, X, Check, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface ExecutiveBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveBookingModal: React.FC<ExecutiveBookingModalProps> = ({
  isOpen,
  onClose
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [topic, setTopic] = useState("Strategic Partnerships");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    "Strategic Partnerships",
    "Technology Ventures & AI",
    "Product Development (My Vidyon / UEOS)",
    "Investments & Capital",
    "Speaking & Mentoring",
    "Technology Collaborations"
  ];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playCameraShutter();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060010]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-white border-3 border-[#060010] shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#060010] text-white hover:bg-[rgba(73,84,250,1)] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-6 bg-[rgba(73,84,250,1)] rounded-full" />
              <span className="eyebrow text-xs text-[rgba(73,84,250,1)] font-black uppercase">
                CONNECT WITH NEHEMIAH NESANATHAN
              </span>
            </div>

            <h2 className="display text-2xl sm:text-3xl font-black text-[#060010] mb-1">
              Let's Build the Future
            </h2>
            <p className="body-copy text-xs sm:text-sm text-[#4b4661] font-medium mb-6">
              Have an idea worth building? Let's turn it into reality through UNAI TECH.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="eyebrow text-[10px] text-gray-500 font-bold block mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#f5f5f5] border border-[rgba(73,84,250,0.2)] text-xs font-medium text-[#060010] focus:outline-none focus:border-[rgba(73,84,250,1)]"
                  />
                </div>
                <div>
                  <label className="eyebrow text-[10px] text-gray-500 font-bold block mb-1">WORK EMAIL</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#f5f5f5] border border-[rgba(73,84,250,0.2)] text-xs font-medium text-[#060010] focus:outline-none focus:border-[rgba(73,84,250,1)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="eyebrow text-[10px] text-gray-500 font-bold block mb-1">ORGANIZATION</label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Company or Venture Name"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#f5f5f5] border border-[rgba(73,84,250,0.2)] text-xs font-medium text-[#060010] focus:outline-none focus:border-[rgba(73,84,250,1)]"
                  />
                </div>
                <div>
                  <label className="eyebrow text-[10px] text-gray-500 font-bold block mb-1">STRATEGIC FOCUS</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#f5f5f5] border border-[rgba(73,84,250,0.2)] text-xs font-medium text-[#060010] focus:outline-none focus:border-[rgba(73,84,250,1)]"
                  >
                    {topics.map((t, idx) => (
                      <option key={idx} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="eyebrow text-[10px] text-gray-500 font-bold block mb-1">BRIEF MESSAGE / COLLABORATION GOAL</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share a short note on what you would like to discuss..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#f5f5f5] border border-[rgba(73,84,250,0.2)] text-xs font-medium text-[#060010] focus:outline-none focus:border-[rgba(73,84,250,1)]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-[11px] text-[#4b4661] font-semibold">
                  Direct: <span className="text-[rgba(73,84,250,1)] font-bold">{CEO_PROFILE.contactEmail}</span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[rgba(73,84,250,1)] text-white text-xs font-black uppercase tracking-wider hover:bg-[#060010] transition-colors shadow-sm cursor-pointer"
                >
                  TRANSMIT REQUEST &rarr;
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[rgba(73,84,250,1)] text-white flex items-center justify-center mx-auto shadow-lg">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="display text-2xl font-black text-[#060010]">
              Collaboration Request Received
            </h3>

            <p className="body-copy text-sm text-[#4b4661] max-w-md mx-auto font-medium">
              Thank you, <span className="font-bold text-[#060010]">{name}</span>. Nehemiah's executive office at UNAI TECH will review your strategic inquiry regarding <span className="font-bold text-[rgba(73,84,250,1)]">{topic}</span> and connect with you shortly at <span className="font-bold text-[#060010]">{email}</span>.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-[#060010] text-white text-xs font-black uppercase hover:bg-[rgba(73,84,250,1)] transition-colors cursor-pointer"
              >
                RETURN TO DOSSIER
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
