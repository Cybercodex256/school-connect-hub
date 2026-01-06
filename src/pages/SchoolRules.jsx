import React from 'react';
import { Shield, Home, Shirt, BookOpen, Users, UserCheck, Eye } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

const sections = [
  {
    id: 'general',
    title: 'Section A: General Rules',
    icon: Shield,
    rules: [
      'Use of Alcohol, drugs, gambling, and smoking are strictly forbidden. These offences are punishable by expulsion from the school.',
      'Bullying, teasing and fighting are strictly forbidden and punishable by expulsion. Culprits shall be required to meet the medical bills of the injured students.',
      'Stealing of any nature is highly punishable and will lead to expulsion. Culprits must refund/return stolen property.',
      'Rioting of any nature (attempting to or inciting a riot) is typical of uncivilized community and is punishable by expulsion. In case of any problem, assistance should be sought from student leaders, teachers, Wardens/Matrons, Dean of Students, Deputy HM and finally the Headteacher if need be.',
      'Insolence of any nature to the school administration, members of the teaching and non-teaching staff and student leaders is strictly forbidden and punishable by expulsion.',
      'Vandalism and malicious damage of School property, i.e. writing on desks, walls of classrooms and toilets, breaking desks, plates & cups, sockets, waste bins, window panes etc. is highly punishable by physical replacement of damaged property or expulsion.',
      'Use of obscene and abusive language is strictly forbidden and is punishable.',
      'Leaving the school campus without written permission is self-dismissal from the school.',
      'Radio, musical instruments of any kind, mobile phones and cameras must not be brought to school. Punishment is confiscation for good and any other punishment as may be decided by the school administration including an expulsion.',
      'Staff quarters and staffroom are out of bounds to students except in emergency cases. Failure to observe this rule attracts a severe punishment.',
      'Girl-Boy relationships associated with immorality, homosexuality, lesbianism, and any other perverted behavior are highly punishable and will lead to expulsion.',
      'Sharing, borrowing or lending clothes, beddings or shoes is punishable to both the lender and the borrower.',
    ],
  },
  {
    id: 'domestic',
    title: 'Section B: Domestic Rules',
    icon: Home,
    rules: [
      'All students must report at School on the first day of the term not later than 6:00pm fully dressed in School Uniform. All students must be checked by a teacher as soon as they report. Parents/Guardians must communicate to the School Administration when there is a delay in reporting.',
      'Students sent home for any reason MUST report directly back to the administration office. Failure to do so attracts a heavy punishment.',
      'All societies, clubs shall have a patron who should be a member of the teaching staff. All societies/clubs shall have to register by the Head teacher\'s office. Society/club leaders should not mobilize money from the club members without the consent of the club patron.',
      'Dormitories should be out of bounds to all students during class and prep time. Violation of this may lead to a suspension. Sick students shall have to get a bed rest from the nurse approved by the school administration.',
      'Students are not allowed in the Kitchen. All forms of private cooking are not allowed at School. Cooking facilities found with students will be confiscated and may lead to instant expulsion.',
      'Students are not allowed to trade while in school. Any student found engaging in such activities will face immediate expulsion.',
      'Match boxes, lighters, and other sources of fire are highly prohibited at school and possession of such items can lead to an immediate expulsion.',
      'Mudslinging, rumor mongering and backbiting is highly punishable.',
      'All students must ensure proper hygiene and care for the safety of all!',
      'Shouting and any form of noise which may disturb the freedom of others is forbidden.',
      'All students must attend all services as organized by the School irrespective of the religious denominations.',
      'Students with chronic illnesses should report with medical documents to the Deputy Administration without fail.',
    ],
  },
  {
    id: 'uniform',
    title: 'Section C: Uniform and Uniformity',
    icon: Shirt,
    rules: [
      'Ear rings, necklaces, nail vanish, rings, lipstick, bangles, caps, hats are not allowed and punishable by either suspension or confiscation. Tattooing bodies is prohibited.',
      'Students\' hair should be kept very short and neat. French cuts, backbush and shaolin are forbidden. (Exception: A\'level girls)',
      'Students must not wear unauthorized jackets, cardigans, sweaters etc. The punishment is confiscation for good.',
      'English Language is the medium of communication. Vernacular speaking is highly punishable.',
      'All students going out for games and sports, seminars etc. must be in full uniform and must carry their identity cards.',
      'All students must purchase their requirements only from the school canteen during break time, lunch time and after classes.',
      'All day students must be dressed in full uniform from and to school, on outings and at home. Black leather shoes are required.',
      'Uniforms provided at school must be worn as given. Alterations to school uniforms are not allowed.',
    ],
  },
  {
    id: 'academics',
    title: 'Section D: Examinations/Academics',
    icon: BookOpen,
    rules: [
      'Cheating of any nature in examinations is heavily punishable and may lead to expulsion or repeating a class.',
      'After the examination period, students must continue with the normal school routine.',
      'All students must observe the sitting plan instruction and direction governing examinations.',
      'Students must observe library hours and rules. Laboratory and library materials lost or damaged must be replaced.',
      'Prep time is mandatory to every boarding student. Lights out must be observed.',
      'Missing class is punishable. In case of sickness, permission should be obtained from the Administration.',
      'Missing/dodging exams is self-dismissal from school, unless with permission from the School Administration.',
    ],
  },
  {
    id: 'prefects',
    title: 'Section E: Prefects\' Leadership Code',
    icon: Users,
    rules: [
      'Any student leader who insults, embarrasses or demoralizes another will be subjected to instant demotion and dismissal from school.',
      'Student leaders are at all times supposed to be exemplary to the rest of the school in whatever they do.',
      'All prefects must be loyal to the school philosophy, Mission, Motto and academically sounding.',
      'There should not be any leakage of information from prefects\' meetings/discussions to the students\' community.',
      'Team work is a must. Remember there is no "I" but "WE" in "TEAM WORK".',
      'Attending all formal meetings is a must to all prefects.',
    ],
  },
  {
    id: 'parents',
    title: 'Section F: Responsibilities of a Parent',
    icon: UserCheck,
    rules: [
      'The parent must visit the child on the visitation day and check on the academic performance.',
      'The parent has to collect the student\'s report personally at the End of Term.',
      'Parents must attend all class meetings.',
      'Should ensure that his or her child is smart and tidy.',
      'Should accept proper discipline measures for their children.',
      'Should never discuss or backbite teachers at home in the presence of students.',
      'Should ensure that his or her child leaves home fully dressed in school uniform.',
      'Should encourage students to go for church services whenever at home.',
      'Be the mouth piece of the school and publicize it to outsiders.',
      'Encourage students to study seriously at home and keep them at home instead of loitering.',
      'Guard your son/daughter from joining wrong company.',
      'Must pay fees promptly and bring the child for studies on the opening day.',
      'Should not directly or indirectly breach the school rules and regulations.',
      'Provide basic educational and personal requirements for the child.',
    ],
  },
  {
    id: 'visitation',
    title: 'Section G: Visitation Days',
    icon: Eye,
    rules: [
      'Parents are encouraged to visit their children on visitation days and equip them with necessary requirements.',
      'Visiting hours are strictly between 9:00am to 5:00pm. Late arrivals shall not be allowed in.',
      'All parents must also observe office working hours and days, i.e. 8:00am to 5:00pm from Monday to Friday.',
      'Parents/guardians and relatives are not allowed to see students during class time.',
      'Visitors must see the school administration before talking to any student.',
      'Visitors (including old Students) are not allowed in the dormitories.',
    ],
  },
];

const SchoolRules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              School Rules & Regulations
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Guidelines for maintaining discipline, order, and a conducive learning environment at Queen of Martyrs S.S Kigoma.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-muted sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 bg-card rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
              >
                {section.title.split(': ')[1]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div key={section.id} id={section.id} className="scroll-mt-40">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="bg-card rounded-xl border border-border overflow-hidden">
                    <ol className="divide-y divide-border">
                      {section.rules.map((rule, index) => (
                        <li key={index} className="flex gap-4 p-4 hover:bg-muted/50 transition-colors">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground pt-1 leading-relaxed">{rule}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Motto */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-primary/10 rounded-xl p-8 border border-primary/20">
              <p className="font-display text-2xl italic text-primary font-semibold">
                "God Source of Wisdom"
              </p>
              <p className="text-muted-foreground mt-2">— School Motto</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolRules;
