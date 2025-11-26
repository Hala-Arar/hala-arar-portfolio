import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MapPin, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TimelineEntry {
  side: 'left' | 'right';
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  logo: string;
  isImage?: boolean;
  logoScale?: number;
  useContain?: boolean;
  logoOffsetX?: string;
}

const timeline: TimelineEntry[] = [
  {
    side: 'right',
    role: 'Data Science Intern',
    company: 'University of Helsinki',
    location: 'Helsinki, Finland (Remote)',
    period: 'April 2025 – Present',
    description:
      'Built PubMedBERT pipeline for SOORENA, processed 250K+ abstracts, developed Shiny app for researchers',
    logo: '/logos/helsinki-logo.png',
    isImage: true,
    logoScale: 0.9,
    logoOffsetX: '9%',
  },
  {
    side: 'left',
    role: 'Data Scientist – Research',
    company: 'University of British Columbia',
    location: 'Vancouver, BC',
    period: 'Jul 2025 – Oct 2025',
    description:
      'Developed XGBoost and LLM models for clinical gene variant classification using ACMG guidelines',
    logo: '/logos/UBC-logo.png',
    isImage: true,
    logoScale: 1.3,
    useContain: true,
    logoOffsetX: '3%',
  },
  {
    side: 'right',
    role: 'Dental Assistant',
    company: 'Park Street Dentistry',
    location: 'Peterborough, ON',
    period: 'Jul 2022 – Apr 2024',
    description:
      'Managed patient records, improved data accessibility, streamlined clinical workflows',
    logo: '/logos/PSD.png',
    isImage: true,
    logoScale: 1.3,
    useContain: true,
    logoOffsetX: '3%',
  },
  {
    side: 'left',
    role: 'Lab Technician Assistant',
    company: 'Trent University',
    location: 'Peterborough, ON',
    period: 'Sep 2023 – Apr 2023',
    description:
      'Prepared lab equipment, developed digital inventory systems, supported research operations',
    logo:  '/logos/trent.png',
    isImage: true,
    logoScale: 1.1,
    useContain: true,
  },
  {
    side: 'right',
    role: 'Lead Camp Counselor',
    company: 'Ontario Federation of Anglers and Hunters',
    location: 'Ontario',
    period: 'Summers 2020-2021',
    description:
      'Led environmental education programs, managed teams, organized community events',
    logo:  '/logos/OFAH.png',
    isImage: true,
    logoScale: 1.1,
  },
  {
    side: 'left',
    role: 'Crew Trainer',
    company: "McDonald's",
    location: 'Peterborough, ON',
    period: '2018-2020',
    description:
      'Trained new employees, optimized workflows, maintained quality standards',
    logo: "/logos/McDonald's_logo.png",
    isImage: true,
    logoScale: 1.1,
    useContain: true,
  },
  {
    side: 'right',
    role: 'Camp Counselor',
    company: 'Trent Excalibur',
    location: 'Peterborough, ON',
    period: 'Summer 2019',
    description: 'Mentored youth in outdoor activities, coordinated group events',
    logo: '/logos/trent.png',
    isImage: true,
    logoScale: 1.1,
    useContain: true,
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
    logo: '/logos/UBC-logo.png',
    logoScale: 1.4,
    useContain: true,
    logoOffsetX: '11%',
  },
  {
    degree: 'Bachelor of Science, Biomedical Sciences',
    school: 'Trent University',
    period: '2020 – 2024',
    details: [
      "Dean's Honour Roll",
      'Renewable Entrance Scholarship',
    ],
    highlight: 'Minor in Mathematics',
    logo: '/logos/trent.png',
    logoScale: 1.1,
    useContain: true,
  },
];


export const JourneySection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    timeline.forEach((_, index) => {
      const element = document.querySelector(`[data-timeline-card="${index}"]`);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards((prev) => new Set(prev).add(index));
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section
      id="journey"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-section-light py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[hsl(var(--text-light-primary))] mb-16 lg:mb-20 ${
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
          <div className="space-y-4 lg:space-y-6">
            {timeline.map((entry, index) => {
              return (
                <div
                  key={index}
                  data-timeline-card={index}
                  className={`relative ${
                    visibleCards.has(index) ? 'animate-slide-in-fade' : 'opacity-0'
                  }`}
                >
                  {/* Connection dot on timeline */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo shadow-lg z-10" 
                    style={{ boxShadow: '0 0 10px rgba(99, 102, 241, 0.6)' }} 
                  />

                  {entry.side === 'left' ? (
                    // LEFT SIDE ENTRY: Logo on left, card on right of center
                    <div className="grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-center lg:pr-[calc(50%+3rem)]">
                      {/* Logo on LEFT side */}
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-indigo flex items-center justify-center glow-indigo-strong transition-transform duration-300 hover:scale-110 flex-shrink-0 overflow-hidden bg-white ${entry.isImage ? '' : 'text-4xl sm:text-5xl'}`}>
                        {entry.isImage ? (
                          <img
                            src={entry.logo}
                            alt={`${entry.company} logo`}
                            className={`w-full h-full ${entry.useContain ? 'object-contain p-3' : 'object-cover'}`}
                            style={{
                              transform: `scale(${entry.logoScale || 1.5}) translateX(${entry.logoOffsetX || '0'})`
                            }}
                          />
                        ) : (
                          entry.logo
                        )}
                      </div>
                      
                      {/* Card content */}
                      <div className="bg-surface-light border border-gray-200 rounded-xl p-6 hover:border-indigo transition-smooth hover:glow-indigo">
                        <h3 className="text-xl font-bold text-[hsl(var(--text-light-primary))] mb-1">
                          {entry.role}
                        </h3>
                        <div className="text-indigo font-semibold mb-1">
                          {entry.company}
                        </div>
                        <div className="text-sm text-[hsl(var(--text-light-secondary))] mb-2">
                          {entry.period}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-[hsl(var(--text-light-secondary))] mb-3">
                          <MapPin size={14} />
                          <span>{entry.location}</span>
                        </div>
                        <p className="text-sm text-[hsl(var(--text-light-secondary))] leading-relaxed">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // RIGHT SIDE ENTRY: Card on left of center, logo on right
                    <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center lg:pl-[calc(50%+3rem)]">
                      {/* Card content */}
                      <div className="bg-surface-light border border-gray-200 rounded-xl p-6 hover:border-indigo transition-smooth hover:glow-indigo">
                        <h3 className="text-xl font-bold text-[hsl(var(--text-light-primary))] mb-1">
                          {entry.role}
                        </h3>
                        <div className="text-indigo font-semibold mb-1">
                          {entry.company}
                        </div>
                        <div className="text-sm text-[hsl(var(--text-light-secondary))] mb-2">
                          {entry.period}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-[hsl(var(--text-light-secondary))] mb-3">
                          <MapPin size={14} />
                          <span>{entry.location}</span>
                        </div>
                        <p className="text-sm text-[hsl(var(--text-light-secondary))] leading-relaxed">
                          {entry.description}
                        </p>
                      </div>
                      
                      {/* Logo on RIGHT side */}
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-indigo flex items-center justify-center glow-indigo-strong transition-transform duration-300 hover:scale-110 flex-shrink-0 overflow-hidden bg-white ${entry.isImage ? '' : 'text-4xl sm:text-5xl'}`}>
                        {entry.isImage ? (
                          <img
                            src={entry.logo}
                            alt={`${entry.company} logo`}
                            className={`w-full h-full ${entry.useContain ? 'object-contain p-3' : 'object-cover'}`}
                            style={{
                              transform: `scale(${entry.logoScale || 1.5}) translateX(${entry.logoOffsetX || '0'})`
                            }}
                          />
                        ) : (
                          entry.logo
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto mt-12 lg:mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-surface-light border border-gray-200 rounded-xl p-6 hover:border-indigo transition-smooth hover:glow-indigo ${
                  isVisible ? `animate-scale-in stagger-${index + 6}` : 'opacity-0'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-4 border-indigo flex items-center justify-center glow-indigo-strong flex-shrink-0 overflow-hidden">
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className="w-full h-full object-contain p-3"
                        style={{ transform: `scale(${edu.logoScale || 1.0})` }}
                      />
                    ) : (
                      <GraduationCap className="text-indigo" size={32} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--text-light-primary))] mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-indigo font-semibold text-sm mb-1">
                      {edu.school}
                    </div>
                    <div className="text-sm text-[hsl(var(--text-light-secondary))]">
                      {edu.period}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[hsl(var(--text-light-secondary))]">
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
