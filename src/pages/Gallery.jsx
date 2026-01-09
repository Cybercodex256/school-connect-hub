import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlideshow from '../components/ImageSlideshow';
import SectionHeader from '../components/SectionHeader';

import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';
import gallery6 from '../assets/gallery-6.jpg';
import gallery7 from '../assets/gallery-7.jpg';
import heroImage from '../assets/hero-image.jpg';
import gallery8 from '../assets/gallery-8.jpg';
import archbishopBlessing from '../assets/archbishop-blessing.jpg';
import archbishopBlock from '../assets/archbishop-ssemogerere-block.jpg';

const images = [
  { src: gallery1, alt: 'Girls Dormitory block', category: 'Images' },
  { src: gallery2, alt: 'Science Laboratory - Students Conducting Experiments', category: 'Images' },
  { src: gallery3, alt: 'ICT Laboratory - Practical Sessions', category: 'Images' },
  { src: gallery4, alt: 'Project Work', category: 'Images' },
  { src: gallery5, alt: 'Student science laboratory', category: 'Images' },
  { src: gallery6, alt: 'School Library', category: 'Images' },
  { src: heroImage, alt: 'Main Campus View', category: 'Images' },
  { src: archbishopBlessing, alt: 'Archbishop Paul Ssemogerere blessing the foundation for the girls dormitory on 19th April, 2024', category: 'Images' },
  { src: archbishopBlock, alt: 'Archbishop Paul Ssemogerere Block', category: 'Images' },
];

const categories = ['All', 'Images', 'Videos'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages =
    selectedCategory === 'All' || selectedCategory === 'Images'
      ? images
      : [];

  const slideshowImages = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    caption: img.alt,
  }));

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Slideshow */}
      <section className="pt-24 pb-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Explore moments and memories from Queen of Martyrs Secondary School.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImageSlideshow images={slideshowImages} interval={5000} />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Moments"
            subtitle="Browse through our collection of memorable moments"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Videos Section */}
          {(selectedCategory === 'All' || selectedCategory === 'Videos') && (
            <div className="mb-16">
              <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                Videos
              </h3>
              <div className="max-w-2xl mx-auto">
                <a
                  href="https://www.tiktok.com/@queen.of.martyrs.s?_r=1&_t=ZM-92m6Tk4F8J9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-8 text-center hover:scale-105 transition-transform shadow-lg">
                    <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/30 transition-colors">
                      <Play className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-primary-foreground mb-2">
                      Watch Our Videos on TikTok
                    </h4>
                    <p className="text-primary-foreground/80">
                      Follow @queen.of.martyrs.s for school updates and moments
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-2 rounded-full font-semibold">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                      Visit TikTok
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Image Grid */}
          {(selectedCategory === 'All' || selectedCategory === 'Images') && (
            <>
              <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                Images
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square"
                    onClick={() => setLightboxImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-primary-foreground font-display font-semibold text-lg">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
            />
            <p className="text-primary-foreground text-center mt-4 font-display text-lg">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;