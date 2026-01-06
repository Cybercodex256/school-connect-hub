import React from 'react';
import { Briefcase, Clock, MapPin, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

import gallery2 from '../assets/gallery-2.jpg';

const JobOpportunities = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={gallery2}
            alt="School Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Job Opportunities
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Join our team of dedicated educators and staff at Queen of Martyrs S.S Kigoma.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Work With Us"
            subtitle="Be part of a community dedicated to excellence in education"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                Professional Growth
              </h3>
              <p className="text-muted-foreground text-sm">
                Opportunities for continuous learning and career advancement.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                Work-Life Balance
              </h3>
              <p className="text-muted-foreground text-sm">
                Supportive environment that values your well-being.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                Great Location
              </h3>
              <p className="text-muted-foreground text-sm">
                Conveniently located in Kigoma, Wakiso District.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Current Openings"
            subtitle="Explore available positions at our school"
          />
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-2xl text-foreground mb-4">
                Job Listings Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                We are currently updating our job listings. Please check back soon for available positions, 
                or contact us directly to inquire about opportunities.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>For inquiries, contact:</strong><br />
                  Email: info@queenofmartyrs.ac.ug<br />
                  Phone: +256 700 000 000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            How to Apply
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-6">
            When positions are available, you can apply by sending your CV and cover letter 
            to our human resources department.
          </p>
          <a
            href="mailto:hr@queenofmartyrs.ac.ug"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Email: hr@queenofmartyrs.ac.ug
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobOpportunities;
