import React from 'react';

const SectionHeader = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-primary-foreground' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-primary-foreground/80' : 'text-muted-foreground'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-24 h-1 bg-secondary rounded-full mt-6 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};

export default SectionHeader;
