import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'primereact/progressbar';

/**
 * WexContributionBar - Progress toward Annual Limit
 * Gradient fill with milestone markers
 */
const WexContributionBar = ({ 
  currentContribution = 2450.50, 
  annualLimit = 3850,
  showMilestones = true
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const percentage = Math.min((currentContribution / annualLimit) * 100, 100);

  useEffect(() => {
    // Animate the progress bar
    const duration = 1000;
    const steps = 60;
    const increment = percentage / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        setDisplayValue(percentage);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [percentage]);

  const milestones = [
    { label: '25%', value: 25 },
    { label: '50%', value: 50 },
    { label: '75%', value: 75 },
    { label: '100%', value: 100 }
  ];

  const remaining = annualLimit - currentContribution;

  return (
    <div className="bg-gradient-to-br from-white to-[#F5F8FF] p-8 rounded-3xl border border-[#E1E8FF]/80 shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      {/* Header */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-bold text-[#172DA1] mb-2">Contribution Progress</h3>
        <p className="text-sm text-[#5D688C]">Annual limit: ${annualLimit.toLocaleString('en-US')}</p>
      </div>

      {/* Progress Bar Container */}
      <div className="relative mb-6">
        {/* Custom Progress Bar */}
        <div className="h-8 bg-[#EDF1FF] rounded-full overflow-hidden relative">
          {/* Gradient Fill */}
          <div 
            className="h-full bg-gradient-to-r from-[#C8102E] via-[#172DA1] to-[#1C6EFF] rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${displayValue}%` }}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
          
          {/* Milestone Markers */}
          {showMilestones && (
            <div className="absolute inset-0 flex items-center justify-between px-1">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="relative"
                  style={{ left: `${milestone.value}%`, transform: 'translateX(-50%)' }}
                >
                  <div 
                    className={`w-0.5 h-8 ${
                      displayValue >= milestone.value ? 'bg-white/40' : 'bg-[#B1C0EE]'
                    }`}
                  ></div>
                  <span 
                    className={`absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-[10px] font-bold ${
                      displayValue >= milestone.value ? 'text-[#172DA1]' : 'text-[#7A87B2]'
                    }`}
                  >
                    {milestone.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Percentage Display */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-bold text-[#172DA1]">
            {percentage.toFixed(1)}% contributed
          </span>
          <span className="text-sm text-[#5D688C]">
            ${remaining.toLocaleString('en-US', { minimumFractionDigits: 2 })} remaining
          </span>
        </div>
      </div>

      {/* Current Contribution Display */}
      <div className="pt-6 border-t border-[#E1E8FF] relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#7A87B2] font-bold uppercase tracking-wider mb-1">Current Contribution</p>
            <p className="text-2xl font-bold text-[#172DA1]">
              ${currentContribution.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#7A87B2] font-bold uppercase tracking-wider mb-1">Remaining</p>
            <p className="text-2xl font-bold text-[#172DA1]">
              ${remaining.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WexContributionBar;


