import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleDriveEmbed from '../components/GoogleDriveEmbed';
import SectionHeader from '../components/SectionHeader';

// Replace these with actual Google Drive folder IDs for each form
const FOLDER_IDS = {
  'form-1': '1QCfYdJOJ7HqbPn-IxLAGxsss7eGl3lAY',
  'form-2': '1EGsnDUFhcHKZFCZLDgNm5pq2vNPWn9Z3',
  'form-3': '1ZBXKWOfRvXnWM-k3hLOY9AxEKv4oiecE',
  'form-4': '1cccgsyPXlHLkXQq895ZQEy5klUke4lDD',
  'form-5': '1EFKaoBKEs41n2sIroO_Rc5Lx5qrs8c3R',
  'form-6': '1r8a7LNCqnZ2dybhHe1rRXjXB1h0hOQ2r',
};

const formNames = {
  'form-1': 'Form 1',
  'form-2': 'Form 2',
  'form-3': 'Form 3',
  'form-4': 'Form 4',
  'form-5': 'Form 5',
  'form-6': 'Form 6',
};

const HolidayWorkForm = () => {
  const { formId } = useParams();
  const formName = formNames[formId] || 'Unknown Form';
  const folderId = FOLDER_IDS[formId] || '';

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-4">
          <Link
            to="/holiday-work"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Classes
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-secondary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                {formName} Holiday Work
              </h1>
              <p className="text-primary-foreground/80 mt-2">
                Access all holiday assignments and revision materials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Available Documents"
            subtitle="Click on any document to view or download"
          />
          <div className="max-w-4xl mx-auto">
            <GoogleDriveEmbed
              folderId={folderId}
              title={`${formName} Holiday Assignments`}
            />
          </div>
        </div>
      </section>

      {/* Other Forms */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
            Switch to Another Class
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(formNames).map(([id, name]) => (
              <Link
                key={id}
                to={`/holiday-work/${id}`}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  id === formId
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground border border-border hover:bg-muted'
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HolidayWorkForm;
