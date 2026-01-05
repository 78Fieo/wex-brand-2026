import React, { useState, useRef, useEffect } from 'react';
import WexDashboardShellV2 from '../components/layouts/WexDashboardShellV2';
import { 
  Search, Sparkles, ArrowRight, X,
  CreditCard, FileText, Stethoscope, AlertCircle,
  TrendingUp, Shield, Calendar, Clock, Upload, Check
} from 'lucide-react';

// Account Mini Card Component (reused from V2)
const AccountMiniCard = ({ name, balance, unusedYear, unusedAmount, deadline, daysRemaining }) => {
  const hasDeadline = deadline && daysRemaining;
  
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 p-5 hover:bg-white hover:shadow-lg hover:border-[#E1E8FF] transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[120px] flex flex-col justify-center">
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

const BenefitsDashboardV3 = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('overview');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  // Close search overlay on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsSearchFocused(false);
        setSearchQuery('');
        inputRef.current?.blur();
      }
    };
    
    // Keyboard shortcut to open search (Cmd+K or Ctrl+K)
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchFocused(true);
        inputRef.current?.focus();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // --- MOCK DATA ---
  
  // AI Suggestions (default dashboard)
  const suggestions = [
    { id: 1, title: 'Claim Denied', desc: 'Dr. Smith - $150.00 (Missing EOB)', type: 'alert', action: 'Fix This' },
    { id: 2, title: 'Low FSA Balance', desc: 'Spend $250 by Dec 31 or lose it', type: 'warning', action: 'Shop Store' },
    { id: 3, title: 'Card Ready', desc: 'Your new benefits card has arrived', type: 'info', action: 'Activate' },
  ];

  // Discovery Layer Categories (Spotify pattern)
  const searchCategories = [
    { 
      title: "Money Moves", 
      color: "bg-[#EDF1FF] text-[#172DA1]",
      hoverColor: "hover:border-[#1C6EFF]",
      icon: CreditCard,
      items: ["File a new claim", "Pay a provider", "Reimburse myself", "Update bank info"] 
    },
    { 
      title: "My Coverage", 
      color: "bg-[#F3E8FF] text-[#7C3AED]",
      hoverColor: "hover:border-[#7C3AED]",
      icon: Shield,
      items: ["What's covered?", "Deductible status", "View ID card", "Plan documents"] 
    },
    { 
      title: "Find Care", 
      color: "bg-[#ECFDF5] text-[#059669]",
      hoverColor: "hover:border-[#059669]",
      icon: Stethoscope,
      items: ["In-network doctors", "Urgent care near me", "Drug prices", "Telehealth"] 
    },
    { 
      title: "Spending Insights", 
      color: "bg-[#FFF7ED] text-[#EA580C]",
      hoverColor: "hover:border-[#EA580C]",
      icon: TrendingUp,
      items: ["Monthly spending", "Year-end projection", "Tax documents", "Investment growth"] 
    }
  ];

  // Account data
  const accounts = [
    { 
      name: 'FSA Total Available', 
      balance: '$1,750.00',
      unusedYear: '2025',
      unusedAmount: '$250.00',
      deadline: 'File by 3/31/2026',
      daysRemaining: '90 days'
    },
    { 
      name: 'Lifestyle FSA', 
      balance: '$250.00',
      unusedYear: '2025',
      unusedAmount: '$250.00',
      deadline: 'File by 3/31/2026',
      daysRemaining: '90 days'
    },
    { 
      name: 'Dependent Care FSA', 
      balance: '$440.00',
      unusedYear: '2025',
      unusedAmount: '$250.00',
      deadline: 'File by 3/31/2026',
      daysRemaining: '90 days'
    },
    { 
      name: 'Health Savings Account', 
      balance: '$3,250.00'
    },
  ];

  // Recent transactions
  const transactions = [
    { id: 1, date: 'Dec 8', merchant: 'CVS Pharmacy', source: 'Health FSA • Auto-Verified', amount: -24.50, status: 'success' },
    { id: 2, date: 'Dec 5', merchant: 'Northside Peds', source: 'HSA • Action Required', amount: -150.00, status: 'blocked' },
    { id: 3, date: 'Dec 1', merchant: 'Vanguard 500 Fund', source: 'Investment Buy', amount: 200.00, status: 'success' },
  ];

  // To-dos
  const todos = [
    { id: 1, title: 'Activate Debit Card', description: 'Your new benefits card has arrived.', action: 'Activate', type: 'card', icon: CreditCard },
    { id: 2, title: 'Add Receipt for Denied Claim', description: 'Dr. Smith - $150.00 (Missing EOB)', action: 'Upload', type: 'claim', icon: Upload },
    { id: 3, title: 'Complete Dependent Verification', description: 'Verify eligibility for Michael Davis.', action: 'Verify', type: 'profile', icon: Check },
  ];

  return (
    <WexDashboardShellV2
      activeSidebarItem={activeSidebarItem}
      onSidebarItemClick={setActiveSidebarItem}
      userName="Elizabeth Davis"
      userEmail="elizabeth@wexinc.com"
    >
      <div className="relative min-h-screen">
        
        {/* --- STICKY HEADER WITH AI SEARCH INPUT --- */}
        <div className={`sticky top-0 z-50 transition-all duration-500 ${
          isSearchFocused 
            ? 'bg-white/98 backdrop-blur-xl shadow-lg pt-8 pb-8' 
            : 'bg-gradient-to-b from-[#F5F7FF] to-transparent pt-8 pb-6'
        } px-8`}>
          <div className="max-w-3xl mx-auto relative">
            
            {/* The AI Search Input */}
            <div className="relative group">
              {/* Gradient border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#1C6EFF] via-[#7C3AED] to-[#C8102E] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500 ${
                isSearchFocused ? 'opacity-50' : ''
              }`}></div>
              
              <div className={`relative flex items-center bg-white rounded-2xl border transition-all duration-300 ${
                isSearchFocused 
                  ? 'border-[#1C6EFF]/40 shadow-2xl shadow-blue-500/10' 
                  : 'border-[#E1E8FF] shadow-lg shadow-blue-500/5 hover:border-[#1C6EFF]/30'
              }`}>
                {/* Icon */}
                <div className={`pl-5 pr-3 transition-all duration-300 ${
                  isSearchFocused ? 'text-[#1C6EFF]' : 'text-[#7A87B2]'
                }`}>
                  {isSearchFocused 
                    ? <Sparkles className="w-5 h-5 animate-pulse" /> 
                    : <Search className="w-5 h-5" />
                  }
                </div>
                
                {/* Input */}
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  className="w-full py-4 text-lg text-[#172DA1] placeholder-[#7A87B2] bg-transparent border-none focus:ring-0 focus:outline-none font-medium"
                  placeholder={isSearchFocused 
                    ? "Ask anything... (e.g., 'Why was my claim denied?')" 
                    : "Ask WEX Health AI..."
                  }
                />

                {/* Close Button (visible when focused) */}
                {isSearchFocused && (
                  <button 
                    onClick={() => {
                      setIsSearchFocused(false);
                      setSearchQuery('');
                      inputRef.current?.blur();
                    }}
                    className="p-3 mr-2 hover:bg-[#F5F7FF] text-[#7A87B2] hover:text-[#172DA1] rounded-xl transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}

                {/* Keyboard shortcut (visible when not focused) */}
                {!isSearchFocused && (
                  <div className="pr-5 flex items-center gap-2 text-xs font-semibold text-[#7A87B2]">
                    <span className="bg-[#F5F7FF] px-2.5 py-1.5 rounded-lg border border-[#E1E8FF]">⌘ K</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="px-8 pb-12 relative">
          
          {/* ========================================= */}
          {/* DISCOVERY LAYER - Appears on Search Focus */}
          {/* ========================================= */}
          <div className={`transition-all duration-500 ease-out absolute inset-x-8 top-0 z-40 ${
            isSearchFocused 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }`}>
            <div className="max-w-4xl mx-auto pt-2">
              <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider mb-6">
                Explore What You Can Do
              </h3>
              
              {/* Category Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchCategories.map((cat, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-6 rounded-2xl border border-[#E1E8FF] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group ${cat.hoverColor}`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`p-2.5 rounded-xl ${cat.color}`}>
                        <cat.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-[#172DA1] text-lg">{cat.title}</h4>
                    </div>
                    <div className="space-y-1">
                      {cat.items.map((item, i) => (
                        <button 
                          key={i} 
                          className="w-full flex items-center justify-between text-sm text-[#5D688C] hover:text-[#172DA1] hover:bg-[#F5F7FF] p-3 -mx-3 rounded-xl transition-all group/item"
                        >
                          <span className="font-medium">{item}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Popular Prompts */}
              <div className="mt-8">
                <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider mb-4">
                  Popular Questions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "What's my deductible?",
                    "How much is left in my FSA?",
                    "Why was my claim denied?",
                    "Find a dentist near me",
                    "What's eligible for HSA?"
                  ].map((q, i) => (
                    <button
                      key={i}
                      className="px-4 py-2.5 bg-white border border-[#E1E8FF] rounded-full text-sm font-medium text-[#5D688C] hover:text-[#172DA1] hover:border-[#1C6EFF] hover:bg-[#F5F7FF] transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* DEFAULT DASHBOARD - Fades when search active */}
          {/* ========================================= */}
          <div className={`transition-all duration-500 ${
            isSearchFocused 
              ? 'opacity-0 scale-[0.98] blur-sm pointer-events-none' 
              : 'opacity-100 scale-100 blur-0'
          }`}>
            
            {/* Hero Section with Balance */}
            <section className="relative rounded-3xl overflow-hidden mb-8 -mt-2">
              {/* Gradient Background */}
              <div 
                className="absolute inset-0 z-0"
                style={{
                  background: 'linear-gradient(135deg, #E8D5F0 0%, #D4DCF5 25%, #C5D4F5 50%, #DDE5F9 75%, #F0F4FC 100%)',
                }}
              />
              
              {/* Fluid shapes */}
              <div className="absolute inset-0 z-[1] overflow-hidden">
                <div 
                  className="absolute top-0 right-[10%] w-[400px] h-[300px] opacity-50"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(180, 140, 200, 0.5) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />
                <div 
                  className="absolute bottom-0 left-[20%] w-[300px] h-[200px] opacity-40"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(140, 180, 220, 0.5) 0%, transparent 70%)',
                    filter: 'blur(30px)',
                  }}
                />
              </div>
              
              {/* SVG Chevrons */}
              <svg 
                className="absolute inset-0 w-full h-full z-[2]" 
                viewBox="0 0 800 400" 
                preserveAspectRatio="xMidYMid slice"
                style={{ opacity: 0.3 }}
              >
                {[...Array(12)].map((_, i) => (
                  <path
                    key={i}
                    d={`M ${-100 + i * 70},400 L ${100 + i * 70},200 L ${-100 + i * 70},0`}
                    fill="none"
                    stroke="#A8B8D8"
                    strokeWidth="1"
                  />
                ))}
              </svg>
              
              {/* Content */}
              <div className="relative z-10 p-8 md:p-10">
                <div className="mb-8">
                  <p className="text-sm font-semibold text-[#5D688C] mb-2">Account Balance</p>
                  <h2 className="text-5xl md:text-6xl font-bold text-[#172DA1] tracking-tight">
                    $5,690<span className="text-3xl md:text-4xl text-[#7A87B2]">.00</span>
                  </h2>
                </div>

                {/* Account Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {accounts.map((account, idx) => (
                    <AccountMiniCard key={idx} {...account} />
                  ))}
                </div>
              </div>
            </section>

            {/* Two Column Layout - Suggested for You + Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* LEFT COLUMN - Suggested for You (combined suggestions + todos) */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#1C6EFF]" />
                  <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider">Suggested for You</h3>
                </div>
                
                <div className="bg-white rounded-2xl border border-[#E1E8FF] divide-y divide-gray-100">
                  {/* AI Suggestions */}
                  {suggestions.map(card => (
                    <div 
                      key={`suggestion-${card.id}`}
                      className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#F9FAFF] transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          card.type === 'alert' ? 'bg-[#FFF0F2] text-[#C8102E]' : 
                          card.type === 'warning' ? 'bg-[#FFF9E6] text-[#E5A800]' :
                          'bg-[#EDF1FF] text-[#1C6EFF]'
                        }`}>
                          {card.type === 'alert' ? <AlertCircle className="w-6 h-6" /> : 
                           card.type === 'warning' ? <Clock className="w-6 h-6" /> :
                           <Sparkles className="w-6 h-6" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#172DA1] group-hover:text-[#1C6EFF] transition-colors">{card.title}</h4>
                          <p className="text-xs text-[#5D688C] font-medium mt-1">{card.desc}</p>
                        </div>
                      </div>
                      <button className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                        card.type === 'alert' 
                          ? 'bg-[#C8102E] hover:bg-[#A00D24] text-white shadow-sm' 
                          : 'bg-[#1C6EFF] hover:bg-[#122385] text-white shadow-sm'
                      }`}>
                        {card.action}
                      </button>
                    </div>
                  ))}
                  
                  {/* To-dos merged in */}
                  {todos.map((todo) => (
                    <div key={`todo-${todo.id}`} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#F9FAFF] transition-colors group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shrink-0 border border-[#E1E8FF]/50 group-hover:border-[#1C6EFF]/30 transition-colors ${
                          todo.type === 'card' ? 'bg-[#F5F7FF] text-[#172DA1]' : 
                          todo.type === 'claim' ? 'bg-[#FFF0F2] text-[#C8102E]' :
                          'bg-[#EDF1FF] text-[#1C6EFF]'
                        }`}>
                          <todo.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#172DA1] group-hover:text-[#1C6EFF] transition-colors">{todo.title}</h4>
                          <p className="text-xs text-[#5D688C] font-medium mt-1">{todo.description}</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-[#1C6EFF] text-white text-xs font-bold hover:bg-[#122385] transition-colors shadow-sm whitespace-nowrap shrink-0">
                        {todo.action}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* RIGHT COLUMN - Recent Activity */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider">Recent Activity</h3>
                  <button className="text-xs font-bold text-[#1C6EFF] hover:underline">See All</button>
                </div>
                <div className="bg-white rounded-2xl border border-[#E1E8FF] divide-y divide-gray-100">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#F9FAFF] transition-colors group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#F5F7FF] flex flex-col items-center justify-center text-[#172DA1] font-bold border border-[#E1E8FF]/50 group-hover:border-[#1C6EFF]/30 transition-colors shrink-0">
                          <span className="text-[10px] uppercase text-[#7A87B2]">{tx.date.split(' ')[0]}</span>
                          <span className="text-lg leading-none">{tx.date.split(' ')[1]}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#172DA1] group-hover:text-[#1C6EFF] transition-colors">{tx.merchant}</h4>
                          <p className="text-xs text-[#5D688C] font-medium mt-1">{tx.source}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto pl-16 md:pl-0">
                        {tx.status === 'success' && (
                          <span className="px-3 py-1 rounded-full bg-[#EDF1FF] text-[#1C6EFF] text-xs font-bold">Success</span>
                        )}
                        {tx.status === 'blocked' && (
                          <span className="px-3 py-1 rounded-full bg-[#FFF0F2] text-[#C8102E] text-xs font-bold">Action Req.</span>
                        )}
                        <span className={`font-bold font-mono text-right ${tx.amount > 0 ? 'text-[#00C48C]' : 'text-[#172DA1]'} min-w-[80px]`}>
                          {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </WexDashboardShellV2>
  );
};

export default BenefitsDashboardV3;

