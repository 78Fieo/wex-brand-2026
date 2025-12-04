import React from 'react';
import { ChevronRight, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import wexLogoWhite from '../../assets/wex_logo_white.svg';

/**
 * WexFooter - Main Footer Component
 * 
 * Features:
 * - Multi-column navigation
 * - Social links
 * - Newsletter signup
 * - Legal links
 */
const WexFooter = ({ 
  columns = [],
  showNewsletter = true,
  socialLinks = {},
  className = ''
}) => {
  const defaultColumns = [
    {
      title: 'Solutions',
      links: [
        { label: 'Fleet Cards', href: '#' },
        { label: 'Corporate Payments', href: '#' },
        { label: 'Health Benefits', href: '#' },
        { label: 'Travel', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Investors', href: '#' },
        { label: 'News', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Support', href: '#' }
      ]
    }
  ];

  const cols = columns.length > 0 ? columns : defaultColumns;

  const defaultSocialLinks = {
    linkedin: '#',
    twitter: '#',
    facebook: '#',
    youtube: '#',
    ...socialLinks
  };

  const SocialIcon = ({ type, href }) => {
    const icons = {
      linkedin: Linkedin,
      twitter: Twitter,
      facebook: Facebook,
      youtube: Youtube
    };
    const Icon = icons[type];
    if (!Icon) return null;
    
    return (
      <a 
        href={href}
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#C8102E] hover:to-[#FF032B] transition-all cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#C8102E]/30 group"
      >
        <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </a>
    );
  };

  return (
    <footer className={`bg-gradient-to-br from-[#25146F] to-[#1E105A] text-white relative overflow-hidden ${className}`}>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#1C6EFF]/30 to-transparent rounded-full blur-[100px] mix-blend-overlay"></div>
        <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-gradient-to-br from-[#C8102E]/20 to-transparent rounded-full blur-[100px] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <img 
                src={wexLogoWhite}
                alt="WEX Logo"
                className="h-8 group-hover:opacity-80 transition-opacity"
              />
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Simplifying the business of running a business. WEX is the global commerce platform trusted by millions.
            </p>

            {/* Newsletter */}
            {showNewsletter && (
              <div className="pt-4">
                <p className="text-sm font-bold text-white mb-3">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1C6EFF]/50 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-[#C8102E] to-[#FF032B] rounded-full font-bold hover:shadow-lg hover:shadow-[#C8102E]/30 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Columns */}
          {cols.map((column, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-6 relative inline-block after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[3px] after:bg-[#C8102E] after:rounded-full">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group font-medium"
                    >
                      <ChevronRight className="w-3 h-3 text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {Object.entries(defaultSocialLinks).map(([type, href]) => (
                <SocialIcon key={type} type={type} href={href} />
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-white/50">
            © {new Date().getFullYear()} WEX Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WexFooter;

