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

interface TimelineGroup {
  type: 'single' | 'concurrent' | 'overlap';
  entries: TimelineEntry[];
  dotLabel?: string;
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

// Function to detect concurrent timeline entries
const groupTimelineEntries = (entries: TimelineEntry[]): TimelineGroup[] => {
  const groups: TimelineGroup[] = [];
  const processed = new Set<number>();

  entries.forEach((entry, index) => {
    if (processed.has(index)) return;

    // Check for overlap (Dental Assistant & Lab Technician - partial overlap)
    if (index === 2) {
      // Dental Assistant (Jul 2022 – Apr 2024) partially overlaps with Lab Technician (Sep 2022 – Apr 2023)
      groups.push({
        type: 'overlap',
        entries: [entries[2], entries[3]], // Dental Assistant (main), then Lab Technician
        dotLabel: 'Concurrent: Sep 2022 – Apr 2023',
      });
      processed.add(2);
      processed.add(3);
    } else {
      groups.push({
        type: 'single',
        entries: [entry],
      });
      processed.add(index);
    }
  });

  return groups;
};

export const JourneySection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const timelineGroups = groupTimelineEntries(timeline);

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
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo via-indigo/50 to-indigo -translate-x-1/2 shadow-lg" 
            style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }} 
          />

          {/* Timeline Entries */}
          <div className="space-y-20 lg:space-y-28">
            {timelineGroups.map((group, groupIndex) => {
              const staggerClass = `stagger-${Math.min((groupIndex % 8) + 1, 8)}`;
              
              if (group.type === 'overlap') {
                // Render overlapping experiences with staggered layout
                const mainEntry = group.entries[0]; // Dental Assistant (longer duration)
                const overlapEntry = group.entries[1]; // Lab Technician (shorter, overlapping)
                
                return (
                  <div
                    key={`group-${groupIndex}`}
                    className={`relative ${
                      isVisible ? `animate-fade-up ${staggerClass}` : 'opacity-0'
                    }`}
                  >
                    {/* Small Dot on Center Line */}
                    <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo shadow-lg z-10" 
                      style={{ boxShadow: '0 0 15px rgba(99, 102, 241, 0.6)' }} 
                    />
                    
                    {/* Overlap Date Label */}
                    {group.dotLabel && (
                      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-8 px-3 py-1 bg-indigo/20 border border-indigo rounded-full text-xs font-bold text-indigo text-center whitespace-nowrap">
                        {group.dotLabel}
                      </div>
                    )}

                    {/* Staggered Layout for Overlap */}
                    <div className="lg:pl-[50%] lg:ml-6 space-y-6">
                      {/* Main Entry (Dental Assistant - Full Duration) */}
                      <div className="bg-surface-dark border border-gray-800 rounded-xl p-6 hover:border-indigo transition-smooth hover:glow-indigo">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-16 h-16 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-4xl flex-shrink-0">
                            {mainEntry.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white mb-1">
                              {mainEntry.role}
                            </h3>
                            <div className="text-indigo font-semibold text-sm mb-1">
                              {mainEntry.company}
                            </div>
                            <div className="text-xs text-gray-400 mb-2">
                              {mainEntry.period}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-[hsl(var(--text-dark-secondary))] mb-3">
                              <MapPin size={12} />
                              <span>{mainEntry.location}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-[hsl(var(--text-dark-secondary))] leading-relaxed">
                          {mainEntry.description}
                        </p>
                      </div>

                      {/* Overlap Entry (Lab Technician - Indented/Offset) */}
                      <div className="lg:ml-8 bg-surface-dark border border-gray-800 rounded-xl p-6 hover:border-indigo transition-smooth hover:glow-indigo">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-16 h-16 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-4xl flex-shrink-0">
                            {overlapEntry.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white mb-1">
                              {overlapEntry.role}
                            </h3>
                            <div className="text-indigo font-semibold text-sm mb-1">
                              {overlapEntry.company}
                            </div>
                            <div className="text-xs text-gray-400 mb-2">
                              {overlapEntry.period}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-[hsl(var(--text-dark-secondary))] mb-3">
                              <MapPin size={12} />
                              <span>{overlapEntry.location}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-[hsl(var(--text-dark-secondary))] leading-relaxed">
                          {overlapEntry.description}
                        </p>
                        <div className="mt-3 text-xs text-indigo/70">
                          ↑ Overlapped with {mainEntry.role}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Render single entry with zigzag layout
              const entry = group.entries[0];
              return (
                <div
                  key={`group-${groupIndex}`}
                  className={`relative ${
                    isVisible ? `animate-fade-up ${staggerClass}` : 'opacity-0'
                  }`}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 items-start ${
                      entry.side === 'right' ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Left Side */}
                    {entry.side === 'left' ? (
                      <div className="lg:text-right lg:pr-12">
                          <div className="inline-block lg:inline bg-surface-dark border border-gray-800 rounded-xl p-6 hover:border-indigo transition-smooth hover:glow-indigo">
                          {/* Logo and Role */}
                          <div className={`flex items-start gap-3 mb-3 ${entry.side === 'left' ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                            <div className="w-16 h-16 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-4xl flex-shrink-0">
                              {entry.logo}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-white mb-1">
                                {entry.role}
                              </h3>
                              <div className="text-indigo font-semibold text-sm mb-1">
                                {entry.company}
                              </div>
                              <div className="text-xs text-gray-400 mb-2">
                                {entry.period}
                              </div>
                              <div className={`flex items-center gap-1 text-xs text-[hsl(var(--text-dark-secondary))] mb-3 ${entry.side === 'left' ? 'lg:justify-end' : ''}`}>
                                <MapPin size={12} />
                                <span>{entry.location}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-[hsl(var(--text-dark-secondary))] leading-relaxed">
                            {entry.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}

                    {/* Small Dot on Center Line */}
                    <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo shadow-lg z-10" 
                      style={{ boxShadow: '0 0 15px rgba(99, 102, 241, 0.6)' }} 
                    />

                    {/* Right Side */}
                    {entry.side === 'right' ? (
                      <div className="lg:pl-12">
                        <div className="inline-block lg:inline bg-surface-dark border border-gray-800 rounded-xl p-6 hover:border-indigo transition-smooth hover:glow-indigo">
                          {/* Logo and Role */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-16 h-16 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-4xl flex-shrink-0">
                              {entry.logo}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-white mb-1">
                                {entry.role}
                              </h3>
                              <div className="text-indigo font-semibold text-sm mb-1">
                                {entry.company}
                              </div>
                              <div className="text-xs text-gray-400 mb-2">
                                {entry.period}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-[hsl(var(--text-dark-secondary))] mb-3">
                                <MapPin size={12} />
                                <span>{entry.location}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-[hsl(var(--text-dark-secondary))] leading-relaxed">
                            {entry.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}
                  </div>
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
