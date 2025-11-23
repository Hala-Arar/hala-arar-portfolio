import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "SOORENA: A Two-Stage Deep Learning Pipeline for Automated Extraction of Autoregulatory Mechanisms in Biomedical Literature",
    authors: "Arar, H., He, Z., Zhou, Y., Zhang, M., Nickchi, P., & Jafari, M.",
    journal: "bioRxiv (Preprint)",
    year: "2025",
    abstract:
      "This paper presents SOORENA, a novel two-stage deep learning system utilizing PubMedBERT for automated detection and classification of protein autoregulatory mechanisms in biomedical literature. The system was applied to over 250,000 PubMed abstracts, demonstrating high accuracy in extracting complex biological relationships. An interactive Shiny application was developed to enable researchers to explore results with confidence scoring.",
    type: "Preprint",
    link: "https://www.biorxiv.org/content/example",
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Publications</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Research contributions in biomedical NLP and machine learning for scientific text mining.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-2xl leading-tight">{pub.title}</CardTitle>
                      <CardDescription className="text-base">
                        {pub.authors} ({pub.year})
                      </CardDescription>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          <FileText className="mr-1 h-3 w-3" />
                          {pub.type}
                        </span>
                        <span className="text-sm text-muted-foreground">{pub.journal}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{pub.abstract}</p>
                  <Button variant="outline" asChild>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Publication
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Future Work Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Future Research Directions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Currently exploring applications of large language models in clinical decision support systems
                  and investigating methods for improving interpretability in biomedical NLP models. Open to
                  collaborations in computational biology and healthcare AI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;
