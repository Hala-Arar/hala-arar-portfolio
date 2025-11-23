import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'R', 'SQL', 'Bash'],
  },
  {
    category: 'ML & NLP',
    skills: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'Hugging Face',
      'PubMedBERT',
      'XGBoost',
      'LightGBM',
      'spaCy',
      'Transformers',
    ],
  },
  {
    category: 'Data Engineering',
    skills: ['pandas', 'NumPy', 'ETL', 'REST APIs', 'SQL Optimization'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Git', 'GitHub Actions'],
  },
  {
    category: 'Visualization',
    skills: ['Shiny', 'Plotly', 'Dash'],
  },
];

export const SkillsSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-section-light py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[hsl(var(--text-light-primary))] mb-16 lg:mb-24 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          What I Work With
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Floating Pills Layout */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skillGroups.map((group, groupIndex) =>
              group.skills.map((skill, skillIndex) => {
                const staggerClass = `stagger-${Math.min((groupIndex * 3 + skillIndex) % 8 + 1, 8)}`;
                return (
                  <div
                    key={skill}
                    className={`px-4 sm:px-6 py-2 sm:py-3 bg-surface-light border border-gray-200 rounded-full text-sm sm:text-base font-medium text-[hsl(var(--text-light-primary))] transition-all duration-300 hover:border-violet hover:scale-105 hover:glow-violet ${
                      isVisible ? `animate-float-in ${staggerClass}` : 'opacity-0'
                    }`}
                  >
                    {skill}
                  </div>
                );
              })
            )}
          </div>

          {/* Category Labels (Optional subtle background text) */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className={`text-xs sm:text-sm font-semibold text-[hsl(var(--text-light-secondary))] uppercase tracking-wider ${
                  isVisible ? 'animate-fade-up stagger-6' : 'opacity-0'
                }`}
              >
                {group.category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
