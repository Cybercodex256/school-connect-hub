import React from 'react';
import { GraduationCap, Users, Building2, Target, Heart, Shield, Award, BookOpen, Star, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import ValueCard from '../components/ValueCard';

import gallery1 from '../assets/gallery-1.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery6 from '../assets/gallery-6.jpg';

const values = [
  { icon: Heart, title: 'Spirituality', description: 'Grounded in Catholic doctrines while welcoming students from all religious backgrounds.' },
  { icon: Shield, title: 'Trust', description: 'Building strong relationships based on mutual trust between students, parents, and staff.' },
  { icon: Award, title: 'Integrity', description: 'Upholding the highest standards of honesty and moral principles in all we do.' },
  { icon: Users, title: 'Respect', description: 'Treating every individual with dignity and valuing diverse perspectives.' },
  { icon: GraduationCap, title: 'Teamwork', description: 'Collaborating together to achieve common goals and celebrate shared success.' },
  { icon: BookOpen, title: 'Accountability', description: 'Taking responsibility for our actions and striving for continuous improvement.' },
];

const managementStructure = [
  'Directors',
  'Head Teacher',
  'Deputy Head Teacher',
  'Director of Studies',
  'Heads of Departments',
  'Class Teachers',
  'Teachers',
  'Non-teaching Staff',
  'Prefects',
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About Our School
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Founded on Catholic doctrines, Queen of Martyrs Secondary School
              has been shaping future leaders since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={gallery1}
                alt="Students at Queen of Martyrs"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Our Mission</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To provide excellent quality secondary education and produce self-reliant,
                God fearing citizens ready to handle the challenges of the evolving era.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Queen of Martyrs S.S Kigoma, we aim to create a learning environment
                where all students feel safe, happy and included. Parents are valued as
                partners in their child's education and work together with staff to
                ensure that all students are successful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in a dedicated and professional staff. We expect high standards
                from staff and students and constantly strive for higher levels of achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Our History</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The school commenced its operations on <strong>12th January, 2020</strong> as
                a private mixed day and boarding secondary school teaching the National
                Curriculum.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are fully registered by the Ministry of Education and Sports as
                <strong> ME/32/6435</strong> with a UNEB Center Number <strong>U4289</strong> for
                both Ordinary and Advanced levels.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The school is founded on Catholic doctrines, but welcomes students from
                other religious backgrounds, fostering an inclusive environment for all.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={gallery3}
                alt="School History"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Queen of Martyrs"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ValueCard {...value} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Structure */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Management Structure"
            subtitle="Our dedicated leadership team"
            light
          />
          <div className="max-w-2xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20">
              <div className="space-y-4">
                {managementStructure.map((role, index) => (
                  <div
                    key={role}
                    className="flex items-center gap-4 text-primary-foreground"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={gallery6}
                alt="School Strategy"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Building2 className="w-5 h-5" />
                <span className="font-semibold">School Strategy</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Growing for the Future
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To increase enrollment and meet the regulators' requirements, the school
                has embarked on several strategic initiatives:
              </p>
              <ul className="space-y-3">
                {[
                  'Acquiring more dormitories',
                  'Settling squatters on school land',
                  'Building a larger Library',
                  'Constructing a new Dining Hall',
                  'Building dedicated human resources',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
