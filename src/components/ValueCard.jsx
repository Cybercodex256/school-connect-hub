import React from 'react';

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="font-display font-semibold text-xl text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
