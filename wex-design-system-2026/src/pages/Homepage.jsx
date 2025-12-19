import React from 'react';
import {
  WexNavHeader,
  WexHero,
  WexFeatureGrid,
  WexStatsSection,
  WexTestimonialSection,
  WexCTASection,
  WexFooter
} from '../components/homepage';
import { 
  Truck, CreditCard, Heart, Shield, 
  BarChart3, Globe, Zap, Users 
} from 'lucide-react';

/**
 * Homepage - Reference Implementation
 * Demonstrates all homepage components together in a complete page layout
 */
const Homepage = () => {
  // Feature data
  const features = [
    {
      icon: Truck,
      title: 'Fleet Management',
      description: 'Comprehensive fuel card and fleet management solutions that save you time and money on every gallon.',
      link: '#',
      linkText: 'Explore Fleet',
      iconColor: '#172DA1'
    },
    {
      icon: CreditCard,
      title: 'Corporate Payments',
      description: 'Streamline your AP process with virtual cards, integrated payments, and powerful spend controls.',
      link: '#',
      linkText: 'Explore Payments',
      iconColor: '#1C6EFF'
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'HSA, FSA, and HRA solutions that make healthcare spending simple for employers and employees.',
      link: '#',
      linkText: 'Explore Benefits',
      iconColor: '#C8102E'
    }
  ];

  // Additional features
  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and fraud protection keep your data and transactions secure.',
      iconColor: '#25146F'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Actionable insights and custom reports to optimize your spending and operations.',
      iconColor: '#00C48C'
    },
    {
      icon: Globe,
      title: 'Global Acceptance',
      description: 'Accepted at millions of locations worldwide with 24/7 customer support.',
      iconColor: '#FFBC00'
    },
    {
      icon: Zap,
      title: 'Fast Integration',
      description: 'Connect to your ERP, accounting, and business systems in days, not months.',
      iconColor: '#1C6EFF'
    }
  ];

  // Stats data
  const stats = [
    { value: 20, suffix: 'M+', label: 'Cardholders' },
    { value: 600, suffix: 'K+', label: 'Businesses' },
    { value: 99.9, suffix: '%', label: 'Uptime' },
    { value: 24, suffix: '/7', label: 'Support' }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "WEX transformed how we manage our entire fleet operation. It's simply effortless and has saved us countless hours every month.",
      name: 'Jamie Rivera',
      title: 'Operations Director',
      company: 'Logistics Inc.',
      rating: 5
    },
    {
      quote: "The health benefits platform is incredibly intuitive. Our employees love how easy it is to manage their HSA accounts.",
      name: 'Sarah Chen',
      title: 'HR Director',
      company: 'TechCorp',
      rating: 5
    },
    {
      quote: "We've reduced our payment processing time by 60% since switching to WEX corporate payments. Game changer.",
      name: 'Michael Torres',
      title: 'CFO',
      company: 'Global Manufacturing',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <WexNavHeader 
        variant="transparent"
        navItems={[
          { label: 'Solutions', href: '#', hasDropdown: true },
          { label: 'Industries', href: '#', hasDropdown: true },
          { label: 'Resources', href: '#' },
          { label: 'About', href: '#' }
        ]}
        primaryCTA={{ label: 'Get Started', onClick: () => console.log('Get Started') }}
        secondaryCTA={{ label: 'Sign In', onClick: () => console.log('Sign In') }}
      />

      {/* Hero Section */}
      <div className="-mt-[72px]"> {/* Offset for transparent nav */}
        <WexHero
          variant="default"
          headline="Simplifying the business of running a business."
          subheadline="WEX is the global commerce platform that helps businesses manage their fleet, corporate payments, and health benefits with effortless solutions."
          primaryCTA={{ label: 'Get Started', onClick: () => console.log('Get Started') }}
          secondaryCTA={{ label: 'Watch Demo', onClick: () => console.log('Watch Demo') }}
          showSecondaryAsPill={true}
        >
          {/* Inline Stats in Hero */}
          <WexStatsSection 
            stats={stats}
            variant="inline"
            className="mt-8"
          />
        </WexHero>
      </div>

      {/* Main Features */}
      <WexFeatureGrid
        features={features}
        columns={3}
        title="Solutions for Every Business"
        subtitle="From fuel management to healthcare benefits, WEX provides the tools you need to simplify operations and drive growth."
        variant="highlighted-first"
      />

      {/* Stats Section */}
      <WexStatsSection
        stats={[
          { value: 20, suffix: 'M+', label: 'Cardholders', description: 'Trusted worldwide' },
          { value: 600, suffix: 'K+', label: 'Businesses', description: 'Active customers' },
          { value: 500, suffix: 'B+', prefix: '$', label: 'Processed', description: 'Annually' },
          { value: 50, suffix: '+', label: 'Countries', description: 'Global reach' }
        ]}
        variant="cards"
        title="Trusted by Businesses Worldwide"
        subtitle="Join millions of users who simplify their business with WEX."
      />

      {/* Additional Features */}
      <WexFeatureGrid
        features={additionalFeatures}
        columns={4}
        title="Why Choose WEX"
        subtitle="Enterprise-grade features built for businesses of all sizes."
      />

      {/* Testimonials */}
      <WexTestimonialSection
        testimonials={testimonials}
        variant="carousel"
        title="What Our Customers Say"
        subtitle="Don't just take our word for it — hear from businesses transforming their operations with WEX."
        autoPlay={true}
        autoPlayInterval={6000}
      />

      {/* CTA Section */}
      <WexCTASection
        variant="card"
        headline="Ready to simplify your business?"
        subheadline="Join thousands of companies using WEX to streamline their operations. Get started in minutes."
        primaryCTA={{ label: 'Start Free Trial', onClick: () => console.log('Start Trial') }}
        secondaryCTA={{ label: 'Talk to Sales', onClick: () => console.log('Talk to Sales') }}
      />

      {/* Footer */}
      <WexFooter
        showNewsletter={true}
        socialLinks={{
          linkedin: 'https://linkedin.com/company/wex',
          twitter: 'https://twitter.com/waborex',
          facebook: 'https://facebook.com/wexinc',
          youtube: 'https://youtube.com/wexinc'
        }}
      />
    </div>
  );
};

export default Homepage;














