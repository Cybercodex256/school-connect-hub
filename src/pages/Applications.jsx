import React from 'react';
import { FileText, CheckCircle, Clock, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleFormEmbed from '../components/GoogleFormEmbed';
import SectionHeader from '../components/SectionHeader';

import gallery2 from '../assets/gallery-2.jpg';

// Replace these with your actual Google Form IDs
const ALEVEL_GOOGLE_FORM_ID = '1FAIpQLScp-cUG-Q_62bo6tKPP0V-vM1k6SfI978CboMVaMIYD-pc_xg';
const OLEVEL_GOOGLE_FORM_ID = '1FAIpQLSddna6ZgWk-gh3DjwFdnhflkuvDhIKugvIkt__oaIZyNOqecg'; // User will replace this

const requirements = [
  'Completed Primary 7 (P7) Certificate',
  'Birth Certificate or Passport',
  'Recent Passport-size Photographs (4)',
  'Transfer Letter (if from another school)',
  'Previous School Report Cards',
  'Medical Certificate',
];

const steps = [
  { icon: FileText, title: 'Fill the Form', description: 'Complete the online application form below with accurate information.' },
  { icon: Clock, title: 'Wait for Review', description: 'Our admissions team will review your application within 5 business days.' },
  { icon: CheckCircle, title: 'Get Confirmation', description: 'Receive confirmation via email/phone with next steps for enrollment.' },
];

const Applications = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={gallery2}
            alt="Students"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Apply Now
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Join our community of learners and begin your journey towards
              excellence at Queen of Martyrs Secondary School.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Application Process"
            subtitle="Follow these simple steps to apply"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h3 className="font-display font-semibold text-xl text-foreground">
                  Required Documents
                </h3>
              </div>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O-Level Application Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="O-Level Application Form"
            subtitle="Apply for S.1 to S.4 admission"
          />
          <GoogleFormEmbed formId={OLEVEL_GOOGLE_FORM_ID} title="O-Level Application Form" />
          <p className="text-center text-muted-foreground mt-6 max-w-xl mx-auto">
            <strong>Note:</strong> For S.1, S.2, S.3 and S.4 admissions.
          </p>
        </div>
      </section>

      {/* A-Level Application Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="A-Level Application Form"
            subtitle="Apply for S.5 to S.6 admission"
          />
          <GoogleFormEmbed formId={ALEVEL_GOOGLE_FORM_ID} title="A-Level Application Form" />
          <p className="text-center text-muted-foreground mt-6 max-w-xl mx-auto">
            <strong>Note:</strong> For S.5 and S.6 admissions. Please ensure all information provided is accurate.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Need Help?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-6">
            If you have any questions about the application process, please don't
            hesitate to contact our admissions office.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+256704955683"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Call Us: +256 704 955 683
            </a>
            <a
              href="mailto:admissions@queenofmartyrs.ac.ug"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-full font-semibold hover:bg-primary-foreground/20 transition-colors"
            >
              Email: admissions@queenofmartyrs.ac.ug
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Applications;
