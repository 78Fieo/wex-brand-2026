import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

/**
 * WexHero - Hero Section Component
 * Features gradient background, headline, subheadline, and CTAs
 * 
 * Variants:
 * - 'default': Purple-to-blue-to-red gradient (brand hero)
 * - 'light': Light surface with accent gradients
 * - 'dark': Deep blue/purple dark theme
 */
const WexHero = ({ 
  variant = 'default',
  headline = 'Simplifying the business of running a business.',
  subheadline = 'WEX is the global commerce platform that helps businesses manage their fleet, corporate payments, and health benefits with effortless solutions.',
  primaryCTA = { label: 'Get Started', onClick: () => {} },
  secondaryCTA = { label: 'Watch Demo', onClick: () => {} },
  showSecondaryAsPill = false,
  children,
  className = ''
}) => {
  const variants = {
    default: {
      bg: 'bg-gradient-to-br from-[#2E0055] via-[#172DA1] to-[#C8102E]',
      textPrimary: 'text-white',
      textSecondary: 'text-white/80',
      overlay: true
    },
    light: {
      bg: 'bg-gradient-to-b from-[#FDFDFF] to-[#F0F4FF]',
      textPrimary: 'text-[#172DA1]',
      textSecondary: 'text-[#5D688C]',
      overlay: false
    },
    dark: {
      bg: 'bg-gradient-to-br from-[#25146F] to-[#1E105A]',
      textPrimary: 'text-white',
      textSecondary: 'text-white/70',
      overlay: true
    }
  };

  const v = variants[variant] || variants.default;

  return (
    <section className={`relative min-h-[600px] flex items-center overflow-hidden ${v.bg} ${className}`}>
      {/* Overlay Effects */}
      {v.overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1C6EFF]/10 to-transparent mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FFBC00]/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#C8102E]/30 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
        </>
      )}
      
      {/* Light variant decorative elements */}
      {variant === 'light' && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1C6EFF]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#C8102E]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow/Badge */}
          <div className="mb-6">
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
              variant === 'light' 
                ? 'bg-[#EDF1FF] text-[#172DA1]' 
                : 'bg-white/10 text-white backdrop-blur-sm border border-white/20'
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#00C48C] animate-pulse"></span>
              Now Available: Health Benefits 2.0
            </span>
          </div>

          {/* Headline */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 ${v.textPrimary}`}>
            {headline}
          </h1>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl ${v.textSecondary}`}>
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <button 
              onClick={primaryCTA.onClick}
              className="group bg-gradient-to-r from-[#C8102E] to-[#FF032B] hover:from-[#FF032B] hover:to-[#FF3355] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:shadow-[#C8102E]/30 transition-all flex items-center gap-3"
            >
              {primaryCTA.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            {showSecondaryAsPill ? (
              <button 
                onClick={secondaryCTA.onClick}
                className={`group flex items-center gap-3 px-6 py-4 rounded-full text-lg font-bold transition-all ${
                  variant === 'light'
                    ? 'text-[#172DA1] hover:bg-[#EDF1FF]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  variant === 'light'
                    ? 'bg-[#EDF1FF] group-hover:bg-[#172DA1] group-hover:text-white'
                    : 'bg-white/10 group-hover:bg-white/20'
                }`}>
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                </div>
                {secondaryCTA.label}
              </button>
            ) : (
              <button 
                onClick={secondaryCTA.onClick}
                className={`px-8 py-4 rounded-full text-lg font-bold border-2 transition-all ${
                  variant === 'light'
                    ? 'border-[#172DA1] text-[#172DA1] hover:bg-[#172DA1] hover:text-white'
                    : 'border-white/40 text-white hover:bg-white/10 hover:border-white'
                }`}
              >
                {secondaryCTA.label}
              </button>
            )}
          </div>

          {/* Optional children for additional content */}
          {children && (
            <div className="mt-12">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WexHero;













