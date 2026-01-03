import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import schoolBadge from '../assets/school-badge.jpg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Applications', path: '/applications' },
  {
    name: 'Holiday Work',
    path: '/holiday-work',
    submenu: [
      { name: 'Form 1', path: '/holiday-work/form-1' },
      { name: 'Form 2', path: '/holiday-work/form-2' },
      { name: 'Form 3', path: '/holiday-work/form-3' },
      { name: 'Form 4', path: '/holiday-work/form-4' },
      { name: 'Form 5', path: '/holiday-work/form-5' },
      { name: 'Form 6', path: '/holiday-work/form-6' },
    ],
  },
  { name: 'Circulars', path: '/circulars' },
  { name: 'Fees', path: '/fees' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* School Name */}
          <Link to="/" className={`flex items-center gap-3 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
            <img src={schoolBadge} alt="School Badge" className="w-12 h-12 rounded-full object-cover bg-white" />
            <div>
              <h1 className="font-display font-bold text-xl leading-tight">Queen of Martyrs S.S</h1>
              <p className={`text-xs italic ${scrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                "God Source of Wisdom"
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                    isActive(link.path)
                      ? 'bg-primary text-primary-foreground'
                      : scrolled
                      ? 'text-foreground hover:bg-muted'
                      : 'text-primary-foreground hover:bg-primary-foreground/10'
                  }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {link.submenu && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-lg shadow-xl border border-border py-2 min-w-[160px]">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-foreground hover:bg-muted' : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-card border-t border-border py-4 px-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex items-center justify-between">
                <Link
                  to={link.path}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === link.name ? null : link.name)
                    }
                    className="p-3 text-foreground"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
              {link.submenu && activeDropdown === link.name && (
                <div className="ml-4 mt-1 border-l-2 border-primary/20 pl-4">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.path}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
