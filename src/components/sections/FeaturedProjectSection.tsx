import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const FeaturedProjectSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const metrics = [
    { value: '252,880+', label: 'Abstracts Processed' },
    { value: '96.0%', label: 'Detection Accuracy' },
    { value: '96.2%', label: 'Macro-F1 Score' },
    { value: '7', label: 'Mechanism Classes' },
  ];

  return (
    <section
      id="soorena"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-section-light py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className={`space-y-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              {/* Logo and Project Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-surface-light border-2 border-indigo rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}soorena-logo.png`}
                    alt="SOORENA Logo"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[hsl(var(--text-light-primary))]">
                  SOORENA
                </h2>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[hsl(var(--text-light-secondary))]">
                Autoregulatory Mechanism Detection in Biomedical Literature
              </h3>
              <p className="text-base sm:text-lg text-[hsl(var(--text-light-secondary))] leading-relaxed">
                A two-stage PubMedBERT pipeline that automatically identifies and classifies protein
                autoregulatory mechanisms. Resulted in a first-author preprint and a production-ready
                Shiny application for researchers.
              </p>
            </div>

            {/* Metrics Grid */}
            <div
              className={`grid grid-cols-2 gap-6 ${
                isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'
              }`}
            >
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo">
                    {metric.value}
                  </div>
                  <div className="text-sm sm:text-base text-[hsl(var(--text-light-secondary))]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div
              className={`flex flex-wrap gap-3 ${
                isVisible ? 'animate-fade-up stagger-3' : 'opacity-0'
              }`}
            >
              <Button
                variant="outline"
                className="border-indigo text-indigo hover:bg-indigo hover:text-white"
                asChild
              >
                <a
                  href="https://github.com/halaarar/SOORENA_2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-indigo text-indigo hover:bg-indigo hover:text-white"
                asChild
              >
                <a href="https://www.biorxiv.org/content/10.1101/2025.11.03.685842v1" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Publication
                </a>
              </Button>
            </div>
          </div>

          {/* Screenshot Placeholder */}
          <div
            className={`${isVisible ? 'animate-scale-in stagger-2' : 'opacity-0'}`}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-indigo/20 rounded-lg blur-2xl" />
              {/* Browser Mockup */}
              <div className="relative bg-surface-light rounded-lg overflow-hidden shadow-2xl border border-gray-200">
                {/* Browser Chrome */}
                <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400">
                    soorena-app.shinyapps.io
                  </div>
                </div>
                {/* Screenshot */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}soorena-screenshot.png`}
                    alt="SOORENA Shiny App Interface"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
