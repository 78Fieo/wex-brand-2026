import React from 'react';
import { CreditCard, ArrowRight } from 'lucide-react';

/**
 * WexAccountCard - Account Summary Card
 * Displays account information with WEX styling
 */
const WexAccountCard = ({ 
  accountName = 'Health Savings Account',
  accountNumber = '****1234',
  balance = 2450.50,
  availableBalance = 2450.50,
  onClick
}) => {
  return (
    <div 
      className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EDF1FF] to-[#D2DDFF] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <CreditCard className="w-5 h-5 text-[#172DA1]" strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#172DA1]">{accountName}</h4>
            <p className="text-xs text-[#7A87B2] font-medium">{accountNumber}</p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-[#B1C0EE] group-hover:text-[#1C6EFF] group-hover:translate-x-1 transition-all" />
      </div>

      {/* Balance */}
      <div className="relative z-10">
        <p className="text-xs text-[#7A87B2] font-bold uppercase tracking-wider mb-1">Current Balance</p>
        <p className="text-3xl font-bold text-[#172DA1] tracking-tight mb-2">
          ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p className="text-xs text-[#5D688C]">
          ${availableBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })} available
        </p>
      </div>
    </div>
  );
};

export default WexAccountCard;


