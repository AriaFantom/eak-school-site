import type { Metadata } from "next";
import { BusFront, HeartPulse, ShieldCheck } from "lucide-react";
import { FacilityExplorer } from "@/components/interactions";
import {
  Button,
  Container,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Take a photo tour of the spaces, sport and support facilities at EAK International School.",
};
export default function Facilities() {
  return (
    <main id="main-content">
      <PageHero
        title="Space to try everything."
        lead="From lively labs to quiet reading corners, explore spaces designed for learning and belonging."
        eyebrow="Facilities"
        image="/images/library.jpg"
        alt="Library shelves"
      />
      <Section id="virtual-tour">
        <Container>
          <SectionHeading
            eyebrow="Photo tour"
            title="Take a look around."
            text="Explore the spaces that shape life at EAK. Select a photo to see it larger."
          />
          <FacilityExplorer />
        </Container>
      </Section>
      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Peace of mind"
            title="Care in every corner."
            text="Our campus puts safety, support and wellbeing alongside learning."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                ShieldCheck,
                "Thoughtful security",
                "Supervised access, trained staff and clear visitor processes.",
              ],
              [
                BusFront,
                "A reassuring journey",
                "GPS-enabled buses and trained attendants.",
              ],
              [
                HeartPulse,
                "Wellbeing first",
                "A medical room, first-aid team and student counselling.",
              ],
            ].map(([Icon, title, text]) => {
              const Component = Icon as typeof ShieldCheck;
              return (
                <div
                  key={title as string}
                  className="rounded-card bg-white p-7 shadow-card"
                >
                  <Component className="h-8 w-8 text-secondary" />
                  <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
                    {title as string}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {text as string}
                  </p>
                </div>
              );
            })}
          </div>
          <Button href="/contact" className="mt-9">
            Ask about a campus visit
          </Button>
        </Container>
      </Section>
    </main>
  );
}
