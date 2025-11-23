interface SectionDotsProps {
  sections: { id: string; label: string }[];
  activeSection: string;
}

export const SectionDots = ({ sections, activeSection }: SectionDotsProps) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col space-y-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className="group relative"
          aria-label={`Go to ${section.label}`}
        >
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer hover:scale-125 ${
              activeSection === section.id
                ? 'bg-indigo border-indigo glow-indigo scale-110'
                : 'bg-transparent border-white/30 hover:border-white/60'
            }`}
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-section-dark text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
};
