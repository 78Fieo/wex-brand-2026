import React from 'react';

/**
 * WexBalanceGauge - HSA/FSA Balance Display
 * Custom SVG donut chart with WEX glass effect styling
 */
const WexBalanceGauge = ({ 
  currentBalance = 2450.50, 
  annualLimit = 3850, 
  accountType = 'HSA',
  size = 200 
}) => {
  const percentage = Math.min((currentBalance / annualLimit) * 100, 100);
  const circumference = 2 * Math.PI * 70; // radius = 70
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      {/* Glass Card Container */}
      <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/30 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
        
        {/* SVG Donut Chart */}
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r="70"
              fill="none"
              stroke="#EDF1FF"
              strokeWidth="12"
            />
            {/* Progress Circle with Gradient */}
            <defs>
              <linearGradient id="balanceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#25146F" />
                <stop offset="50%" stopColor="#172DA1" />
                <stop offset="100%" stopColor="#1C6EFF" />
              </linearGradient>
            </defs>
            <circle
              cx={size / 2}
              cy={size / 2}
              r="70"
              fill="none"
              stroke="url(#balanceGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          
          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-[#172DA1] tracking-tight">
              ${currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-xs font-bold text-[#5D688C] uppercase tracking-wider mt-1">
              {accountType} Balance
            </span>
            <div className="mt-2 px-3 py-1 bg-[#EDF1FF] rounded-full">
              <span className="text-xs font-bold text-[#172DA1]">
                {percentage.toFixed(1)}% of limit
              </span>
            </div>
          </div>
        </div>

        {/* Limit Display */}
        <div className="mt-6 text-center">
          <p className="text-xs text-[#7A87B2] font-medium mb-1">Annual Limit</p>
          <p className="text-lg font-bold text-[#172DA1]">
            ${annualLimit.toLocaleString('en-US')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WexBalanceGauge;


