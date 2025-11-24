import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const primaryLanguages = [
  { name: 'Python', icon: '/skills/python.svg' },
  { name: 'R', icon: '/skills/r.svg' },
  { name: 'SQL', icon: '/skills/sql.svg' },
];

const otherSkills = [
  { name: 'PyTorch', icon: '/skills/pytorch.svg' },
  { name: 'TensorFlow', icon: '/skills/tensorflow.svg' },
  { name: 'scikit-learn', icon: '/skills/sklearn.svg' },
  { name: 'Hugging Face', icon: '/skills/huggingface.svg' },
  { name: 'PubMedBERT', icon: '/skills/bert.svg' },
  { name: 'XGBoost', icon: '/skills/xgboost.svg' },
  { name: 'LightGBM', icon: '/skills/lightgbm.svg' },
  { name: 'spaCy', icon: '/skills/spacy.svg' },
  { name: 'Transformers', icon: '/skills/transformers.svg' },
  { name: 'pandas', icon: '/skills/pandas.svg' },
  { name: 'NumPy', icon: '/skills/numpy.svg' },
  { name: 'ETL', icon: '/skills/etl.svg' },
  { name: 'REST APIs', icon: '/skills/api.svg' },
  { name: 'AWS', icon: '/skills/aws.svg' },
  { name: 'Docker', icon: '/skills/docker.svg' },
  { name: 'Git', icon: '/skills/git.svg' },
  { name: 'GitHub Actions', icon: '/skills/github-actions.svg' },
  { name: 'Shiny', icon: '/skills/shiny.svg' },
  { name: 'Plotly', icon: '/skills/plotly.svg' },
  { name: 'Dash', icon: '/skills/dash.svg' },
  { name: 'Bash', icon: '/skills/bash.svg' },
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
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-surface-light border-2 border-indigo rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:glow-indigo">
                    <img src={skill.icon} alt={`${skill.name} logo`} className="w-full h-full object-contain" />
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
                  <img src={skill.icon} alt={`${skill.name} logo`} className="w-5 h-5 object-contain" />
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
