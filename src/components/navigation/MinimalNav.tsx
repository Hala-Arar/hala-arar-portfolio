import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';

interface MinimalNavProps {
  activeSection: string;
}

export const MinimalNav = ({ activeSection }: MinimalNavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine if we're on a dark or light section
  const darkSections = ['hero', 'soorena', 'journey', 'contact'];
  const isDarkSection = darkSections.includes(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isDarkSection ? 'text-white' : 'text-[hsl(var(--text-light-primary))]';
  const bgClass = isScrolled ? (isDarkSection ? 'glass' : 'glass-light') : '';

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass} ${textColor}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="text-xl md:text-2xl font-bold tracking-tight transition-smooth hover:opacity-70"
            >
              Hala Arar
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium transition-smooth hover:text-violet opacity-80 hover:opacity-100"
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="border-violet text-violet hover:bg-violet hover:text-white glow-violet"
                asChild
              >
                <a href="#" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-section-dark flex flex-col items-center justify-center space-y-8 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white hover:text-violet transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="outline"
            size="lg"
            className="border-violet text-violet hover:bg-violet hover:text-white glow-violet"
            asChild
          >
            <a href="#" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      )}
    </>
  );
};
