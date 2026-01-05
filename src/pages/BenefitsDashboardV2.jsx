import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import WexDashboardShellV2 from '../components/layouts/WexDashboardShellV2';
import { 
  ArrowUp, ChevronRight, Search, Bell,
  Camera, CreditCard, Pill, Stethoscope, FileText, 
  Upload, Lock, Apple, Check, X, AlertCircle, Wallet,
  Calendar, Clock, Users
} from 'lucide-react';
import heroBackground from '../assets/backgrounds/light-background.png';
import cardBackground from '../assets/backgrounds/card bg.jpg';

// #region agent log
fetch('http://127.0.0.1:7242/ingest/0c1ff324-502a-4b7b-a07a-810bbf9dfca8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'BenefitsDashboardV2.jsx:TOP',message:'Module loaded - checking imports',data:{hasUsers: typeof Users !== 'undefined', hasWexDashboardShellV2: typeof WexDashboardShellV2 !== 'undefined', hasHeroBackground: !!heroBackground, hasCardBackground: !!cardBackground},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B,C'})}).catch(()=>{});
// #endregion

// Animation Variants - Subtle, refined
const fadeInUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -6 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const AccountMiniCard = ({ name, balance, unusedYear, unusedAmount, deadline, daysRemaining, isPrimary = false }) => {
  const hasDeadline = deadline && daysRemaining;
  
  return (
    <div className={`group rounded-2xl p-5 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[120px] flex flex-col justify-center ${
      isPrimary 
        ? 'bg-gradient-to-br from-white to-[#F5F8FF] border-2 border-[#C8DCFF] shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/15' 
        : 'bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white hover:shadow-lg hover:border-[#E1E8FF]'
    }`}>
      {/* Default Content */}
      <div className="relative z-10">
        <p className="text-sm font-medium text-[#5D688C] mb-2">
          {name}
        </p>
        <p className="text-2xl font-bold text-[#172DA1] group-hover:opacity-0 transition-opacity duration-200">
          {balance}
        </p>
        {unusedAmount && (
          <p className="text-xs text-[#5D688C] mt-1 group-hover:opacity-0 transition-opacity duration-200">
            Includes {unusedAmount} from {unusedYear}
          </p>
        )}
      </div>

      {/* Hover Detail - Deadline info stacked */}
      {hasDeadline && (
        <div className="absolute top-14 left-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-sm text-[#5D688C]">
            <Calendar className="w-4 h-4 text-[#7A87B2]" />
            <span>{deadline}</span>
          </div>
          <span className="bg-[#FFF9E6] text-[#B8860B] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-[#EED98B] w-fit">
            <Clock className="w-3.5 h-3.5" /> {daysRemaining}
          </span>
        </div>
      )}
    </div>
  );
};

const BenefitsDashboardV2 = () => {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/0c1ff324-502a-4b7b-a07a-810bbf9dfca8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'BenefitsDashboardV2.jsx:COMPONENT_START',message:'Component function entered',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  const [activeSidebarItem, setActiveSidebarItem] = useState('overview');

  // Mock Data for Zone A
  const benefitAccounts = [
    { id: 1, name: 'HSA Invest', balance: 130000, meta: '+6% YTD', metaType: 'trend-up', type: 'invest' },
    { id: 2, name: 'Health FSA', balance: 1240, meta: 'Exp 12/31', metaType: 'alert', type: 'fsa' },
    { id: 3, name: 'HRA Employer', balance: 2400, meta: 'Available', metaType: 'neutral', type: 'hra' },
    { id: 4, name: 'Dental Plan', balance: 'Active', meta: 'Family', metaType: 'info', type: 'dental' },
  ];

  // Mock Data for Zone E
  const transactions = [
    { id: 1, date: 'Oct 24', merchant: 'CVS Pharmacy', source: 'Health FSA • Auto-Verified', amount: -24.50, status: 'success' },
    { id: 2, date: 'Oct 22', merchant: 'Northside Peds', source: 'HSA • Action Required', amount: -150.00, status: 'blocked' },
    { id: 3, date: 'Oct 15', merchant: 'Vanguard 500 Fund', source: 'Investment Buy', amount: 200.00, status: 'success' },
  ];

  // Mock Data for To-dos
  const todos = [
    { id: 1, title: 'Activate Debit Card', description: 'Your new benefits card has arrived.', action: 'Activate', type: 'card', icon: CreditCard },
    { id: 2, title: 'Add Receipt for Denied Claim', description: 'Dr. Smith - $150.00 (Missing EOB)', action: 'Upload', type: 'claim', icon: Upload },
    { id: 3, title: 'Complete Dependent Verification', description: 'Verify eligibility for Michael Davis.', action: 'Verify', type: 'profile', icon: Check },
    { id: 4, title: 'Open Enrollment', description: 'Enroll in 2026 benefits by Nov 15.', action: 'Enroll', type: 'enrollment', icon: FileText }
  ];

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/0c1ff324-502a-4b7b-a07a-810bbf9dfca8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'BenefitsDashboardV2.jsx:BEFORE_RETURN',message:'About to render JSX',data:{activeSidebarItem},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  return (
    <WexDashboardShellV2
      title=""
      activeSidebarItem={activeSidebarItem}
      onSidebarItemClick={setActiveSidebarItem}
      userName="Elizabeth Davis"
      userEmail="elizabeth@wexinc.com"
    >

      {/* HERO SECTION - Inspired by iridescent glassmorphism design */}
      <section className="relative overflow-hidden">
        {/* Background Image with gradient overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
        
        {/* Content Layer */}
        <div className="relative z-10 px-8 pt-6 pb-24">
          {/* Top Bar - Command Island */}
          <motion.div 
            className="flex items-center justify-between mb-10"
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-lg font-medium text-[#5D688C]/80 tracking-tight">Overview</h1>
            
            {/* The Command Bar */}
            <div className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur-xl p-1.5 rounded-full border border-white/50 shadow-lg shadow-black/5">
              <div className="relative group/search w-64">
                <Search className="w-4 h-4 text-[#7A87B2] absolute left-3 top-2.5 group-focus-within/search:text-[#1C6EFF] transition-colors" />
                <input 
                  className="pl-9 pr-4 py-2 bg-transparent text-sm text-[#172DA1] placeholder-[#7A87B2] focus:outline-none w-full" 
                  placeholder="Search transactions, claims..." 
                />
              </div>
              <div className="w-px h-6 bg-[#172DA1]/10"></div>
              <button className="p-2 rounded-full hover:bg-white/50 text-[#7A87B2] hover:text-[#172DA1] transition-colors" title="Notifications">
                <Bell className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-white/50 text-[#7A87B2] hover:text-[#172DA1] transition-colors" title="Settings">
                <AlertCircle className="w-4 h-4" />
              </button>
              <div className="pl-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#172DA1] to-[#1C6EFF] flex items-center justify-center text-white font-bold text-xs shadow-md cursor-pointer">
                  ED
                </div>
              </div>
            </div>
          </motion.div>

          {/* MAIN BALANCE - Prominent, directly on background */}
          <motion.div 
            className="mb-8"
            variants={fadeInScale}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <p className="text-sm font-medium text-[#5D688C] mb-2">Account Balance</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#172DA1] tracking-tight">
              $120,544<span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#172DA1]/60">.00</span>
            </h2>
          </motion.div>

          {/* ACCOUNT CARDS - Horizontal glassmorphic strip */}
          <motion.div 
            className="flex flex-wrap lg:flex-nowrap gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {/* Health FSA Card */}
            <motion.div 
              variants={staggerItem}
              className="flex-1 min-w-[180px] bg-white/70 backdrop-blur-xl rounded-2xl px-5 py-4 border border-white/60 shadow-lg shadow-black/5 hover:bg-white hover:shadow-xl hover:border-[#C8102E]/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C8102E] to-[#C8102E]/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="flex items-center justify-between">
              <div>
                  <p className="text-xs font-medium text-[#5D688C] mb-1 group-hover:text-[#172DA1] transition-colors">Health FSA</p>
                  <p className="text-2xl font-black text-[#172DA1] tracking-tight">$1,750<span className="text-base font-semibold text-[#172DA1]/50">.00</span></p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs font-bold text-[#C8102E] bg-[#C8102E]/10 px-2.5 py-1 rounded-full">Exp 12/31</span>
                  <span className="text-[10px] font-semibold text-[#7A87B2] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 translate-y-1 group-hover:translate-y-0">
                    View details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
                </div>
            </motion.div>

            {/* HSA Card */}
            <motion.div 
              variants={staggerItem}
              className="flex-1 min-w-[180px] bg-white/70 backdrop-blur-xl rounded-2xl px-5 py-4 border border-white/60 shadow-lg shadow-black/5 hover:bg-white hover:shadow-xl hover:border-[#00C48C]/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00C48C] to-[#00C48C]/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-[#5D688C] mb-1 group-hover:text-[#172DA1] transition-colors">HSA Invest</p>
                  <p className="text-2xl font-black text-[#172DA1] tracking-tight">$3,250<span className="text-base font-semibold text-[#172DA1]/50">.00</span></p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs font-bold text-[#00C48C] bg-[#00C48C]/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <ArrowUp className="w-3 h-3" />+6%
                  </span>
                  <span className="text-[10px] font-semibold text-[#7A87B2] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 translate-y-1 group-hover:translate-y-0">
                    View details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Lifestyle Card */}
            <motion.div 
              variants={staggerItem}
              className="flex-1 min-w-[180px] bg-white/70 backdrop-blur-xl rounded-2xl px-5 py-4 border border-white/60 shadow-lg shadow-black/5 hover:bg-white hover:shadow-xl hover:border-[#7A87B2]/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7A87B2] to-[#7A87B2]/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-[#5D688C] mb-1 group-hover:text-[#172DA1] transition-colors">Lifestyle</p>
                  <p className="text-2xl font-black text-[#172DA1] tracking-tight">$250<span className="text-base font-semibold text-[#172DA1]/50">.00</span></p>
                    </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs font-bold text-[#7A87B2] bg-[#7A87B2]/10 px-2.5 py-1 rounded-full">Rollover</span>
                  <span className="text-[10px] font-semibold text-[#7A87B2] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 translate-y-1 group-hover:translate-y-0">
                    View details <ChevronRight className="w-3 h-3" />
                  </span>
                  </div>
                  </div>
            </motion.div>

            {/* Dependent Care Card */}
            <motion.div 
              variants={staggerItem}
              className="flex-1 min-w-[180px] bg-white/70 backdrop-blur-xl rounded-2xl px-5 py-4 border border-white/60 shadow-lg shadow-black/5 hover:bg-white hover:shadow-xl hover:border-[#E5A800]/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E5A800] to-[#E5A800]/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-[#5D688C] mb-1 group-hover:text-[#172DA1] transition-colors">Dependent Care</p>
                  <p className="text-2xl font-black text-[#172DA1] tracking-tight">$440<span className="text-base font-semibold text-[#172DA1]/50">.00</span></p>
                    </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs font-bold text-[#E5A800] bg-[#E5A800]/10 px-2.5 py-1 rounded-full">3/31</span>
                  <span className="text-[10px] font-semibold text-[#7A87B2] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 translate-y-1 group-hover:translate-y-0">
                    View details <ChevronRight className="w-3 h-3" />
                  </span>
                    </div>
               </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* Main Content Area - Card that overlaps hero */}
      <motion.div 
        className="relative z-20 -mt-16 mx-4 md:mx-6 bg-white/90 backdrop-blur-xl rounded-t-[2rem] shadow-2xl shadow-[#172DA1]/10 border border-white/60 border-b-0"
        variants={fadeInScale}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="px-6 md:px-10 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN (Quick Actions + Digital Wallet) */}
        <div className="lg:col-span-4 space-y-8">
            {/* ZONE B: QUICK ACTIONS - Redesigned */}
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h3 variants={staggerItem} className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider mb-4 ml-1">Quick Actions</motion.h3>
              
              {/* Primary Action - Reimburse */}
              <motion.button variants={staggerItem} className="w-full mb-3 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#172DA1] to-[#1C6EFF] rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1C6EFF] to-[#172DA1] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-between p-5 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <Wallet className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-lg">Reimburse myself</p>
                      <p className="text-sm text-white/70">Submit expenses for reimbursement</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </motion.button>

              {/* Secondary Actions - Compact row */}
              <motion.div variants={staggerItem} className="grid grid-cols-3 gap-2">
                {[
                  { icon: CreditCard, label: 'Pay Provider', accent: '#C8102E' },
                  { icon: Pill, label: 'Pharmacy', accent: '#00C48C' },
                  { icon: Stethoscope, label: 'Find Care', accent: '#FFBC00' }
                ].map((action, idx) => (
                  <button 
                    key={idx} 
                    className="group bg-white hover:bg-[#F9FAFF] p-4 rounded-xl border border-[#E1E8FF] hover:border-[#C8DCFF] transition-all flex flex-col items-center gap-2.5 relative overflow-hidden"
                  >
                    {/* Colored top accent line */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: action.accent }}
                    />
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${action.accent}12` }}
                    >
                      <action.icon className="w-5 h-5" style={{ color: action.accent }} />
                    </div>
                    <span className="text-xs font-semibold text-[#5D688C] group-hover:text-[#172DA1] transition-colors text-center leading-tight">
                      {action.label}
                    </span>
                  </button>
                ))}
              </motion.div>
            </motion.section>

            {/* ZONE D: DIGITAL WALLET - Glassmorphic */}
            <motion.section
              variants={fadeInScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider mb-4 ml-1 pl-2 border-l-2 border-[#172DA1]/20">Digital Wallet</h3>
                <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[28px] border border-white/60 shadow-xl shadow-[#172DA1]/5 hover:shadow-2xl hover:shadow-[#172DA1]/10 transition-all duration-500 group/wallet">
                    {/* Card Visual */}
                    <div className="relative h-48 rounded-2xl shadow-2xl shadow-[#172DA1]/20 mb-6 overflow-hidden transform group-hover/wallet:scale-[1.02] transition-transform duration-500">
                        {/* Background Image Layer */}
                        <div 
                          className="absolute -inset-1 z-0"
                          style={{
                            backgroundImage: `url(${cardBackground})`,
                            backgroundSize: '110% 110%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        />
                        
                        {/* Content Layer */}
                        <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-8 bg-white/20 rounded-md backdrop-blur-md border border-white/30 shadow-inner"></div>
                                <span className="font-bold italic text-lg opacity-90">WEX</span>
                            </div>
                            <div>
                                <p className="text-sm opacity-80 font-medium mb-1">Health Savings Account</p>
                                <p className="text-xl font-mono tracking-widest text-shadow-sm">**** **** **** 4492</p>
                            </div>
                        </div>
                    </div>

                    {/* Wallet Actions */}
                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/50 hover:bg-white text-[#172DA1] font-bold text-sm transition-all border border-transparent hover:border-[#E1E8FF] hover:shadow-md hover:shadow-[#172DA1]/5 group">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:text-[#C8102E] transition-colors text-[#1C6EFF]">
                                    <Lock className="w-4 h-4" />
                                </div>
                                Lock Card
                            </div>
                            <ChevronRight className="w-4 h-4 text-[#B1C0EE] group-hover:text-[#172DA1] transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#000000] text-white font-bold text-sm hover:bg-[#333333] transition-all shadow-lg hover:shadow-xl hover:scale-[1.01]">
                             <div className="flex items-center gap-3 justify-center w-full">
                                <Apple className="w-4 h-4" fill="currentColor" />
                                <span className="mt-0.5">Add to Apple Pay</span>
                            </div>
                        </button>
                    </div>
                </div>
            </motion.section>
        </div>

        {/* RIGHT COLUMN (AI Engine + Activity Feed) */}
        <div className="lg:col-span-8 space-y-10">
            {/* ZONE C: TO-DOS - Floating Cards */}
            <motion.section 
              className="relative"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
                <motion.h3 variants={staggerItem} className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider mb-5 ml-1 pl-2 border-l-2 border-[#C8102E]">Priorities</motion.h3>
                
                <div className="space-y-3">
                    {todos.map((todo) => (
                        <motion.div 
                          key={todo.id} 
                          variants={staggerItem}
                          className="relative p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-[20px] border border-[#E1E8FF] shadow-sm hover:shadow-xl hover:shadow-[#172DA1]/5 hover:border-[#C8DCFF] transition-all duration-300 group cursor-pointer hover:-translate-y-0.5"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[#172DA1] font-bold border border-white/50 shadow-sm group-hover:scale-110 transition-transform duration-300 ${
                                  todo.type === 'card' ? 'bg-gradient-to-br from-[#F5F7FF] to-white text-[#172DA1]' : 
                                  todo.type === 'claim' ? 'bg-gradient-to-br from-[#FFF0F2] to-white text-[#C8102E]' :
                                  todo.type === 'profile' ? 'bg-gradient-to-br from-[#EDF1FF] to-white text-[#1C6EFF]' :
                                  'bg-gradient-to-br from-[#FFF9E6] to-white text-[#E5A800]'
                                }`}>
                                    <todo.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#172DA1] text-base group-hover:text-[#1C6EFF] transition-colors">{todo.title}</h4>
                                    <p className="text-xs text-[#5D688C] font-medium mt-1">
                                        {todo.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto pl-16 md:pl-0">
                                <button className="px-5 py-2.5 rounded-xl bg-[#172DA1] text-white text-xs font-bold hover:bg-[#1C6EFF] transition-all shadow-md shadow-[#172DA1]/20 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                                    {todo.action}
                                </button>
                                <ChevronRight className="w-5 h-5 text-[#B1C0EE] group-hover:text-[#172DA1] transition-transform group-hover:translate-x-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ZONE E: ACTIVITY FEED - Floating Cards */}
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div variants={staggerItem} className="flex items-center justify-between mb-5 ml-1 pl-2 border-l-2 border-[#1C6EFF]">
                    <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider">Recent Activity</h3>
                    <button className="text-xs font-bold text-[#1C6EFF] hover:text-[#172DA1] transition-colors bg-[#1C6EFF]/5 hover:bg-[#1C6EFF]/10 px-3 py-1 rounded-full">View Full History</button>
                </motion.div>

                <div className="space-y-3">
                    {transactions.map((tx) => (
                        <motion.div 
                          key={tx.id} 
                          variants={staggerItem}
                          className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-[20px] border border-[#E1E8FF] shadow-sm hover:shadow-xl hover:shadow-[#172DA1]/5 hover:border-[#C8DCFF] transition-all duration-300 group cursor-pointer hover:-translate-y-0.5"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E1E8FF] flex flex-col items-center justify-center text-[#172DA1] font-bold shadow-sm group-hover:border-[#1C6EFF]/30 transition-colors">
                                    <span className="text-[9px] uppercase text-[#7A87B2] font-bold tracking-wider">{tx.date.split(' ')[0]}</span>
                                    <span className="text-lg leading-none font-black">{tx.date.split(' ')[1]}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#172DA1] text-base group-hover:text-[#1C6EFF] transition-colors">{tx.merchant}</h4>
                                    <p className="text-xs text-[#5D688C] font-medium mt-1 flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-full ${tx.status === 'success' ? 'bg-[#00C48C]' : 'bg-[#C8102E]'}`}></span>
                                        {tx.source}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pl-16 md:pl-0">
                                {tx.status === 'success' && (
                                     <span className="hidden md:inline-block px-3 py-1 rounded-full bg-[#EDF1FF] text-[#1C6EFF] text-[10px] font-bold uppercase tracking-wide">Processed</span>
                                )}
                                 {tx.status === 'blocked' && (
                                     <span className="hidden md:inline-block px-3 py-1 rounded-full bg-[#FFF0F2] text-[#C8102E] text-[10px] font-bold uppercase tracking-wide">Action Req</span>
                                )}
                                
                                <span className={`font-black font-mono text-lg text-right ${tx.amount > 0 ? 'text-[#00C48C]' : 'text-[#172DA1]'} min-w-[80px]`}>
                                    {tx.amount > 0 ? '+' : ''}{Math.abs(tx.amount).toFixed(2)}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
      </div>
      </div>
      </motion.div>

    </WexDashboardShellV2>
  );
};

export default BenefitsDashboardV2;

