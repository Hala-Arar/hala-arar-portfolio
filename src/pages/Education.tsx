import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TimelineItem } from "@/components/TimelineItem";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    title: "Master of Data Science",
    organization: "University of British Columbia",
    period: "2024 - 2025",
    location: "Vancouver, BC",
    description:
      "Intensive graduate program covering machine learning, statistical inference, NLP, data engineering, and full-stack development. Completed capstone projects involving real-world datasets and end-to-end pipeline development.",
  },
  {
    title: "Bachelor of Biomedical Sciences (Minor in Mathematics)",
    organization: "Trent University",
    period: "2020 - 2024",
    location: "Peterborough, ON",
    description:
      "Comprehensive undergraduate degree combining biomedical sciences with mathematical foundations. Dean's Honour Roll recipient and Renewable Entrance Scholarship awardee. Developed strong quantitative and analytical skills applicable to data science.",
  },
];

const achievements = [
  "Dean's Honour Roll",
  "Renewable Entrance Scholarship",
  "Master's Capstone Project: NYC Arrest Tracker",
  "First-Author Preprint Publication (2025)",
];

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Education</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation combining biomedical sciences, mathematics, and advanced data science training.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Timeline */}
            <div>
              {education.map((edu, index) => (
                <TimelineItem key={index} {...edu} />
              ))}
            </div>

            {/* Achievements Section */}
            <div className="bg-card rounded-lg border border-border p-8 space-y-4">
              <h2 className="text-2xl font-semibold">Achievements & Honors</h2>
              <div className="flex flex-wrap gap-3">
                {achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="text-base py-2 px-4">
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
