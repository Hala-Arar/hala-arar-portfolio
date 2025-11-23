import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, BarChart, Wrench, Cloud } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "R", "SQL", "Bash", "JavaScript", "HTML/CSS"],
  },
  {
    icon: Brain,
    title: "Machine Learning & NLP",
    skills: [
      "Transformer Models (BERT, PubMedBERT)",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "spaCy",
      "Hugging Face",
      "Fine-tuning LLMs",
      "Text Classification",
      "Named Entity Recognition",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: [
      "ETL Pipelines",
      "SQL Optimization",
      "PostgreSQL",
      "MongoDB",
      "Data Warehousing",
      "API Development",
      "Docker",
      "Version Control (Git)",
    ],
  },
  {
    icon: BarChart,
    title: "Data Visualization & Analytics",
    skills: [
      "Shiny (R)",
      "Plotly",
      "Dash",
      "ggplot2",
      "Matplotlib",
      "Seaborn",
      "Tableau",
      "Geospatial Visualization",
      "Interactive Dashboards",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    skills: [
      "Jupyter",
      "RStudio",
      "VS Code",
      "PyQt5",
      "Flask",
      "FastAPI",
      "pytest",
      "GitHub Actions",
      "LaTeX",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    skills: ["AWS (EC2, S3)", "Docker", "CI/CD", "Model Deployment", "REST APIs", "Linux/Unix"],
  },
];

const additionalSkills = [
  "Experimental Design",
  "Statistical Modeling",
  "A/B Testing",
  "Biomedical Text Mining",
  "Scientific Writing",
  "Research Methodology",
  "Data Storytelling",
  "Cross-functional Collaboration",
];

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Technical Skills</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive toolkit for end-to-end data science, from data engineering to model deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-lg">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Additional Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {additionalSkills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-base py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
