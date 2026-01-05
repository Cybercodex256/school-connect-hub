import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, Heart, Award, BookOpen, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlideshow from '../components/ImageSlideshow';
import SectionHeader from '../components/SectionHeader';
import ValueCard from '../components/ValueCard';

import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';
import schoolBuilding from '../assets/school-building.jpg';
import uceBestStudents from '../assets/uce-best-students.jpg';

const heroSlides = [
  { src: gallery1, alt: 'Queen of Martyrs Campus', caption: 'Excellence in Education Since 2020' },
  { src: gallery2, alt: 'Students Learning', caption: 'Nurturing Future Leaders' },
  { src: gallery3, alt: 'School Activities', caption: 'Holistic Development' },
];

const values = [
  { icon: Heart, title: 'Spirituality', description: 'Grounded in Catholic doctrines while welcoming students from all religious backgrounds.' },
  { icon: Shield, title: 'Trust', description: 'Building strong relationships based on mutual trust between students, parents, and staff.' },
  { icon: Award, title: 'Integrity', description: 'Upholding the highest standards of honesty and moral principles in all we do.' },
  { icon: Users, title: 'Respect', description: 'Treating every individual with dignity and valuing diverse perspectives.' },
  { icon: GraduationCap, title: 'Teamwork', description: 'Collaborating together to achieve common goals and celebrate shared success.' },
  { icon: BookOpen, title: 'Accountability', description: 'Taking responsibility for our actions and striving for continuous improvement.' },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Marquee Announcement */}
      <div className="bg-secondary text-secondary-foreground py-2 mt-20 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4">📚 Welcome to Queen of Martyrs S.S Kigoma - "God Source of Wisdom"</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🎓 Admissions Open for 2026 Academic Year - Apply Now!</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🏆 Congratulations to our UCE 2024 Top Performers!</span>
          <span className="mx-4">•</span>
          <span className="mx-4">📖 Registered: ME/32/6435 | UNEB Centre: U4289</span>
          <span className="mx-4">•</span>
          <span className="mx-4">📍 Located at Kigoma, Bukasa, Wakiso District</span>
          <span className="mx-4">•</span>
          <span className="mx-4">📚 Welcome to Queen of Martyrs S.S Kigoma - "God Source of Wisdom"</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🎓 Admissions Open for 2026 Academic Year - Apply Now!</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🏆 Congratulations to our UCE 2024 Top Performers!</span>
          <span className="mx-4">•</span>
          <span className="mx-4">📖 Registered: ME/32/6435 | UNEB Centre: U4289</span>
          <span className="mx-4">•</span>
          <span className="mx-4">📍 Located at Kigoma, Bukasa, Wakiso District</span>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={schoolBuilding}
            alt="Queen of Martyrs Secondary School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/90 rounded-full">
              <span className="text-secondary-foreground font-medium text-sm">
                Registered: ME/32/6435 | UNEB Centre: U4289
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow">
              Queen of Martyrs
              <span className="block text-secondary">Secondary School</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold italic mb-6 text-secondary">
              "God Source of Wisdom"
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Providing excellent quality secondary education and producing self-reliant,
              God fearing citizens ready to handle the challenges of the evolving era.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/applications"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg"
              >
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/20 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* UCE Best Students Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={uceBestStudents}
                alt="UCE Best Performing Students 2024"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
                <p className="font-display font-bold">UCE 2024</p>
              </div>
            </div>
            <div>
              <SectionHeader
                title="Celebrating Excellence"
                subtitle="Our UCE 2024 Top Performers"
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Our UCE 2024 top performers exemplify the dedication and hard work that defines 
                Queen of Martyrs. With <strong className="text-primary">"God as our source of wisdom"</strong>, 
                our students continue to achieve remarkable success.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                These outstanding students have demonstrated exceptional academic prowess, 
                proving that with faith, dedication, and the right guidance, excellence is achievable. 
                We congratulate them on their remarkable achievements and wish them continued success 
                in their future endeavors.
              </p>
              <div className="bg-primary/10 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-foreground font-display text-xl italic">
                  "God Source of Wisdom"
                </p>
                <p className="text-muted-foreground mt-2">— School Motto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Welcome to Queen of Martyrs"
                subtitle="Where Excellence Meets Faith"
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Queen of Martyrs S.S Kigoma, we aim to create a learning environment
                where all students feel safe, happy and included. Parents are valued as
                partners in their child's education and work together with staff to
                ensure that all students are successful.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in a dedicated and professional staff. We expect high standards
                from staff and students and constantly strive for higher levels of achievement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The school commenced its operations on <strong>12th January, 2020</strong> as
                a private mixed day and boarding secondary school teaching the National
                Curriculum and is fully registered by Ministry of Education and Sports.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <ImageSlideshow
                images={[
                  { src: gallery3, alt: 'School campus' },
                  { src: gallery4, alt: 'Students' },
                  { src: gallery5, alt: 'Activities' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
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

      {/* Location Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Location"
            subtitle="Conveniently located 8.7km from Kampala city centre"
            light
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4">
                Address
              </h3>
              <p className="text-primary-foreground/80">
                Kigoma, Bukasa, Wakiso District<br />
                Behind Kyebando-Nansana<br />
                Opposite Nakabugo-Sentena Road
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4">
                Access Roads
              </h3>
              <ul className="text-primary-foreground/80 space-y-2 text-sm">
                <li>• Kampala – Hoima Road, off Nansana - Kyebando - Bujuuko - Kigoma</li>
                <li>• Kampala – Mityana Road off Bulenga - Kireka Bbira - Kigoma</li>
                <li>• Kampala – Sentema Road off Kireka Bbira, Opposite Nakabugo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Join Our Family?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Start your journey with Queen of Martyrs Secondary School today.
            Applications are now open for the upcoming academic year.
          </p>
          <Link
            to="/applications"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;