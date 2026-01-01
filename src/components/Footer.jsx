import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-display font-bold text-xl">QM</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Queen of Martyrs</h3>
                <p className="text-sm opacity-80">Secondary School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Founded on Catholic doctrines, providing excellent quality secondary education
              and producing self-reliant, God fearing citizens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Applications', path: '/applications' },
                { name: 'Holiday Work', path: '/holiday-work' },
                { name: 'Circulars', path: '/circulars' },
                { name: 'Fees', path: '/fees' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  P.O. Box 3443, Kampala<br />
                  Kigoma Village, Bukasa Parish, Wakiso District
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p>0782-162068</p>
                  <p>0704-955683</p>
                  <p>0705-554967</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm opacity-80">kigomaqueenofmartyrs@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">School Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p className="font-medium">Monday - Friday</p>
                  <p>7:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p className="font-medium">Saturday</p>
                  <p>8:00 AM - 12:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Queen of Martyrs Secondary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
