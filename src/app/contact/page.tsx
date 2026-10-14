import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { school } from "@/data/school";
import { ContactWizard } from "@/components/contact-wizard";
import { DemoDialogButton } from "@/components/demo-dialog";
import {
  Button,
  Container,
  PageHero,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find EAK International School contact details and explore our four-step enquiry.",
};
const details = [
  { title: "Visit us", value: school.address, icon: MapPin },
  { title: "Call us", value: school.phone, icon: Phone },
  { title: "Write to us", value: school.email, icon: Mail },
  { title: "Office hours", value: school.hours, icon: Clock3 },
];
export default function Contact() {
  return (
    <main id="main-content">
      <PageHero
        title="Let’s start a conversation."
        lead="Curious about EAK? Find our contact details and get in touch."
        eyebrow="Contact"
        image="/images/campus.jpg"
        alt="Academic campus exterior"
      />
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Get in touch"
            title="We’d love to hear what matters to you."
            text="Our team is here to help with questions about learning, admissions and school life."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((item) => (
              <div key={item.title} className="rounded-card bg-surface p-6">
                <item.icon
                  className="h-7 w-7 text-secondary"
                  strokeWidth={1.5}
                />
                <h3 className="mt-6 font-heading font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section id="enquiry" className="bg-surface">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Begin an enquiry"
              title="Let’s get to know your family."
              text="Four short steps help you organise your questions about learning and admissions. Entries are checked locally; nothing is sent or saved."
              className="mb-0"
            />
            <TextLink href="/admissions">View the admissions process</TextLink>
          </div>
          <ContactWizard />
        </Container>
      </Section>
      <Section>
        <Container className="grid items-center gap-9 lg:grid-cols-2">
          <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-card bg-primary-100">
            <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_42%,#d8e4ec_42%,#d8e4ec_44%,transparent_44%),linear-gradient(115deg,transparent_58%,#d8e4ec_58%,#d8e4ec_60%,transparent_60%)]" />
            <div className="relative max-w-xs rounded-card bg-white p-6 text-center shadow-card">
              <MapPin className="mx-auto h-7 w-7 text-secondary" />
              <strong className="mt-3 block font-heading text-lg text-primary">
                Whitefield, Bengaluru
              </strong>
              <p className="mt-2 text-xs text-muted">{school.address}</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Find your way"
              title="Come see what learning could look like."
              text="Find us in Whitefield and plan a visit to see school life up close."
            />
            <DemoDialogButton
              title="Directions unavailable"
              text="Live directions are not available on this website. Please contact the school office before visiting."
            >
              <span className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 font-heading text-sm font-bold text-white">
                Get directions
              </span>
            </DemoDialogButton>
            <div className="mt-8 rounded-card bg-surface-warm p-6">
              <h3 className="font-heading font-semibold text-primary">
                Planning admissions?
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                See the 2027–28 process, dates and documents.
              </p>
              <Button href="/admissions" className="mt-5">
                Explore admissions
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
