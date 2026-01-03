import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const oLevelFees = [
  { item: 'Admission Fees', boarding: '50,000', day: '50,000' },
  { item: 'Tuition Fees', boarding: '950,000', day: '540,000' },
  { item: 'Functional Fees', boarding: '520,000', day: '350,000' },
];

const aLevelFees = [
  { item: 'Admission Fees', boarding: '50,000', day: '50,000' },
  { item: 'Tuition Fees', boarding: '950,000', day: '640,000' },
  { item: 'Functional Fees', boarding: '520,000', day: '350,000' },
];

const personalRequirements = [
  'Four (4) recent passport photos of the student (Black and white with short hair), 2 passport photos of the parent(s)',
  '16 Counter books bought at school each at 8,000/=, 1 Good News Bible, Dictionary (preferably Oxford Advanced Learners\' Dictionary)',
  'A set, enough pens, pencils, ruler, Calculator',
  'A bucket, bathing soap, washing soap (3 bars), toothpaste, toothbrushes, sponge, Slippers, shoe polish, Open shoes and a comb',
  'Bed sheets, night wears, blanket, towel, mosquito net',
  'Black shoes, 3 pairs of white stockings for girls, 3 pairs of black stockings for boys and Canvas shoes',
  'Cutlery, water bottle and container',
  'A flask',
  'A black non-decorated belt for boys',
  'A three pin-plug flat iron',
  'A suitcase',
  'A School bag',
  'Enough handkerchiefs and under wears for both boys and girls',
  '2 below the knee black skirts for after classes for girls and 2 black trousers for boys',
  '3 Bras for girls (Boob tubes are not allowed), 3 vests for boys',
];

const FeesTable = ({ title, data, totalBoarding, totalDay }) => (
  <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
    <div className="bg-primary px-6 py-4">
      <h3 className="text-xl font-display font-bold text-primary-foreground">{title}</h3>
    </div>
    <Table>
      <TableHeader>
        <TableRow className="bg-muted/50">
          <TableHead className="font-semibold text-foreground">Fee Item</TableHead>
          <TableHead className="font-semibold text-foreground text-right">Boarding (UGX)</TableHead>
          <TableHead className="font-semibold text-foreground text-right">Day (UGX)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{row.item}</TableCell>
            <TableCell className="text-right">{row.boarding}</TableCell>
            <TableCell className="text-right">{row.day}</TableCell>
          </TableRow>
        ))}
        <TableRow className="bg-secondary/10 font-bold">
          <TableCell className="text-foreground">Total</TableCell>
          <TableCell className="text-right text-secondary">{totalBoarding}</TableCell>
          <TableCell className="text-right text-secondary">{totalDay}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

const Fees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Fees Structure 2026"
            subtitle="Transparent fee breakdown for both O-Level and A-Level programs"
          />
        </div>
      </section>

      {/* Fees Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FeesTable
              title="O-Level Fees (S.1 - S.4)"
              data={oLevelFees}
              totalBoarding="1,520,000"
              totalDay="940,000"
            />
            <FeesTable
              title="A-Level Fees (S.5 - S.6)"
              data={aLevelFees}
              totalBoarding="1,620,000"
              totalDay="1,040,000"
            />
          </div>

          {/* Notes */}
          <div className="max-w-4xl mx-auto mt-12 bg-accent/10 rounded-xl p-6 border border-accent/20">
            <h4 className="font-display font-bold text-lg text-foreground mb-3">Important Notes:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                Functional fees include: Uniforms, Sportswear, a sweater, Casual wear T-shirts and Development fees
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                A mattress is provided at school for new boarding students
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                Jumpers are sold at school at UGX 50,000/= for those who need extra warmth (not included in uniforms)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                Hair trimming is UGX 6,000/= for the full term
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Personal Requirements"
            subtitle="Items students need to bring when joining the school"
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
              <ol className="space-y-4">
                {personalRequirements.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground pt-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Fees */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
            <h3 className="font-display text-2xl font-bold mb-4">Have Questions About Fees?</h3>
            <p className="mb-6 opacity-90">Contact us for more information about payment plans and scholarships</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="tel:0782162068" className="bg-primary-foreground text-primary px-5 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
                0782-162068
              </a>
              <a href="tel:0704955683" className="bg-primary-foreground text-primary px-5 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
                0704-955683
              </a>
              <a href="tel:0705554967" className="bg-primary-foreground text-primary px-5 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
                0705-554967
              </a>
              <a href="mailto:kigomaqueenofmartyrs@gmail.com" className="bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fees;
