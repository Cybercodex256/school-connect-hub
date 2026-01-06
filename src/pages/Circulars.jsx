import React from 'react';
import { FileText, Bell } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleDriveEmbed from '../components/GoogleDriveEmbed';
import SectionHeader from '../components/SectionHeader';

import gallery5 from '../assets/gallery-5.jpg';

// Replace this with your actual Google Drive folder ID for circulars
const CIRCULARS_FOLDER_ID = '1SqIng29xT3_GjLMkh5rYI5SD3rKu8LcP';

const Circulars = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={gallery5}
            alt="School Events"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Bell className="w-5 h-5 text-secondary-foreground" />
              <span className="text-secondary-foreground font-medium">Stay Informed</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              School Circulars
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Stay updated with the latest announcements, notices, and important
              information from Queen of Martyrs Secondary School.
            </p>
          </div>
        </div>
      </section>

      {/* Circulars Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Latest Circulars"
            subtitle="Browse through official school communications and announcements"
          />
          <div className="max-w-4xl mx-auto">
            <GoogleDriveEmbed
              folderId={CIRCULARS_FOLDER_ID}
              title="School Circulars & Announcements"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">
                  About School Circulars
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  School circulars contain important information about:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Academic calendar and important dates</li>
                  <li>Fee structures and payment deadlines</li>
                  <li>School events and activities</li>
                  <li>Policy updates and announcements</li>
                  <li>Examination schedules and results</li>
                  <li>Parent-teacher meeting notices</li>
                </ul>
                <p className="pt-4">
                  <strong>Note:</strong> Please check this page regularly for updates.
                  Parents and guardians are encouraged to read all circulars and take
                  necessary action where required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Circulars;
