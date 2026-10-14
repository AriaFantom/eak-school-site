import type { Metadata } from "next";
import {
  ChevronDown,
  Compass,
  Heart,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { aboutFaqs, school } from "@/data/school";
import {
  Button,
  Container,
  Eyebrow,
  PageHero,
  Photo,
  Section,
  SectionHeading,
  Stat,
  TextLink,
} from "@/components/ui";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story, values and community behind EAK International School.",
};
const values = [
  { name: "Curiosity", icon: Lightbulb, text: "Keep asking better questions." },
  {
    name: "Integrity",
    icon: ShieldCheck,
    text: "Do the right thing, even when it is hard.",
  },
  { name: "Respect", icon: Heart, text: "Make room for every voice." },
  { name: "Excellence", icon: Sparkles, text: "Find pride in progress." },
  {
    name: "Service",
    icon: Handshake,
    text: "Use what we know to help others.",
  },
  { name: "Courage", icon: Compass, text: "Try, learn and try again." },
];
export default function About() {
  return (
    <main id="main-content">
      <PageHero
        title="Growing minds. Grounded hearts."
        lead="Meet the people, ideas and values behind our school community."
        eyebrow="About"
        image="/images/campus.jpg"
        alt="Green academic campus"
      />
      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-primary md:text-4xl">
              A school where every possibility begins with belonging.
            </h2>
            <p className="mt-6 leading-8 text-muted">
              EAK International School began in {school.established} with a
              small group of families and a big idea: children grow best when
              rigorous learning and genuine care meet.
            </p>
            <p className="mt-4 leading-8 text-muted">
              Today our community spans Grades I–XII, giving students the space
              to question, connect and become.
            </p>
            <TextLink href="/academics" className="mt-6">
              See how we teach
            </TextLink>
          </div>
          <div className="relative h-[450px] overflow-hidden rounded-card">
            <Photo
              src="/images/hero.jpg"
              alt="Students at work in a classroom"
            />
          </div>
        </Container>
      </Section>
      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="The journey"
            title="Milestones that shaped our story."
            text="From a small beginning to a thriving learning community."
          />
          <ol className="grid gap-4 md:grid-cols-4">
            {[
              [
                "1999",
                "A school begins",
                "A small learning community takes root.",
              ],
              [
                "2007",
                "Room to explore",
                "Arts, sports and science spaces expand.",
              ],
              [
                "2016",
                "Learning evolves",
                "Collaborative, project-led learning becomes central.",
              ],
              [
                "2026",
                "Looking forward",
                "Our community grows to more than 1,800 learners.",
              ],
            ].map((item) => (
              <li
                key={item[0]}
                className="rounded-card bg-white p-6 shadow-card"
              >
                <strong className="font-heading text-3xl text-secondary">
                  {item[0]}
                </strong>
                <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                  {item[1]}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item[2]}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our compass"
            title="What guides us, every day."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-card bg-primary p-8 text-white">
              <Compass className="h-8 w-8 text-accent" />
              <h3 className="mt-7 font-heading text-2xl font-semibold">
                Our vision
              </h3>
              <p className="mt-4 leading-7 text-white/80">
                A generation of curious, capable and compassionate young people
                ready to shape a better world.
              </p>
            </div>
            <div className="rounded-card bg-surface-warm p-8">
              <Heart className="h-8 w-8 text-secondary" />
              <h3 className="mt-7 font-heading text-2xl font-semibold text-primary">
                Our mission
              </h3>
              <p className="mt-4 leading-7 text-muted">
                Create learning experiences that stretch minds, nurture
                character and help every student find their own voice.
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.name}
                className="flex items-start gap-4 rounded-card border border-line p-5"
              >
                <value.icon
                  className="h-6 w-6 shrink-0 text-secondary"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-heading font-semibold text-primary">
                    {value.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="In numbers"
            title="A community growing together."
          />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <Stat value="1,800" label="Students" />
            <Stat value="90" label="Educators" />
            <Stat value="25+" label="Years of learning" />
            <Stat value="1:20" label="Teacher ratio" />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="relative h-72 overflow-hidden rounded-card sm:col-span-2">
              <Photo src="/images/campus.jpg" alt="Academic campus exterior" />
            </div>
            <div className="relative h-72 overflow-hidden rounded-card">
              <Photo src="/images/library.jpg" alt="Bookshelves in a library" />
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Clarity & care"
            title="Frequently asked questions."
            text="Helpful answers about learning, student support and school life."
            className="mx-auto text-center"
          />
          <div className="mx-auto max-w-3xl space-y-3">
            {aboutFaqs.map((item) => (
              <details
                key={item.question}
                name="about-faq"
                className="group rounded-xl border border-line bg-white px-5 shadow-sm open:border-secondary/30 sm:px-6"
              >
                <summary className="flex min-h-14 list-none items-center justify-between gap-4 py-3 font-heading text-sm font-semibold text-primary marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="border-t border-line pb-5 pt-4 text-sm leading-7 text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
      <section className="bg-primary py-18 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-semibold">
              Your family could be part of our story.
            </h2>
            <p className="mt-3 text-white/75">
              Explore our 2027–28 admissions journey.
            </p>
          </div>
          <Button href="/admissions">Explore admissions</Button>
        </Container>
      </section>
    </main>
  );
}
