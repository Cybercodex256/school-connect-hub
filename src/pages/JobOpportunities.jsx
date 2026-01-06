import React from 'react';
import { Briefcase, Clock, MapPin, Users, GraduationCap, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import { Badge } from '../components/ui/badge';

import gallery2 from '../assets/gallery-2.jpg';

const jobListings = [
  {
    id: 1,
    title: 'Mathematics Teacher',
    department: 'Academic Staff',
    type: 'Full-time',
    deadline: 'January 31, 2026',
    description: 'We are seeking a qualified and passionate Mathematics teacher for O-Level and A-Level classes. The ideal candidate should have a strong command of the subject and ability to inspire students.',
    requirements: [
      "Bachelor's degree in Mathematics or Education",
      'Minimum 2 years teaching experience',
      'Registered with Ministry of Education',
      'Strong communication skills',
    ],
  },
  {
    id: 2,
    title: 'Physics Teacher',
    department: 'Academic Staff',
    type: 'Full-time',
    deadline: 'January 31, 2026',
    description: 'Looking for an experienced Physics teacher to join our science department. Must be able to conduct practical lessons and prepare students for national examinations.',
    requirements: [
      "Bachelor's degree in Physics or Science Education",
      'Experience with laboratory management',
      'Minimum 2 years teaching experience',
      'Ability to mentor students in science clubs',
    ],
  },
  {
    id: 3,
    title: 'English Language Teacher',
    department: 'Academic Staff',
    type: 'Full-time',
    deadline: 'February 15, 2026',
    description: 'We need a dynamic English teacher who can enhance students\' language skills and prepare them for academic excellence in both O-Level and A-Level.',
    requirements: [
      "Bachelor's degree in English or Literature",
      'Excellent written and spoken English',
      'Experience in teaching English as a subject',
      'Creative teaching methodologies',
    ],
  },
  {
    id: 4,
    title: 'School Bursar',
    department: 'Administration',
    type: 'Full-time',
    deadline: 'February 28, 2026',
    description: 'We are looking for a qualified accountant to manage the school\'s financial operations, including fee collection, budgeting, and financial reporting.',
    requirements: [
      "Bachelor's degree in Accounting or Finance",
      'CPA certification preferred',
      'Minimum 3 years experience in financial management',
      'Proficiency in accounting software',
    ],
  },
  {
    id: 5,
    title: 'School Nurse',
    department: 'Health Services',
    type: 'Full-time',
    deadline: 'February 15, 2026',
    description: 'Seeking a registered nurse to provide healthcare services to students and staff, manage the school clinic, and coordinate health education programs.',
    requirements: [
      'Diploma or Degree in Nursing',
      'Valid nursing registration',
      'Experience in school or community health',
      'First aid and emergency response skills',
    ],
  },
];

const JobCard = ({ job }) => (
  <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
      <div>
        <h3 className="font-display font-semibold text-xl text-foreground mb-1">
          {job.title}
        </h3>
        <p className="text-muted-foreground text-sm">{job.department}</p>
      </div>
      <Badge variant="secondary" className="bg-primary/10 text-primary">
        {job.type}
      </Badge>
    </div>
    
    <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
    
    <div className="space-y-2 mb-4">
      <p className="text-sm font-semibold text-foreground">Requirements:</p>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
    
    <div className="flex items-center gap-2 text-sm text-primary">
      <Calendar className="w-4 h-4" />
      <span>Application Deadline: {job.deadline}</span>
    </div>
  </div>
);

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
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {jobListings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
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
