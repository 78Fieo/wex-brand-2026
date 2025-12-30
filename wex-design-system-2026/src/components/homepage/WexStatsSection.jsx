import React, { useState, useEffect, useRef } from 'react';

/**
 * WexStatsSection - Animated Statistics Display
 * 
 * Features:
 * - Animated number counters
 * - Intersection observer for triggering animation
 * - Multiple layout variants
 */
const WexStatsSection = ({ 
  stats = [],
  variant = 'default', // 'default' | 'cards' | 'inline'
  title = null,
  subtitle = null,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ value, suffix = '', prefix = '', duration = 2000 }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));

    useEffect(() => {
      if (!isVisible) return;

      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(numericValue);
          clearInterval(timer);
        } else {
          setDisplayValue(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, numericValue, duration]);

    const formatNumber = (num) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
      }
      return Math.round(num).toLocaleString();
    };

    return (
      <span>
        {prefix}{formatNumber(displayValue)}{suffix}
      </span>
    );
  };

  const StatItem = ({ stat, index }) => (
    <div 
      className={`text-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl md:text-6xl font-bold text-[#172DA1] mb-3 tracking-tight">
        <AnimatedNumber 
          value={stat.value} 
          suffix={stat.suffix || ''} 
          prefix={stat.prefix || ''} 
        />
      </div>
      <div className="text-lg text-[#5D688C] font-medium">{stat.label}</div>
    </div>
  );

  const StatCard = ({ stat, index }) => (
    <div 
      className={`bg-gradient-to-br from-white to-[#F5F8FF] p-8 rounded-3xl border border-[#E1E8FF]/80 shadow-md hover:shadow-xl transition-all text-center group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"></div>
      
      {stat.icon && (
        <div className="w-16 h-16 rounded-2xl bg-[#EDF1FF] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <stat.icon className="w-8 h-8 text-[#172DA1]" strokeWidth={1.5} />
        </div>
      )}
      
      <div className="text-5xl font-bold text-[#172DA1] mb-3 tracking-tight">
        <AnimatedNumber 
          value={stat.value} 
          suffix={stat.suffix || ''} 
          prefix={stat.prefix || ''} 
        />
      </div>
      <div className="text-lg text-[#5D688C] font-medium">{stat.label}</div>
      {stat.description && (
        <div className="text-sm text-[#7A87B2] mt-2">{stat.description}</div>
      )}
    </div>
  );

  // Default variant
  if (variant === 'default') {
    return (
      <section 
        ref={sectionRef}
        className={`py-24 bg-gradient-to-b from-[#FDFDFF] to-[#F0F4FF] ${className}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          {(title || subtitle) && (
            <div className="text-center mb-16">
              {title && (
                <h2 className="text-4xl md:text-5xl font-bold text-[#172DA1] mb-4 tracking-tight">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-xl text-[#5D688C] max-w-2xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Stats Row */}
          <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-8 md:gap-16`}>
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Cards variant
  if (variant === 'cards') {
    return (
      <section 
        ref={sectionRef}
        className={`py-24 bg-gradient-to-b from-[#F0F4FF] to-[#FDFDFF] ${className}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          {(title || subtitle) && (
            <div className="text-center mb-16">
              {title && (
                <h2 className="text-4xl md:text-5xl font-bold text-[#172DA1] mb-4 tracking-tight">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-xl text-[#5D688C] max-w-2xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Stats Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(stats.length, 4)} gap-8`}>
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Inline variant (for hero sections)
  return (
    <div 
      ref={sectionRef}
      className={`flex flex-wrap justify-center gap-8 md:gap-16 ${className}`}
    >
      {stats.map((stat, index) => (
        <div 
          key={index}
          className={`text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="text-4xl font-bold text-white mb-1 tracking-tight">
            <AnimatedNumber 
              value={stat.value} 
              suffix={stat.suffix || ''} 
              prefix={stat.prefix || ''} 
            />
          </div>
          <div className="text-sm text-white/70 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default WexStatsSection;















