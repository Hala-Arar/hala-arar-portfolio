import { HardHat, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const FeaturedPWASection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const metrics = [
    { value: 'Offline-First', label: 'Works Without Internet' },
    { value: 'AI-Powered', label: 'Whisper Transcription' },
    { value: 'RAG-Based', label: 'Regulation Matching' },
    { value: 'n8n', label: 'Automated Workflows' },
  ];

  return (
    <section
      id="safety-pwa"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-section-dark py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className={`space-y-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              {/* Logo and Project Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-surface-dark border-2 border-indigo rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}logos/framework.png`}
                    alt="Framework AI Logo"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  Safety PWA
                </h2>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[hsl(var(--text-dark-secondary))]">
                Offline-First Construction Safety Application
              </h3>
              <p className="text-base sm:text-lg text-[hsl(var(--text-dark-secondary))] leading-relaxed">
                Built an offline-first Progressive Web App for construction site safety observations using React, TypeScript, and IndexedDB. 
                Features AI-powered audio transcription via Whisper and intelligent safety regulation matching through Claude API with custom n8n automation workflows.
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
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo">
                    {metric.value}
                  </div>
                  <div className="text-sm sm:text-base text-[hsl(var(--text-dark-secondary))]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div
              className={`flex flex-wrap gap-3 ${
                isVisible ? 'animate-fade-up stagger-3' : 'opacity-0'
              }`}
            >
              <Button
                variant="outline"
                className="border-gray-600 text-gray-400 cursor-not-allowed opacity-60"
                disabled
              >
                <Construction className="mr-2 h-4 w-4" />
                Coming Soon
              </Button>
              <p className="text-sm text-[hsl(var(--text-dark-secondary))] italic self-center">
                Company not yet public
              </p>
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
              <div className="relative bg-surface-dark rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                {/* Browser Chrome */}
                <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400">
                    safety-pwa.framework.ai
                  </div>
                </div>
                {/* Screenshot Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <HardHat className="w-16 h-16 text-indigo mx-auto mb-4" strokeWidth={1.5} />
                    <p className="text-[hsl(var(--text-dark-secondary))] text-lg">
                      Screenshot Coming Soon
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      PWA interface preview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
