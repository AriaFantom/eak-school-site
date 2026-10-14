import type { Metadata } from "next";
import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  UsersRound,
} from "lucide-react";
import { AcademicTabs } from "@/components/interactions";
import {
  Button,
  Container,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore stages, curriculum, teaching and activities at EAK International School.",
};
const methods = [
  {
    title: "Learn by doing",
    icon: Lightbulb,
    text: "Projects and experiments invite students to put ideas to work.",
  },
  {
    title: "Think together",
    icon: UsersRound,
    text: "Collaboration builds confidence, empathy and better questions.",
  },
  {
    title: "Read widely",
    icon: BookOpen,
    text: "A strong reading culture opens doors across every subject.",
  },
  {
    title: "Explore STEM",
    icon: FlaskConical,
    text: "Labs and maker sessions connect science to the world outside.",
  },
];
export default function Academics() {
  return (
    <main id="main-content">
      <PageHero
        title="Curiosity is our curriculum."
        lead="An ambitious, caring learning journey from first discoveries to future choices."
        eyebrow="Academics"
        image="/images/science.jpg"
        alt="Science laboratory experiment"
      />
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Learning pathways"
            title="Find their stage. Discover what’s next."
            text="Our CBSE-aligned programme grows with every learner."
          />
          <AcademicTabs />
        </Container>
      </Section>
      <Section className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <SectionHeading
            eyebrow="The curriculum"
            title="Strong foundations. Wider horizons."
            text="Core subjects are balanced with curiosity, communication, wellbeing and real-world application."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-card bg-white p-7 shadow-card">
              <GraduationCap className="h-7 w-7 text-secondary" />
              <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
                Grades I–X
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                English, mathematics, science, social studies, languages,
                digital literacy, art and physical education.
              </p>
            </div>
            <div className="rounded-card bg-primary p-7 text-white">
              <BookOpen className="h-7 w-7 text-accent" />
              <h3 className="mt-5 font-heading text-xl font-semibold">
                Grades XI–XII
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Science, Commerce and Humanities streams, with mentoring and
                university guidance.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="How we teach"
            title="Learning that stays with them."
          />
          <div className="grid gap-4 md:grid-cols-4">
            {methods.map((item) => (
              <div
                key={item.title}
                className="rounded-card border border-line p-6"
              >
                <item.icon
                  className="h-8 w-8 text-secondary"
                  strokeWidth={1.5}
                />
                <h3 className="mt-7 font-heading text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-surface-warm">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Beyond the timetable"
            title="More ways to find your spark."
            text="Co-curricular life gives every student a chance to discover a strength and share it."
          />
          <div className="grid grid-cols-2 gap-3">
            {[
              "Team sports",
              "Visual arts",
              "Music & theatre",
              "Robotics",
              "Debate",
              "Community service",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-5 font-heading text-sm font-semibold text-primary shadow-card"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Achievement"
            title="Progress in every form."
            text="Our results celebrate both academic effort and the courage to explore."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["100%", "Grade XII pass rate"],
              ["90", "Educators"],
              ["1:20", "Teacher ratio"],
            ].map((item) => (
              <div key={item[0]} className="rounded-card bg-primary-100 p-7">
                <strong className="font-heading text-4xl text-primary">
                  {item[0]}
                </strong>
                <p className="mt-2 text-sm text-muted">{item[1]}</p>
              </div>
            ))}
          </div>
          <Button href="/admissions" className="mt-10">
            Explore admissions
          </Button>
        </Container>
      </Section>
    </main>
  );
}
