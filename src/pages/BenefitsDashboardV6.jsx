import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, Settings, ChevronRight, ChevronDown,
  TrendingUp, TrendingDown, ArrowUpRight,
  Heart, Briefcase, Bus, Wallet, Eye, EyeOff,
  Receipt, CreditCard, Plus,
  MoreHorizontal, ExternalLink, FileText
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

/**
 * BenefitsDashboardV6 - WEX Design System Aligned
 * "Segment-Inspired" layout with official WEX tokens.
 */
const BenefitsDashboardV6 = () => {
  const [showBalances, setShowBalances] = useState(true);
  const [timeRange, setTimeRange] = useState('6m');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Chart data for total value trend
  const trendData = [
    { month: 'Jan', value: 4200 },
    { month: 'Feb', value: 4800 },
    { month: 'Mar', value: 5100 },
    { month: 'Apr', value: 5400 },
    { month: 'May', value: 5900 },
    { month: 'Jun', value: 6287 },
  ];

  // HSA Investment performance data (bar chart)
  const investmentData = [
    { month: 'Oct', value: 180 },
    { month: 'Nov', value: 220 },
    { month: 'Dec', value: 280 },
    { month: 'Jan', value: 150 },
    { month: 'Feb', value: 310 },
    { month: 'Mar', value: 240 },
  ];

  // Account cards with WEX Brand Themes
  const accounts = [
    { 
      id: 'fsa',
      name: 'FSA', 
      fullName: 'Flexible Spending',
      description: 'Use-it-or-lose-it funds',
      balance: 1200.00,
      trend: -20.32,
      trendLabel: 'This Week',
      icon: Briefcase,
      theme: {
        // WEX Yellow/Amber Theme
        bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
        text: 'text-amber-900',
        subtext: 'text-amber-700/70',
        border: 'border-amber-200/60',
        trendBg: 'bg-amber-100',
        trendText: 'text-amber-800',
        iconBg: 'bg-amber-100 text-amber-600'
      }
    },
    { 
      id: 'hsa',
      name: 'HSA', 
      fullName: 'Health Savings',
      description: 'Tax-advantaged savings',
      balance: 4847.12,
      trend: -6.34,
      trendLabel: 'This Week',
      icon: Heart,
      theme: {
        // WEX Red/Primary Theme
        bg: 'bg-white',
        text: 'text-wex-blue-main',
        subtext: 'text-[#5D688C]',
        border: 'border-[#E1E8FF]',
        trendBg: 'bg-[#EDF1FF]',
        trendText: 'text-wex-blue-main',
        iconBg: 'bg-red-50 text-wex-red'
      }
    },
    { 
      id: 'commuter',
      name: 'Commuter', 
      fullName: 'Transit Benefits',
      description: 'Pre-tax transit funds',
      balance: 240.00,
      trend: 0.45,
      trendLabel: 'This Week',
      icon: Bus,
      theme: {
        // WEX Blue Accent Theme
        bg: 'bg-gradient-to-br from-[#F5F8FF] to-[#EDF1FF]',
        text: 'text-blue-900',
        subtext: 'text-blue-700/70',
        border: 'border-blue-200/60',
        trendBg: 'bg-blue-100',
        trendText: 'text-blue-800',
        iconBg: 'bg-blue-100 text-wex-blue-accent'
      }
    },
  ];

  // Recent transactions
  const transactions = [
    { 
      id: 1, 
      merchant: 'Walgreens Pharmacy', 
      type: 'FSA',
      sparkline: [10, 15, 12, 18, 14, 20, 16],
      change: -0.73, 
      balance: 42.50,
      icon: '💊'
    },
    { 
      id: 2, 
      merchant: 'CVS Health', 
      type: 'HSA',
      sparkline: [20, 18, 22, 19, 24, 21, 23],
      change: 1.24, 
      balance: 28.99,
      icon: '🏥'
    },
    { 
      id: 3, 
      merchant: 'Metro Transit', 
      type: 'Commuter',
      sparkline: [8, 10, 9, 12, 11, 14, 13],
      change: 0.45, 
      balance: 115.00,
      icon: '🚇'
    },
  ];

  // Pending claims
  const pendingClaims = [
    { 
      id: 1, 
      merchant: 'Dental Excellence', 
      type: 'FSA',
      sparkline: [15, 12, 18, 14, 20, 16, 19],
      change: -2.15, 
      balance: 340.00,
      icon: '🦷',
      status: 'Action Needed'
    },
    { 
      id: 2, 
      merchant: 'Vision Center', 
      type: 'FSA',
      sparkline: [22, 20, 25, 23, 28, 26, 24],
      change: 0.82, 
      balance: 185.00,
      icon: '👁️',
      status: 'In Review'
    },
  ];

  // Total balance calculation
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const totalGain = 2087.94;
  const gainPercentage = 20;

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-wex-blue-main text-white px-3 py-2 rounded-lg text-sm shadow-xl border border-wex-blue-dark">
          <p className="font-semibold font-mono">${payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  // Mini sparkline component
  const MiniSparkline = ({ data, positive }) => (
    <svg className="w-20 h-8" viewBox="0 0 80 32">
      <polyline
        fill="none"
        stroke={positive ? '#00C48C' : '#C8102E'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={data.map((v, i) => `${i * 13},${32 - (v / 30) * 28}`).join(' ')}
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFF] font-sans selection:bg-wex-red/10 selection:text-wex-red">
      
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E1E8FF]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo & Nav */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                {/* WEX Logo mark (Red Square) */}
                <div className="w-8 h-8 bg-wex-red flex items-center justify-center">
                   <span className="text-white font-bold text-lg leading-none">W</span>
                </div>
                <span className="font-bold text-wex-blue-main text-xl tracking-tight">Benefits</span>
              </div>
              
              <div className="hidden md:flex items-center gap-1">
                {['Dashboard', 'Accounts', 'Claims', 'Transactions', 'Reports'].map((item, i) => (
                  <button
                    key={item}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      i === 0 
                        ? 'text-wex-blue-main bg-[#EDF1FF]' 
                        : 'text-[#5D688C] hover:text-wex-blue-main hover:bg-[#F5F8FF]'
                    }`}
                  >
                    {item}
                    {item === 'Claims' && (
                      <ChevronDown size={14} className="inline ml-1 opacity-50" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-wex-red text-white text-sm font-semibold rounded-lg hover:bg-[#A00D25] shadow-lg shadow-wex-red/20 transition-all"
              >
                <Plus size={16} />
                File Claim
              </motion.button>
              
              <button className="relative w-10 h-10 rounded-lg border border-[#E1E8FF] bg-white flex items-center justify-center hover:bg-[#F5F8FF] transition-colors text-[#5D688C] hover:text-wex-blue-main">
                <Bell size={18} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-wex-red rounded-full ring-2 ring-white" />
              </button>
              
              <button className="w-10 h-10 rounded-lg border border-[#E1E8FF] bg-white flex items-center justify-center hover:bg-[#F5F8FF] transition-colors text-[#5D688C] hover:text-wex-blue-main">
                <Settings size={18} />
              </button>
              
              <div className="w-10 h-10 rounded-full bg-wex-blue-main flex items-center justify-center cursor-pointer ring-2 ring-offset-2 ring-transparent hover:ring-[#E1E8FF] transition-all">
                <span className="text-sm font-bold text-white">SJ</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
        
        {/* Overview Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="text-2xl font-bold text-wex-blue-main">Overview</h1>
          <button className="text-sm font-medium text-wex-blue-accent hover:text-blue-700 flex items-center gap-1 transition-colors">
            View Details
            <ExternalLink size={14} />
          </button>
        </motion.div>

        {/* Overview Cards Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
        >
          {/* Main Total Value Card (spans 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E1E8FF] p-8 shadow-wex-card hover:shadow-wex-card-hover transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-medium text-[#5D688C] mb-2 uppercase tracking-wide">Total Benefits Value</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-wex-blue-main tracking-tight font-display">
                    {showBalances ? '$' + Math.floor(totalBalance).toLocaleString() : '•••••'}
                  </span>
                  <span className="text-2xl font-bold text-[#B1C0EE]">
                    {showBalances ? '.' + (totalBalance % 1).toFixed(2).slice(2) : ''}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-sm text-[#00C48C] font-medium bg-[#00C48C]/10 px-2 py-0.5 rounded">
                    +${totalGain.toLocaleString()}
                  </span>
                  <span className="text-sm text-[#7A87B2]">Last 6 months gain</span>
                </div>
              </div>
              
              {/* Time Range Selector */}
              <div className="flex items-center bg-[#F5F8FF] rounded-lg p-1 border border-[#E1E8FF]">
                {['24h', '7d', '6m', '1y', 'Max'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      timeRange === range
                        ? 'bg-white text-wex-blue-main shadow-sm border border-[#E1E8FF]'
                        : 'text-[#7A87B2] hover:text-wex-blue-main'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Trend Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F0FDF4] text-[#15803d] text-sm font-semibold rounded-full border border-[#DCFCE7]">
                <TrendingUp size={14} />
                Portfolio up {gainPercentage}%
              </span>
            </div>

            {/* Area Chart - Updated to WEX Red */}
            <div className="h-56 -mx-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C8102E" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#C8102E" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#7A87B2', fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#7A87B2', fontSize: 12 }}
                    tickFormatter={(value) => `${value/1000}k`}
                    dx={-10}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E1E8FF', strokeWidth: 2 }} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#C8102E" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    activeDot={{ r: 6, strokeWidth: 0, fill: '#C8102E' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* HSA Investment Card */}
          <div className="bg-white rounded-2xl border border-[#E1E8FF] p-6 shadow-wex-card flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm font-semibold text-[#5D688C] uppercase tracking-wide">HSA Investments</p>
              <span className="text-xs font-semibold text-wex-blue-main bg-[#EDF1FF] px-2.5 py-1 rounded-md">YTD</span>
            </div>
            
            {/* Value */}
            <div className="mb-2">
              <div className="flex items-baseline gap-0.5">
                <span className="text-4xl font-bold text-wex-blue-main tracking-tight">$1,234</span>
                <span className="text-xl font-bold text-[#B1C0EE]">.40</span>
              </div>
              <p className="text-xs text-[#7A87B2] mt-1.5 font-medium">Outperforming benchmark by 2.1%</p>
            </div>

            {/* Bar Chart - Fills remaining space */}
            <div className="flex-1 min-h-0 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={investmentData} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#7A87B2', fontSize: 11, fontWeight: 500 }}
                    dy={8}
                  />
                  <Bar 
                    dataKey="value" 
                    radius={[6, 6, 0, 0]}
                    maxBarSize={48}
                  >
                    {investmentData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill="#FFBC00"
                        opacity={index === investmentData.length - 1 ? 1 : 0.65}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Footer badge */}
            <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-[#E1E8FF]">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F0FDF4] text-[#15803d] text-xs font-semibold rounded-md">
                Avg +8.12%
              </span>
              <span className="text-xs text-[#7A87B2] font-medium">Annualized Return</span>
            </div>
          </div>
        </motion.div>

        {/* Account Details Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-wex-blue-main">Your Accounts</h2>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowBalances(!showBalances)}
                className="flex items-center gap-2 text-sm text-[#5D688C] hover:text-wex-blue-main transition-colors"
              >
                {showBalances ? <Eye size={16} /> : <EyeOff size={16} />}
                {showBalances ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Account Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {accounts.map((account, index) => {
              const Icon = account.icon;
              const isPositive = account.trend > 0;
              
              return (
                <motion.div
                  key={account.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onHoverStart={() => setHoveredCard(account.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`relative p-6 rounded-2xl border ${account.theme.border} ${account.theme.bg} cursor-pointer shadow-sm hover:shadow-wex-card-hover transition-all group overflow-hidden`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className={`text-lg font-bold ${account.theme.text}`}>{account.name}</h3>
                      <p className={`text-sm ${account.theme.subtext}`}>{account.description}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${account.theme.iconBg}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Balance */}
                  <div className="mb-6">
                    <span className={`text-3xl font-bold tracking-tight ${account.theme.text} font-display`}>
                      {showBalances 
                        ? '$' + account.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                        : '•••••'
                      }
                    </span>
                  </div>

                  {/* Trend */}
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 text-sm font-medium ${account.theme.trendText} ${account.theme.trendBg} px-2 py-1 rounded-md`}>
                      {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {Math.abs(account.trend).toFixed(2)}%
                    </span>
                    <span className={`text-sm ${account.theme.subtext}`}>{account.trendLabel}</span>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight size={20} className={account.theme.text} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Section: Tables & Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Recent Transactions Table */}
          <div className="bg-white rounded-2xl border border-[#E1E8FF] p-6 shadow-wex-card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-wex-blue-main">Recent Activity</h3>
              </div>
              <span className="text-xs font-medium text-[#5D688C] bg-[#EDF1FF] px-2 py-1 rounded-md">Last 7d</span>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 text-xs font-semibold text-[#7A87B2] uppercase tracking-wider pb-3 border-b border-[#F5F8FF]">
              <span className="col-span-1">Merchant</span>
              <span className="text-center col-span-1">Trend</span>
              <span className="text-center col-span-1">Change</span>
              <span className="text-right col-span-1">Amount</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#F5F8FF]">
              {transactions.map((tx) => (
                <div key={tx.id} className="grid grid-cols-4 gap-4 py-4 items-center hover:bg-[#FDFDFF] group cursor-pointer transition-colors">
                  <div className="col-span-1 flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-[#F5F8FF] flex items-center justify-center text-sm shrink-0">
                       {tx.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-wex-blue-main truncate">{tx.merchant.split(' ')[0]}</p>
                      <p className="text-xs text-[#7A87B2]">{tx.type}</p>
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <MiniSparkline data={tx.sparkline} positive={tx.change > 0} />
                  </div>
                  <div className="col-span-1 text-center">
                    <span className={`text-xs font-semibold ${tx.change > 0 ? 'text-[#00C48C]' : 'text-wex-red'}`}>
                      {tx.change > 0 ? '+' : ''}{tx.change.toFixed(2)}%
                    </span>
                  </div>
                  <div className="col-span-1 text-right">
                    <span className="text-sm font-bold text-wex-blue-main font-mono">
                      ${tx.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Claims Table */}
          <div className="bg-white rounded-2xl border border-[#E1E8FF] p-6 shadow-wex-card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-wex-blue-main">Pending Claims</h3>
              </div>
              <span className="text-xs font-medium text-wex-yellow bg-[#FFF9E6] px-2 py-1 rounded-md border border-wex-yellow/20">2 Action</span>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 text-xs font-semibold text-[#7A87B2] uppercase tracking-wider pb-3 border-b border-[#F5F8FF]">
              <span className="col-span-1">Claim</span>
              <span className="text-center col-span-1">Status</span>
              <span className="text-center col-span-1">Impact</span>
              <span className="text-right col-span-1">Value</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#F5F8FF]">
              {pendingClaims.map((claim) => (
                <div key={claim.id} className="grid grid-cols-4 gap-4 py-4 items-center hover:bg-[#FDFDFF] cursor-pointer transition-colors">
                  <div className="col-span-1 flex items-center gap-3 overflow-hidden">
                     <div className="w-8 h-8 rounded-full bg-[#F5F8FF] flex items-center justify-center text-sm shrink-0">
                       {claim.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-wex-blue-main truncate">{claim.merchant.split(' ')[0]}</p>
                      <p className="text-xs text-[#7A87B2]">{claim.type}</p>
                    </div>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full ${
                      claim.status === 'Action Needed' 
                        ? 'bg-red-50 text-wex-red border border-red-100'
                        : 'bg-blue-50 text-wex-blue-accent border border-blue-100'
                    }`}>
                      {claim.status === 'Action Needed' ? 'Action' : 'Review'}
                    </span>
                  </div>
                  <div className="col-span-1 text-center">
                     <span className={`text-xs font-semibold ${claim.change > 0 ? 'text-[#00C48C]' : 'text-wex-red'}`}>
                      {claim.change > 0 ? '+' : ''}{claim.change.toFixed(2)}%
                    </span>
                  </div>
                  <div className="col-span-1 text-right">
                    <span className="text-sm font-bold text-wex-blue-main font-mono">
                      ${claim.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button className="w-full mt-6 py-3 bg-wex-blue-main text-white text-sm font-semibold rounded-lg hover:bg-wex-blue-dark shadow-md transition-all flex items-center justify-center gap-2">
              <Receipt size={16} />
              Upload Receipt
            </button>
          </div>

          {/* Quick Actions / Assets Overview */}
          <div className="bg-white rounded-2xl border border-[#E1E8FF] p-6 shadow-wex-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-wex-blue-main">Quick Actions</h3>
              <button className="w-8 h-8 rounded-lg hover:bg-[#F5F8FF] flex items-center justify-center transition-colors">
                <MoreHorizontal size={18} className="text-[#5D688C]" />
              </button>
            </div>

            {/* Total Overview Card */}
            <div className="bg-gradient-to-br from-[#172DA1] to-[#122385] rounded-xl p-5 mb-6 text-white shadow-lg shadow-blue-900/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Wallet size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-blue-200">Total Available Funds</p>
                  <p className="text-2xl font-bold font-display tracking-tight">
                    ${showBalances ? totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '•••••'}
                  </p>
                </div>
                <ChevronRight size={20} className="text-blue-300" />
              </div>
            </div>

            {/* Action Items */}
            <div className="space-y-3">
              {[
                { icon: CreditCard, label: 'View Card Details', desc: 'Manage your benefits card', color: 'bg-wex-blue-accent', textColor: 'text-wex-blue-accent' },
                { icon: TrendingUp, label: 'Manage Investments', desc: 'HSA performance & allocation', color: 'bg-wex-yellow', textColor: 'text-yellow-700' },
                { icon: Plus, label: 'One-Time Contribution', desc: 'Add funds to your HSA', color: 'bg-[#00C48C]', textColor: 'text-emerald-700' },
              ].map((action, i) => (
                <motion.button
                  key={action.label}
                  whileHover={{ x: 4 }}
                  className="w-full flex items-center gap-4 p-3 hover:bg-[#F5F8FF] rounded-xl transition-colors group text-left border border-transparent hover:border-[#E1E8FF]"
                >
                  <div className={`w-10 h-10 rounded-lg ${action.color} bg-opacity-10 flex items-center justify-center`}>
                    <action.icon size={18} className={action.textColor} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-wex-blue-main">{action.label}</p>
                    <p className="text-xs text-[#7A87B2]">{action.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-[#B1C0EE] group-hover:text-wex-blue-main transition-colors" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default BenefitsDashboardV6;
