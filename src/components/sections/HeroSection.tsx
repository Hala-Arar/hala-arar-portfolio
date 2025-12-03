import { Mail, Github, Linkedin, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import portraitImage from '@/assets/grad2.png';

export const HeroSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-section-dark gradient-mesh relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Photo - 40% - Shows first on mobile, right on desktop */}
          <div className={`lg:col-span-2 flex justify-center lg:order-2 ${isVisible ? 'animate-scale-in stagger-2' : 'opacity-0'}`}>
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-indigo/30 rounded-2xl blur-3xl scale-110" />
              {/* Photo */}
              <img
                src={portraitImage}
                alt="Hala Arar"
                className="relative rounded-2xl shadow-2xl w-full max-w-md transition-smooth hover:scale-105"
                style={{ transform: 'perspective(1000px) rotateY(0deg)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg)';
                }}
              />
            </div>
          </div>

          {/* Text Content - 60% */}
          <div className="lg:col-span-3 lg:order-1 space-y-8">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                HALA ARAR
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-[hsl(var(--text-dark-secondary))] font-medium">
                Data Scientist · ML & NLP · End-to-End Pipelines
              </p>
              <p className="text-base sm:text-lg text-[hsl(var(--text-dark-secondary))] max-w-2xl leading-relaxed">
                Building intelligent systems that extract meaning from scientific literature and clinical data.
              </p>
            </div>

            {/* Contact Icons */}
            <div className={`flex space-x-6 ${isVisible ? 'animate-fade-up stagger-3' : 'opacity-0'}`}>
              <a
                href="mailto:hala.arar.02@gmail.com"
                className="text-white hover:text-indigo transition-smooth"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/halaarar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo transition-smooth"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/hala-arar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-up stagger-4' : 'opacity-0'}`}>
              <Button
                onClick={scrollToSkills}
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-section-dark transition-smooth text-base"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="bg-indigo text-white hover:bg-indigo/90 glow-indigo-strong transition-smooth text-base"
                asChild
              >
                <a href="/Hala_Arar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
