import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

import gallery4 from '../assets/gallery-4.jpg';

const forms = [
  { name: 'Form 1', path: '/holiday-work/form-1', color: 'bg-blue-500' },
  { name: 'Form 2', path: '/holiday-work/form-2', color: 'bg-green-500' },
  { name: 'Form 3', path: '/holiday-work/form-3', color: 'bg-yellow-500' },
  { name: 'Form 4', path: '/holiday-work/form-4', color: 'bg-orange-500' },
  { name: 'Form 5', path: '/holiday-work/form-5', color: 'bg-purple-500' },
  { name: 'Form 6', path: '/holiday-work/form-6', color: 'bg-red-500' },
];

const HolidayWork = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={gallery4}
            alt="Students studying"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Holiday Work
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Access your holiday assignments and revision materials. Teachers upload
              PDF files to Google Drive for easy access by students.
            </p>
          </div>
        </div>
      </section>

      {/* Form Selection */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Select Your Class"
            subtitle="Click on your class to view and download holiday work assignments"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {forms.map((form) => (
              <Link
                key={form.name}
                to={form.path}
                className="group bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${form.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-2xl text-foreground mb-2">
                  {form.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  View holiday assignments and revision materials
                </p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  View Materials <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              How to Access Your Holiday Work
            </h2>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border text-left">
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                  <span>Select your class from the options above</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                  <span>Browse through the available PDF files in the Google Drive folder</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                  <span>Click on any file to view it directly or download for offline access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
                  <span>Complete all assignments before the end of the holiday period</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HolidayWork;
