import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import runPhoto from '@/assets/beyond/run.jpeg';
import skiPhoto from '@/assets/beyond/ski.png';
import petraPhoto from '@/assets/beyond/petra.jpg';
import gradPhoto from '@/assets/beyond/grad.jpg';
import conferencePhoto from '@/assets/beyond/conference.jpg';
import birdPhoto from '@/assets/beyond/bird.jpg';

const interests = [
  { emoji: '🏃‍♀️', label: 'First 10K Race', photo: runPhoto },
  { emoji: '⛷️', label: 'Hitting the Slopes', photo: skiPhoto },
  { emoji: '🏺', label: 'Exploring Jordan', photo: petraPhoto },
  { emoji: '🎓', label: 'UBC Grad 2025', photo: gradPhoto },
  { emoji: '🔬', label: 'Conference Season', photo: conferencePhoto },
  { emoji: '🐦', label: 'Morning Chirps', photo: birdPhoto },
];

export const BeyondTheCodeSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="beyond"
      ref={ref}
      className="py-20 bg-section-light overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[hsl(var(--text-light-primary))] mb-4 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          Beyond the Code
        </h2>
        <p
          className={`text-center text-[hsl(var(--text-light-secondary))] mb-12 text-lg ${
            isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'
          }`}
        >
          When I'm not analyzing data
        </p>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            className={`flex gap-6 overflow-x-auto pb-6 scrollbar-hide ${
              isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {interests.map((interest) => (
              <div
                key={interest.label}
                className="flex-shrink-0 w-[300px] sm:w-[320px]"
              >
                <div className="group relative bg-surface-light border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo hover:shadow-xl hover:-translate-y-2 hover:glow-indigo h-[400px]">
                  {/* Photo */}
                  <div className="h-[320px] overflow-hidden">
                    <img
                      src={interest.photo}
                      alt={interest.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Label */}
                  <div className="p-4 bg-surface-light">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{interest.emoji}</span>
                      <h3 className="text-base font-bold text-[hsl(var(--text-light-primary))] group-hover:text-indigo transition-colors">
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
            <p className="text-sm text-[hsl(var(--text-light-secondary))] flex items-center justify-center gap-2">
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
