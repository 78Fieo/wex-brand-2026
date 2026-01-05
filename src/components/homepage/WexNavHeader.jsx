import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import wexLogoRed from '../../assets/wex_logo_red.svg';
import wexLogoWhite from '../../assets/wex_logo_white.svg';

/**
 * WexNavHeader - Main Navigation Header
 * 
 * Features:
 * - Sticky header with blur effect
 * - Mobile responsive menu
 * - Dropdown support
 * - Scroll-based styling changes
 */
const WexNavHeader = ({ 
  variant = 'default', // 'default' | 'transparent' | 'dark'
  navItems = [],
  primaryCTA = { label: 'Talk to Sales', onClick: () => {} },
  secondaryCTA = { label: 'Sign In', onClick: () => {} },
  logo = null,
  className = ''
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultNavItems = [
    { label: 'Solutions', href: '#', hasDropdown: true },
    { label: 'Industries', href: '#', hasDropdown: true },
    { label: 'Resources', href: '#' },
    { label: 'About', href: '#' }
  ];

  const items = navItems.length > 0 ? navItems : defaultNavItems;

  const getVariantStyles = () => {
    if (variant === 'transparent' && !isScrolled) {
      return {
        bg: 'bg-transparent',
        text: 'text-white',
        textHover: 'hover:text-white/80',
        border: 'border-transparent',
        logo: 'text-white'
      };
    }
    if (variant === 'dark') {
      return {
        bg: 'bg-[#172DA1]',
        text: 'text-white',
        textHover: 'hover:text-white/80',
        border: 'border-[#1C6EFF]/30',
        logo: 'text-white'
      };
    }
    return {
      bg: 'bg-white/80 backdrop-blur-xl',
      text: 'text-[#5D688C]',
      textHover: 'hover:text-[#172DA1]',
      border: 'border-[#E1E8FF]/60',
      logo: 'text-[#C8102E]'
    };
  };

  const styles = getVariantStyles();

  return (
    <>
      <nav className={`sticky top-0 z-50 ${styles.bg} border-b ${styles.border} shadow-sm transition-all duration-300 ${className}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <img 
                src={(variant === 'transparent' && !isScrolled) || variant === 'dark' ? wexLogoWhite : wexLogoRed}
                alt="WEX Logo"
                className="h-6 group-hover:opacity-80 transition-opacity"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10 text-sm font-medium">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className={`flex items-center gap-1 ${styles.text} ${styles.textHover} transition-colors relative py-2`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  {/* Dropdown */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#E1E8FF] p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="space-y-2">
                        <a href="#" className="block px-4 py-3 rounded-lg hover:bg-[#EDF1FF] text-[#172DA1] font-medium transition-colors">
                          Fleet Solutions
                        </a>
                        <a href="#" className="block px-4 py-3 rounded-lg hover:bg-[#EDF1FF] text-[#172DA1] font-medium transition-colors">
                          Corporate Payments
                        </a>
                        <a href="#" className="block px-4 py-3 rounded-lg hover:bg-[#EDF1FF] text-[#172DA1] font-medium transition-colors">
                          Health Benefits
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-5">
              <button 
                onClick={secondaryCTA.onClick}
                className={`text-sm font-medium ${styles.text} ${styles.textHover} transition-colors`}
              >
                {secondaryCTA.label}
              </button>
              <button 
                onClick={primaryCTA.onClick}
                className="group bg-gradient-to-r from-[#C8102E] to-[#FF032B] hover:from-[#FF032B] hover:to-[#FF3355] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:shadow-[#C8102E]/30 transition-all flex items-center gap-2"
              >
                {primaryCTA.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#EDF1FF] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${variant === 'transparent' && !isScrolled ? 'text-white' : 'text-[#172DA1]'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${variant === 'transparent' && !isScrolled ? 'text-white' : 'text-[#172DA1]'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-br from-[#25146F] to-[#1E105A] p-6 shadow-xl">
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            <nav className="space-y-4">
              {items.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-white/20 space-y-4">
              <button 
                onClick={secondaryCTA.onClick}
                className="w-full py-3 text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
              >
                {secondaryCTA.label}
              </button>
              <button 
                onClick={primaryCTA.onClick}
                className="w-full py-3 bg-gradient-to-r from-[#C8102E] to-[#FF032B] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                {primaryCTA.label}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WexNavHeader;

