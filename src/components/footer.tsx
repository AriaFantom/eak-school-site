import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { school, navigation } from "@/data/school";
import { Container } from "@/components/ui";
import { DemoDialogButton } from "@/components/demo-dialog";

export function Footer() {
  return (
    <footer className="bg-primary pb-20 text-white lg:pb-0">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.25fr_1fr_1fr] lg:gap-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/logo-light.svg" alt="" width={48} height={54} />
            <span className="font-heading text-xl font-bold leading-tight">
              EAK{" "}
              <span className="block text-xs font-semibold tracking-[.08em]">
                INTERNATIONAL SCHOOL
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
            A place to ask brave questions, find your people and grow into the
            person you are becoming.
          </p>
        </div>
        <div>
          <h2 className="mb-5 font-heading text-sm font-bold text-accent">
            Explore EAK
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/75">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact#enquiry"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            Begin your journey <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div>
          <h2 className="mb-5 font-heading text-sm font-bold text-accent">
            Stay in touch
          </h2>
          <div className="space-y-4 text-sm leading-6 text-white/75">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
              {school.address}
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-accent" />
              {school.phone}
            </p>
            <p className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-accent" />
              {school.email}
            </p>
            <p>{school.hours}</p>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/15">
        <Container className="flex flex-col justify-between gap-4 py-6 text-xs text-white/55 md:flex-row">
          <p>© 2026 EAK International School. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <DemoDialogButton
              title="Privacy policy"
              text="Information entered into the Contact enquiry stays in your browser. It is not transmitted or stored by this website."
            >
              Privacy
            </DemoDialogButton>
            <DemoDialogButton
              title="Terms of use"
              text="Please confirm current admissions dates, fees and policies with the school office."
            >
              Terms
            </DemoDialogButton>
            <DemoDialogButton
              title="Student safety"
              text="Student wellbeing and safeguarding are central to school life. Please contact the school office with a concern."
            >
              Safety
            </DemoDialogButton>
            <DemoDialogButton
              title="Careers"
              text="There are no vacancies listed at present."
            >
              Careers
            </DemoDialogButton>
          </div>
        </Container>
      </div>
    </footer>
  );
}
