import type { Metadata } from "next";
import { Container, PageHero, Section, SectionHeading } from "@/components/ui";
import { EventsExplorer } from "@/components/interactions";
export const metadata: Metadata = {
  title: "Events & Notices",
  description:
    "Explore news, events, competitions and notices at EAK International School.",
};
export default function EventsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Life is always in motion."
        lead="The latest from our classrooms, community and calendar."
        eyebrow="Events & Notices"
        image="/images/art.jpg"
        alt="Creative art materials"
      />
      <Section>
        <Container>
          <SectionHeading
            eyebrow="News & calendar"
            title="Explore what’s happening."
            text="Find events and notices by topic, date or keyword."
          />
          <EventsExplorer />
        </Container>
      </Section>
    </main>
  );
}
