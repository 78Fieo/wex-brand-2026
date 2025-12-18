import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

/**
 * WexCTASection - Call to Action Section
 * 
 * Variants:
 * - 'gradient': Full gradient background
 * - 'split': Two-column with image
 * - 'minimal': Simple centered CTA
 * - 'card': Floating card style
 */
const WexCTASection = ({ 
  variant = 'gradient',
  headline = 'Ready to get started?',
  subheadline = 'Join thousands of businesses simplifying their operations with WEX.',
  primaryCTA = { label: 'Contact Sales', onClick: () => {} },
  secondaryCTA = null,
  showContactInfo = false,
  image = null,
  className = ''
}) => {
  // Gradient variant
  if (variant === 'gradient') {
    return (
      <section className={`relative py-24 overflow-hidden ${className}`}>
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E0055] via-[#172DA1] to-[#C8102E]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1C6EFF]/10 to-transparent mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FFBC00]/20 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#C8102E]/30 to-transparent rounded-full blur-[80px]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {headline}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={primaryCTA.onClick}
              className="group bg-white text-[#172DA1] px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:bg-[#EDF1FF] transition-all flex items-center gap-3"
            >
              {primaryCTA.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            {secondaryCTA && (
              <button 
                onClick={secondaryCTA.onClick}
                className="px-8 py-4 rounded-full text-lg font-bold border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all"
              >
                {secondaryCTA.label}
              </button>
            )}
          </div>

          {showContactInfo && (
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
              <a href="tel:+1-800-WEX-HELP" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" /> 1-800-WEX-HELP
              </a>
              <a href="mailto:sales@wex.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" /> sales@wex.com
              </a>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Card variant
  if (variant === 'card') {
    return (
      <section className={`py-24 ${className}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#25146F] to-[#1E105A] rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#1C6EFF]/30 to-transparent rounded-full blur-[60px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#C8102E]/30 to-transparent rounded-full blur-[60px]"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {headline}
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
                {subheadline}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={primaryCTA.onClick}
                  className="group bg-gradient-to-r from-[#C8102E] to-[#FF032B] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:shadow-[#C8102E]/40 transition-all flex items-center gap-3"
                >
                  {primaryCTA.label}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                {secondaryCTA && (
                  <button 
                    onClick={secondaryCTA.onClick}
                    className="px-8 py-4 rounded-full text-lg font-bold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all"
                  >
                    {secondaryCTA.label}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Minimal variant
  if (variant === 'minimal') {
    return (
      <section className={`py-24 bg-[#FDFDFF] ${className}`}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#172DA1] mb-6 tracking-tight">
            {headline}
          </h2>
          <p className="text-xl text-[#5D688C] mb-10 leading-relaxed">
            {subheadline}
          </p>
          <button 
            onClick={primaryCTA.onClick}
            className="group bg-gradient-to-r from-[#C8102E] to-[#FF032B] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:shadow-[#C8102E]/30 transition-all flex items-center gap-3 mx-auto"
          >
            {primaryCTA.label}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    );
  }

  // Split variant (default)
  return (
    <section className={`py-24 bg-gradient-to-b from-[#FDFDFF] to-[#F0F4FF] ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#172DA1] mb-6 tracking-tight">
              {headline}
            </h2>
            <p className="text-xl text-[#5D688C] mb-10 leading-relaxed">
              {subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={primaryCTA.onClick}
                className="group bg-gradient-to-r from-[#C8102E] to-[#FF032B] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:shadow-[#C8102E]/30 transition-all flex items-center gap-3"
              >
                {primaryCTA.label}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {secondaryCTA && (
                <button 
                  onClick={secondaryCTA.onClick}
                  className="px-8 py-4 rounded-full text-lg font-bold border-2 border-[#172DA1] text-[#172DA1] hover:bg-[#172DA1] hover:text-white transition-all"
                >
                  {secondaryCTA.label}
                </button>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {image ? (
              <img src={image} alt="CTA" className="w-full rounded-3xl shadow-xl" />
            ) : (
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#EDF1FF] to-[#D2DDFF] flex items-center justify-center">
                <div className="text-[#B1C0EE] text-center">
                  <div className="w-24 h-24 rounded-2xl bg-white/50 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-12 h-12" />
                  </div>
                  <p className="font-medium">Image placeholder</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WexCTASection;













