import React from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * WexFeatureCard - Individual Feature/Value Prop Card
 * 
 * Variants:
 * - 'default': Light glass card with icon
 * - 'highlighted': Card with accent border glow
 * - 'minimal': Simple card without decorations
 */
const WexFeatureCard = ({ 
  icon: Icon,
  title = 'Feature Title',
  description = 'Feature description goes here with supporting details.',
  link = null,
  linkText = 'Learn more',
  variant = 'default',
  iconColor = '#172DA1',
  className = ''
}) => {
  const baseStyles = "relative p-8 rounded-3xl transition-all group overflow-hidden";
  
  const variantStyles = {
    default: "bg-gradient-to-br from-white to-[#F5F8FF] border border-[#E1E8FF]/80 shadow-md hover:shadow-xl",
    highlighted: "bg-gradient-to-br from-white to-[#F5F8FF] border border-[#E1E8FF]/80 shadow-md hover:shadow-xl ring-2 ring-[#1C6EFF]/20",
    minimal: "bg-white border border-[#E1E8FF]/60 hover:border-[#1C6EFF]/30 hover:shadow-md"
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1C6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      {/* Highlighted variant glow effect */}
      {variant === 'highlighted' && (
        <div className="absolute -inset-[2px] bg-gradient-to-r from-[#1C6EFF] via-[#C8102E] to-[#FFBC00] rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-sm"></div>
      )}

      {/* Icon */}
      {Icon && (
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm"
          style={{ backgroundColor: `${iconColor}10` }}
        >
          <Icon 
            className="w-8 h-8 transition-colors" 
            style={{ color: iconColor }}
            strokeWidth={1.5} 
          />
        </div>
      )}

      {/* Content */}
      <h3 className="text-2xl font-bold text-[#172DA1] mb-3 group-hover:text-[#1C6EFF] transition-colors">
        {title}
      </h3>
      <p className="text-[#5D688C] leading-relaxed mb-6 text-lg">
        {description}
      </p>

      {/* Link */}
      {link !== null && (
        <a 
          href={link || '#'}
          className="inline-flex items-center text-[#C8102E] font-bold text-base group/link"
        >
          <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C8102E] after:rounded-full group-hover/link:after:w-full after:transition-all">
            {linkText}
          </span>
          <ChevronRight className="w-5 h-5 ml-1 group-hover/link:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  );
};

export default WexFeatureCard;














