import type { Metadata } from "next";
import {
  BookOpenCheck,
  Check,
  ClipboardList,
  FileText,
  Handshake,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  Button,
  Container,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { FaqAccordion } from "@/components/interactions";
export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Explore the 2027–28 admissions process, dates and documents at EAK International School.",
};
const steps = [
  {
    title: "Enquiry",
    text: "Get to know EAK, browse the guide and share your questions.",
    icon: Phone,
  },
  {
    title: "Application",
    text: "Our office will guide you through the application and required documents.",
    icon: ClipboardList,
  },
  {
    title: "Interaction",
    text: "Meet our team for a conversation or age-appropriate assessment.",
    icon: Handshake,
  },
  {
    title: "Selection",
    text: "Receive an admission decision and next steps.",
    icon: BookOpenCheck,
  },
  {
    title: "Enrollment",
    text: "Confirm your place and prepare for a warm welcome.",
    icon: ShieldCheck,
  },
];
const dates = [
  ["1 October 2026", "Registration opens"],
  ["31 January 2027", "Priority application date"],
  ["February 2027", "Interactions and assessments"],
  ["March 2027", "Offers shared"],
  ["April 2027", "Term begins"],
];
const documents = [
  "Child’s birth certificate",
  "Recent report card (Grades II–XII)",
  "Transfer certificate, when applicable",
  "Two passport-sized photographs",
  "Proof of address",
  "Parent or guardian ID proof",
];
export default function Admissions() {
  return (
    <main id="main-content">
      <PageHero
        title="Their next chapter starts here."
        lead="A clear path through admissions, from first question to first day. Explore our 2027–28 process."
        eyebrow="Admissions"
        image="/images/hero.jpg"
        alt="Students learning in a classroom"
      />
      <div className="bg-surface-warm py-5">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-heading text-sm font-semibold text-primary">
            Applications open for Grades I–IX and XI · 2027–28
          </p>
          <Button href="/contact#enquiry">Start an enquiry</Button>
        </Container>
      </div>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Simple, from the start"
            title="Five steps. One welcoming journey."
            text="We want every family to understand what happens next."
          />
          <ol className="grid gap-4 md:grid-cols-5">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-card bg-surface p-6"
              >
                <span className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <step.icon
                  className="h-6 w-6 text-secondary"
                  strokeWidth={1.6}
                />
                <h3 className="mt-4 font-heading text-lg font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <SectionHeading
              eyebrow="Who can apply"
              title="A place for every stage."
              text="Explore entry guidelines for the 2027–28 intake."
            />
            <div className="overflow-hidden rounded-card border border-line bg-white lg:grid lg:flex-1 lg:grid-rows-[auto_repeat(4,minmax(3.25rem,1fr))]">
              <div className="grid grid-cols-[1fr_1.4fr] items-center bg-primary px-5 py-4 text-xs font-bold text-white">
                <span>Entry stage</span>
                <span>Entry guideline</span>
              </div>
              {[
                ["Grade I", "Six years by 31 March 2027"],
                ["Grades II–V", "Previous grade completed; conversation"],
                [
                  "Grades VI–IX",
                  "Previous grade completed; learning interaction",
                ],
                ["Grade XI", "Grade X results and stream discussion"],
              ].map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-[1fr_1.4fr] items-center gap-3 border-t border-line px-5 py-4 text-sm"
                >
                  <strong className="font-heading text-primary">
                    {row[0]}
                  </strong>
                  <span className="text-muted">{row[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <SectionHeading
              eyebrow="Prepare with ease"
              title="What to have ready."
              text="Bring copies or scans when you begin the application stage."
            />
            <ul className="grid gap-3 sm:grid-cols-2 sm:grid-rows-3 lg:flex-1">
              {documents.map((doc) => (
                <li
                  key={doc}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm leading-6 text-primary"
                >
                  <FileText className="h-5 w-5 shrink-0 text-secondary" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Important dates"
              title="The year ahead, at a glance."
              text="Key dates for the 2027–28 admissions cycle."
            />
            <p className="rounded-xl bg-surface-warm p-5 text-sm leading-7 text-primary">
              Have a question? Explore the{" "}
              <a
                href="/contact#enquiry"
                className="font-semibold underline decoration-accent decoration-2 underline-offset-4"
              >
                enquiry steps on Contact
              </a>{" "}
              or speak with our office.
            </p>
          </div>
          <ol className="space-y-0 border-l-2 border-primary-100 pl-7">
            {dates.map((item) => (
              <li key={item[0]} className="relative pb-7 last:pb-0">
                <span className="absolute -left-[36px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary ring-4 ring-white" />
                <span className="text-xs font-bold uppercase tracking-wide text-secondary">
                  {item[0]}
                </span>
                <h3 className="mt-1 font-heading text-lg font-semibold text-primary">
                  {item[1]}
                </h3>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section className="bg-surface-warm">
        <Container>
          <SectionHeading
            eyebrow="Planning ahead"
            title="A few more useful details."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                "Fees",
                "Annual tuition starts at ₹1,20,000 for Primary and varies by grade. Registration fee: ₹1,500. Transport is optional.",
              ],
              [
                "Scholarships",
                "Merit scholarships may support eligible senior students. Contact the admissions office for criteria and availability.",
              ],
              [
                "Sibling policy",
                "A 10% tuition concession applies to the younger sibling when two children are enrolled.",
              ],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-card bg-white p-7 shadow-card"
              >
                <Check className="h-7 w-7 text-secondary" />
                <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
                  {item[0]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item[1]}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <SectionHeading
            eyebrow="Good to know"
            title="Questions families often ask."
            text="Clear answers make big decisions easier."
          />
          <FaqAccordion />
        </Container>
      </Section>
      <Section className="bg-surface">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <SectionHeading
              eyebrow="Ready to explore?"
              title="Start with a conversation."
              text="Tell us about your family’s questions and the path you’re considering."
              className="mb-0"
            />
            <a
              href="/downloads/prospectus-2027-28.txt"
              download
              className="mt-4 inline-flex min-h-11 items-center font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4"
            >
              Download prospectus
            </a>
          </div>
          <Button href="/contact#enquiry">Start an enquiry</Button>
        </Container>
      </Section>
    </main>
  );
}
