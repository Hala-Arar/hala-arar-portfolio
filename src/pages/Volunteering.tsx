import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TimelineItem } from "@/components/TimelineItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const volunteerExperiences = [
  {
    title: "Hospital Volunteer",
    organization: "Peterborough Regional Health Centre (PRHC)",
    period: "2021 - 2023",
    location: "Peterborough, ON",
    description:
      "Assisted patients and healthcare staff with daily operations. Provided compassionate support to patients and families, organized medical records, and helped maintain a safe and welcoming environment.",
  },
  {
    title: "Senior Executive, Student Council",
    organization: "Crestwood Secondary School",
    period: "2018 - 2020",
    location: "Ontario",
    description:
      "Led student council initiatives to improve school culture and organize community events. Coordinated fundraising campaigns, managed event logistics, and fostered collaboration among students and faculty.",
  },
  {
    title: "Camp Counselor",
    organization: "Camp Northern Lights",
    period: "Summer 2019",
    location: "Ontario",
    description:
      "Mentored and supervised youth in an inclusive camp environment. Facilitated recreational activities, promoted teamwork, and created memorable experiences for campers with diverse backgrounds and abilities.",
  },
];

const Volunteering = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Volunteering & Community</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Commitment to community service, youth mentorship, and making a positive impact through
              volunteer work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Timeline */}
            <div>
              {volunteerExperiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} />
              ))}
            </div>

            {/* Personal Touch */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Hobbies & Interests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Outside of professional work, I enjoy staying active through running and exploring the
                  outdoors. I have a passion for baking cupcakes and experimenting with new recipes. Creative
                  writing serves as a personal outlet for reflection and storytelling. I'm also committed to
                  environmental engagement and frequently participate in community events that promote
                  sustainability and conservation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These activities not only provide balance but also fuel creativity and problem-solving skills
                  that carry over into my data science work.
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

export default Volunteering;
