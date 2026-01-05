import { ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

export const PublicationsSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      id="publications"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-section-light py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[hsl(var(--text-light-primary))] mb-12 lg:mb-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Publication
        </h2>

        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-surface-light border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-indigo transition-all duration-300 ${
              isVisible ? "animate-fade-up stagger-2" : "opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--text-light-primary))] mb-4 leading-tight">
              SOORENA: A Two-Stage Deep Learning Pipeline for Automated Extraction of Autoregulatory Mechanisms in
              Biomedical Literature
            </h3>
            <p className="text-base text-[hsl(var(--text-light-secondary))] mb-2">
              Arar, H., Aldahdooh, J., Nickchi, P., & Jafari, M. (2025). SOORENA: Self-lOOp containing or autoREgulatory
              Nodes in biological network Analysis. bioRxiv. https://doi.org/10.1101/2025.11.03.685842
            </p>
            <p className="text-sm italic text-[hsl(var(--text-light-secondary))] mb-6">bioRxiv (preprint)</p>
            <Button variant="outline" className="border-indigo text-indigo hover:bg-indigo hover:text-white" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Read on bioRxiv
              </a>
            </Button>
          </div>

          <p
            className={`text-center text-sm text-[hsl(var(--text-light-secondary))] mt-8 ${
              isVisible ? "animate-fade-up stagger-3" : "opacity-0"
            }`}
          ></p>
        </div>
      </div>
    </section>
  );
};
