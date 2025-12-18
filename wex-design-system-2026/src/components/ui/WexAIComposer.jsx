import React, { useMemo, useState } from "react";
import { Sparkles, Mic, Paperclip, Send, Command, X, ArrowRight } from "lucide-react";

/**
 * WexAIComposer - ChatGPT-style AI input with intent detection
 * Combines: open input + starter chips + intent preview + mini-thread
 */

function detectIntent(text) {
  const t = text.toLowerCase();
  if (t.includes("/file") || t.includes("file") || t.includes("reimburse") || t.includes("receipt") || t.includes("claim for")) return "file_claim";
  if (t.includes("/status") || t.includes("status") || t.includes("track") || t.includes("where is my claim")) return "claim_status";
  if (t.includes("/balance") || t.includes("balance") || t.includes("how much") || t.includes("left to spend") || t.includes("available")) return "balances";
  if (t.includes("/tx") || t.includes("transaction") || t.includes("fraud") || t.includes("suspicious") || t.includes("recent")) return "transactions";
  if (t.includes("/invest") || t.includes("invest") || t.includes("hsa performance") || t.includes("rebalance") || t.includes("portfolio")) return "hsa_investing";
  if (t.includes("/card") || t.includes("card") || t.includes("declined") || t.includes("lost") || t.includes("stolen") || t.includes("activate")) return "card_help";
  if (t.includes("/life") || t.includes("life event") || t.includes("married") || t.includes("baby") || t.includes("moved") || t.includes("dependent")) return "life_event";
  if (t.includes("eligible") || t.includes("covered") || t.includes("is my") || t.includes("can i use")) return "eligibility";
  if (t.includes("deadline") || t.includes("expire") || t.includes("use it or lose")) return "deadlines";
  return "general";
}

function buildAssistantReply(intent) {
  switch (intent) {
    case "file_claim":
      return {
        text: "I can help file a claim. If you upload a receipt, I'll pre-fill the details and ask you to confirm before submitting.",
        actions: ["Upload receipt", "Start claim", "What counts as a valid receipt?"],
      };
    case "claim_status":
      return {
        text: "I found 2 claims in progress. Your most recent is #9471 for $340.00 (Dental Excellence) — it's pending review.",
        actions: ["View claim #9471", "View all claims", "Upload missing docs"],
      };
    case "balances":
      return {
        text: "Here's a quick summary: HSA $4,847.12 • FSA $1,200.00 (expires Dec 31) • Commuter $240.00. Want the full breakdown?",
        actions: ["Show full breakdown", "What expires soon?", "Set balance alert"],
      };
    case "transactions":
      return {
        text: "I can list recent transactions and flag anything unusual. Your last 3: Walgreens $42.50 ✓, Dental Excellence $340 (needs receipt), Vanguard $500 ✓.",
        actions: ["Show all transactions", "Flag unusual", "Dispute a charge"],
      };
    case "hsa_investing":
      return {
        text: "Your HSA investment balance is $2,100 (+12% YTD). It's allocated to a target-date fund. Want me to explain recent changes or explore rebalancing?",
        actions: ["View performance", "Explain changes", "Rebalance options"],
      };
    case "card_help":
      return {
        text: "I can help with card issues — declines, activation, or lost/stolen. What happened?",
        actions: ["Why was it declined?", "Activate my card", "Report lost/stolen"],
      };
    case "life_event":
      return {
        text: "I can guide you through a life event update. This usually involves updating dependents, address, or coverage elections. What changed?",
        actions: ["I had a baby", "I got married", "I moved", "Other change"],
      };
    case "eligibility":
      return {
        text: "I can check if an expense is eligible for your accounts. Tell me the merchant or type of expense, and I'll look it up.",
        actions: ["Search eligible expenses", "Upload receipt to check", "View eligibility list"],
      };
    case "deadlines":
      return {
        text: "Your Health FSA ($1,200.00) expires December 31. You have 13 days to spend it. Want help planning how to use it?",
        actions: ["Show spending ideas", "File a claim", "Set reminder"],
      };
    default:
      return {
        text: "I'm here to help with claims, balances, cards, investments, or life events. What would you like to do?",
        actions: ["File a claim", "Check claim status", "Show my balances"],
      };
  }
}

const INTENT_LABELS = {
  file_claim: "Filing a claim",
  claim_status: "Claim status",
  balances: "Account balances",
  transactions: "Transactions",
  hsa_investing: "HSA investing",
  card_help: "Card help",
  life_event: "Life event",
  eligibility: "Eligibility check",
  deadlines: "Deadlines & expirations",
  general: "General help",
};

export function WexAIComposer({ mood = "modernist", className = "", hideChips = false }) {
  const [value, setValue] = useState("");
  const [openThread, setOpenThread] = useState(false);
  const [messages, setMessages] = useState([]);

  const intent = useMemo(() => detectIntent(value), [value]);
  const intentLabel = INTENT_LABELS[intent] || "General help";

  // Context-aware chips based on JTBD
  const chips = useMemo(
    () => [
      "File my dental claim",
      "Where's my claim?",
      "How much FSA do I have left?",
      "Show recent transactions",
      "How's my HSA investment?",
      "My card was declined",
    ],
    []
  );

  function submit(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const detected = detectIntent(trimmed);
    const reply = buildAssistantReply(detected);

    setMessages((m) => [
      ...m,
      { role: "user", text: trimmed },
      { role: "assistant", text: reply.text, actions: reply.actions },
    ]);
    setOpenThread(true);
    setValue("");
  }

  function handleChipClick(prompt) {
    submit(prompt);
  }

  function handleActionClick(action) {
    submit(action);
  }

  const isConcierge = mood === "concierge";

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Starter chips - hidden when parent provides its own suggestions */}
      {!hideChips && (
        <div className={`flex flex-wrap gap-2 ${isConcierge ? "justify-center" : "justify-start"}`}>
          {chips.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleChipClick(prompt)}
              className="px-4 py-2 rounded-full bg-[#F5F7FF] border border-[#E1E8FF] text-sm text-[#5D688C] hover:bg-[#EDF1FF] hover:border-[#1C6EFF]/40 hover:text-[#172DA1] transition-all duration-200"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      {/* Composer */}
      <div className="relative">
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C6EFF]/10 via-[#7C3AED]/5 to-[#1C6EFF]/10 blur-2xl rounded-3xl opacity-60" />
        
        <div className="relative bg-white border border-[#E1E8FF] rounded-3xl shadow-lg shadow-[#172DA1]/5 overflow-hidden">
          <div className="flex items-center gap-3 p-3 md:p-4">
            <div className="pl-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#EDF1FF] to-[#F5F7FF] flex items-center justify-center">
                <Sparkles size={16} className="text-[#1C6EFF]" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      submit(value);
                    }
                  }}
                  placeholder="Ask about claims, balances, cards, coverage…"
                  className="w-full py-2 bg-transparent text-[#172DA1] placeholder:text-[#7A87B2] focus:outline-none text-base"
                  aria-label="Ask WEX"
                />
              </div>

              {/* Intent preview */}
              {value.trim().length > 2 && (
                <div className="text-[11px] text-[#7A87B2] mt-1 flex items-center gap-1 animate-in fade-in duration-200">
                  <ArrowRight size={10} />
                  <span className="font-medium text-[#5D688C]">{intentLabel}</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-1 md:gap-2">
              <button 
                className="w-9 h-9 rounded-xl hover:bg-[#F5F7FF] flex items-center justify-center transition-colors" 
                aria-label="Attach receipt"
                title="Attach receipt"
              >
                <Paperclip size={16} className="text-[#7A87B2]" />
              </button>
              <button 
                className="w-9 h-9 rounded-xl hover:bg-[#F5F7FF] flex items-center justify-center transition-colors" 
                aria-label="Voice input"
                title="Voice input"
              >
                <Mic size={16} className="text-[#7A87B2]" />
              </button>
              <button
                onClick={() => submit(value)}
                disabled={!value.trim()}
                className="bg-[#172DA1] text-white px-4 md:px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1C6EFF] transition-all duration-200 flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={14} />
                <span className="hidden md:inline">Ask</span>
              </button>
            </div>
          </div>

          {/* Trust line + keyboard shortcut */}
          <div className="px-5 pb-3 flex items-center justify-between border-t border-[#F5F7FF]">
            <span className="text-[10px] font-medium text-[#7A87B2]">
              Private • Secure • You're in control
            </span>
            <div className="hidden md:flex items-center gap-1 text-[10px] font-bold text-[#7A87B2] bg-[#F5F7FF] px-2.5 py-1.5 rounded-lg border border-[#E1E8FF]">
              <Command size={10} /> K
            </div>
          </div>
        </div>
      </div>

      {/* Expanded mini-thread */}
      {openThread && messages.length > 0 && (
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-[#E1E8FF] p-5 md:p-6 shadow-sm animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1C6EFF] to-[#7C3AED] flex items-center justify-center">
                <Sparkles size={12} className="text-white" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#7A87B2]">
                WEX Assistant
              </span>
            </div>
            <button
              onClick={() => setOpenThread(false)}
              className="w-8 h-8 rounded-xl hover:bg-[#F5F7FF] flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={14} className="text-[#7A87B2]" />
            </button>
          </div>

          <div className="space-y-4 max-h-[300px] overflow-y-auto">
            {messages.slice(-4).map((m, idx) => (
              <div key={idx} className={m.role === "user" ? "pl-4 border-l-2 border-[#E1E8FF]" : ""}>
                {m.role === "user" && (
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#7A87B2] mb-1">You</p>
                )}
                <div className={`text-sm leading-relaxed ${m.role === "user" ? "text-[#172DA1] font-medium" : "text-[#5D688C]"}`}>
                  {m.text}
                </div>

                {m.role === "assistant" && m.actions && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {m.actions.map((a) => (
                      <button
                        key={a}
                        onClick={() => handleActionClick(a)}
                        className="px-4 py-2 rounded-xl bg-[#EDF1FF] border border-[#E1E8FF] text-sm font-semibold text-[#172DA1] hover:border-[#1C6EFF]/40 hover:bg-[#F5F7FF] transition-all duration-200"
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WexAIComposer;
