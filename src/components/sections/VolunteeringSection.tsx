import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Heart, Users, Tent } from 'lucide-react';

const volunteering = [
  {
    role: 'Hospital Volunteer',
    organization: 'Peterborough Regional Health Centre',
    period: '2016–2018',
    icon: Heart,
  },
  {
    role: 'Student Council Executive',
    organization: 'Crestwood Secondary School',
    period: '2018–2020',
    icon: Users,
  },
  {
    role: 'Camp Counselor',
    organization: 'Camp Northern Lights',
    period: '2019',
    icon: Tent,
  },
];

const interests = [
  { emoji: '🏃‍♀️', label: 'Running' },
  { emoji: '🧁', label: 'Baking cupcakes' },
  { emoji: '✍️', label: 'Creative writing' },
  { emoji: '🌿', label: 'Environmental advocacy' },
  { emoji: '🎮', label: 'Gaming (RPGs, Stardew Valley)' },
];

export const VolunteeringSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="volunteering"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-section-light py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Volunteering */}
          <div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--text-light-primary))] mb-8 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              Volunteering
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteering.map((item, index) => {
                const Icon = item.icon;
                const staggerClass = `stagger-${index + 1}`;
                return (
                  <div
                    key={index}
                    className={`bg-surface-light border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-violet hover:shadow-lg hover:-translate-y-1 ${
                      isVisible ? `animate-float-in ${staggerClass}` : 'opacity-0'
                    }`}
                  >
                    <Icon className="text-violet mb-4" size={28} />
                    <h3 className="text-lg font-bold text-[hsl(var(--text-light-primary))] mb-1">
                      {item.role}
                    </h3>
                    <p className="text-sm text-[hsl(var(--text-light-secondary))] mb-2">
                      {item.organization}
                    </p>
                    <p className="text-xs text-[hsl(var(--text-light-secondary))] font-medium">
                      {item.period}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Personal Interests */}
          <div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--text-light-primary))] mb-8 ${
                isVisible ? 'animate-fade-up stagger-4' : 'opacity-0'
              }`}
            >
              Beyond the Code
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {interests.map((interest, index) => {
                const staggerClass = `stagger-${index + 5}`;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-6 py-3 bg-surface-light border border-gray-200 rounded-full transition-all duration-300 hover:border-violet hover:scale-105 ${
                      isVisible ? `animate-float-in ${staggerClass}` : 'opacity-0'
                    }`}
                  >
                    <span className="text-2xl">{interest.emoji}</span>
                    <span className="text-sm font-medium text-[hsl(var(--text-light-primary))]">
                      {interest.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
