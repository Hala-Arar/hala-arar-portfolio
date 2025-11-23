import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const primaryLanguages = [
  { name: 'Python', icon: '🐍' },
  { name: 'R', icon: '📊' },
  { name: 'SQL', icon: '🗄️' },
];

const otherSkills = [
  { name: 'PyTorch', icon: '🔥' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'scikit-learn', icon: '🔬' },
  { name: 'Hugging Face', icon: '🤗' },
  { name: 'PubMedBERT', icon: '📝' },
  { name: 'XGBoost', icon: '🚀' },
  { name: 'LightGBM', icon: '💡' },
  { name: 'spaCy', icon: '🌐' },
  { name: 'Transformers', icon: '⚡' },
  { name: 'pandas', icon: '🐼' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'ETL', icon: '🔄' },
  { name: 'REST APIs', icon: '🌍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub Actions', icon: '⚙️' },
  { name: 'Shiny', icon: '✨' },
  { name: 'Plotly', icon: '📈' },
  { name: 'Dash', icon: '📊' },
  { name: 'Bash', icon: '💻' },
];

export const SkillsSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-section-light py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[hsl(var(--text-light-primary))] mb-12 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          What I Work With
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Primary Languages - Highlighted */}
          <div className="mb-12">
            <p
              className={`text-center text-sm font-semibold text-[hsl(var(--text-light-secondary))] uppercase tracking-wider mb-8 ${
                isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'
              }`}
            >
              Primary Languages
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-16">
              {primaryLanguages.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group flex flex-col items-center gap-3 ${
                    isVisible ? `animate-float-in stagger-${index + 2}` : 'opacity-0'
                  }`}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-surface-light border-2 border-indigo rounded-2xl text-5xl sm:text-6xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:glow-indigo">
                    {skill.icon}
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[hsl(var(--text-light-primary))] group-hover:text-indigo transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills - Floating Pills with Icons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {otherSkills.map((skill, index) => {
              const staggerClass = `stagger-${Math.min((index % 8) + 1, 8)}`;
              return (
                <div
                  key={skill.name}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-surface-light border border-gray-200 rounded-full text-sm sm:text-base font-medium text-[hsl(var(--text-light-primary))] transition-all duration-300 hover:border-indigo hover:scale-105 hover:glow-indigo ${
                    isVisible ? `animate-float-in ${staggerClass}` : 'opacity-0'
                  }`}
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
