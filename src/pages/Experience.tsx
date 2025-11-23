import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TimelineItem } from "@/components/TimelineItem";

const experiences = [
  {
    title: "Data Science Intern",
    organization: "University of Helsinki",
    period: "2024 - 2025",
    location: "Helsinki, Finland",
    description:
      "Contributed to biomedical NLP research, including work on PubMedBERT-based classification systems for protein autoregulation. Collaborated with international researchers on large-scale text mining projects.",
  },
  {
    title: "Data Science Research Collaboration",
    organization: "University of British Columbia",
    period: "2024 - 2025",
    location: "Vancouver, BC",
    description:
      "Engaged in collaborative research projects during Master of Data Science program. Developed end-to-end ML pipelines, worked on geospatial data visualizations, and contributed to open-source tools.",
  },
  {
    title: "Dental Assistant",
    organization: "Park Street Dentistry",
    period: "2022 - 2024",
    location: "Ontario",
    description:
      "Assisted with patient care, managed clinical records, and coordinated appointments. Developed strong communication and organizational skills in a fast-paced healthcare environment.",
  },
  {
    title: "Assistant Laboratory Technician",
    organization: "Trent University",
    period: "2021 - 2023",
    location: "Peterborough, ON",
    description:
      "Supported laboratory operations for biomedical science courses. Prepared samples, maintained equipment, and assisted students with experimental procedures and safety protocols.",
  },
  {
    title: "Lead Camp Counselor",
    organization: "Ontario Federation of Anglers and Hunters",
    period: "Summer 2022",
    location: "Ontario",
    description:
      "Led environmental education programs for youth. Coordinated activities, managed teams, and fostered learning about conservation and outdoor skills.",
  },
  {
    title: "Server",
    organization: "Red Lobster",
    period: "2020 - 2022",
    location: "Ontario",
    description:
      "Provided customer service in a high-volume restaurant environment. Developed strong multitasking and interpersonal skills.",
  },
  {
    title: "Crew Trainer",
    organization: "McDonald's",
    period: "2018 - 2020",
    location: "Ontario",
    description:
      "Trained new employees on operational procedures and customer service standards. Supervised shifts and ensured quality control.",
  },
  {
    title: "Camp Counselor",
    organization: "Trent Excalibur",
    period: "Summer 2019",
    location: "Peterborough, ON",
    description:
      "Supervised youth programs focused on academic enrichment and recreational activities. Mentored students and facilitated learning experiences.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Experience</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey spanning data science, biomedical research, and diverse roles that shaped
              strong analytical and interpersonal skills.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
