import React from 'react';

const GoogleDriveEmbed = ({ folderId, title = 'Documents' }) => {
  const embedUrl = `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`;

  return (
    <div className="w-full">
      <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
        <div className="bg-primary px-6 py-4">
          <h3 className="text-primary-foreground font-display font-semibold text-lg">
            {title}
          </h3>
        </div>
        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
          <iframe
            src={embedUrl}
            title={title}
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-3 text-center">
        Click on any file to view or download. Teachers can upload new files directly to this folder.
      </p>
    </div>
  );
};

export default GoogleDriveEmbed;
