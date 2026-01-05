import React, { useState } from 'react';
import WexDashboardShellV2 from '../components/layouts/WexDashboardShellV2';
import { AIGlowBorder } from '@/components/ui/moving-border';
import { 
  Search, Sparkles, TrendingUp, TrendingDown, MoreHorizontal,
  Heart, Smile, Pill, Eye, Plus, CreditCard, Filter, Check,
  Calendar, Baby, ArrowRight, Clock, AlertCircle, FileText, 
  CheckCircle2, Upload, DollarSign
} from 'lucide-react';

/**
 * BenefitsDashboardV4 - AI-Enhanced Benefits Dashboard
 * Refined bento grid layout with improved visual hierarchy
 */
const BenefitsDashboardV4 = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('overview');
  const [activeActivityView, setActiveActivityView] = useState('fsa'); // 'fsa' | 'claims' | 'hsa'

  // Current date
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  });

  // Mock data
  const kpiCards = [
    { 
      label: 'HSA Account', 
      value: 4847.12, 
      trend: 'up', 
      trendValue: 12, 
      subtext: '$2,100 invested',
      icon: Heart
    },
    { 
      label: 'FSA Account', 
      value: 1200.00, 
      trend: 'up', 
      trendValue: 0, 
      subtext: '2 claims pending',
      icon: CreditCard
    },
    { 
      label: 'Dependent Care Account', 
      value: 2400.00, 
      trend: 'up', 
      trendValue: 0, 
      subtext: 'Active through Dec 31',
      icon: Baby
    },
  ];

  // FSA Runway Data
  const fsaData = {
    total: 2850,
    remaining: 1200,
    spent: 1650,
    daysLeft: 13,
    deadline: 'Dec 31, 2025',
    projectedUnused: 340,
    eligibleUnclaimed: 340,
    monthlySpend: [
      { month: 'Jan', spent: 180 },
      { month: 'Feb', spent: 220 },
      { month: 'Mar', spent: 150 },
      { month: 'Apr', spent: 280 },
      { month: 'May', spent: 190 },
      { month: 'Jun', spent: 210 },
      { month: 'Jul', spent: 160 },
      { month: 'Aug', spent: 260 },
      { month: 'Sep', spent: 0 },
      { month: 'Oct', spent: 0 },
      { month: 'Nov', spent: 0 },
      { month: 'Dec', spent: 0 },
    ]
  };

  // Claims Pipeline Data
  const claimsData = {
    eligible: { count: 3, amount: 540 },
    needsReceipt: { count: 2, amount: 340 },
    submitted: { count: 1, amount: 125 },
    pending: { count: 2, amount: 465 },
    paid: { count: 8, amount: 1650 },
  };

  // HSA Investment Data
  const hsaData = {
    totalBalance: 4847.12,
    investedBalance: 2100,
    cashBalance: 2747.12,
    ytdReturn: 12.4,
    ytdGain: 231.84,
    performanceData: [
      { month: 'Jan', value: 1850 },
      { month: 'Feb', value: 1920 },
      { month: 'Mar', value: 1880 },
      { month: 'Apr', value: 1950 },
      { month: 'May', value: 2010 },
      { month: 'Jun', value: 1980 },
      { month: 'Jul', value: 2050 },
      { month: 'Aug', value: 2100 },
    ]
  };

  const spendingBreakdown = [
    { category: 'Healthcare', description: 'Regular payments to providers', amount: 9450, icon: Heart, color: '#C8102E' },
    { category: 'Dental', description: 'Orthodontics and cleanings', amount: 8600, icon: Smile, color: '#1C6EFF' },
    { category: 'Pharmacy', description: 'Prescriptions and OTC', amount: 3120, icon: Pill, color: '#00C48C' },
    { category: 'Vision', description: 'Glasses and contacts', amount: 980, icon: Eye, color: '#7C3AED' },
  ];

  const transactions = [
    { id: 1, name: 'John Doe', type: 'Healthcare', initial: 'J', date: 'March 15, 2024', amount: 1250, status: 'Paid' },
    { id: 2, name: 'Figma', type: 'Subscription', initial: 'F', date: 'November 22, 2023', amount: 3450, status: 'Pending' },
    { id: 3, name: 'Office Supplies', type: 'Operations', initial: 'O', date: 'January 5, 2025', amount: 2780, status: 'Denied' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-[#ECFDF5] text-[#059669]';
      case 'Pending': return 'bg-[#FFF9E6] text-[#B8860B]';
      case 'Denied': return 'bg-[#FFF0F2] text-[#C8102E]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  // Activity view tabs
  const activityViews = [
    { id: 'fsa', label: 'FSA Runway', icon: Calendar },
    { id: 'claims', label: 'Claims', icon: FileText },
    { id: 'hsa', label: 'HSA Investment', icon: TrendingUp },
  ];

  // HSA Performance chart calculations
  const hsaChartHeight = 80;
  const hsaChartWidth = 300;
  const hsaMaxValue = Math.max(...hsaData.performanceData.map(d => d.value));
  const hsaMinValue = Math.min(...hsaData.performanceData.map(d => d.value));
  const hsaPoints = hsaData.performanceData.map((d, i) => {
    const x = (i / (hsaData.performanceData.length - 1)) * hsaChartWidth;
    const y = hsaChartHeight - ((d.value - hsaMinValue) / (hsaMaxValue - hsaMinValue)) * hsaChartHeight;
    return { x, y, ...d };
  });
  const hsaLinePath = hsaPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const hsaAreaPath = `${hsaLinePath} L ${hsaPoints[hsaPoints.length - 1].x} ${hsaChartHeight} L ${hsaPoints[0].x} ${hsaChartHeight} Z`;

  return (
    <WexDashboardShellV2
      activeSidebarItem={activeSidebarItem}
      onSidebarItemClick={setActiveSidebarItem}
      userName="Sarah Johnson"
      userEmail="sarah@wexinc.com"
    >
      <div className="px-8 py-6">
        {/* Header with Date and Export */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#172DA1]">Overview</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-[#5D688C]">
              <Calendar className="w-4 h-4" />
              <span>{currentDate}</span>
            </div>
            <button className="flex items-center gap-2 bg-[#172DA1] hover:bg-[#122385] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
              <TrendingDown className="w-4 h-4" />
              Reimburse myself
            </button>
          </div>
        </div>

        {/* AI Assistant Card with Rotating Gradient Border */}
        <AIGlowBorder
          borderRadius="1rem"
          duration={3000}
          containerClassName="mb-6"
          glowIntensity="medium"
        >
          <div className="rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C6EFF] to-[#172DA1] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-[#172DA1] mb-3">
                  <span className="font-semibold">Good afternoon, Sarah.</span> I noticed a $340 dental charge from yesterday. Want me to file this claim against your FSA?
                </p>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 bg-[#172DA1] hover:bg-[#122385] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                    <Check className="w-4 h-4" />
                    Yes, File It
                  </button>
                  <button className="flex items-center gap-2 bg-white border border-[#E1E8FF] hover:bg-[#F5F7FF] text-[#172DA1] px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                    <CreditCard className="w-4 h-4" />
                    Show Details
                  </button>
                  <button className="text-sm text-[#7A87B2] hover:text-[#172DA1] transition-colors">
                    Not now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="mt-4 pt-4 border-t border-[#E1E8FF]">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#7A87B2]" />
                <input 
                  type="text"
                  placeholder="Ask me anything about your benefits..."
                  className="w-full pl-11 pr-16 py-3 bg-[#F5F7FF] rounded-xl text-sm text-[#172DA1] placeholder-[#7A87B2] border border-transparent focus:border-[#1C6EFF]/30 focus:bg-white focus:ring-2 focus:ring-[#1C6EFF]/10 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#7A87B2] bg-white px-2 py-1 rounded-lg border border-[#E1E8FF]">⌘ K</span>
              </div>
            </div>
          </div>
        </AIGlowBorder>

        {/* KPI Cards Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {kpiCards.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
            <div key={idx} className="bg-white rounded-2xl border border-[#E1E8FF] p-5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm text-[#5D688C] font-medium">{kpi.label}</p>
                <div className="p-2 rounded-xl bg-[#EDF1FF] text-[#1C6EFF]">
                  {Icon && <Icon className="w-5 h-5" />}
                </div>
              </div>
              <div className="mb-1">
                <span className="text-3xl font-bold text-[#172DA1]">
                  ${kpi.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <p className="text-xs text-[#7A87B2]">{kpi.subtext}</p>
            </div>
            );
          })}
        </div>

        {/* Main Bento Grid - Two Columns */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* LEFT COLUMN - Benefit Utilization + Recent Transactions */}
          <div className="col-span-7 space-y-6">
            
            {/* Account Activity Card - Toggleable Views */}
            <div className="bg-white rounded-2xl border border-[#E1E8FF] p-6 shadow-sm">
              {/* Header with Toggle Pills */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-[#172DA1]">Account Activity</h3>
                <div className="flex items-center gap-1 bg-[#F5F7FF] rounded-xl p-1">
                  {activityViews.map((view) => {
                    const Icon = view.icon;
                    return (
                      <button
                        key={view.id}
                        onClick={() => setActiveActivityView(view.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          activeActivityView === view.id
                            ? 'bg-white text-[#172DA1] shadow-sm'
                            : 'text-[#7A87B2] hover:text-[#5D688C]'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {view.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FSA Runway View */}
              {activeActivityView === 'fsa' && (
                <div className="space-y-5">
                  {/* Balance Overview */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-[#7A87B2] mb-1">Remaining Balance</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[#172DA1]">${fsaData.remaining.toLocaleString()}</span>
                        <span className="text-sm text-[#7A87B2]">of ${fsaData.total.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 text-[#C8102E] mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-bold">{fsaData.daysLeft} days left</span>
                      </div>
                      <p className="text-xs text-[#7A87B2]">Expires {fsaData.deadline}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="h-3 bg-[#E1E8FF] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#1C6EFF] to-[#172DA1] rounded-full transition-all"
                        style={{ width: `${(fsaData.spent / fsaData.total) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="text-[#1C6EFF] font-semibold">${fsaData.spent.toLocaleString()} spent</span>
                      <span className="text-[#7A87B2]">${fsaData.remaining.toLocaleString()} remaining</span>
                    </div>
                  </div>

                  {/* Alert: Eligible Unclaimed */}
                  {fsaData.eligibleUnclaimed > 0 && (
                    <div className="flex items-center gap-3 p-3 bg-[#FFF9E6] border border-[#FFE082] rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-[#FFE082] flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 text-[#B8860B]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[#5D4E37]">
                          ${fsaData.eligibleUnclaimed} eligible, not yet claimed
                        </p>
                        <p className="text-xs text-[#8B7355]">From Dental Excellence (yesterday)</p>
                      </div>
                      <button className="text-xs font-bold text-[#B8860B] hover:text-[#8B6914] flex items-center gap-1">
                        File Claim <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {/* Projection */}
                  <div className="flex items-center justify-between p-3 bg-[#F5F7FF] rounded-xl">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-[#7A87B2]" />
                      <span className="text-sm text-[#5D688C]">Projected unused by deadline</span>
                    </div>
                    <span className="text-sm font-bold text-[#C8102E]">${fsaData.projectedUnused}</span>
                  </div>
                </div>
              )}

              {/* Claims Pipeline View */}
              {activeActivityView === 'claims' && (
                <div className="space-y-4">
                  {/* Pipeline Stages */}
                  <div className="space-y-3">
                    {/* Eligible Transactions */}
                    <div className="flex items-center justify-between p-3 bg-[#F5F7FF] rounded-xl group hover:bg-[#EDF1FF] transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#E1E8FF] flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-[#1C6EFF]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#172DA1]">Eligible Transactions</p>
                          <p className="text-xs text-[#7A87B2]">Ready to file</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[#172DA1]">${claimsData.eligible.amount}</p>
                        <p className="text-xs text-[#7A87B2]">{claimsData.eligible.count} items</p>
                      </div>
                    </div>

                    {/* Needs Receipt */}
                    <div className="flex items-center justify-between p-3 bg-[#FFF9E6] rounded-xl group hover:bg-[#FFF3CD] transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#FFE082] flex items-center justify-center">
                          <Upload className="w-4 h-4 text-[#B8860B]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#5D4E37]">Needs Receipt</p>
                          <p className="text-xs text-[#8B7355]">Upload documentation</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[#B8860B]">${claimsData.needsReceipt.amount}</p>
                        <p className="text-xs text-[#8B7355]">{claimsData.needsReceipt.count} items</p>
                      </div>
                    </div>

                    {/* Pending Review */}
                    <div className="flex items-center justify-between p-3 bg-[#F0F4FF] rounded-xl group hover:bg-[#E8EDFF] transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#C7D2FE] flex items-center justify-center">
                          <Clock className="w-4 h-4 text-[#4F46E5]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#172DA1]">Pending Review</p>
                          <p className="text-xs text-[#7A87B2]">Under processing</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[#4F46E5]">${claimsData.pending.amount}</p>
                        <p className="text-xs text-[#7A87B2]">{claimsData.pending.count} items</p>
                      </div>
                    </div>

                    {/* Paid */}
                    <div className="flex items-center justify-between p-3 bg-[#ECFDF5] rounded-xl group hover:bg-[#D1FAE5] transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#A7F3D0] flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#065F46]">Paid This Year</p>
                          <p className="text-xs text-[#10B981]">Reimbursed successfully</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[#059669]">${claimsData.paid.amount.toLocaleString()}</p>
                        <p className="text-xs text-[#10B981]">{claimsData.paid.count} claims</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action */}
                  <button className="w-full flex items-center justify-center gap-2 bg-[#172DA1] hover:bg-[#122385] text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors">
                    <Plus className="w-4 h-4" />
                    File New Claim
                  </button>
                </div>
              )}

              {/* HSA Investment View */}
              {activeActivityView === 'hsa' && (
                <div className="space-y-4">
                  {/* Balance Summary */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-[#7A87B2] mb-1">Investment Balance</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[#172DA1]">${hsaData.investedBalance.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 text-[#059669]">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-lg font-bold">+{hsaData.ytdReturn}%</span>
                      </div>
                      <p className="text-xs text-[#7A87B2]">+${hsaData.ytdGain.toLocaleString()} YTD</p>
                    </div>
                  </div>

                  {/* Mini Sparkline Chart */}
                  <div className="h-20 w-full">
                    <svg viewBox={`0 0 ${hsaChartWidth} ${hsaChartHeight}`} className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="hsaAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      <path d={hsaAreaPath} fill="url(#hsaAreaGradient)" />
                      <path d={hsaLinePath} fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Balance Breakdown */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-[#F5F7FF] rounded-xl">
                      <p className="text-xs text-[#7A87B2] mb-1">Invested</p>
                      <p className="text-lg font-bold text-[#172DA1]">${hsaData.investedBalance.toLocaleString()}</p>
                    </div>
                    <div className="p-3 bg-[#F5F7FF] rounded-xl">
                      <p className="text-xs text-[#7A87B2] mb-1">Cash Available</p>
                      <p className="text-lg font-bold text-[#172DA1]">${hsaData.cashBalance.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#172DA1] hover:bg-[#122385] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                      <TrendingUp className="w-4 h-4" />
                      Invest More
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-[#E1E8FF] hover:bg-[#F5F7FF] text-[#172DA1] px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                      View Portfolio
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Recent Transactions Card - Now properly positioned under Benefit Utilization */}
            <div className="bg-white rounded-2xl border border-[#E1E8FF] shadow-sm overflow-hidden">
              <div className="p-5 border-b border-[#E1E8FF] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF1FF] flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-[#1C6EFF]" />
                  </div>
                  <h3 className="font-bold text-[#172DA1]">Recent Transactions</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A87B2]" />
                    <input 
                      type="text"
                      placeholder="Search..."
                      className="pl-9 pr-4 py-2 bg-[#F5F7FF] rounded-lg text-sm text-[#172DA1] placeholder-[#7A87B2] border border-transparent focus:border-[#1C6EFF]/30 focus:bg-white w-40 transition-all"
                    />
                  </div>
                  <button className="p-2 hover:bg-[#F5F7FF] rounded-lg transition-colors">
                    <Filter className="w-4 h-4 text-[#7A87B2]" />
                  </button>
                  <button className="p-2 hover:bg-[#F5F7FF] rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-[#7A87B2]" />
                  </button>
                </div>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-5 py-3 bg-[#F9FAFF] text-xs font-semibold text-[#7A87B2] uppercase tracking-wider">
                <div className="col-span-1 flex items-center">
                  <input type="checkbox" className="rounded border-[#E1E8FF]" />
                </div>
                <div className="col-span-4">Name</div>
                <div className="col-span-3">Date</div>
                <div className="col-span-2">Amount</div>
                <div className="col-span-2">Status</div>
              </div>

              {/* Table Body */}
              {transactions.map((tx) => (
                <div key={tx.id} className="grid grid-cols-12 gap-4 px-5 py-4 border-b border-[#E1E8FF] last:border-b-0 hover:bg-[#F9FAFF] transition-colors items-center">
                  <div className="col-span-1">
                    <input type="checkbox" className="rounded border-[#E1E8FF]" />
                  </div>
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EDF1FF] flex items-center justify-center text-sm font-bold text-[#172DA1]">
                      {tx.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-[#172DA1]">{tx.name}</p>
                      <p className="text-xs text-[#7A87B2]">{tx.type}</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-sm text-[#5D688C]">{tx.date}</div>
                  <div className="col-span-2 font-semibold text-[#C8102E]">${tx.amount.toLocaleString()}</div>
                  <div className="col-span-2">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(tx.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Life Event + Spending Breakdown + Quick Actions */}
          <div className="col-span-5 space-y-6">
            
            {/* Life Event Detected Card */}
            <div className="bg-white rounded-2xl border border-[#E1E8FF] p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#C8102E] mb-3">
                <Baby className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Life Event Detected</span>
              </div>
              <h3 className="text-lg font-bold text-[#172DA1] mb-2">Planning for a baby?</h3>
              <p className="text-sm text-[#5D688C] mb-4">
                Based on recent activity, here's how your FSA covers prenatal care, delivery costs, and postnatal supplies.
              </p>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-[#172DA1] hover:bg-[#122385] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                  Explore Coverage
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="text-sm text-[#7A87B2] hover:text-[#172DA1] transition-colors">
                  Dismiss
                </button>
              </div>
            </div>

            {/* Spending Breakdown Card */}
            <div className="bg-white rounded-2xl border border-[#E1E8FF] p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#172DA1]">Spending Breakdown</h3>
                <button className="p-2 hover:bg-[#F5F7FF] rounded-lg transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-[#7A87B2]" />
                </button>
              </div>

              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-[#172DA1]">$22,150</span>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-[#059669]" />
                  <span className="text-xs font-semibold text-[#059669]">12% from last month</span>
                </div>
              </div>

              <div className="space-y-4">
                {spendingBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#172DA1]">{item.category}</p>
                        <p className="text-xs text-[#7A87B2]">{item.description}</p>
                      </div>
                    </div>
                    <span className="font-bold text-[#172DA1]">${item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white rounded-2xl border border-[#E1E8FF] p-5 shadow-sm">
              <h3 className="font-bold text-[#172DA1] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 bg-[#172DA1] hover:bg-[#122385] text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors">
                  <Plus className="w-4 h-4" />
                  File New Claim
                </button>
                <button className="w-full flex items-center gap-3 bg-white border border-[#E1E8FF] hover:bg-[#F5F7FF] text-[#172DA1] px-4 py-3 rounded-xl text-sm font-semibold transition-colors">
                  <CreditCard className="w-4 h-4" />
                  Order Replacement Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WexDashboardShellV2>
  );
};

export default BenefitsDashboardV4;

