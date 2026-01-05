import React, { useState } from 'react';
import { AIGlowBorder } from '@/components/ui/moving-border';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Search, Bell, Command, ChevronRight, 
  CheckCircle2, CreditCard, TrendingUp, 
  Wallet, Zap, ArrowRight,
  Heart, Car, Briefcase, ArrowUpRight, Eye, EyeOff, Shield,
  Receipt, MessageCircle, Clock
} from 'lucide-react';
import wexLogoRed from '../assets/wex_logo_red.svg';

/**
 * BenefitsDashboardV5_2 - Premium AI-Forward Benefits Dashboard
 * Light Theme Edition - Elegant, airy, and sophisticated
 */
const BenefitsDashboardV5_2 = () => {
  const [filed, setFiled] = useState(false);
  const [showBalances, setShowBalances] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [inputFocused, setInputFocused] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const date = new Date().toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric'
  });
  const userName = "Sarah";
  
  const accounts = [
    { 
      name: 'HSA', 
      fullName: 'Health Savings',
      balance: '$4,847', 
      cents: '.12',
      trend: '+12%', 
      trendUp: true,
      icon: <Heart size={20} strokeWidth={2.5} />,
      gradient: 'from-emerald-500 to-teal-600',
      lightBg: 'from-emerald-50 to-teal-50',
      shadowColor: 'shadow-emerald-500/20',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      sub: '$2,100 invested',
      progress: 72,
      progressLabel: '72% of limit'
    },
    { 
      name: 'FSA', 
      fullName: 'Flexible Spending',
      balance: '$1,200', 
      cents: '.00',
      trend: '13 days', 
      trendUp: false,
      icon: <Briefcase size={20} strokeWidth={2.5} />,
      gradient: 'from-violet-500 to-purple-600',
      lightBg: 'from-violet-50 to-purple-50',
      shadowColor: 'shadow-violet-500/20',
      iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
      sub: '2 claims pending',
      progress: 45,
      progressLabel: 'Use by Dec 31'
    },
    { 
      name: 'Commuter', 
      fullName: 'Transit Benefits',
      balance: '$240', 
      cents: '.00',
      trend: 'Active', 
      trendUp: true,
      icon: <Car size={20} strokeWidth={2.5} />,
      gradient: 'from-amber-500 to-orange-500',
      lightBg: 'from-amber-50 to-orange-50',
      shadowColor: 'shadow-orange-500/20',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
      sub: 'Reloads Jan 1',
      progress: 60,
      progressLabel: '60% left'
    },
  ];

  const recentActivity = [
    { id: 1, merchant: 'Walgreens', amount: '$42.50', status: 'Approved', type: 'FSA', date: 'Today', icon: '💊' },
    { id: 2, merchant: 'Dental Excellence', amount: '$340.00', status: 'Action Needed', type: 'FSA', date: 'Yesterday', alert: true, icon: '🦷' },
    { id: 3, merchant: 'Vanguard', amount: '$500.00', status: 'Completed', type: 'HSA', date: 'Dec 14', icon: '📈' },
  ];

  const quickActions = [
    { id: 'file', label: 'File Claim', icon: <Receipt size={20} />, gradient: 'from-amber-500 to-orange-500', desc: 'Submit receipt' },
    { id: 'card', label: 'Card', icon: <CreditCard size={20} />, gradient: 'from-violet-500 to-purple-600', desc: 'Manage card' },
    { id: 'invest', label: 'Invest', icon: <TrendingUp size={20} />, gradient: 'from-emerald-500 to-teal-600', desc: 'HSA funds' },
    { id: 'add', label: 'Contribute', icon: <Wallet size={20} />, gradient: 'from-blue-500 to-indigo-600', desc: 'Add funds' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFBFF] via-white to-[#F8F9FF] text-slate-900 font-sans selection:bg-violet-200 overflow-x-hidden">
      
      {/* Elegant light background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 2, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-30%] left-[-20%] w-[70%] h-[70%] bg-gradient-to-br from-violet-200/40 via-purple-100/30 to-fuchsia-100/20 blur-[100px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, -2, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-[-30%] right-[-20%] w-[60%] h-[60%] bg-gradient-to-tl from-emerald-100/40 via-teal-100/30 to-cyan-100/20 blur-[80px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          className="absolute top-[20%] right-[5%] w-[40%] h-[40%] bg-gradient-to-bl from-amber-100/30 via-orange-100/20 to-rose-100/20 blur-[60px] rounded-full" 
        />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(148, 163, 184, 0.15) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-8 max-w-[1400px] mx-auto">
        
        {/* --- NAV BAR --- */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-16"
        >
          <div className="flex items-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="relative group cursor-pointer">
              <img src={wexLogoRed} alt="WEX" className="relative h-8" />
            </motion.div>
            <div className="hidden md:flex items-center gap-5">
              <div className="h-6 w-px bg-slate-200" />
              <div>
                <p className="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase">Benefits Hub</p>
                <p className="text-sm font-semibold text-slate-700">{userName}'s Dashboard</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden lg:block text-xs text-slate-400">{date}</span>
            <div className="flex items-center gap-2">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <Bell size={17} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <Search size={17} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
              </motion.button>
            </div>
            <div className="h-6 w-px bg-slate-200 mx-1" />
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{userName} Jenkins</p>
                <p className="text-[10px] text-slate-400">Premium</p>
              </div>
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <span className="text-sm font-bold text-white">SJ</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.nav>

        <main className="space-y-14">
          
          {/* --- HERO SECTION --- */}
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            
            {/* AI Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200 mb-8"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center"
              >
                <Sparkles size={10} className="text-white" />
              </motion.div>
              <span className="text-[11px] font-bold tracking-widest text-violet-600 uppercase">AI Assistant</span>
              <motion.span 
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
              />
            </motion.div>
            
            {/* Greeting */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1] mb-12"
            >
              <span className="text-slate-800">{getGreeting()},</span>
              <br />
              <span className="relative inline-block mt-1">
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">{userName}</span>
                <motion.svg 
                  viewBox="0 0 200 8" 
                  className="absolute -bottom-1 left-0 w-full h-2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <motion.path
                    d="M0 4 Q50 0, 100 4 T200 4"
                    fill="none"
                    stroke="url(#underlineGradLight)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                  <defs>
                    <linearGradient id="underlineGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#d946ef" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            {/* AI Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <AIGlowBorder
                borderRadius="1.75rem"
                duration={5000}
                containerClassName="mb-10"
                glowIntensity="subtle"
                showBehindGlow={true}
              >
                <div className="rounded-[26px] p-7 md:p-10 bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex gap-5 mb-8">
                    <motion.div 
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/25"
                    >
                      <Zap size={22} className="text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase mb-2">Proactive Insight</p>
                      <p className="text-xl md:text-2xl text-slate-700 leading-snug">
                        Found a{' '}
                        <span className="inline-flex items-center font-bold text-slate-900 px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200 rounded-xl">
                          $340
                        </span>{' '}
                        dental charge eligible for FSA reimbursement.
                      </p>
                    </div>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {!filed ? (
                      <motion.div 
                        key="buttons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-wrap gap-3 pl-0 md:pl-[68px]"
                      >
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFiled(true)}
                          className="group relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-violet-500/25"
                        >
                          <motion.span 
                            className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative z-10 flex items-center gap-2">
                            File Claim Now
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </span>
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-8 py-4 rounded-2xl font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-all border-2 border-slate-200 hover:border-slate-300"
                        >
                          View Details
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-5 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200 ml-0 md:ml-[68px]"
                      >
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                          className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25"
                        >
                          <CheckCircle2 size={28} className="text-white" />
                        </motion.div>
                        <div>
                          <p className="font-bold text-emerald-600 uppercase tracking-wider mb-0.5">Claim Filed!</p>
                          <p className="text-slate-500 text-sm">Claim #9482 submitted. You'll be notified when processed.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AIGlowBorder>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {quickActions.map((action, i) => (
                <motion.button
                  key={action.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden p-5 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all text-left"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-lg text-white`}>
                    {action.icon}
                  </div>
                  <p className="font-semibold text-slate-800 mb-0.5">{action.label}</p>
                  <p className="text-xs text-slate-400">{action.desc}</p>
                </motion.button>
              ))}
            </motion.div>

            {/* AI Input */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="relative"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-violet-200/50 via-purple-200/30 to-violet-200/50 blur-2xl rounded-full"
                animate={{ opacity: inputFocused ? 0.8 : 0.3 }}
              />
              <div className={`relative bg-white border rounded-2xl p-2 transition-all shadow-sm ${inputFocused ? 'border-violet-300 shadow-lg shadow-violet-500/10' : 'border-slate-200'}`}>
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200 flex items-center justify-center">
                    <MessageCircle size={18} className="text-violet-500" />
                  </div>
                  <input 
                    type="text"
                    placeholder="Ask about claims, balances, coverage..."
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    className="flex-1 bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-violet-500/20 flex items-center gap-2"
                  >
                    Ask <ArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* --- ACCOUNTS --- */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* Total Balance Summary */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.85 }}
              className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 border border-violet-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Total Balance</p>
                <p className="text-3xl sm:text-4xl font-bold text-slate-800">
                  {showBalances ? '$6,287' : '•••••'}
                  <span className="text-lg text-slate-400">{showBalances ? '.12' : ''}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200">
                  +$847 this month
                </span>
              </div>
            </motion.div>

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Your Accounts</h2>
              <div className="flex items-center gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowBalances(!showBalances)}
                  className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showBalances ? <Eye size={14} /> : <EyeOff size={14} />}
                  {showBalances ? 'Hide' : 'Show'}
                </motion.button>
                <button className="text-xs font-bold text-violet-600 hover:text-violet-700 transition-colors flex items-center gap-1">
                  View All <ChevronRight size={14} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {accounts.map((acc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ y: -6 }}
                  onHoverStart={() => setHoveredCard(i)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative"
                >
                  <motion.div 
                    className={`absolute -inset-2 bg-gradient-to-br ${acc.gradient} rounded-[1.75rem] blur-xl`}
                    animate={{ opacity: hoveredCard === i ? 0.15 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative bg-white p-6 rounded-[1.5rem] border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${acc.lightBg} opacity-60 blur-2xl`} />
                    
                    <div className="relative flex justify-between items-start mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl ${acc.iconBg} flex items-center justify-center shadow-lg ${acc.shadowColor} text-white`}>
                          {acc.icon}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{acc.name}</p>
                          <p className="text-[10px] text-slate-400">{acc.fullName}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-3 py-1.5 rounded-lg ${
                        acc.trendUp 
                          ? 'bg-emerald-100 text-emerald-600 border border-emerald-200' 
                          : 'bg-amber-100 text-amber-600 border border-amber-200'
                      }`}>
                        {acc.trend}
                      </span>
                    </div>
                    
                    <div className="relative mb-5">
                      <p className="text-4xl font-bold tracking-tight text-slate-800">
                        {showBalances ? acc.balance : '•••••'}
                        <span className="text-xl text-slate-300">{showBalances ? acc.cents : ''}</span>
                      </p>
                      <p className="text-xs text-slate-400 mt-1">{acc.sub}</p>
                    </div>
                    
                    <div className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] text-slate-400">{acc.progressLabel}</span>
                        <span className="text-[10px] text-slate-500 font-bold">{acc.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${acc.progress}%` }}
                          transition={{ duration: 1.2, delay: 1 + i * 0.15, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${acc.gradient} rounded-full`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* --- ACTIVITY --- */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Recent Activity</h2>
              <div className="flex items-center gap-2">
                <motion.span 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-emerald-500 rounded-full"
                />
                <span className="text-xs font-bold text-emerald-600">Live</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="group flex items-center justify-between p-5 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                      item.alert 
                        ? 'bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-300' 
                        : 'bg-slate-100'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 mb-0.5">{item.merchant}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock size={10} />
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-bold text-slate-800 mb-0.5">{item.amount}</p>
                      <p className={`text-[10px] font-bold uppercase tracking-wider ${
                        item.alert ? 'text-amber-600' : 'text-emerald-600'
                      }`}>
                        {item.status}
                      </p>
                    </div>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </main>

        {/* --- FOOTER --- */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16 pt-8 pb-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3 text-sm text-slate-400 bg-slate-100 px-5 py-3 rounded-xl border border-slate-200">
            <Command size={12} />
            <span>Press</span>
            <kbd className="px-2 py-0.5 bg-white rounded text-xs font-bold text-slate-500 border border-slate-200">K</kbd>
            <span>to search</span>
          </div>
          <div className="flex items-center gap-10">
            <button className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Support</button>
            <button className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Privacy</button>
            <button className="text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors flex items-center gap-1.5">
              <Shield size={12} />
              Security
            </button>
          </div>
        </motion.footer>

      </div>
    </div>
  );
};

export default BenefitsDashboardV5_2;
