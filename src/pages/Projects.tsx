import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "SOORENA: PubMedBERT Autoregulation Detection",
    description:
      "Built a two-stage PubMedBERT system to detect and classify protein autoregulatory mechanisms. Ran inference on more than 250,000 PubMed abstracts and developed a Shiny app for interactive exploration with confidence scoring. Resulted in a first-author preprint.",
    githubUrl: "https://github.com/halaarar/SOORENA_2",
  },
  {
    title: "Gander LLM CLI",
    description:
      "Designed a lightweight command-line interface for interacting with LLMs, focusing on modular prompts, model testing, and ease of integration for practical workflows.",
    githubUrl: "https://github.com/halaarar/gander-llm-cli",
  },
  {
    title: "Lab Results Parser (PyQt5 App)",
    description:
      "Created a simple GUI tool to parse lab results from PDFs into structured data using PyQt5. Includes standalone application packaging for non-technical users.",
    githubUrl: "https://github.com/halaarar/lab-results-parser",
  },
  {
    title: "Data Science Starter Kit Blog",
    description:
      "A beginner-friendly blog introducing Git, version control, branching, and collaboration basics. Includes an introductory demo video.",
    githubUrl: "https://github.com/halaarar/Data-Science-Starter-Kit-Blog",
  },
  {
    title: "Health Science Calculator",
    description:
      "Python package for calculating TDEE, BMR, BMI and other common health science metrics. Built with validation tests and industry-standard formulas.",
    githubUrl: "https://github.com/UBC-MDS/HealthScienceCalculator",
  },
  {
    title: "Feature Selection Project",
    description:
      "Machine learning utility for exploring feature selection algorithms and evaluating model performance across different feature subsets.",
    githubUrl: "https://github.com/mindy001/FeatureSelection",
  },
  {
    title: "NYPD Arrest Tracker App",
    description:
      "Dashboard for NYC government executives showing arrest metrics by borough and precinct with interactive geospatial visualizations.",
    githubUrl: "https://github.com/UBC-MDS/DSCI-532_2025_22_nyc-arrest-tracker",
  },
  {
    title: "Natural Antibiotics Research Project",
    description:
      "Self-led experimental project studying antibacterial effects of honey and tea tree oil. Designed full experimental workflow, collected and cultured samples, performed CFU counting, and analyzed results in R using linear models, ANOVA, and diagnostics. Demonstrated scientific reasoning, experimental design, and statistical modeling applied to real biological data.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of machine learning, NLP, and data science projects spanning biomedical research,
              tool development, and applied analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
