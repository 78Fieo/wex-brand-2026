import React, { useState } from 'react';
import WexDashboardShellV2 from '../components/layouts/WexDashboardShellV2';
import { AIGlowBorder } from '@/components/ui/moving-border';
import { 
  Search, Sparkles, TrendingUp, TrendingDown, MoreHorizontal,
  Heart, Smile, Pill, Eye, Plus, CreditCard, Filter, Check,
  Calendar, Baby, ArrowRight
} from 'lucide-react';

/**
 * BenefitsDashboardV4_1 - AI-Enhanced Benefits Dashboard with Branded Banner
 * V4.1 iteration with branded hero section
 */
const BenefitsDashboardV4_1 = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('overview');

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
      label: 'Available Balance', 
      value: 75876.00, 
      trend: 'up', 
      trendValue: 12, 
      subtext: '+$1,560 from last month',
      icon: CreditCard
    },
    { 
      label: 'Inflows', 
      value: 15876.00, 
      trend: 'up', 
      trendValue: 17, 
      subtext: '+$2,560 from last month',
      icon: TrendingUp
    },
    { 
      label: 'Outflows', 
      value: 5876.00, 
      trend: 'down', 
      trendValue: 12, 
      subtext: '-$560 from last month',
      icon: TrendingDown
    },
  ];

  const benefitUtilizationData = [
    { year: '2019', value: 45 },
    { year: '2020', value: 60 },
    { year: '2021', value: 85 },
    { year: '2022', value: 140 },
    { year: '2023', value: 180 },
    { year: '2024', value: 230 },
    { year: '2025', value: 295 },
  ];

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

  // SVG Chart for Benefit Utilization
  const maxValue = Math.max(...benefitUtilizationData.map(d => d.value));
  const chartHeight = 160;
  const chartWidth = 700;
  const paddingLeft = 35;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const points = benefitUtilizationData.map((d, i) => {
    const x = paddingLeft + (i / (benefitUtilizationData.length - 1)) * (chartWidth - paddingLeft - paddingRight);
    const y = chartHeight - paddingBottom - (d.value / maxValue) * (chartHeight - paddingTop - paddingBottom);
    return { x, y, ...d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${chartHeight - paddingBottom} L ${points[0].x} ${chartHeight - paddingBottom} Z`;

  return (
    <WexDashboardShellV2
      activeSidebarItem={activeSidebarItem}
      onSidebarItemClick={setActiveSidebarItem}
      userName="Sarah Johnson"
      userEmail="sarah@wexinc.com"
    >
      {/* HERO SECTION - Branded Banner (SVG Recreation) */}
      <section className="relative overflow-hidden min-h-[400px]">
        
        {/* Full SVG Background */}
        <svg 
          className="absolute inset-0 w-full h-full z-0" 
          viewBox="0 0 1440 400" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 1. Main Background Gradient */}
            <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />       {/* Top Left: Pure White */}
              <stop offset="30%" stopColor="#F0F7FF" />      {/* Soft Light Blue */}
              <stop offset="70%" stopColor="#DDEBFF" />      {/* Sky Blue center */}
              <stop offset="100%" stopColor="#93C5FD" />     {/* Bottom Right: Bright Sky Blue */}
            </linearGradient>

            {/* 2. Line Gradient - Fades from transparent to cyan/white to simulate light reflection */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0" />
              <stop offset="20%" stopColor="#7DD3FC" stopOpacity="0.1" />
              <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity="0.8" /> {/* Bright tip */}
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* 3. Glow Filter for the "Neon" effect */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Rectangle */}
          <rect width="100%" height="100%" fill="url(#heroBg)" />

          {/* Chevron Group */}
          <g className="opacity-80">
            {/* We create the chevron shape with a path. 
                M = Move to, L = Line to. 
                Shape: Start Left, Go Center Right, Go Left Bottom. */}
            {[...Array(20)].map((_, i) => {
               // Spacing calculation
               const xOffset = i * 60; 
               const opacity = 0.3 + (i / 20) * 0.7; // Fade in as we go right
               
               return (
                <path
                  key={i}
                  d={`M ${-400 + xOffset},0 L ${0 + xOffset},200 L ${-400 + xOffset},400`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth={i > 15 ? 2 : 1} // Thicker lines on the right
                  style={{ opacity: opacity }}
                  className="transition-all duration-1000"
                />
               );
            })}
          </g>

          {/* Extra Glow Highlight in Top Right Corner */}
          <circle cx="100%" cy="0%" r="300" fill="url(#lineGradient)" fillOpacity="0.1" filter="url(#glow)" />
        </svg>

        {/* Content Layer */}
        <div className="relative z-10 px-8 pt-6 pb-8">
          {/* Header with Date and Export */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-[#172DA1]">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-[#5D688C]">
                <Calendar className="w-4 h-4" />
                <span>{currentDate}</span>
              </div>
              <button className="flex items-center gap-2 bg-[#172DA1] hover:bg-[#122385] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-blue-900/20">
                <TrendingDown className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* AI Assistant Card with Rotating Gradient Border */}
          <AIGlowBorder
            borderRadius="1rem"
            duration={3000}
            containerClassName="mb-0"
            glowIntensity="intense"
            showBehindGlow={false}
          >
            <div className="rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1C6EFF] to-[#172DA1] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2 tracking-tight">
                      Good afternoon, Sarah.
                    </h2>
                    <p className="text-[#5D688C] text-[15px] leading-relaxed">
                      I noticed a <span className="font-bold text-[#172DA1]">$340</span> dental charge from yesterday. 
                      <span className="block sm:inline sm:ml-1">
                        Want me to file this claim against your <span className="font-semibold text-[#1a1a2e]">FSA</span>?
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-[#172DA1] hover:bg-[#122385] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-900/10 hover:shadow-lg hover:-translate-y-0.5">
                      <Check className="w-4 h-4" />
                      Yes, File It
                    </button>
                    <button className="flex items-center gap-2 bg-white border border-[#E1E8FF] hover:bg-[#F8F9FC] text-[#172DA1] px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:border-[#172DA1]/20 hover:shadow-sm">
                      <CreditCard className="w-4 h-4" />
                      Show Details
                    </button>
                    <button className="text-sm text-[#7A87B2] hover:text-[#5D688C] transition-colors px-2 underline decoration-transparent hover:decoration-[#7A87B2]/40 underline-offset-4 font-medium">
                      Not now
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="mt-5 pt-4 border-t border-[#E1E8FF]">
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
        </div>
      </section>

      <div className="px-8 py-6">

        {/* KPI Cards Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {kpiCards.map((kpi, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-[#E1E8FF] p-5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm text-[#5D688C] font-medium">{kpi.label}</p>
                <div className={`p-2 rounded-xl ${kpi.trend === 'up' ? 'bg-[#EDF1FF] text-[#1C6EFF]' : 'bg-[#FFF0F2] text-[#C8102E]'}`}>
                  {kpi.trend === 'up' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-[#172DA1]">
                  ${kpi.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
                <span className={`text-sm font-semibold flex items-center gap-1 ${kpi.trend === 'up' ? 'text-[#059669]' : 'text-[#C8102E]'}`}>
                  {kpi.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {kpi.trendValue}%
                </span>
              </div>
              <p className="text-xs text-[#7A87B2]">{kpi.subtext}</p>
            </div>
          ))}
        </div>

        {/* Main Bento Grid - Two Columns */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* LEFT COLUMN - Benefit Utilization + Recent Transactions */}
          <div className="col-span-7 space-y-6">
            
            {/* Benefit Utilization Card */}
            <div className="bg-white rounded-2xl border border-[#E1E8FF] p-6 shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF1FF] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#1C6EFF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#172DA1]">Benefit Utilization</h3>
                    <p className="text-xs text-[#7A87B2]">Your spending over time</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-[#F5F7FF] rounded-lg transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-[#7A87B2]" />
                </button>
              </div>
              
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-[#1C6EFF]">$12,876.00</span>
                <span className="text-sm font-semibold text-[#059669] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  12%
                </span>
              </div>

              {/* Chart */}
              <div className="h-44 w-full mt-2">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  {/* Grid lines */}
                  {[0, 100, 200, 300].map((val, i) => {
                    const y = chartHeight - paddingBottom - (val / 300) * (chartHeight - paddingTop - paddingBottom);
                    return (
                      <g key={i}>
                        <line 
                          x1={paddingLeft} 
                          y1={y} 
                          x2={chartWidth - paddingRight} 
                          y2={y} 
                          stroke="#E1E8FF" 
                          strokeDasharray="4 4"
                        />
                        <text x={paddingLeft - 8} y={y + 4} textAnchor="end" fontSize="11" className="fill-[#7A87B2]">
                          {val}
                        </text>
                      </g>
                    );
                  })}
                  
                  {/* X-axis labels */}
                  {points.map((p, i) => (
                    <text 
                      key={i} 
                      x={p.x} 
                      y={chartHeight - 10} 
                      textAnchor="middle" 
                      fontSize="11"
                      className="fill-[#7A87B2]"
                    >
                      {p.year}
                    </text>
                  ))}

                  {/* Area fill */}
                  <defs>
                    <linearGradient id="areaGradientV41" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1C6EFF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1C6EFF" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path d={areaPath} fill="url(#areaGradientV41)" />
                  
                  {/* Line */}
                  <path d={linePath} fill="none" stroke="#1C6EFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Data points */}
                  {points.map((p, i) => (
                    <circle 
                      key={i} 
                      cx={p.x} 
                      cy={p.y} 
                      r="4" 
                      fill="white" 
                      stroke="#1C6EFF" 
                      strokeWidth="2.5"
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* Recent Transactions Card */}
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

export default BenefitsDashboardV4_1;
