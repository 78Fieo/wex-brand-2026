import React, { useState } from 'react';
import WexDashboardShell from '../components/layouts/WexDashboardShell';
import { 
  ArrowUp, ArrowLeft, Plus, Search, ChevronRight, 
  Camera, CreditCard, Pill, Stethoscope, FileText, 
  Upload, Lock, Apple, Check, X, AlertCircle, Wallet
} from 'lucide-react';

const BenefitsDashboardDraft = () => {
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

  // Custom Header Content
  const CustomHeader = () => (
    <div className="flex items-center justify-between w-full">
      <button className="flex items-center text-[#5D688C] hover:text-[#172DA1] transition-colors font-medium text-sm">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all accounts
      </button>
      
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group/search">
          <Search className="w-4 h-4 text-[#B1C0EE] absolute left-4 top-3 group-focus-within/search:text-[#1C6EFF] transition-colors" />
          <input 
            className="w-full pl-11 pr-5 py-2.5 bg-[#F5F7FF] rounded-full text-sm border border-transparent focus:border-[#1C6EFF]/30 focus:bg-white focus:ring-2 focus:ring-[#1C6EFF]/20 transition-all shadow-sm placeholder-[#7A87B2]" 
            placeholder="Search transactions..." 
          />
        </div>
      </div>

      <button className="bg-gradient-to-r from-[#1C6EFF] to-[#172DA1] hover:from-[#172DA1] hover:to-[#122385] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all flex items-center gap-2">
        <Plus className="w-4 h-4" strokeWidth={3} />
        File Claim
      </button>
    </div>
  );

  return (
    <WexDashboardShell
      title="Health Benefits"
      activeSidebarItem={activeSidebarItem}
      onSidebarItemClick={setActiveSidebarItem}
    >
      {/* Custom Header Injection */}
      <div className="mb-8 -mt-4">
         <CustomHeader />
      </div>

      {/* ZONE A: THE WEALTH LEDGER */}
      <section className="mb-8 relative rounded-3xl overflow-hidden">
        {/* Abstract Chevron Background - CSS recreation of the lavender chevron pattern */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #C5D4F5 0%, #DDE5F9 30%, #E8EEF9 60%, #F0F4FC 100%)',
          }}
        />
        
        {/* SVG Chevron Lines - matches the attached image pattern */}
        <svg 
          className="absolute inset-0 w-full h-full z-[1]" 
          viewBox="0 0 800 400" 
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 1 }}
        >
          {/* Chevron lines pointing right, stacked from left to right */}
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M ${-100 + i * 70},400 L ${100 + i * 70},200 L ${-100 + i * 70},0`}
              fill="none"
              stroke="#A8B8D8"
              strokeWidth="1"
              opacity={0.6}
            />
          ))}
        </svg>
        
        <div className="relative z-10 p-8 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div>
              <p className="text-sm font-bold text-[#5D688C] uppercase tracking-wider mb-2">Total Benefits Value</p>
              <h2 className="text-5xl font-bold text-[#172DA1] tracking-tight drop-shadow-sm">
                $142,500<span className="text-3xl text-[#7A87B2]">.00</span>
              </h2>
            </div>
            <button className="px-5 py-2 bg-white border border-[#E1E8FF] text-[#172DA1] font-bold text-sm rounded-xl shadow-sm hover:bg-[#F5F7FF] transition-all">
              Visualize
            </button>
          </div>

          {/* Account Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefitAccounts.map((acc) => (
              <div key={acc.id} className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-white/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-xl ${
                    acc.type === 'invest' ? 'bg-[#1C6EFF]/10 text-[#1C6EFF]' : 
                    acc.type === 'fsa' ? 'bg-[#C8102E]/10 text-[#C8102E]' :
                    acc.type === 'dental' ? 'bg-[#00C48C]/10 text-[#00C48C]' :
                    'bg-[#FFBC00]/10 text-[#E5A800]'
                  }`}>
                    {acc.type === 'invest' ? <CreditCard className="w-5 h-5" /> :
                     acc.type === 'fsa' ? <Pill className="w-5 h-5" /> :
                     acc.type === 'dental' ? <Stethoscope className="w-5 h-5" /> :
                     <Wallet className="w-5 h-5" />}
                  </div>
                  <div className={`text-xs font-bold px-2 py-1 rounded-full ${
                    acc.metaType === 'trend-up' ? 'bg-green-50 text-green-700' :
                    acc.metaType === 'alert' ? 'bg-red-50 text-red-700' :
                    acc.metaType === 'info' ? 'bg-blue-50 text-blue-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                     {acc.metaType === 'trend-up' && <ArrowUp className="w-3 h-3 inline -mt-0.5 mr-0.5" />}
                     {acc.meta}
                  </div>
                </div>
                <p className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider mb-1">{acc.name}</p>
                <p className="text-xl font-bold text-[#172DA1]">
                  {typeof acc.balance === 'number' 
                    ? `$${acc.balance.toLocaleString()}` 
                    : acc.balance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  <button key={idx} className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/30 shadow-lg hover:shadow-xl hover:border-white/50 transition-all text-left group flex flex-col justify-between h-32 relative overflow-hidden">
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
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/30 shadow-lg">
                    {/* Card Visual */}
                    <div className="relative h-48 rounded-xl bg-gradient-to-br from-[#172DA1] via-[#1C6EFF] to-[#122385] p-6 text-white shadow-lg mb-6 overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8102E]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
                        
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-8 bg-white/20 rounded-md backdrop-blur-sm border border-white/30"></div>
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
            {/* ZONE C: AI ENGAGEMENT ENGINE */}
            <section className="relative">
                <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider mb-4 ml-1">The Engagement Engine</h3>
                
                {/* Stack Effect Bottom Layers */}
                <div className="absolute top-12 left-4 right-4 h-32 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-sm opacity-40 scale-95 translate-y-4 z-0"></div>
                <div className="absolute top-10 left-2 right-2 h-32 bg-white/15 backdrop-blur-lg rounded-3xl border border-white/25 shadow-sm opacity-70 scale-[0.98] translate-y-2 z-0"></div>

                {/* Main Active Card */}
                <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/30 shadow-xl relative z-10 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8102E] to-[#FF032B]"></div>
                    
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-2 text-[#C8102E] bg-[#C8102E]/5 px-3 py-1 rounded-full border border-[#C8102E]/10">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Action Required (1 of 3)</span>
                        </div>
                        <span className="text-xs font-medium text-[#7A87B2]">Today, 9:41 AM</span>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-4">
                         <h4 className="text-xl font-bold text-[#172DA1]">Claim Denied: Dr. Smith ($150.00)</h4>
                    </div>
                    <p className="text-[#5D688C] mb-8 text-lg">Your claim was denied due to a missing <span className="font-bold text-[#172DA1]">Explanation of Benefits (EOB)</span> document.</p>

                    <div className="flex flex-wrap gap-3">
                        <button className="flex-1 bg-[#172DA1] hover:bg-[#122385] text-white px-4 py-3 rounded-xl text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-lg">
                            <Upload className="w-4 h-4" /> Upload Receipt
                        </button>
                         <button className="flex-1 bg-white border border-[#E1E8FF] hover:bg-[#F5F7FF] text-[#172DA1] px-4 py-3 rounded-xl text-sm font-bold transition-all">
                            View Details
                        </button>
                    </div>

                    <button className="w-full mt-6 flex items-center justify-center text-xs font-bold text-[#7A87B2] hover:text-[#172DA1] transition-colors group">
                        2 more items waiting <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-y-0.5 transition-transform rotate-90" />
                    </button>
                </div>
            </section>

            {/* ZONE E: ACTIVITY FEED */}
            <section>
                <div className="flex items-center justify-between mb-4 ml-1">
                    <h3 className="text-xs font-bold text-[#7A87B2] uppercase tracking-wider">Recent Activity</h3>
                    <button className="text-xs font-bold text-[#1C6EFF] hover:underline">See All</button>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg divide-y divide-white/20">
                    {transactions.map((tx) => (
                        <div key={tx.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FDFDFF] transition-colors group cursor-pointer">
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

    </WexDashboardShell>
  );
};

export default BenefitsDashboardDraft;
