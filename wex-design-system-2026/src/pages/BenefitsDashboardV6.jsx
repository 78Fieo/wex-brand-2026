import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, Settings, ChevronRight, ChevronDown,
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  Heart, Briefcase, Car, Bus, Wallet, Eye, EyeOff,
  Receipt, CreditCard, Clock, FileText, Plus,
  Sparkles, Search, MoreHorizontal, ExternalLink
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import wexLogoRed from '../assets/wex_logo_red.svg';

/**
 * BenefitsDashboardV6 - Segment-Inspired Benefits Dashboard
 * Clean, data-dense layout with portfolio-style account cards
 */
const BenefitsDashboardV6 = () => {
  const [showBalances, setShowBalances] = useState(true);
  const [timeRange, setTimeRange] = useState('6m');
  const [hoveredCard, setHoveredCard] = useState(null);

  const userName = "Sarah";
  const date = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric'
  });

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
    { month: 'Oct', value: 180, positive: true },
    { month: 'Nov', value: 220, positive: true },
    { month: 'Dec', value: 280, positive: true },
    { month: 'Jan', value: 150, positive: true },
    { month: 'Feb', value: 310, positive: true },
    { month: 'Mar', value: 240, positive: true },
  ];

  // Account cards with distinct color themes
  const accounts = [
    { 
      id: 'fsa',
      name: 'FSA', 
      fullName: 'Flexible Spending',
      description: 'Use-it-or-lose-it healthcare funds',
      balance: 1200.00,
      trend: -20.32,
      trendLabel: 'This Week',
      icon: Briefcase,
      theme: {
        bg: 'bg-gradient-to-br from-amber-300 via-yellow-300 to-amber-400',
        text: 'text-amber-900',
        subtext: 'text-amber-800/70',
        border: 'border-amber-400/30',
        trendBg: 'bg-amber-900/10',
        trendText: 'text-amber-900',
      }
    },
    { 
      id: 'hsa',
      name: 'HSA', 
      fullName: 'Health Savings',
      description: 'Tax-advantaged savings account',
      balance: 4847.12,
      trend: -6.34,
      trendLabel: 'This Week',
      icon: Heart,
      theme: {
        bg: 'bg-white',
        text: 'text-slate-900',
        subtext: 'text-slate-500',
        border: 'border-slate-200',
        trendBg: 'bg-slate-100',
        trendText: 'text-slate-600',
      }
    },
    { 
      id: 'commuter',
      name: 'Commuter', 
      fullName: 'Transit Benefits',
      description: 'Pre-tax commuter benefits',
      balance: 240.00,
      trend: 0.45,
      trendLabel: 'This Week',
      icon: Bus,
      theme: {
        bg: 'bg-gradient-to-br from-fuchsia-200 via-pink-200 to-purple-200',
        text: 'text-purple-900',
        subtext: 'text-purple-800/70',
        border: 'border-purple-300/30',
        trendBg: 'bg-purple-900/10',
        trendText: 'text-purple-900',
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
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm shadow-xl">
          <p className="font-semibold">${payload[0].value.toLocaleString()}</p>
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
        stroke={positive ? '#10b981' : '#ef4444'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={data.map((v, i) => `${i * 13},${32 - (v / 30) * 28}`).join(' ')}
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-white font-sans">
      
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo & Nav */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                <span className="font-bold text-slate-900 text-lg tracking-tight">Benefits</span>
              </div>
              
              <div className="hidden md:flex items-center gap-1">
                {['Dashboard', 'Accounts', 'Claims', 'Transactions', 'Reports'].map((item, i) => (
                  <button
                    key={item}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      i === 0 
                        ? 'text-slate-900 bg-slate-100' 
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
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
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors"
              >
                <Plus size={16} />
                File Claim
              </motion.button>
              
              <button className="relative w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Bell size={18} className="text-slate-600" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full" />
              </button>
              
              <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Settings size={18} className="text-slate-600" />
              </button>
              
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center cursor-pointer">
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
          className="flex items-center justify-between mb-6"
        >
          <h1 className="text-2xl font-bold text-slate-900">Overview</h1>
          <button className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors">
            View Details
            <ExternalLink size={14} />
          </button>
        </motion.div>

        {/* Overview Cards Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
        >
          {/* Main Total Value Card (spans 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-slate-500 mb-2">Total Benefits Value</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-slate-900 tracking-tight">
                    {showBalances ? '$' + Math.floor(totalBalance).toLocaleString() : '•••••'}
                  </span>
                  <span className="text-2xl font-bold text-slate-400">
                    {showBalances ? '.' + (totalBalance % 1).toFixed(2).slice(2) : ''}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-sm text-emerald-600">
                    You gained <span className="font-semibold text-emerald-600">${totalGain.toLocaleString()}</span> last 6 months.
                  </span>
                  <span className="text-sm text-slate-400">That's the best results in last 2 years.</span>
                </div>
              </div>
              
              {/* Time Range Selector */}
              <div className="flex items-center bg-slate-100 rounded-xl p-1">
                {['24h', '7d', '6m', '1y', 'Max'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      timeRange === range
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Trend Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-full border border-emerald-200">
                <TrendingUp size={14} />
                Increased by {gainPercentage}%
              </span>
            </div>

            {/* Area Chart */}
            <div className="h-48 -mx-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    tickFormatter={(value) => `${value/1000}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#ec4899" 
                    strokeWidth={2.5}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* HSA Investment Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-500">HSA Investment Returns</p>
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">Last 6m</span>
            </div>
            
            <div className="mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">$1,234</span>
                <span className="text-xl font-bold text-slate-400">.40</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">Oct 2024 - April 2025</p>
            </div>

            {/* Bar Chart */}
            <div className="h-32 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={investmentData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <Bar 
                    dataKey="value" 
                    radius={[4, 4, 0, 0]}
                  >
                    {investmentData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill="#fbbf24"
                        opacity={0.9}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Average badge */}
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-md">
                Avg +8.12%
              </span>
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
            <h2 className="text-2xl font-bold text-slate-900">Your Accounts</h2>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowBalances(!showBalances)}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                {showBalances ? <Eye size={16} /> : <EyeOff size={16} />}
                {showBalances ? 'Hide' : 'Show'}
              </button>
              <button className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors">
                View More
                <ExternalLink size={14} />
              </button>
            </div>
          </div>

          {/* Account Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
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
                  className={`relative p-6 rounded-3xl border ${account.theme.border} ${account.theme.bg} cursor-pointer transition-shadow hover:shadow-xl group overflow-hidden`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-lg font-bold ${account.theme.text}`}>{account.name}</h3>
                      <p className={`text-sm ${account.theme.subtext}`}>{account.description}</p>
                    </div>
                  </div>

                  {/* Balance */}
                  <div className="mb-4">
                    <span className={`text-3xl font-bold ${account.theme.text}`}>
                      {showBalances 
                        ? '$' + account.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                        : '•••••'
                      }
                    </span>
                  </div>

                  {/* Trend */}
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 text-sm font-medium ${account.theme.trendText} ${account.theme.trendBg} px-2 py-1 rounded-md`}>
                      {isPositive ? (
                        <TrendingUp size={14} />
                      ) : (
                        <TrendingDown size={14} />
                      )}
                      {Math.abs(account.trend).toFixed(2)}%
                    </span>
                    <span className={`text-sm ${account.theme.subtext}`}>{account.trendLabel}</span>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
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
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-slate-400" />
                <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
              </div>
              <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">Last 7d</span>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 text-xs font-medium text-slate-400 uppercase tracking-wider pb-3 border-b border-slate-100">
              <span>Merchant</span>
              <span className="text-center">Trend</span>
              <span className="text-center">Change %</span>
              <span className="text-right">Amount</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-50">
              {transactions.map((tx) => (
                <div key={tx.id} className="grid grid-cols-4 gap-4 py-4 items-center hover:bg-slate-50 -mx-2 px-2 rounded-lg cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{tx.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900 truncate">{tx.merchant.split(' ')[0]}</p>
                      <p className="text-xs text-slate-400">{tx.type}</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <MiniSparkline data={tx.sparkline} positive={tx.change > 0} />
                  </div>
                  <div className="text-center">
                    <span className={`text-sm font-medium ${tx.change > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {tx.change > 0 ? '+' : ''}{tx.change.toFixed(2)}%
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-slate-900">
                      ${tx.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Claims Table */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-slate-400" />
                <h3 className="text-lg font-bold text-slate-900">Pending Claims</h3>
              </div>
              <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-md border border-amber-200">2 Action</span>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 text-xs font-medium text-slate-400 uppercase tracking-wider pb-3 border-b border-slate-100">
              <span>Claim</span>
              <span className="text-center">Status</span>
              <span className="text-center">Change</span>
              <span className="text-right">Amount</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-50">
              {pendingClaims.map((claim) => (
                <div key={claim.id} className="grid grid-cols-4 gap-4 py-4 items-center hover:bg-slate-50 -mx-2 px-2 rounded-lg cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{claim.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900 truncate">{claim.merchant.split(' ')[0]}</p>
                      <p className="text-xs text-slate-400">{claim.type}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${
                      claim.status === 'Action Needed' 
                        ? 'bg-amber-100 text-amber-700 border border-amber-200'
                        : 'bg-blue-50 text-blue-600 border border-blue-200'
                    }`}>
                      {claim.status.split(' ')[0]}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className={`text-sm font-medium ${claim.change > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {claim.change > 0 ? '+' : ''}{claim.change.toFixed(2)}%
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-slate-900">
                      ${claim.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button className="w-full mt-4 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <Receipt size={16} />
              Upload Receipt
            </button>
          </div>

          {/* Quick Actions / Assets Overview */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Quick Actions</h3>
              <button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
                <MoreHorizontal size={18} className="text-slate-400" />
              </button>
            </div>

            {/* Total Overview Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-5 mb-6 border border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Wallet size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">Total Available</p>
                  <p className="text-2xl font-bold text-slate-900">
                    ${showBalances ? totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '•••••'}
                  </p>
                </div>
                <ChevronRight size={20} className="text-slate-300" />
              </div>
            </div>

            {/* Action Items */}
            <div className="space-y-3">
              {[
                { icon: CreditCard, label: 'View Card', desc: 'Manage your benefits card', color: 'from-blue-500 to-indigo-500' },
                { icon: TrendingUp, label: 'Invest HSA', desc: 'Grow your savings', color: 'from-emerald-500 to-teal-500' },
                { icon: Plus, label: 'Contribute', desc: 'Add funds to HSA', color: 'from-amber-500 to-orange-500' },
              ].map((action, i) => (
                <motion.button
                  key={action.label}
                  whileHover={{ x: 4 }}
                  className="w-full flex items-center gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors group text-left"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center`}>
                    <action.icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">{action.label}</p>
                    <p className="text-xs text-slate-400">{action.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
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

