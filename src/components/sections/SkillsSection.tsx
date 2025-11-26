import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const primaryLanguages = [
  { name: 'Python', icon: '/skills/python.svg' },
  { name: 'R', icon: '/skills/r.svg' },
  { name: 'SQL', icon: '/skills/sql.svg' },
];

const floatingSkills = [
  { name: 'PyTorch', icon: '/skills/pytorch.svg', position: 'translate-x-[-20px] translate-y-[10px]', animation: 'animate-gentle-float-1', delay: 'delay-0' },
  { name: 'TensorFlow', icon: '/skills/tensorflow.svg', position: 'translate-x-[30px] translate-y-[-5px]', animation: 'animate-gentle-float-2', delay: 'delay-100' },
  { name: 'scikit-learn', icon: '/skills/sklearn.svg', position: 'translate-x-[-15px] translate-y-[15px]', animation: 'animate-gentle-float-3', delay: 'delay-200' },
  { name: 'Hugging Face', icon: '/skills/huggingface.svg', position: 'translate-x-[25px] translate-y-[8px]', animation: 'animate-gentle-float-1', delay: 'delay-300' },
  { name: 'PubMedBERT', icon: '/skills/pubmed.svg', position: 'translate-x-[-10px] translate-y-[-8px]', animation: 'animate-gentle-float-2', delay: 'delay-150' },
  { name: 'spaCy', icon: '/skills/spacy.svg', position: 'translate-x-[18px] translate-y-[12px]', animation: 'animate-gentle-float-3', delay: 'delay-500' },
  { name: 'pandas', icon: '/skills/pandas.svg', position: 'translate-x-[-25px] translate-y-[-10px]', animation: 'animate-gentle-float-1', delay: 'delay-700' },
  { name: 'NumPy', icon: '/skills/numpy.svg', position: 'translate-x-[15px] translate-y-[5px]', animation: 'animate-gentle-float-2', delay: 'delay-400' },
  { name: 'Plotly', icon: '/skills/plotly.svg', position: 'translate-x-[-18px] translate-y-[18px]', animation: 'animate-gentle-float-3', delay: 'delay-600' },
  { name: 'AWS', icon: '/skills/aws.svg', position: 'translate-x-[22px] translate-y-[-12px]', animation: 'animate-gentle-float-1', delay: 'delay-800' },
  { name: 'Docker', icon: '/skills/docker.svg', position: 'translate-x-[-12px] translate-y-[6px]', animation: 'animate-gentle-float-2', delay: 'delay-200' },
  { name: 'Git', icon: '/skills/git.svg', position: 'translate-x-[28px] translate-y-[-15px]', animation: 'animate-gentle-float-3', delay: 'delay-900' },
  { name: 'GitHub Actions', icon: '/skills/github-actions.svg', position: 'translate-x-[-8px] translate-y-[20px]', animation: 'animate-gentle-float-1', delay: 'delay-1000' },
  { name: 'Bash', icon: '/skills/bash.svg', position: 'translate-x-[20px] translate-y-[-18px]', animation: 'animate-gentle-float-2', delay: 'delay-300' },
];

export const SkillsSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="flex items-center justify-center bg-section-light py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[hsl(var(--text-light-primary))] mb-4 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          What I Work With
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Primary Languages - Highlighted */}
          <div className="mb-4">
            <p
              className={`text-center text-sm font-semibold text-[hsl(var(--text-light-secondary))] uppercase tracking-wider mb-2 ${
                isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'
              }`}
            >
              Primary Languages
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-5">
              {primaryLanguages.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group flex flex-col items-center gap-3 ${
                    isVisible ? `animate-float-in stagger-${index + 2}` : 'opacity-0'
                  }`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-surface-light border-2 border-indigo rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:glow-indigo">
                    <img src={skill.icon} alt={`${skill.name} logo`} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[hsl(var(--text-light-primary))] group-hover:text-indigo transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Skills */}
          <div className="relative flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
            {floatingSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-surface-light border border-gray-200 rounded-full text-sm font-medium text-[hsl(var(--text-light-primary))] transition-all duration-300 hover:border-indigo hover:scale-105 hover:shadow-lg ${
                  isVisible ? `${skill.animation} ${skill.delay} ${skill.position}` : 'opacity-0'
                }`}
              >
                <img src={skill.icon} alt={`${skill.name} logo`} className="w-5 h-5 object-contain" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
