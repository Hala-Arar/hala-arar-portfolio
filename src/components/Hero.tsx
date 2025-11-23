import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import portraitImage from "@/assets/hala-portrait.jpg";

export const Hero = () => {
  return (
    <section className="relative gradient-hero text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hala Arar
              </h1>
              <p className="text-xl md:text-2xl font-medium text-primary-foreground/90">
                Data Scientist | ML & NLP
              </p>
              <p className="text-lg text-primary-foreground/80">
                Python • R • SQL | End-to-End Pipelines
              </p>
            </div>

            <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-2xl">
              Data scientist specializing in machine learning, NLP, and biomedical text mining. 
              Experienced with transformer models, full pipeline development, and large-scale inference 
              across scientific, clinical, and public-sector datasets.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                <Download className="mr-2" />
                Download Resume
              </Button>
              <Button variant="hero" size="lg">
                <Download className="mr-2" />
                Download CV
              </Button>
            </div>

            {/* Contact Icons */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="mailto:hala@example.com"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/halaarar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/hala-arar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Portrait */}
          <div className="flex justify-center md:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
              <img
                src={portraitImage}
                alt="Hala Arar - Professional Portrait"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Highlight Strip */}
      <div className="mt-16 border-t border-primary-foreground/20 pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">250k+</div>
              <div className="text-sm text-primary-foreground/80">Abstracts Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-primary-foreground/80">ML/NLP Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1</div>
              <div className="text-sm text-primary-foreground/80">First-Author Publication</div>
            </div>
            <div>
              <div className="text-3xl font-bold">3+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
