import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const ContactSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-section-dark py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Headline */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
              Let's Build Something Together
            </h2>
            <p className="text-lg sm:text-xl text-[hsl(var(--text-dark-secondary))] max-w-2xl mx-auto">
              Open to data science opportunities, research collaborations, and interesting
              conversations.
            </p>
          </div>

          {/* Contact Icons */}
          <div
            className={`flex justify-center items-center gap-8 sm:gap-12 ${
              isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'
            }`}
          >
            <a
              href="mailto:hala.arar.02@gmail.com"
              className="group flex flex-col items-center gap-3 transition-smooth"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border-2 border-gray-700 flex items-center justify-center group-hover:border-indigo group-hover:glow-indigo transition-all">
                <Mail className="text-[hsl(var(--text-dark-secondary))] group-hover:text-indigo transition-smooth" size={28} />
              </div>
              <span className="text-sm text-[hsl(var(--text-dark-secondary))] group-hover:text-indigo transition-colors">
                Email
              </span>
            </a>

            <a
              href="https://github.com/halaarar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-smooth"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border-2 border-gray-700 flex items-center justify-center group-hover:border-indigo group-hover:glow-indigo transition-all">
                <Github className="text-[hsl(var(--text-dark-secondary))] group-hover:text-indigo transition-smooth" size={28} />
              </div>
              <span className="text-sm text-[hsl(var(--text-dark-secondary))] group-hover:text-indigo transition-colors">
                GitHub
              </span>
            </a>

            <a
              href="https://linkedin.com/in/hala-arar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-smooth"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border-2 border-gray-700 flex items-center justify-center group-hover:border-indigo group-hover:glow-indigo transition-all">
                <Linkedin className="text-[hsl(var(--text-dark-secondary))] group-hover:text-indigo transition-smooth" size={28} />
              </div>
              <span className="text-sm text-[hsl(var(--text-dark-secondary))] group-hover:text-indigo transition-colors">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Download Button */}
          <div
            className={`flex justify-center ${
              isVisible ? 'animate-fade-up stagger-3' : 'opacity-0'
            }`}
          >
            <Button
              size="lg"
              className="bg-indigo text-white hover:bg-indigo/90 glow-indigo-strong transition-smooth"
              asChild
            >
              <a href={`${import.meta.env.BASE_URL}Hala_Arar_Resume.pdf`} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </div>

          {/* Footer */}
          <div
            className={`pt-12 border-t border-gray-800 ${
              isVisible ? 'animate-fade-up stagger-4' : 'opacity-0'
            }`}
          >
            <p className="text-sm text-[hsl(var(--text-dark-secondary))]">
              © 2025 Hala Arar 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
