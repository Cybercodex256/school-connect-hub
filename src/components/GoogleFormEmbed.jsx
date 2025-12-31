import React from 'react';

const GoogleFormEmbed = ({ formId, title = 'Application Form' }) => {
  const embedUrl = `https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
        <div className="bg-primary px-6 py-4">
          <h3 className="text-primary-foreground font-display font-semibold text-lg">
            {title}
          </h3>
        </div>
        <div className="relative w-full" style={{ minHeight: '80vh' }}>
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full min-h-[80vh] border-0"
            allowFullScreen
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleFormEmbed;
