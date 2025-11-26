import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const interests = [
  { emoji: '🏃‍♀️', label: 'Running', placeholder: 'running-photo.jpg' },
  { emoji: '🧁', label: 'Baking Cupcakes', placeholder: 'baking-photo.jpg' },
  { emoji: '✍️', label: 'Creative Writing', placeholder: 'writing-photo.jpg' },
  { emoji: '🌿', label: 'Environmental Advocacy', placeholder: 'environment-photo.jpg' },
  { emoji: '🎮', label: 'Gaming', placeholder: 'gaming-photo.jpg' },
];

export const BeyondTheCodeSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="beyond"
      ref={ref}
      className="py-20 bg-section-dark overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-white mb-12 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          Beyond the Code
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            className={`flex gap-6 overflow-x-auto pb-6 scrollbar-hide ${
              isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {interests.map((interest, index) => (
              <div
                key={interest.label}
                className="flex-shrink-0 w-72 sm:w-80"
              >
                <div className="group relative bg-surface-dark border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo hover:shadow-xl hover:-translate-y-2 hover:glow-indigo">
                  {/* Photo Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                    <div className="text-8xl opacity-20">{interest.emoji}</div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium px-4 py-2 bg-indigo rounded-lg">
                        Add {interest.placeholder}
                      </p>
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{interest.emoji}</span>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo transition-colors">
                        {interest.label}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-6">
            <p className="text-sm text-[hsl(var(--text-dark-secondary))] flex items-center justify-center gap-2">
              <span>←</span>
              Scroll to explore
              <span>→</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
