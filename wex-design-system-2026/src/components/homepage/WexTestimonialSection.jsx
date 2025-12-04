import React, { useState, useEffect } from 'react';
import { User, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

/**
 * WexTestimonialSection - Testimonials with Carousel
 * 
 * Features:
 * - Auto-play carousel
 * - Manual navigation
 * - Multiple layout variants
 */
const WexTestimonialSection = ({ 
  testimonials = [],
  variant = 'carousel', // 'carousel' | 'grid' | 'featured'
  autoPlay = true,
  autoPlayInterval = 5000,
  title = 'What Our Customers Say',
  subtitle = null,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (variant !== 'carousel' || !autoPlay || testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [variant, autoPlay, autoPlayInterval, testimonials.length]);

  const goTo = (index) => setCurrentIndex(index);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const TestimonialCard = ({ testimonial, featured = false }) => (
    <div className={`${
      featured 
        ? 'bg-gradient-to-br from-[#25146F] to-[#1E105A] text-white p-12 rounded-3xl shadow-xl' 
        : 'bg-gradient-to-br from-white to-[#F5F8FF] p-8 rounded-3xl border border-[#E1E8FF]/80 shadow-md'
    } relative overflow-hidden group hover:shadow-xl transition-all`}>
      {/* Quote Mark */}
      <div className={`absolute top-6 right-6 ${featured ? 'text-white/10' : 'text-[#E1E8FF]'}`}>
        <Quote className="w-16 h-16" fill="currentColor" />
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1.5 mb-6">
        {[1,2,3,4,5].map(i => (
          <div 
            key={i} 
            className={`w-2.5 h-2.5 rounded-full ${
              i <= (testimonial.rating || 5) 
                ? 'bg-gradient-to-r from-[#FFBC00] to-[#FFE100] shadow-sm shadow-[#FFBC00]/50' 
                : featured ? 'bg-white/20' : 'bg-[#E1E8FF]'
            }`}
          ></div>
        ))}
      </div>

      {/* Quote */}
      <p className={`text-xl leading-relaxed mb-8 relative z-10 ${
        featured ? 'text-white/95' : 'text-[#5D688C]'
      }`}>
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 relative z-10">
        <div className={`w-14 h-14 rounded-full p-[2px] shadow-lg ${
          featured 
            ? 'bg-gradient-to-br from-[#1C6EFF] to-[#C8102E]' 
            : 'bg-gradient-to-br from-[#172DA1] to-[#1C6EFF]'
        }`}>
          <div className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden ${
            featured ? 'bg-[#25146F]' : 'bg-white'
          }`}>
            {testimonial.avatar ? (
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
            ) : (
              <User className={`w-8 h-8 ${featured ? 'text-white/80' : 'text-[#172DA1]'}`} />
            )}
          </div>
        </div>
        <div>
          <p className={`font-bold text-lg ${featured ? 'text-white' : 'text-[#172DA1]'}`}>
            {testimonial.name}
          </p>
          <p className={`text-sm ${featured ? 'text-white/70' : 'text-[#7A87B2]'}`}>
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className={`py-24 bg-gradient-to-b from-[#F0F4FF] to-[#FDFDFF] ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#172DA1] mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-[#5D688C] max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel Variant */}
        {variant === 'carousel' && testimonials.length > 0 && (
          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard testimonial={testimonial} featured />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <>
                {/* Arrows */}
                <button 
                  onClick={goPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border border-[#E1E8FF] flex items-center justify-center text-[#172DA1] hover:bg-[#EDF1FF] transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={goNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border border-[#E1E8FF] flex items-center justify-center text-[#172DA1] hover:bg-[#EDF1FF] transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goTo(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'bg-[#C8102E] w-8' 
                          : 'bg-[#E1E8FF] hover:bg-[#B1C0EE]'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Grid Variant */}
        {variant === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        )}

        {/* Featured Variant (1 large + 2 small) */}
        {variant === 'featured' && testimonials.length >= 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TestimonialCard testimonial={testimonials[0]} featured />
            <div className="space-y-8">
              <TestimonialCard testimonial={testimonials[1]} />
              <TestimonialCard testimonial={testimonials[2]} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WexTestimonialSection;

