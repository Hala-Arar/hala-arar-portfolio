import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  ExternalLink,
  Github,
  X,
  Dna,
  BarChart3,
  Terminal,
  TrendingUp,
  Beaker,
  LucideIcon,
  Construction,
  HardHat,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  pdfUrl?: string;
  workInProgress?: boolean;
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    title: "Construction Safety PWA",
    description: "Offline-first app with AI transcription & regulation matching",
    fullDescription:
      "Built an offline-first Progressive Web App for construction site safety observations using React, TypeScript, and IndexedDB. Workers can record audio notes and capture photos without internet connectivity. Integrated OpenAI Whisper for automatic transcription and Claude API for intelligent safety regulation matching through custom n8n automation workflows. Implemented queue-based sync with retry logic and RAG-based document retrieval for Green Book regulations.",
    tech: ["React", "TypeScript", "IndexedDB", "PWA", "n8n", "Whisper API", "Claude API", "RAG"],
    workInProgress: true,
    icon: HardHat,
  },
  {
    title: "ACMG Gene Variant Classification",
    description: "XGBoost and LLM models for clinical variant classification",
    fullDescription:
      "Developed machine learning models combining XGBoost and Large Language Models to classify genetic variants according to ACMG guidelines. This research project demonstrated high accuracy in clinical variant interpretation for diagnostic applications.",
    tech: ["Python", "XGBoost", "LLMs", "ACMG Guidelines"],
    workInProgress: true,
    icon: Dna,
  },
  {
    title: "NYPD Arrest Tracker",
    description: "Interactive dashboard for NYC arrest metrics",
    fullDescription:
      "Built a comprehensive dashboard for NYC government executives to visualize arrest data across boroughs and precincts. Features interactive geospatial visualizations, time-series analysis, and demographic breakdowns to inform policy decisions.",
    tech: ["Python", "Plotly", "Pandas", "Dash", "GeoPandas"],
    githubUrl: "https://github.com/UBC-MDS/DSCI-532_2025_22_nyc-arrest-tracker",
    icon: BarChart3,
  },
  {
    title: "LLM CLI",
    description: "Command-line tool for structured LLM responses",
    fullDescription:
      "Designed a lightweight CLI interface for interacting with Large Language Models, featuring modular prompts, structured output validation with Pydantic, citation tracking, and seamless integration for practical workflows.",
    tech: ["Python", "OpenAI API", "Pydantic", "CLI"],
    githubUrl: "https://github.com/halaarar/gander-llm-cli",
    icon: Terminal,
  },
  {
    title: "Bank Marketing Predictions",
    description: "ML models with 20% precision improvement",
    fullDescription:
      "Built and optimized machine learning models to predict customer conversion for bank marketing campaigns. Achieved a 20% improvement in precision through feature engineering, hyperparameter tuning, and ensemble methods.",
    tech: ["Python", "scikit-learn", "Feature Engineering"],
    githubUrl: "https://github.com/mindy001/FeatureSelection",
    icon: TrendingUp,
  },
  {
    title: "Natural Antibiotics Study",
    description: "Self-designed experiment with statistical analysis",
    fullDescription:
      "Led a self-directed experimental study investigating the antibacterial properties of honey and tea tree oil. Designed the full experimental workflow, performed bacterial culture and CFU counting, and conducted statistical analysis in R using linear models and ANOVA.",
    tech: ["R", "Experimental Design", "ANOVA", "Statistics"],
    pdfUrl: `${import.meta.env.BASE_URL}natural_antibiotics_report.pdf`,
    icon: Beaker,
  },
  ];

export const ProjectsSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center bg-section-dark py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            More Projects
          </h2>
          <p
            className={`text-lg text-[hsl(var(--text-dark-secondary))] ${
              isVisible ? "animate-fade-up stagger-1" : "opacity-0"
            }`}
          >
            A collection of machine learning, NLP, and data science work
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const staggerClass = `stagger-${Math.min((index % 8) + 1, 8)}`;
            return (
              <button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg shadow-black/20 rounded-xl p-6 text-left transition-all duration-300 hover:bg-white/10 hover:border-indigo hover:shadow-xl hover:-translate-y-2 hover:glow-indigo hover:rotate-1 ${
                  isVisible ? `animate-float-in ${staggerClass}` : "opacity-0"
                }`}
              >
                <project.icon className="w-10 h-10 mb-4 text-indigo" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[hsl(var(--text-dark-secondary))] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-white/10 text-[hsl(var(--text-dark-secondary))] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-white/10 text-[hsl(var(--text-dark-secondary))] rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-up"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900/95 backdrop-blur-xl rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modal-slide-up border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <selectedProject.icon className="w-12 h-12 mb-4 text-indigo" strokeWidth={1.5} />
                  {selectedProject.workInProgress && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-3">
                      <Construction className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-yellow-500">Work in Progress</span>
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-[hsl(var(--text-dark-secondary))] hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <p className="text-base text-[hsl(var(--text-dark-secondary))] mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[hsl(var(--text-dark-secondary))] uppercase tracking-wider mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(selectedProject.githubUrl || selectedProject.liveUrl || selectedProject.pdfUrl || selectedProject.workInProgress) && (
                <div className="flex flex-wrap gap-3">
                  {selectedProject.workInProgress ? (
                    <div className="space-y-2 w-full">
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-500 cursor-not-allowed opacity-60"
                        disabled
                      >
                        <Construction className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                      <p className="text-sm text-[hsl(var(--text-dark-secondary))] italic">
                        This project is currently under development
                      </p>
                    </div>
                  ) : (
                    <>
                      {selectedProject.githubUrl && (
                        <Button
                          variant="outline"
                          className="border-indigo text-indigo hover:bg-indigo hover:text-white"
                          asChild
                        >
                          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                          </a>
                        </Button>
                      )}
                      {selectedProject.liveUrl && (
                        <Button
                          variant="outline"
                          className="border-indigo text-indigo hover:bg-indigo hover:text-white"
                          asChild
                        >
                          <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {selectedProject.pdfUrl && (
                        <Button
                          variant="outline"
                          className="border-indigo text-indigo hover:bg-indigo hover:text-white"
                          asChild
                        >
                          <a href={selectedProject.pdfUrl} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            View Research Report
                          </a>
                        </Button>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
