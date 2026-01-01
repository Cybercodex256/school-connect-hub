import React, { useState } from 'react';
import { X } from 'lucide-react';
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
import heroImage from '../assets/hero-bg.jpg';

const images = [
  { src: gallery1, alt: 'ICT Laboratory - Students Learning Computer Skills', category: 'ICT Laboratory' },
  { src: gallery2, alt: 'ICT Laboratory - Modern Computer Facilities', category: 'ICT Laboratory' },
  { src: gallery3, alt: 'ICT Laboratory - Practical Sessions', category: 'ICT Laboratory' },
  { src: gallery4, alt: 'School Compound and Buildings', category: 'Others' },
  { src: gallery5, alt: 'Students During Assembly', category: 'Others' },
  { src: gallery6, alt: 'Sports and Recreation Activities', category: 'Others' },
  { src: gallery7, alt: 'Classroom Block and Facilities', category: 'Others' },
  { src: heroImage, alt: 'Main Campus View', category: 'Others' },
];

const categories = ['All', 'ICT Laboratory', 'Others'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

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

          {/* Image Grid */}
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
                    <span className="text-primary-foreground/70 text-sm">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
