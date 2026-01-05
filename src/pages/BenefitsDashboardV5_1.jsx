import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AIGlowBorder } from '@/components/ui/moving-border';
import { 
  Sparkles, Search, Bell, User, Command, ChevronRight, 
  CheckCircle2, History, AlertCircle, Activity, Zap, ArrowRight
} from 'lucide-react';
import { WexAIComposer } from '@/components/ui/WexAIComposer';
import wexLogoRed from '../assets/wex_logo_red.svg';

// Simple fade animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 }
  }
};

const staggerItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }
};

/**
 * BenefitsDashboardV5_1 - AI-Forward Benefits Dashboard (Idea 1)
 * Morphing Suggested Actions (Chips <=> Tiles) to reduce clutter
 */
const BenefitsDashboardV5_1 = () => {
  const [mood, setMood] = useState('modernist');
  const [filed, setFiled] = useState(false);

  // Constants
  const date = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  const userName = "Sarah";
  
  const moods = [
    { id: 'minimalist', name: 'Minimalist' },
    { id: 'concierge', name: 'Concierge' },
    { id: 'modernist', name: 'Modernist' }
  ];

  // Mock Data
  const accounts = [
    { name: 'HSA', balance: '$4,847.12', trend: '+12%', color: 'text-wex-blue-accent', sub: 'Investment: $2,100' },
    { name: 'Health FSA', balance: '$1,200.00', trend: 'Exp: Dec 31', color: 'text-wex-blue-main', sub: '2 claims pending' },
    { name: 'Commuter', balance: '$240.00', trend: 'Active', color: 'text-[#5D688C]', sub: 'Next reload: Jan 1' },
  ];

  const recentActivity = [
    { id: 1, merchant: 'Walgreens', amount: '$42.50', status: 'Approved', type: 'FSA', date: 'Today' },
    { id: 2, merchant: 'Dr. Miller (Dental)', amount: '$340.00', status: 'Needs Receipt', type: 'FSA', date: 'Yesterday', alert: true },
    { id: 3, merchant: 'Vanguard Invest', amount: '$500.00', status: 'Completed', type: 'HSA', date: 'Dec 14' },
  ];

  const getContainerStyles = () => {
    switch (mood) {
      case 'concierge': 
        return "text-center items-center max-w-2xl mx-auto";
      case 'modernist': 
        return "text-left max-w-5xl mx-auto bg-white/40 backdrop-blur-xl rounded-[40px] p-8 md:p-14 border border-white/60 shadow-2xl shadow-[#172DA1]/10";
      default: 
        return "text-left max-w-5xl mx-auto";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFDFF] to-[#F0F4FF] text-[#172DA1] font-sans p-4 md:p-8 selection:bg-[#EDF1FF] overflow-x-hidden">
      
      {/* --- DEV MOOD SELECTOR --- */}
      <div className="fixed top-6 right-6 z-50 flex items-center bg-white/80 backdrop-blur-md shadow-lg border border-[#E1E8FF] rounded-full p-1 gap-1">
        {moods.map((m) => (
          <button
            key={m.id}
            onClick={() => setMood(m.id)}
            className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 ${
              mood === m.id 
                ? 'bg-[#172DA1] text-white shadow-md' 
                : 'text-[#7A87B2] hover:bg-[#EDF1FF]'
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* --- NAV BAR --- */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div className="flex items-center gap-3">
          <img 
            src={wexLogoRed}
            alt="WEX Logo"
            className="h-8"
          />
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#7A87B2] uppercase leading-none mb-1">Benefits</p>
            <p className="text-sm font-bold text-[#172DA1] tracking-tight">{userName}'s Hub</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-8 text-[#7A87B2]">
          <span className="hidden lg:block text-[11px] font-bold tracking-widest uppercase">{date}</span>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#172DA1] transition-all">
              <Bell size={18} />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#172DA1] transition-all">
              <Search size={18} />
            </button>
            <div className="h-8 w-[1px] bg-[#E1E8FF] mx-2" />
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-[#172DA1]">{userName} Jenkins</p>
                <p className="text-[9px] text-[#7A87B2] font-medium">Standard Plan</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#EDF1FF] to-white border-2 border-white shadow-sm flex items-center justify-center">
                <User size={18} className="text-[#7A87B2]" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className={`transition-all duration-700 ease-in-out ${getContainerStyles()}`}>
        
        {/* --- 1. THE CONVERSATIONAL AI HERO --- */}
        <section className="mb-14">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <motion.h2 
              className={`text-[#172DA1] tracking-tight leading-[1.1] ${
                mood === 'concierge' ? 'text-4xl font-light' : 'text-4xl md:text-5xl font-semibold'
              }`}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Good afternoon, {userName}.
            </motion.h2>

            {/* AI Badge - V5.2 Style */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#EDF1FF] to-white border border-[#E1E8FF] text-[#172DA1] text-[10px] font-bold tracking-widest uppercase shadow-sm"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <Sparkles size={12} className="text-[#1C6EFF]" fill="currentColor" />
              Intelligent Assistant
            </motion.div>
          </div>

          <motion.div 
            className="space-y-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            {/* Suggested Action - Enhanced with V5.2 visual ideas */}
            <AIGlowBorder
              borderRadius="1.5rem"
              duration={4000}
              containerClassName="w-full"
              glowIntensity="subtle"
              showBehindGlow={false}
            >
              <div className="bg-white rounded-[22px] p-6 md:p-8 relative overflow-hidden group">
                {/* Subtle decorative background gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#EDF1FF]/50 to-transparent rounded-bl-[100px] pointer-events-none opacity-50" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    {/* Icon Box */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1C6EFF] to-[#172DA1] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1C6EFF]/20 group-hover:scale-105 transition-transform duration-500">
                      <Zap size={22} className="text-white" fill="currentColor" />
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1C6EFF]">Proactive Insight</span>
                        <span className="w-1 h-1 bg-[#E1E8FF] rounded-full" />
                        <span className="text-[10px] font-medium text-[#7A87B2]">Health FSA</span>
                      </div>
                      <p className="text-lg md:text-xl text-[#5D688C] leading-relaxed">
                        I've analyzed your recent transactions. You have a <span className="text-[#172DA1] font-bold underline decoration-wex-blue-accent/30 underline-offset-4">$340.00</span> charge from <span className="text-[#172DA1] font-medium">Dental Excellence</span>. 
                        Would you like me to file this claim now?
                      </p>
                    </div>
                  </div>
                  
                  {!filed ? (
                    <div className={`flex flex-wrap gap-3 pl-0 md:pl-[68px] ${mood === 'concierge' ? 'justify-center' : 'justify-start'}`}>
                      <button 
                        onClick={() => setFiled(true)}
                        className="group relative overflow-hidden bg-[#172DA1] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#172DA1]/20 flex items-center gap-2"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        Yes, File Claim
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#5D688C] hover:bg-[#F5F7FF] transition-colors border border-[#E1E8FF] hover:border-[#172DA1]/20">
                        View Details
                      </button>
                      <button className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#7A87B2] hover:text-[#5D688C] transition-colors">
                        Maybe later
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4 text-wex-success bg-[#ECFDF5] p-5 rounded-xl border border-[#D1FAE5] animate-in zoom-in-95 duration-500 ml-0 md:ml-[68px]">
                      <div className="w-8 h-8 bg-wex-success rounded-full flex items-center justify-center text-white shadow-lg shadow-wex-success/20">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-sm uppercase tracking-wider">Success</p>
                        <p className="text-[#5D688C] text-sm">Claim #9482 filed. We'll notify you once it's processed.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AIGlowBorder>

            {/* --- AI COMPOSER (ChatGPT-style open input) --- */}
            {/* Integrated directly below the suggestion to feel like one unit */}
            <div className="relative">
              <div className="absolute left-8 top-[-24px] w-0.5 h-6 bg-gradient-to-b from-[#E1E8FF] to-transparent" />
              <WexAIComposer mood={mood} /> {/* Removed hideChips to show suggestions inside */}
            </div>
          </motion.div>
        </section>

        {/* --- 2. THE ACCOUNT PULSE (Balances) --- */}
        <motion.section 
          className="mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <motion.div variants={staggerItem} className="flex items-center justify-between mb-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#7A87B2]">Your Accounts</h3>
            <button className="text-[10px] font-bold text-wex-blue-accent uppercase tracking-widest hover:underline underline-offset-4">View All Plans</button>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accounts.map((acc, i) => (
              <motion.div 
                key={i} 
                variants={staggerItem}
                className="bg-white p-6 rounded-[28px] border border-[#E1E8FF] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black text-[#7A87B2] uppercase tracking-widest">{acc.name}</span>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md bg-[#F5F7FF] ${acc.trend.startsWith('+') ? 'text-wex-success' : 'text-[#5D688C]'}`}>
                    {acc.trend}
                  </span>
                </div>
                <p className="text-2xl font-medium tracking-tight text-[#172DA1] mb-1">{acc.balance}</p>
                <p className="text-[11px] text-[#7A87B2] font-medium">{acc.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- 3. ACTIVITY & STATUS --- */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
        >
          <motion.div variants={staggerItem} className="flex items-center justify-between mb-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#7A87B2]">Recent Activity</h3>
            <div className="flex items-center gap-1 text-[10px] font-bold text-[#7A87B2] uppercase tracking-widest">
              <Activity size={12} /> Live Updates
            </div>
          </motion.div>
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <motion.div 
                key={item.id} 
                variants={staggerItem}
                className="group flex items-center justify-between p-4 bg-white/40 hover:bg-white rounded-2xl border border-transparent hover:border-[#E1E8FF] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.alert ? 'bg-[#FFF0F2] text-wex-red' : 'bg-[#EDF1FF] text-[#5D688C]'}`}>
                    {item.alert ? <AlertCircle size={18} /> : <History size={18} />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#172DA1]">{item.merchant}</p>
                    <p className="text-[11px] text-[#7A87B2] font-medium">{item.date} • {item.type} Account</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-6">
                  <div className="hidden sm:block">
                    <p className="text-sm font-bold text-[#172DA1]">{item.amount}</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${item.alert ? 'text-wex-red' : 'text-wex-success'}`}>
                      {item.status}
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-[#B1C0EE] group-hover:text-[#172DA1] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>

      {/* --- FOOTER / COMMAND BAR --- */}
      <motion.div 
        className="max-w-5xl mx-auto mt-12 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 text-[11px] font-medium text-[#7A87B2] bg-white px-4 py-2 rounded-full border border-[#E1E8FF] shadow-sm">
          <Command size={14} /> K to search anything
        </div>
        <div className="flex items-center gap-8">
          <button className="text-[11px] font-bold text-[#7A87B2] hover:text-[#172DA1] uppercase tracking-widest">Support</button>
          <button className="text-[11px] font-bold text-[#7A87B2] hover:text-[#172DA1] uppercase tracking-widest">Privacy</button>
          <button className="text-[11px] font-bold text-[#7A87B2] hover:text-[#172DA1] uppercase tracking-widest underline decoration-2 underline-offset-8 decoration-wex-blue-accent">Security</button>
        </div>
      </motion.div>

      {/* --- BACKGROUND GRADIENT BLOBS --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1C6EFF]/10 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#172DA1]/10 blur-[150px] rounded-full pointer-events-none z-[-1]" />
    </div>
  );
};

export default BenefitsDashboardV5_1;
