import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

/**
 * WexKPICard - Dashboard Stat Card with Animated Counter
 * Combines existing stat card pattern with animations
 */
const WexKPICard = ({ 
  title = 'Total Balance',
  value = 24500.23,
  trend = 'up',
  trendValue = 12,
  icon: Icon,
  iconColor = '#1C6EFF',
  delay = 0
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  const formatValue = (val) => {
    if (val >= 1000) {
      return `$${(val / 1000).toFixed(1)}K`;
    }
    return `$${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="p-6 rounded-2xl border border-[#E1E8FF]/80 bg-white shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <p className="text-xs text-[#7A87B2] font-bold uppercase tracking-wider">{title}</p>
        {Icon && (
          <div 
            className="p-2 rounded-full transition-colors"
            style={{ backgroundColor: `${iconColor}15` }}
          >
            <Icon className="w-4 h-4" style={{ color: iconColor }} />
          </div>
        )}
      </div>

      {/* Value */}
      <p className="text-4xl font-bold text-[#172DA1] tracking-tight mb-3 relative z-10">
        {formatValue(displayValue)}
      </p>

      {/* Trend Indicator */}
      {trend && (
        <div className={`mt-3 flex items-center text-sm font-bold py-1 px-2 rounded-full inline-flex relative z-10 ${
          trend === 'up' 
            ? 'text-green-600 bg-green-50' 
            : 'text-red-600 bg-red-50'
        }`}>
          {trend === 'up' ? (
            <ArrowUp className="w-4 h-4 -rotate-45 mr-1" strokeWidth={2.5} />
          ) : (
            <ArrowDown className="w-4 h-4 rotate-45 mr-1" strokeWidth={2.5} />
          )}
          {Math.abs(trendValue)}% this month
        </div>
      )}
    </div>
  );
};

export default WexKPICard;


