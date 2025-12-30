import React, { useState } from 'react';
import { 
  ArrowUp, ChevronRight, Search, Bell,
  Camera, CreditCard, Pill, Stethoscope, FileText, 
  Upload, Lock, Apple, Check, X, AlertCircle, Wallet,
  Calendar, Clock, User as UserIcon, ChevronDown
} from 'lucide-react';
import { 
  MdHome, MdOutlineHome,
  MdAccountBalanceWallet, MdOutlineAccountBalanceWallet,
  MdReceiptLong, MdOutlineReceiptLong,
  MdDescription, MdOutlineDescription,
  MdAssessment, MdOutlineAssessment
} from 'react-icons/md';
import heroBackground from '../assets/backgrounds/light-background.png';
import cardBackground from '../assets/backgrounds/card bg.jpg';
import wexLogoWhite from '../assets/wex_logo_white.svg';
import wexLogoRed from '../assets/wex_logo_red.svg';

const AccountMiniCard = ({ name, balance, unusedYear, unusedAmount, deadline, daysRemaining }) => {
  const hasDeadline = deadline && daysRemaining;
  
  return (
    <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 p-5 shadow-wex-sm hover:shadow-wex-card-hover hover:bg-white hover:border-[#D1DCFF] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden min-h-[120px] flex flex-col justify-center">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#EDF1FF]/30 opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />
      
      {/* Highlight line at top */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      
      {/* Default Content */}
      <div className="relative z-10">
        <p className="text-sm font-medium text-[#5D688C] mb-2">
          {name}
        </p>
        <p className="text-2xl font-bold text-[#172DA1] group-hover:opacity-0 transition-opacity duration-200 drop-shadow-sm">
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
          <span className="bg-gradient-to-r from-[#FFF9E6] to-[#FFFBF0] text-[#B8860B] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-[#EED98B] w-fit shadow-wex-xs">
            <Clock className="w-3.5 h-3.5" /> {daysRemaining}
          </span>
        </div>
      )}
    </div>
  );
};

const BenefitsDashboardDraftV2_3 = () => {
  const [activeNavItem, setActiveNavItem] = useState('overview');
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', iconFilled: MdHome, iconOutline: MdOutlineHome },
    { id: 'accounts', label: 'Accounts', iconFilled: MdAccountBalanceWallet, iconOutline: MdOutlineAccountBalanceWallet },
    { id: 'transactions', label: 'Transactions', iconFilled: MdReceiptLong, iconOutline: MdOutlineReceiptLong },
    { id: 'claims', label: 'Claims', iconFilled: MdDescription, iconOutline: MdOutlineDescription },
    { id: 'reports', label: 'Reports', iconFilled: MdAssessment, iconOutline: MdOutlineAssessment }
  ];

  // Mock Data for To-dos
  const todos = [
    { id: 1, title: 'Activate Debit Card', description: 'Your new benefits card has arrived.', action: 'Activate', type: 'card', icon: CreditCard },
    { id: 2, title: 'Add Receipt for Denied Claim', description: 'Dr. Smith - $150.00 (Missing EOB)', action: 'Upload', type: 'claim', icon: Upload },
    { id: 3, title: 'Complete Dependent Verification', description: 'Verify eligibility for Michael Davis.', action: 'Verify', type: 'profile', icon: Check },
    { id: 4, title: 'Open Enrollment', description: 'Enroll in 2026 benefits by Nov 15.', action: 'Enroll', type: 'enrollment', icon: FileText }
  ];

  // Mock Data for Activity
  const transactions = [
    { id: 1, date: 'Oct 24', merchant: 'CVS Pharmacy', source: 'Health FSA • Auto-Verified', amount: -24.50, status: 'success' },
    { id: 2, date: 'Oct 22', merchant: 'Northside Peds', source: 'HSA • Action Required', amount: -150.00, status: 'blocked' },
    { id: 3, date: 'Oct 15', merchant: 'Vanguard 500 Fund', source: 'Investment Buy', amount: 200.00, status: 'success' },
    { id: 4, date: 'Oct 10', merchant: 'Walgreens', source: 'HSA • Auto-Verified', amount: -32.00, status: 'success' },
    { id: 5, date: 'Oct 5', merchant: 'LabCorp', source: 'Health FSA • Pending', amount: -85.00, status: 'success' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFDFF] to-[#F0F4FF]">
      {/* HERO SECTION - Contains Nav + Accounts + extends behind content */}
      <section className="relative">
        {/* Background Image - Extended to overlap with content below */}
        <div 
          className="absolute inset-0 z-0 h-[520px]"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Content Layer */}
        <div className="relative z-10">
          {/* NAVIGATION BAR - Inside Hero */}
          <header className="px-6 lg:px-8 py-4">
            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
              {/* Left: Logo + Nav */}
              <div className="flex items-center gap-8">
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <img 
                    src={wexLogoRed}
                    alt="WEX Logo"
                    className="h-7"
                  />
                </div>

                {/* Navigation Items */}
                <nav className="hidden md:flex items-center gap-1">
                  {navItems.map((item) => {
                    const isActive = activeNavItem === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveNavItem(item.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-white text-[#172DA1] shadow-wex-sm border border-[#E1E8FF]/80 relative'
                            : 'text-[#5D688C] hover:bg-white/20 hover:text-[#172DA1] hover:shadow-wex-xs'
                        }`}
                      >
                        {isActive && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white to-[#FAFBFF]" />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Right: Search + Profile */}
              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative group/search hidden lg:block">
                  <Search className="w-4 h-4 text-[#5D688C] absolute left-4 top-2.5 group-focus-within/search:text-[#172DA1] transition-colors" />
                  <input 
                    className="pl-11 pr-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-[#172DA1] border border-white/30 focus:border-white/50 focus:bg-white/30 focus:ring-2 focus:ring-white/20 w-56 transition-all placeholder-[#7A87B2]" 
                    placeholder="Search anything" 
                  />
                </div>

                {/* Notifications */}
                <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
                  <Bell className="w-5 h-5 text-[#5D688C] hover:text-[#172DA1] transition-colors" />
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#C8102E] rounded-full border-2 border-white/30"></span>
                </button>

                {/* User Profile */}
                <div className="relative">
                  <button 
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm p-[2px] border border-white/30">
                      <div className="w-full h-full rounded-full bg-white/90 overflow-hidden">
                        <UserIcon className="w-full h-full p-1.5 text-[#172DA1]" />
                      </div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[#5D688C] transition-transform hidden sm:block ${userMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {userMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-wex-xl border border-[#E1E8FF]/80 py-2 z-50 overflow-hidden">
                      {/* Top highlight */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                      
                      <div className="px-4 py-3 border-b border-[#E1E8FF]/60 bg-gradient-to-b from-[#FAFBFF] to-white">
                        <p className="text-sm font-semibold text-[#172DA1]">Elizabeth Davis</p>
                        <p className="text-xs text-[#7A87B2]">elizabeth@wexinc.com</p>
                      </div>
                      <a href="#" className="block px-4 py-2.5 text-sm text-[#5D688C] hover:bg-gradient-to-r hover:from-[#F5F7FF] hover:to-white hover:text-[#172DA1] transition-colors">Profile Settings</a>
                      <a href="#" className="block px-4 py-2.5 text-sm text-[#5D688C] hover:bg-gradient-to-r hover:from-[#F5F7FF] hover:to-white hover:text-[#172DA1] transition-colors">Account Preferences</a>
                      <div className="my-2 border-t border-[#E1E8FF]/60"></div>
                      <a href="#" className="block px-4 py-2.5 text-sm text-[#C8102E] hover:bg-gradient-to-r hover:from-[#FFF0F2] hover:to-white transition-colors">Sign Out</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* ACCOUNTS SECTION - In Hero */}
          <div className="px-6 lg:px-8 pt-5 pb-5">
            <div className="max-w-[1600px] mx-auto">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-[#172DA1]">Accounts</h2>
                <button className="text-sm font-medium text-[#5D688C] hover:text-[#172DA1] transition-colors flex items-center gap-1">
                  View all <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Account Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { 
                    name: 'FSA Total Available Balance', 
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
                    balance: '$3,250.00',
                  },
                ].map((account, idx) => (
                  <AccountMiniCard key={idx} {...account} />
                ))}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA - 3 Column Layout - Overlaps hero */}
          <div className="px-6 lg:px-8 pt-6 pb-10 -mt-6">
            <div className="max-w-[1600px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT COLUMN - To-dos (spans full height) */}
            <div className="lg:col-span-4">
              <section className="h-full">
                <div className="relative bg-white rounded-2xl border border-[#E1E8FF]/80 shadow-wex-card overflow-hidden h-full">
                  {/* Subtle top edge highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  
                  <div className="px-5 py-4 border-b border-[#E1E8FF]/60 flex items-center justify-between bg-gradient-to-b from-[#FAFBFF] to-white">
                    <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider">To-dos</h3>
                    <span className="text-xs font-bold text-[#172DA1] bg-gradient-to-b from-[#F5F7FF] to-[#EDF1FF] border border-[#E1E8FF] px-2.5 py-1 rounded-full shadow-wex-xs">
                      {todos.length}
                    </span>
                  </div>
                  <div className="divide-y divide-[#E1E8FF]/40">
                    {todos.map((todo) => (
                      <div key={todo.id} className="p-5 flex flex-col gap-4 hover:bg-gradient-to-r hover:from-[#F9FAFF] hover:to-white transition-all group cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold border shadow-wex-xs group-hover:shadow-wex-sm transition-all shrink-0 ${
                            todo.type === 'card' ? 'bg-gradient-to-br from-[#F5F7FF] to-[#E8EDFF] text-[#172DA1] border-[#D1DCFF]/50 group-hover:border-[#1C6EFF]/40' : 
                            todo.type === 'claim' ? 'bg-gradient-to-br from-[#FFF0F2] to-[#FFE4E8] text-[#C8102E] border-[#FFCCD3]/50 group-hover:border-[#C8102E]/30' :
                            todo.type === 'profile' ? 'bg-gradient-to-br from-[#EDF1FF] to-[#E1E8FF] text-[#1C6EFF] border-[#C7D3FF]/50 group-hover:border-[#1C6EFF]/40' :
                            'bg-gradient-to-br from-[#FFF9E6] to-[#FFF3CC] text-[#E5A800] border-[#EED98B]/50 group-hover:border-[#E5A800]/30'
                          }`}>
                            <todo.icon className="w-6 h-6 drop-shadow-sm" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[#172DA1] group-hover:text-[#1C6EFF] transition-colors">{todo.title}</h4>
                            <p className="text-xs text-[#5D688C] font-medium mt-1 truncate">
                              {todo.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button className="px-4 py-2 rounded-lg bg-gradient-to-b from-[#1C6EFF] to-[#1560E5] text-white text-xs font-bold hover:from-[#1560E5] hover:to-[#122385] active:shadow-wex-card-pressed transition-all shadow-wex-sm hover:shadow-wex-md whitespace-nowrap">
                            {todo.action}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* MIDDLE COLUMN - Quick Actions + Digital Wallet */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Actions */}
              <section>
                <div className="relative bg-white rounded-2xl border border-[#E1E8FF]/80 shadow-wex-card overflow-hidden">
                  {/* Subtle top edge highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  
                  <div className="px-5 py-4 border-b border-[#E1E8FF]/60 bg-gradient-to-b from-[#FAFBFF] to-white">
                    <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider">Quick actions</h3>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: Camera, label: 'Scan Receipt', color: '#1C6EFF' },
                        { icon: CreditCard, label: 'Pay Provider', color: '#C8102E' },
                        { icon: Pill, label: 'Pharmacy Tool', color: '#00C48C' },
                        { icon: Stethoscope, label: 'Find Care', color: '#FFBC00' }
                      ].map((action, idx) => (
                        <button key={idx} className="bg-white p-4 rounded-2xl border border-[#E1E8FF]/70 hover:border-[#C7D3FF] shadow-wex-xs hover:shadow-wex-sm hover:-translate-y-0.5 transition-all text-left group flex flex-col justify-between h-28 relative overflow-hidden">
                          {/* Multi-layer gradient for depth */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAFBFF] to-[#F5F8FF] opacity-70 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#EDF1FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          {/* Inner highlight */}
                          <div className="absolute top-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                          
                          <div className="p-2 rounded-xl w-fit relative z-10 shadow-wex-xs" style={{backgroundColor: `${action.color}12`, boxShadow: `0 2px 8px ${action.color}08`}}>
                            <action.icon className="w-5 h-5 drop-shadow-sm" style={{color: action.color}} />
                          </div>
                          <div className="flex items-center justify-between w-full relative z-10">
                            <span className="text-sm font-bold text-[#172DA1] leading-tight max-w-[70%]">{action.label}</span>
                            <ChevronRight className="w-4 h-4 text-[#B1C0EE] group-hover:text-[#1C6EFF] group-hover:translate-x-1 transition-all" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Digital Wallet */}
              <section>
                <div className="relative bg-white rounded-2xl border border-[#E1E8FF]/80 shadow-wex-card overflow-hidden">
                  {/* Subtle top edge highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent z-10" />
                  
                  <div className="px-5 py-4 border-b border-[#E1E8FF]/60 bg-gradient-to-b from-[#FAFBFF] to-white">
                    <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider">Digital wallet</h3>
                  </div>
                  <div className="p-6">
                  {/* Card Visual - Enhanced depth */}
                  <div className="relative h-44 rounded-xl mb-5 overflow-hidden group bg-[#1C6EFF] shadow-wex-lg hover:shadow-wex-xl transition-shadow duration-300">
                    {/* Background Image Layer */}
                    <div 
                      className="absolute inset-0 z-0"
                      style={{
                        backgroundImage: `url(${cardBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    
                    {/* Subtle inner shadow overlay for depth */}
                    <div className="absolute inset-0 z-[1] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-20px_40px_rgba(0,0,0,0.1)]" />
                    
                    {/* Content Layer */}
                    <div className="relative z-10 p-5 flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-7 bg-white/20 rounded-md backdrop-blur-sm border border-white/30 shadow-sm"></div>
                        <span className="font-bold italic text-base opacity-90 drop-shadow-sm">VISA</span>
                      </div>
                      <div>
                        <p className="text-xs opacity-80 font-medium mb-1 drop-shadow-sm">Health Savings Account</p>
                        <p className="text-lg font-mono tracking-widest drop-shadow-md">**** **** **** 4492</p>
                      </div>
                    </div>
                  </div>

                  {/* Wallet Actions */}
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-b from-[#F8F9FF] to-[#F0F3FF] hover:from-[#F0F3FF] hover:to-[#E8EDFF] text-[#172DA1] font-bold text-sm transition-all group border border-[#E1E8FF]/60 hover:border-[#D1DCFF] shadow-wex-xs hover:shadow-wex-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-wex-xs group-hover:shadow-wex-sm group-hover:text-[#C8102E] transition-all text-[#1C6EFF]">
                          <Lock className="w-4 h-4" />
                        </div>
                        Lock Card
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#B1C0EE] group-hover:text-[#172DA1] group-hover:translate-x-0.5 transition-all" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-b from-[#1a1a1a] to-[#000000] text-white font-bold text-sm hover:from-[#333333] hover:to-[#1a1a1a] active:from-[#000000] active:to-[#000000] transition-all shadow-wex-md hover:shadow-wex-lg">
                      <div className="flex items-center gap-3 justify-center w-full">
                        <Apple className="w-4 h-4 drop-shadow-sm" fill="currentColor" />
                        <span className="mt-0.5">Add to Apple Pay</span>
                      </div>
                    </button>
                  </div>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN - Activity (spans full height) */}
            <div className="lg:col-span-4">
              <section className="h-full">
                <div className="relative bg-white rounded-2xl border border-[#E1E8FF]/80 shadow-wex-card overflow-hidden h-full">
                  {/* Subtle top edge highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent z-10" />
                  
                  <div className="px-5 py-4 border-b border-[#E1E8FF]/60 flex items-center justify-between bg-gradient-to-b from-[#FAFBFF] to-white">
                    <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider">Activity</h3>
                    <button className="text-xs font-bold text-[#1C6EFF] hover:text-[#122385] transition-colors hover:underline">See All</button>
                  </div>

                  <div className="divide-y divide-[#E1E8FF]/40">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="p-4 flex items-center justify-between gap-3 hover:bg-gradient-to-r hover:from-[#F9FAFF] hover:to-white transition-all group cursor-pointer">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F8F9FF] to-[#EDF1FF] flex flex-col items-center justify-center text-[#172DA1] font-bold border border-[#E1E8FF]/60 shadow-wex-xs group-hover:shadow-wex-sm group-hover:border-[#D1DCFF] transition-all shrink-0">
                            <span className="text-[9px] uppercase text-[#7A87B2]">{tx.date.split(' ')[0]}</span>
                            <span className="text-sm leading-none">{tx.date.split(' ')[1]}</span>
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-sm text-[#172DA1] group-hover:text-[#1C6EFF] transition-colors truncate">{tx.merchant}</h4>
                            <p className="text-xs text-[#5D688C] font-medium truncate">
                              {tx.source}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span className={`font-bold font-mono text-sm ${tx.amount > 0 ? 'text-[#00C48C] drop-shadow-sm' : 'text-[#172DA1]'}`}>
                            {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                          </span>
                          {tx.status === 'success' && (
                            <span className="px-2 py-0.5 rounded-full bg-gradient-to-b from-[#EDF1FF] to-[#E1E8FF] text-[#1C6EFF] text-[10px] font-bold shadow-wex-xs border border-[#D1DCFF]/30">Success</span>
                          )}
                          {tx.status === 'blocked' && (
                            <span className="px-2 py-0.5 rounded-full bg-gradient-to-b from-[#FFF0F2] to-[#FFE4E8] text-[#C8102E] text-[10px] font-bold shadow-wex-xs border border-[#FFCCD3]/30">Action Req.</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsDashboardDraftV2_3;

