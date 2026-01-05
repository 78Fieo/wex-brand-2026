import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Search, Bell, ChevronRight, 
  CheckCircle2, CreditCard, TrendingUp, 
  Wallet, Zap, ArrowRight, ArrowUpRight,
  Heart, Car, Briefcase, Eye, EyeOff, Shield,
  Receipt, MessageCircle, Clock, Mic,
  PiggyBank
} from 'lucide-react';
import wexLogoRed from '../assets/wex_logo_red.svg';

/**
 * BenefitsDashboardV5_2_1 - Draft V2.1 (Brand Aligned)
 * Premium Executive Dashboard - Now aligned with WEX Brand 2026 Design System
 * 
 * Brand Colors Applied:
 * - Primary: #C8102E (WEX Red)
 * - Secondary: #172DA1 (WEX Blue - main text)
 * - Accent: #1C6EFF (Blue accent)
 * - Success: #00C48C
 * - Warning: #FFBC00 (WEX Yellow)
 * - Surfaces: Blue-tinted (#FDFDFF, #F5F8FF)
 * - Shadows: Blue-based rgba(23, 45, 161, 0.XX)
 */

// WEX Brand Color Constants
const BRAND = {
  red: '#C8102E',
  redLight: '#FF032B',
  redGlow: 'rgba(200, 16, 46, 0.3)',
  blue: '#172DA1',
  blueAccent: '#1C6EFF',
  blueDeep: '#25146F',
  purpleDark: '#1E105A',
  yellow: '#FFBC00',
  success: '#00C48C',
  // Surfaces
  surfaceGround: '#FDFDFF',
  surfaceSection: '#F5F8FF',
  surfaceHover: '#EDF1FF',
  // Text
  textPrimary: '#172DA1',
  textSecondary: '#5D688C',
  textMuted: '#7A87B2',
  textDisabled: '#B1C0EE',
  // Borders
  border: '#E1E8FF',
  borderSubtle: 'rgba(225, 232, 255, 0.8)',
  // Shadows (blue-tinted)
  shadowSm: '0 2px 4px rgba(23, 45, 161, 0.08)',
  shadow: '0 4px 12px rgba(23, 45, 161, 0.12)',
  shadowMd: '0 8px 24px rgba(23, 45, 161, 0.15)',
  shadowLg: '0 12px 40px rgba(23, 45, 161, 0.18)',
  shadowWexOmbre: '0 8px 30px -8px rgba(23, 45, 161, 0.18), 0 4px 20px -4px rgba(200, 16, 46, 0.12)',
};

// Mini Sparkline Component
const Sparkline = ({ data, color = BRAND.success, height = 32, width = 80 }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height * 0.8 - height * 0.1;
    return `${x},${y}`;
  }).join(' ');

  const gradientId = `sparkline-${color.replace('#', '')}`;

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points={`0,${height} ${points} ${width},${height}`}
        fill={`url(#${gradientId})`}
      />
      <circle
        cx={width}
        cy={parseFloat(points.split(' ').pop().split(',')[1])}
        r="3"
        fill={color}
      />
    </svg>
  );
};

const BenefitsDashboardV5_2_1 = () => {
  const [filed, setFiled] = useState(false);
  const [showBalances, setShowBalances] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const date = currentTime.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric'
  });
  
  const userName = "Sarah";
  
  // Account data with brand-aligned colors
  const accounts = [
    { 
      name: 'HSA', 
      fullName: 'Health Savings Account',
      balance: 4847.12,
      trend: '+12.4%', 
      trendUp: true,
      icon: <Heart size={22} strokeWidth={2} />,
      color: BRAND.success, // WEX Success Green
      lightColor: '#E6FBF5',
      sub: '$2,100 invested',
      progress: 72,
      progressLabel: 'Annual limit',
      sparkData: [3200, 3400, 3100, 3800, 4200, 4100, 4500, 4847],
      limit: '$8,300'
    },
    { 
      name: 'FSA', 
      fullName: 'Flexible Spending Account',
      balance: 1200.00,
      trend: '13 days left', 
      trendUp: false,
      icon: <Briefcase size={22} strokeWidth={2} />,
      color: BRAND.blueAccent, // WEX Blue Accent
      lightColor: '#E8F2FF',
      sub: '2 pending claims',
      progress: 45,
      progressLabel: 'Remaining',
      sparkData: [2750, 2600, 2400, 2200, 1900, 1600, 1400, 1200],
      limit: '$2,750'
    },
    { 
      name: 'Commuter', 
      fullName: 'Transit & Parking',
      balance: 240.00,
      trend: 'Active', 
      trendUp: true,
      icon: <Car size={22} strokeWidth={2} />,
      color: BRAND.yellow, // WEX Yellow
      lightColor: '#FFF8E6',
      sub: 'Reloads Jan 1',
      progress: 60,
      progressLabel: 'Monthly balance',
      sparkData: [300, 280, 320, 300, 250, 280, 260, 240],
      limit: '$300/mo'
    },
  ];

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  const recentActivity = [
    { 
      id: 1, 
      merchant: 'Walgreens Pharmacy', 
      category: 'Prescription',
      amount: 42.50, 
      status: 'approved', 
      type: 'FSA', 
      date: 'Today, 2:34 PM',
      icon: '💊'
    },
    { 
      id: 2, 
      merchant: 'Dental Excellence', 
      category: 'Dental Care',
      amount: 340.00, 
      status: 'action', 
      type: 'FSA', 
      date: 'Yesterday',
      icon: '🦷',
      message: 'Receipt required'
    },
    { 
      id: 3, 
      merchant: 'Vanguard Investment', 
      category: 'HSA Investment',
      amount: 500.00, 
      status: 'completed', 
      type: 'HSA', 
      date: 'Dec 14',
      icon: '📈'
    },
    { 
      id: 4, 
      merchant: 'CVS Health', 
      category: 'Medical Supplies',
      amount: 28.99, 
      status: 'approved', 
      type: 'HSA', 
      date: 'Dec 12',
      icon: '🩹'
    },
  ];

  const quickActions = [
    { id: 'file', label: 'File a Claim', icon: <Receipt size={20} />, color: BRAND.red, desc: 'Submit receipt' },
    { id: 'card', label: 'Manage Card', icon: <CreditCard size={20} />, color: BRAND.blueAccent, desc: 'Card settings' },
    { id: 'invest', label: 'Invest HSA', icon: <TrendingUp size={20} />, color: BRAND.success, desc: 'Grow savings' },
    { id: 'add', label: 'Contribute', icon: <PiggyBank size={20} />, color: BRAND.yellow, desc: 'Add funds' },
  ];

  const insights = [
    { label: 'Tax savings YTD', value: '$1,847', trend: '+23%' },
    { label: 'Claims this month', value: '4', trend: 'normal' },
    { label: 'Invested balance', value: '$2,100', trend: '+8.4%' },
  ];

  const formatCurrency = (amount) => {
    if (!showBalances) return '••••••';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div 
      className="min-h-screen overflow-x-hidden selection:bg-[#FFE5E9]"
      style={{ 
        fontFamily: "'Inter', system-ui, sans-serif",
        backgroundColor: BRAND.surfaceGround,
        color: BRAND.textPrimary
      }}
    >
      
      {/* Inter Font from Google */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .wex-card {
          background: linear-gradient(135deg, #FFFFFF, ${BRAND.surfaceSection});
          border: 1px solid ${BRAND.border};
          box-shadow: ${BRAND.shadow};
        }

        .wex-card:hover {
          box-shadow: ${BRAND.shadowMd};
        }

        .wex-glass {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid ${BRAND.borderSubtle};
        }

        .wex-dark-surface {
          background: linear-gradient(to bottom right, ${BRAND.blueDeep}, ${BRAND.purpleDark});
        }

        .wex-primary-button {
          background: linear-gradient(to right, ${BRAND.red}, ${BRAND.redLight});
          box-shadow: 0 4px 12px ${BRAND.redGlow};
        }

        .wex-primary-button:hover {
          background: linear-gradient(to right, ${BRAND.redLight}, #FF3355);
          box-shadow: 0 6px 20px ${BRAND.redGlow};
        }

        .wex-text-link {
          color: ${BRAND.red};
        }

        .wex-text-link:hover {
          color: ${BRAND.redLight};
        }
      `}</style>

      {/* Background with brand-aligned colors */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Base gradient */}
        <div 
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, ${BRAND.surfaceGround}, ${BRAND.surfaceSection})` }}
        />
        
        {/* Decorative glow orbs - brand colors */}
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: `linear-gradient(to bottom left, rgba(28, 110, 255, 0.15), transparent)` }}
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: `linear-gradient(to top right, rgba(200, 16, 46, 0.1), transparent)` }}
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 7 }}
          className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: `linear-gradient(to bottom left, rgba(255, 188, 0, 0.15), transparent)` }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${BRAND.border}40 1px, transparent 1px),
              linear-gradient(to bottom, ${BRAND.border}40 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16 xl:px-24 py-6 pb-24 max-w-[1600px] mx-auto">
        
        {/* === NAVIGATION === */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-12"
        >
          {/* Logo & Branding */}
          <div className="flex items-center gap-5">
            <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
              <img src={wexLogoRed} alt="WEX" className="h-7" />
            </motion.div>
            <div className="hidden md:flex items-center">
              <div 
                className="h-8 w-px mx-4"
                style={{ background: `linear-gradient(to bottom, transparent, ${BRAND.border}, transparent)` }}
              />
              <div>
                <p 
                  className="text-[10px] font-bold tracking-[0.3em] uppercase"
                  style={{ color: BRAND.textMuted }}
                >
                  Benefits Hub
                </p>
                <p 
                  className="text-sm font-semibold -mt-0.5"
                  style={{ color: BRAND.textSecondary }}
                >
                  Personal Dashboard
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Nav */}
          <div className="flex items-center gap-3">
            {/* Time & Date */}
            <div className="hidden lg:flex flex-col items-end mr-4">
              <span className="text-xs font-medium" style={{ color: BRAND.textMuted }}>{date}</span>
              <span className="text-sm font-bold" style={{ color: BRAND.textSecondary }}>{formatTime()}</span>
            </div>

            {/* Search */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="hidden md:flex items-center gap-2 px-4 py-2.5 wex-glass rounded-xl hover:shadow-sm transition-all cursor-pointer"
            >
              <Search size={15} style={{ color: BRAND.textMuted }} />
              <span className="text-sm" style={{ color: BRAND.textMuted }}>Search...</span>
              <kbd 
                className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold"
                style={{ 
                  backgroundColor: BRAND.surfaceSection, 
                  color: BRAND.textMuted,
                  border: `1px solid ${BRAND.border}`
                }}
              >
                ⌘K
              </kbd>
            </motion.div>
            
            {/* Notifications */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 rounded-xl wex-glass flex items-center justify-center hover:shadow-sm transition-all group"
            >
              <Bell size={16} style={{ color: BRAND.textSecondary }} className="group-hover:opacity-80 transition-colors" />
              <span 
                className="absolute top-2 right-2 w-2 h-2 rounded-full ring-2 ring-white"
                style={{ backgroundColor: BRAND.red }}
              />
            </motion.button>

            <div className="h-8 w-px mx-1" style={{ backgroundColor: BRAND.border }} />
            
            {/* Profile */}
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold transition-colors" style={{ color: BRAND.textPrimary }}>{userName} Jenkins</p>
                <p className="text-[10px] font-medium flex items-center justify-end gap-1" style={{ color: BRAND.success }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: BRAND.success }} />
                  Premium Member
                </p>
              </div>
              <div className="relative">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center wex-dark-surface"
                  style={{ boxShadow: BRAND.shadowMd }}
                >
                  <span className="text-sm font-bold text-white">SJ</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.nav>

        <main className="space-y-10">
          
          {/* === HERO SECTION - Asymmetric Layout === */}
          <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start"
          >
            {/* Left: Greeting & AI Card */}
            <div>
              {/* AI Badge - Brand aligned */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full mb-6 wex-dark-surface"
              >
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 rounded-md flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${BRAND.blueAccent}, ${BRAND.red})` }}
                >
                  <Sparkles size={10} className="text-white" />
                </motion.div>
                <span className="text-[11px] font-bold tracking-wider text-white/90 uppercase">AI Assistant Active</span>
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: BRAND.success }}
                />
              </motion.div>
              
              {/* Greeting - Using brand blue for text */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mb-8"
              >
                <h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
                  style={{ color: BRAND.blue }}
                >
                  {getGreeting()},
                  <br />
                  <span className="relative inline-block">
                    <span>{userName}</span>
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-1 rounded-full"
                      style={{ background: `linear-gradient(to right, ${BRAND.red}, ${BRAND.redLight})` }}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                </h1>
                <p className="text-lg mt-4 max-w-md" style={{ color: BRAND.textSecondary }}>
                  Here's your benefits overview for today. Everything looks healthy.
                </p>
              </motion.div>

              {/* AI Insight Card - Brand aligned */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                {/* Glow effect with brand colors */}
                <div 
                  className="absolute -inset-1 rounded-[28px] blur-xl opacity-50"
                  style={{ background: `linear-gradient(135deg, rgba(28, 110, 255, 0.2), rgba(200, 16, 46, 0.15))` }}
                />
                
                <div className="relative wex-card rounded-[24px] p-6">
                  <div className="flex gap-4 mb-6">
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ 
                        background: `linear-gradient(135deg, ${BRAND.blueAccent}, ${BRAND.blue})`,
                        boxShadow: `0 8px 16px rgba(28, 110, 255, 0.3)`
                      }}
                    >
                      <Zap size={22} className="text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <p 
                        className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1"
                        style={{ color: BRAND.blueAccent }}
                      >
                        Smart Insight
                      </p>
                      <p className="text-xl leading-snug" style={{ color: BRAND.textSecondary }}>
                        Found a{' '}
                        <span 
                          className="inline-flex items-center font-bold px-2.5 py-0.5 rounded-lg"
                          style={{ 
                            color: BRAND.blue,
                            backgroundColor: BRAND.surfaceSection,
                            border: `1px solid ${BRAND.border}`
                          }}
                        >
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
                        className="flex flex-wrap gap-3"
                      >
                        <motion.button 
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFiled(true)}
                          className="wex-primary-button text-white px-6 py-3.5 rounded-xl font-bold transition-all"
                        >
                          <span className="flex items-center gap-2">
                            File Claim Instantly
                            <ArrowUpRight size={16} />
                          </span>
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-3.5 rounded-xl font-semibold transition-all"
                          style={{ 
                            color: BRAND.textSecondary,
                            backgroundColor: 'white',
                            border: `1px solid ${BRAND.border}`
                          }}
                        >
                          View Details
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-4 p-5 rounded-xl"
                        style={{ 
                          background: `linear-gradient(135deg, #E6FBF5, #D4F7ED)`,
                          border: `1px solid ${BRAND.success}40`
                        }}
                      >
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ 
                            backgroundColor: BRAND.success,
                            boxShadow: `0 8px 16px rgba(0, 196, 140, 0.3)`
                          }}
                        >
                          <CheckCircle2 size={24} className="text-white" />
                        </motion.div>
                        <div>
                          <p className="font-bold mb-0.5" style={{ color: BRAND.success }}>Claim Filed Successfully!</p>
                          <p style={{ color: BRAND.textSecondary }} className="text-sm">Claim #9482 • Estimated processing: 2-3 days</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Right: Total Balance & Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:pt-6"
            >
              {/* Total Balance Card - Deep Purple gradient */}
              <div className="relative mb-6">
                <div 
                  className="absolute -inset-1 rounded-[28px] blur-sm"
                  style={{ background: `linear-gradient(135deg, ${BRAND.blueDeep}, ${BRAND.purpleDark})` }}
                />
                <div 
                  className="relative wex-dark-surface rounded-[24px] p-6 text-white overflow-hidden"
                >
                  {/* Decorative elements */}
                  <div 
                    className="absolute top-0 right-0 w-64 h-64 rounded-full blur-2xl"
                    style={{ background: `linear-gradient(to bottom left, rgba(28, 110, 255, 0.2), transparent)` }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-2xl"
                    style={{ background: `linear-gradient(to top right, rgba(200, 16, 46, 0.15), transparent)` }}
                  />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1">Total Balance</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold tracking-tight">
                            {showBalances ? '$' : ''}
                            {showBalances ? totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 }).split('.')[0] : '••••••'}
                          </span>
                          <span className="text-xl text-white/50">
                            {showBalances ? '.' + totalBalance.toFixed(2).split('.')[1] : ''}
                          </span>
                        </div>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowBalances(!showBalances)}
                        className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      >
                        {showBalances ? <Eye size={16} /> : <EyeOff size={16} />}
                      </motion.button>
                    </div>
                    
                    {/* Mini insights row */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                      {insights.map((insight, i) => (
                        <div key={i} className="text-center">
                          <p className="text-[10px] text-white/50 mb-0.5">{insight.label}</p>
                          <p className="text-sm font-bold">{showBalances ? insight.value : '••••'}</p>
                          {insight.trend !== 'normal' && (
                            <span className="text-[10px] font-medium" style={{ color: BRAND.success }}>{insight.trend}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Grid */}
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, i) => (
                  <motion.button
                    key={action.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden p-4 wex-card rounded-2xl transition-all text-left"
                  >
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                      style={{ 
                        backgroundColor: `${action.color}15`,
                        color: action.color
                      }}
                    >
                      {action.icon}
                    </div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: BRAND.textPrimary }}>{action.label}</p>
                    <p className="text-xs" style={{ color: BRAND.textMuted }}>{action.desc}</p>
                    <ChevronRight 
                      size={16} 
                      className="absolute bottom-4 right-4 group-hover:translate-x-1 transition-all" 
                      style={{ color: BRAND.textDisabled }}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* === AI INPUT === */}
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="relative max-w-3xl">
              <motion.div 
                className="absolute -inset-2 rounded-full blur-2xl"
                style={{ background: `linear-gradient(to right, rgba(28, 110, 255, 0.15), rgba(200, 16, 46, 0.1))` }}
                animate={{ opacity: inputFocused ? 0.8 : 0.3 }}
              />
              <div 
                className="relative wex-glass rounded-2xl p-2 transition-all"
                style={{ 
                  borderColor: inputFocused ? BRAND.blueAccent : BRAND.borderSubtle,
                  boxShadow: inputFocused ? `0 0 0 2px rgba(28, 110, 255, 0.2)` : 'none'
                }}
              >
                <div className="flex items-center gap-3 px-4 py-2">
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ 
                      backgroundColor: BRAND.surfaceSection,
                      border: `1px solid ${BRAND.border}`
                    }}
                  >
                    <MessageCircle size={16} style={{ color: BRAND.textMuted }} />
                  </div>
                  <input 
                    type="text"
                    placeholder="Ask anything about your benefits, claims, or coverage..."
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    className="flex-1 bg-transparent focus:outline-none text-sm"
                    style={{ color: BRAND.textPrimary }}
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: BRAND.surfaceSection }}
                  >
                    <Mic size={16} style={{ color: BRAND.textSecondary }} />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="wex-primary-button text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors"
                  >
                    Ask <ArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* === ACCOUNTS SECTION === */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>Your Accounts</h2>
                <p className="text-sm mt-0.5" style={{ color: BRAND.textMuted }}>Track balances across all benefit types</p>
              </div>
              <button 
                className="text-sm font-semibold transition-colors flex items-center gap-1.5 px-4 py-2 rounded-xl wex-glass"
                style={{ color: BRAND.textSecondary }}
              >
                View All <ChevronRight size={14} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {accounts.map((acc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  onHoverStart={() => setHoveredCard(i)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative"
                >
                  {/* Hover glow */}
                  <motion.div 
                    className="absolute -inset-2 rounded-[28px] blur-xl"
                    style={{ backgroundColor: `${acc.color}20` }}
                    animate={{ opacity: hoveredCard === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative wex-card p-5 rounded-[22px] transition-all overflow-hidden">
                    {/* Background decoration */}
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-50"
                      style={{ backgroundColor: acc.lightColor }}
                    />
                    
                    <div className="relative">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-11 h-11 rounded-xl flex items-center justify-center"
                            style={{ 
                              backgroundColor: acc.color,
                              boxShadow: `0 8px 16px ${acc.color}40`
                            }}
                          >
                            <span className="text-white">{acc.icon}</span>
                          </div>
                          <div>
                            <p className="font-bold" style={{ color: BRAND.textPrimary }}>{acc.name}</p>
                            <p className="text-[11px]" style={{ color: BRAND.textMuted }}>{acc.fullName}</p>
                          </div>
                        </div>
                        <span 
                          className="text-[10px] font-bold px-2.5 py-1 rounded-lg"
                          style={{ 
                            backgroundColor: acc.trendUp ? `${BRAND.success}15` : `${BRAND.yellow}15`,
                            color: acc.trendUp ? BRAND.success : BRAND.yellow
                          }}
                        >
                          {acc.trend}
                        </span>
                      </div>
                      
                      {/* Balance with Sparkline */}
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <p className="text-3xl font-bold tracking-tight" style={{ color: BRAND.textPrimary }}>
                            {formatCurrency(acc.balance)}
                          </p>
                          <p className="text-xs mt-1" style={{ color: BRAND.textMuted }}>{acc.sub}</p>
                        </div>
                        <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                          <Sparkline 
                            data={acc.sparkData} 
                            color={acc.color}
                            width={70}
                            height={28}
                          />
                        </div>
                      </div>
                      
                      {/* Progress */}
                      <div className="pt-3" style={{ borderTop: `1px solid ${BRAND.border}` }}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[11px]" style={{ color: BRAND.textMuted }}>{acc.progressLabel}</span>
                          <span className="text-[11px] font-bold" style={{ color: BRAND.textSecondary }}>{acc.progress}% • {acc.limit}</span>
                        </div>
                        <div 
                          className="h-1.5 rounded-full overflow-hidden"
                          style={{ backgroundColor: BRAND.surfaceSection }}
                        >
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${acc.progress}%` }}
                            transition={{ duration: 1.2, delay: 1 + i * 0.15, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: acc.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* === ACTIVITY SECTION === */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>Recent Activity</h2>
                <p className="text-sm mt-0.5" style={{ color: BRAND.textMuted }}>Latest transactions and claims</p>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                  style={{ 
                    backgroundColor: `${BRAND.success}10`,
                    border: `1px solid ${BRAND.success}30`
                  }}
                >
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: BRAND.success }}
                  />
                  <span className="text-xs font-bold" style={{ color: BRAND.success }}>Live Updates</span>
                </div>
                <button 
                  className="text-sm font-semibold transition-colors flex items-center gap-1.5 wex-text-link"
                >
                  See All <ChevronRight size={14} />
                </button>
              </div>
            </div>
            
            <div 
              className="wex-card rounded-2xl overflow-hidden"
              style={{ borderColor: BRAND.border }}
            >
              {recentActivity.map((item, i) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.15 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-4 cursor-pointer transition-all group"
                  style={{ 
                    borderBottom: i < recentActivity.length - 1 ? `1px solid ${BRAND.border}` : 'none',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = BRAND.surfaceHover}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-lg"
                      style={{ 
                        backgroundColor: item.status === 'action' ? `${BRAND.yellow}20` : BRAND.surfaceSection,
                        border: item.status === 'action' ? `2px solid ${BRAND.yellow}` : 'none'
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold mb-0.5" style={{ color: BRAND.textPrimary }}>{item.merchant}</p>
                      <div className="flex items-center gap-2 text-xs" style={{ color: BRAND.textMuted }}>
                        <span 
                          className="px-1.5 py-0.5 rounded text-[10px] font-medium"
                          style={{ backgroundColor: BRAND.surfaceSection }}
                        >
                          {item.type}
                        </span>
                        <span>{item.category}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right min-w-[90px]">
                      <p className="font-bold mb-0.5" style={{ color: BRAND.textPrimary }}>{formatCurrency(item.amount)}</p>
                      {item.message ? (
                        <span 
                          className="text-[10px] font-medium px-2 py-0.5 rounded"
                          style={{ 
                            backgroundColor: `${BRAND.yellow}15`,
                            color: BRAND.yellow
                          }}
                        >
                          {item.message}
                        </span>
                      ) : (
                        <p 
                          className="text-[10px] font-bold uppercase tracking-wider"
                          style={{ 
                            color: item.status === 'action' ? BRAND.yellow : 
                                   item.status === 'approved' ? BRAND.success : BRAND.textMuted
                          }}
                        >
                          {item.status === 'action' ? 'Action Needed' : 
                           item.status === 'approved' ? 'Approved' : 'Completed'}
                        </p>
                      )}
                    </div>
                    <ChevronRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-all mr-1" 
                      style={{ color: BRAND.textDisabled }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </main>

        {/* === FOOTER === */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16 pt-6 pb-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${BRAND.border}` }}
        >
          <div className="flex items-center gap-3 text-sm" style={{ color: BRAND.textMuted }}>
            <Shield size={14} style={{ color: BRAND.success }} />
            <span>Bank-level security</span>
            <span style={{ color: BRAND.textDisabled }}>•</span>
            <span>256-bit encryption</span>
          </div>
          <div className="flex items-center gap-8">
            <button className="text-sm transition-colors" style={{ color: BRAND.textMuted }}>Help & Support</button>
            <button className="text-sm transition-colors" style={{ color: BRAND.textMuted }}>Privacy Policy</button>
            <button className="text-sm transition-colors wex-text-link font-semibold">Terms of Service</button>
          </div>
        </motion.footer>

      </div>
    </div>
  );
};

export default BenefitsDashboardV5_2_1;
