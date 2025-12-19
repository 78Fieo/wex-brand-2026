import React from 'react';
import WexFeatureCard from './WexFeatureCard';

/**
 * WexFeatureGrid - Feature Cards Grid Layout
 * 
 * Props:
 * - features: Array of feature objects
 * - columns: 2, 3, or 4 column layout
 * - variant: 'default' | 'alternating' | 'highlighted-first'
 */
const WexFeatureGrid = ({ 
  features = [],
  columns = 3,
  title = null,
  subtitle = null,
  variant = 'default',
  className = ''
}) => {
  const columnStyles = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  const getCardVariant = (index) => {
    switch (variant) {
      case 'highlighted-first':
        return index === 0 ? 'highlighted' : 'default';
      case 'alternating':
        return index % 2 === 0 ? 'highlighted' : 'default';
      default:
        return 'default';
    }
  };

  return (
    <section className={`py-24 bg-gradient-to-b from-[#FDFDFF] to-[#F0F4FF] ${className}`}>
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

        {/* Feature Grid */}
        <div className={`grid grid-cols-1 ${columnStyles[columns]} gap-8`}>
          {features.map((feature, index) => (
            <WexFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              linkText={feature.linkText}
              iconColor={feature.iconColor}
              variant={getCardVariant(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WexFeatureGrid;














