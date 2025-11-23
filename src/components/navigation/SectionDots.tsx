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
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-violet border-violet glow-violet scale-125'
                : 'bg-transparent border-gray-400 hover:border-violet hover:scale-110'
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
