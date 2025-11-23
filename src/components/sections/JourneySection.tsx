import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MapPin, GraduationCap } from 'lucide-react';

interface TimelineEntry {
  side: 'left' | 'right';
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  logo: string;
}

const timeline: TimelineEntry[] = [
  {
    side: 'right',
    role: 'Data Science Intern',
    company: 'University of Helsinki',
    location: 'Helsinki, Finland (Remote)',
    period: 'May 2025 – Present',
    description:
      'Built PubMedBERT pipeline for SOORENA, processed 250K+ abstracts, developed Shiny app for researchers',
    logo: '🏛️',
  },
  {
    side: 'left',
    role: 'Data Scientist – Research',
    company: 'University of British Columbia',
    location: 'Vancouver, BC',
    period: 'Jul 2025 – Oct 2025',
    description:
      'Developed XGBoost and LLM models for clinical gene variant classification using ACMG guidelines',
    logo: '🎓',
  },
  {
    side: 'right',
    role: 'Dental Assistant',
    company: 'Park Street Dentistry',
    location: 'Peterborough, ON',
    period: 'Jul 2022 – Apr 2024',
    description:
      'Managed patient records, improved data accessibility, streamlined clinical workflows',
    logo: '🦷',
  },
  {
    side: 'left',
    role: 'Lab Technician Assistant',
    company: 'Trent University',
    location: 'Peterborough, ON',
    period: 'Sep 2022 – Apr 2023',
    description:
      'Prepared lab equipment, developed digital inventory systems, supported research operations',
    logo: '🔬',
  },
  {
    side: 'right',
    role: 'Lead Camp Counselor',
    company: 'Ontario Federation of Anglers and Hunters',
    location: 'Ontario',
    period: 'Summers 2020-2021',
    description:
      'Led environmental education programs, managed teams, organized community events',
    logo: '🌲',
  },
  {
    side: 'left',
    role: 'Crew Trainer',
    company: "McDonald's",
    location: 'Peterborough, ON',
    period: '2018-2020',
    description:
      'Trained new employees, optimized workflows, maintained quality standards',
    logo: '🍔',
  },
  {
    side: 'right',
    role: 'Camp Counselor',
    company: 'Trent Excalibur',
    location: 'Peterborough, ON',
    period: 'Summer 2019',
    description: 'Mentored youth in outdoor activities, coordinated group events',
    logo: '⛺',
  },
];

const education = [
  {
    degree: 'Master of Data Science',
    school: 'University of British Columbia',
    period: '2024 – 2025',
    details: [
      'Advanced ML',
      'Causal Inference',
      'NLP',
      'Cloud Systems',
    ],
    highlight: 'Capstone: SOORENA (University of Helsinki)',
  },
  {
    degree: 'Bachelor of Science, Biomedical Sciences',
    school: 'Trent University',
    period: '2020 – 2024',
    details: [
      'Minor in Mathematics',
      "Dean's Honour Roll",
      'Renewable Entrance Scholarship',
    ],
    highlight: '',
  },
];

// Helper to extract unique years from timeline
const extractYears = (timeline: TimelineEntry[]): number[] => {
  const years = new Set<number>();
  timeline.forEach(entry => {
    const matches = entry.period.match(/\d{4}/g);
    if (matches) {
      matches.forEach(year => years.add(parseInt(year)));
    }
  });
  return Array.from(years).sort((a, b) => b - a);
};

export const JourneySection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const years = extractYears(timeline);

  return (
    <section
      id="journey"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-section-dark py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-white mb-16 lg:mb-20 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          My Journey
        </h2>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line with Year Markers */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo via-indigo/50 to-indigo -translate-x-1/2 shadow-lg" 
            style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }} 
          >
            {/* Year Markers */}
            {years.map((year, idx) => (
              <div 
                key={year}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: `${(idx / (years.length - 1)) * 95}%` }}
              >
                <div className="px-4 py-1.5 bg-indigo text-white rounded-full text-sm font-bold shadow-lg">
                  {year}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Entries */}
          <div className="space-y-20 lg:space-y-24">
            {timeline.map((entry, index) => {
              const staggerClass = `stagger-${Math.min((index % 8) + 1, 8)}`;
              return (
                <div
                  key={index}
                  className={`relative ${
                    isVisible ? `animate-fade-up ${staggerClass}` : 'opacity-0'
                  }`}
                >
                  {/* Connection dot on timeline */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo shadow-lg z-10" 
                    style={{ boxShadow: '0 0 10px rgba(99, 102, 241, 0.6)' }} 
                  />

                  {entry.side === 'left' ? (
                    // LEFT SIDE ENTRY: Logo on left, card on right of center
                    <div className="grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-center lg:pr-[50%]">
                      {/* Logo on LEFT side */}
                      <div className="w-16 h-16 rounded-full bg-surface-dark border-4 border-indigo flex items-center justify-center text-3xl glow-indigo-strong transition-transform duration-300 hover:scale-110 flex-shrink-0">
                        {entry.logo}
                      </div>
                      
                      {/* Card content */}
                      <div className="bg-surface-dark border border-gray-800 rounded-xl p-6 hover:border-indigo transition-smooth hover:glow-indigo">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {entry.role}
                        </h3>
                        <div className="text-indigo font-semibold mb-1">
                          {entry.company}
                        </div>
                        <div className="text-sm text-gray-400 mb-2">
                          {entry.period}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-[hsl(var(--text-dark-secondary))] mb-3">
                          <MapPin size={14} />
                          <span>{entry.location}</span>
                        </div>
                        <p className="text-sm text-[hsl(var(--text-dark-secondary))] leading-relaxed">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // RIGHT SIDE ENTRY: Card on left of center, logo on right
                    <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center lg:pl-[50%]">
                      {/* Card content */}
                      <div className="bg-surface-dark border border-gray-800 rounded-xl p-6 hover:border-indigo transition-smooth hover:glow-indigo">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {entry.role}
                        </h3>
                        <div className="text-indigo font-semibold mb-1">
                          {entry.company}
                        </div>
                        <div className="text-sm text-gray-400 mb-2">
                          {entry.period}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-[hsl(var(--text-dark-secondary))] mb-3">
                          <MapPin size={14} />
                          <span>{entry.location}</span>
                        </div>
                        <p className="text-sm text-[hsl(var(--text-dark-secondary))] leading-relaxed">
                          {entry.description}
                        </p>
                      </div>
                      
                      {/* Logo on RIGHT side */}
                      <div className="w-16 h-16 rounded-full bg-surface-dark border-4 border-indigo flex items-center justify-center text-3xl glow-indigo-strong transition-transform duration-300 hover:scale-110 flex-shrink-0">
                        {entry.logo}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto mt-20 lg:mt-32">
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-surface-dark border border-gray-800 rounded-xl p-6 hover:border-indigo transition-smooth hover:glow-indigo ${
                  isVisible ? `animate-scale-in stagger-${index + 6}` : 'opacity-0'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <GraduationCap className="text-indigo" size={32} />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-indigo font-semibold text-sm mb-1">
                      {edu.school}
                    </div>
                    <div className="text-sm text-[hsl(var(--text-dark-secondary))]">
                      {edu.period}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[hsl(var(--text-dark-secondary))]">
                    {edu.details.join(' · ')}
                  </p>
                  {edu.highlight && (
                    <p className="text-sm text-indigo font-medium">{edu.highlight}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
