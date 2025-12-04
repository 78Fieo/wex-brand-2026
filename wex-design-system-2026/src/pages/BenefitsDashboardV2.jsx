import React, { useState } from 'react';
import WexDashboardShellV2 from '../components/layouts/WexDashboardShellV2';
import { 
  ArrowUp, ChevronRight, Search, Bell,
  Camera, CreditCard, Pill, Stethoscope, FileText, 
  Upload, Lock, Apple, Check, X, AlertCircle, Wallet,
  Calendar, Clock
} from 'lucide-react';

const AccountMiniCard = ({ name, balance, unusedYear, unusedAmount, deadline, daysRemaining }) => {
  const hasDeadline = deadline && daysRemaining;
  
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 p-5 hover:bg-white hover:shadow-lg hover:border-[#E1E8FF] transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[120px] flex flex-col justify-center">
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

  return (
    <WexDashboardShellV2
      title=""
      activeSidebarItem={activeSidebarItem}
      onSidebarItemClick={setActiveSidebarItem}
      userName="Elizabeth Davis"
      userEmail="elizabeth@wexinc.com"
    >

      {/* HERO SECTION - Full bleed to top and edges */}
      <section className="relative -mt-0 overflow-hidden">
        {/* Abstract Gradient Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #E8D5F0 0%, #D4DCF5 25%, #C5D4F5 50%, #DDE5F9 75%, #F0F4FC 100%)',
          }}
        />
        
        {/* Abstract fluid shapes overlay */}
        <div className="absolute inset-0 z-[1] overflow-hidden">
          {/* Main fluid blob - purple/pink */}
          <div 
            className="absolute top-0 right-[10%] w-[500px] h-[400px] opacity-60"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(180, 140, 200, 0.6) 0%, rgba(180, 140, 200, 0.3) 40%, transparent 70%)',
              transform: 'rotate(-15deg)',
              filter: 'blur(40px)',
            }}
          />
          {/* Secondary blob - blue/teal */}
          <div 
            className="absolute top-[20%] right-[5%] w-[300px] h-[350px] opacity-50"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(140, 180, 220, 0.5) 0%, rgba(140, 180, 220, 0.2) 50%, transparent 70%)',
              transform: 'rotate(25deg)',
              filter: 'blur(30px)',
            }}
          />
          {/* Accent blob - pink highlight */}
          <div 
            className="absolute top-[10%] right-[25%] w-[200px] h-[200px] opacity-40"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(220, 160, 200, 0.6) 0%, transparent 60%)',
              filter: 'blur(25px)',
            }}
          />
        </div>
        
        {/* SVG Chevron Lines */}
        <svg 
          className="absolute inset-0 w-full h-full z-[2]" 
          viewBox="0 0 800 400" 
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.4 }}
        >
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M ${-100 + i * 70},400 L ${100 + i * 70},200 L ${-100 + i * 70},0`}
              fill="none"
              stroke="#A8B8D8"
              strokeWidth="1"
              opacity={0.5}
            />
          ))}
        </svg>
        
        {/* Content Layer */}
        <div className="relative z-10 px-8 pt-6 pb-8">
          {/* Top Bar - Search, Actions */}
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-3xl font-bold text-black tracking-tight">Overview</h1>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative group/search">
                <Search className="w-4 h-4 text-[#7A87B2] absolute left-4 top-3 group-focus-within/search:text-[#1C6EFF] transition-colors" />
                <input 
                  className="pl-11 pr-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-sm border border-white/50 focus:border-[#1C6EFF]/30 focus:bg-white focus:ring-2 focus:ring-[#1C6EFF]/20 w-56 transition-all shadow-sm placeholder-[#7A87B2]" 
                  placeholder="Search anything..." 
                />
              </div>
              
              {/* Reimburse Myself Button */}
              <button className="bg-[#1C6EFF] hover:bg-[#172DA1] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all flex items-center gap-2">
                <i className="pi pi-wallet text-base"></i>
                Reimburse myself
              </button>
            </div>
          </div>

          {/* Account Balance */}
          <div className="mb-10">
            <p className="text-sm font-medium text-[#5D688C] mb-2">Account Balance</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#172DA1] tracking-tight">
              $120,544<span className="text-3xl md:text-4xl text-[#7A87B2]">.00</span>
            </h2>
          </div>

          {/* Account Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                name: 'FSA Total Available Balance', 
                balance: '$1,750.00',
                planYear: '2026',
                planAmount: '$1,500.00',
                unusedYear: '2025',
                unusedAmount: '$250.00',
                deadline: 'File by 3/31/2026',
                daysRemaining: '90 days'
              },
              { 
                name: 'Lifestyle FSA', 
                balance: '$250.00',
                planYear: '2026',
                planAmount: '$0.00',
                unusedYear: '2025',
                unusedAmount: '$250.00',
                deadline: 'File by 3/31/2026',
                daysRemaining: '90 days'
              },
              { 
                name: 'Dependent Care FSA', 
                balance: '$440.00',
                planYear: '2026',
                planAmount: '$190.00',
                unusedYear: '2025',
                unusedAmount: '$250.00',
                deadline: 'File by 3/31/2026',
                daysRemaining: '90 days'
              },
              { 
                name: 'Health Savings Account', 
                balance: '$3,250.00',
                planYear: '2026',
                planAmount: '$3,250.00'
                // HSA typically rolls over, so no unused/deadline logic by default here
              },
            ].map((account, idx) => (
              <AccountMiniCard key={idx} {...account} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="px-8 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN (Quick Actions + Digital Wallet) */}
        <div className="lg:col-span-4 space-y-8">
            {/* ZONE B: QUICK ACTIONS */}
            <section>
              <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider mb-4 ml-1">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Camera, label: 'Scan Receipt', color: '#1C6EFF' },
                  { icon: CreditCard, label: 'Pay Provider', color: '#C8102E' },
                  { icon: Pill, label: 'Pharmacy Tool', color: '#00C48C' },
                  { icon: Stethoscope, label: 'Find Care', color: '#FFBC00' }
                ].map((action, idx) => (
                  <button key={idx} className="bg-white p-4 rounded-2xl border border-[#E1E8FF] hover:border-[#1C6EFF] transition-all text-left group flex flex-col justify-between h-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FDFDFF] to-[#F5F8FF] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="p-2 rounded-xl w-fit relative z-10" style={{backgroundColor: `${action.color}15`}}>
                      <action.icon className="w-5 h-5" style={{color: action.color}} />
                    </div>
                    <div className="flex items-center justify-between w-full relative z-10">
                      <span className="text-sm font-bold text-[#172DA1] leading-tight max-w-[70%]">{action.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#B1C0EE] group-hover:text-[#1C6EFF] group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* ZONE D: DIGITAL WALLET */}
            <section>
                <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider mb-4 ml-1">Digital Wallet</h3>
                <div className="bg-white p-6 rounded-2xl border border-[#E1E8FF]">
                    {/* Card Visual */}
                    <div className="relative h-48 rounded-xl bg-gradient-to-br from-[#172DA1] via-[#1C6EFF] to-[#122385] p-6 text-white shadow-lg mb-6 overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8102E]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
                        
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-8 bg-white/20 rounded-md backdrop-blur-sm border border-white/30"></div>
                                <span className="font-bold italic text-lg opacity-90">VISA</span>
                            </div>
                            <div>
                                <p className="text-sm opacity-80 font-medium mb-1">Health Savings Account</p>
                                <p className="text-xl font-mono tracking-widest text-shadow-sm">**** **** **** 4492</p>
                            </div>
                        </div>
                    </div>

                    {/* Wallet Actions */}
                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-between p-3 rounded-xl bg-[#F5F7FF] hover:bg-[#EDF1FF] text-[#172DA1] font-bold text-sm transition-colors group border border-transparent hover:border-[#E1E8FF]">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:text-[#C8102E] transition-colors text-[#1C6EFF]">
                                    <Lock className="w-4 h-4" />
                                </div>
                                Lock Card
                            </div>
                            <ChevronRight className="w-4 h-4 text-[#B1C0EE] group-hover:text-[#172DA1]" />
                        </button>
                        <button className="w-full flex items-center justify-between p-3 rounded-xl bg-[#000000] text-white font-bold text-sm hover:bg-[#333333] transition-colors shadow-md">
                             <div className="flex items-center gap-3 justify-center w-full">
                                <Apple className="w-4 h-4" fill="currentColor" />
                                <span className="mt-0.5">Add to Apple Pay</span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </div>

        {/* RIGHT COLUMN (AI Engine + Activity Feed) */}
        <div className="lg:col-span-8 space-y-8">
            {/* ZONE C: TO-DOS */}
            <section className="relative">
                <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider mb-4 ml-1">To-dos</h3>
                
                <div className="bg-white rounded-2xl border border-[#E1E8FF] divide-y divide-gray-100">
                    {todos.map((todo) => (
                        <div key={todo.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#F9FAFF] transition-colors group cursor-pointer">
                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[#172DA1] font-bold border border-[#E1E8FF]/50 group-hover:border-[#1C6EFF]/30 transition-colors ${
                                  todo.type === 'card' ? 'bg-[#F5F7FF] text-[#172DA1]' : 
                                  todo.type === 'claim' ? 'bg-[#FFF0F2] text-[#C8102E]' :
                                  todo.type === 'profile' ? 'bg-[#EDF1FF] text-[#1C6EFF]' :
                                  'bg-[#FFF9E6] text-[#E5A800]'
                                }`}>
                                    <todo.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#172DA1] group-hover:text-[#1C6EFF] transition-colors">{todo.title}</h4>
                                    <p className="text-xs text-[#5D688C] font-medium mt-1">
                                        {todo.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto pl-16 md:pl-0">
                                <button className="px-4 py-2 rounded-lg bg-[#1C6EFF] text-white text-xs font-bold hover:bg-[#122385] transition-colors shadow-sm whitespace-nowrap">
                                    {todo.action}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ZONE E: ACTIVITY FEED */}
            <section>
                <div className="flex items-center justify-between mb-4 ml-1">
                    <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider">Recent Activity</h3>
                    <button className="text-xs font-bold text-[#1C6EFF] hover:underline">See All</button>
                </div>

                <div className="bg-white rounded-2xl border border-[#E1E8FF] divide-y divide-gray-100">
                    {transactions.map((tx) => (
                        <div key={tx.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#F9FAFF] transition-colors group cursor-pointer">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#F5F7FF] flex flex-col items-center justify-center text-[#172DA1] font-bold border border-[#E1E8FF]/50 group-hover:border-[#1C6EFF]/30 transition-colors">
                                    <span className="text-[10px] uppercase text-[#7A87B2]">{tx.date.split(' ')[0]}</span>
                                    <span className="text-lg leading-none">{tx.date.split(' ')[1]}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#172DA1] group-hover:text-[#1C6EFF] transition-colors">{tx.merchant}</h4>
                                    <p className="text-xs text-[#5D688C] font-medium mt-1 flex items-center gap-2">
                                        {tx.source}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto pl-16 md:pl-0">
                                {tx.status === 'success' && (
                                     <span className="px-3 py-1 rounded-full bg-[#EDF1FF] text-[#1C6EFF] text-xs font-bold">Success</span>
                                )}
                                 {tx.status === 'blocked' && (
                                     <span className="px-3 py-1 rounded-full bg-[#FFF0F2] text-[#C8102E] text-xs font-bold">Action Req.</span>
                                )}
                                 {tx.status === 'confirm' && (
                                     <button className="px-4 py-1.5 rounded-lg bg-[#1C6EFF] text-white text-xs font-bold hover:bg-[#122385] transition-colors shadow-sm">Confirm</button>
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

    </WexDashboardShellV2>
  );
};

export default BenefitsDashboardV2;

