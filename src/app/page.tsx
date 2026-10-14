import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronRight,
  Medal,
  Music2,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import {
  events,
  facilities,
  formatDate,
  school,
  stages,
  testimonials,
} from "@/data/school";
import {
  Button,
  Container,
  Eyebrow,
  Photo,
  Section,
  SectionHeading,
  Stat,
  TextLink,
} from "@/components/ui";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_4%,#1b3f8b_0,transparent_47%)]"
        />
        <Container className="relative grid items-center gap-0 pt-8 sm:pt-10 lg:min-h-[560px] lg:grid-cols-[.92fr_1.08fr] lg:gap-5 lg:pt-6 xl:min-h-[600px]">
          <div className="relative z-10 order-1 max-w-xl pb-6 sm:pb-8 lg:pb-10">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-white/90">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Admissions open · 2027–28
            </p>
            <h1 className="font-heading text-[clamp(2.75rem,5.6vw,5.5rem)] font-semibold leading-[1.03] tracking-[-.045em]">
              A place to <span className="text-accent">become.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-white/80 md:text-lg">
              Where curious minds find courage, kind hearts find community, and
              every child finds their way forward.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/admissions" showArrow={false}>
                Explore admissions
              </Button>
              <Button href="/facilities#virtual-tour" variant="light">
                Take a photo tour
              </Button>
            </div>
            <dl className="mt-8 hidden max-w-lg grid-cols-3 border-t border-white/15 pt-5 lg:grid">
              <div className="pr-5">
                <dt className="text-[11px] font-bold uppercase tracking-[.12em] text-white/70">
                  Curriculum
                </dt>
                <dd className="mt-1 font-heading text-sm font-semibold text-white">
                  CBSE-aligned
                </dd>
              </div>
              <div className="border-l border-white/15 px-5">
                <dt className="text-[11px] font-bold uppercase tracking-[.12em] text-white/70">
                  Grades offered
                </dt>
                <dd className="mt-1 font-heading text-sm font-semibold text-white">
                  Grades I-XII
                </dd>
              </div>
              <div className="border-l border-white/15 pl-5">
                <dt className="text-[11px] font-bold uppercase tracking-[.12em] text-white/70">
                  Established
                </dt>
                <dd className="mt-1 font-heading text-sm font-semibold text-white">
                  {school.established}, Whitefield
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative order-2 -mt-6 min-h-[240px] sm:-mt-10 sm:min-h-[340px] md:min-h-[420px] lg:mt-0 lg:min-h-[540px] lg:self-end">
            <Image
              src="/images/hero-students.png"
              alt="Four students standing together"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              quality={65}
              loading="eager"
              fetchPriority="high"
              className="object-contain object-bottom xl:origin-bottom-right xl:scale-[1.08]"
            />
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="The EAK difference"
            title="An education that sees the whole child."
            text="A strong academic foundation matters. So do belonging, creativity and the confidence to try something new."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:auto-rows-[minmax(210px,1fr)] lg:grid-cols-12">
            <div className="relative isolate flex min-h-[380px] overflow-hidden rounded-card text-white md:col-span-2 lg:col-span-6 lg:row-span-2 lg:min-h-[460px]">
              <Photo
                src="/images/mentoring.webp"
                alt="Teacher listening to two students as they work together"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="-z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/95 via-primary/40 to-primary/5" />
              <div className="mt-auto p-7 sm:p-9">
                <UsersRound
                  className="h-8 w-8 text-accent"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-5 font-heading text-2xl font-semibold">
                  Known by name
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/90">
                  Small learning groups and mentoring help every child feel
                  seen, challenged and supported.
                </p>
              </div>
            </div>
            <div className="flex min-h-[210px] flex-col rounded-card bg-primary p-7 text-white md:col-span-2 lg:col-span-6">
              <ShieldCheck
                className="h-8 w-8 text-accent"
                strokeWidth={1.5}
                aria-hidden
              />
              <div className="mt-auto">
                <h3 className="font-heading text-xl font-semibold">
                  Safe to explore
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/80">
                  A caring culture and supervised spaces make room for brave
                  questions and new ideas.
                </p>
              </div>
            </div>
            <div className="flex min-h-[210px] flex-col rounded-card bg-[#e7f3f0] p-7 lg:col-span-3">
              <Sparkles
                className="h-8 w-8 text-secondary"
                strokeWidth={1.5}
                aria-hidden
              />
              <div className="mt-auto">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  Learning comes alive
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Experiments and projects give knowledge a purpose.
                </p>
              </div>
            </div>
            <div className="flex min-h-[210px] flex-col rounded-card bg-surface-warm p-7 lg:col-span-3">
              <Music2
                className="h-8 w-8 text-secondary"
                strokeWidth={1.5}
                aria-hidden
              />
              <div className="mt-auto">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  More than marks
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Sport, art, music and service help every child grow.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div className="relative h-[420px] sm:h-[500px]">
            <div className="absolute inset-0 right-12 overflow-hidden rounded-card">
              <Photo
                src="/images/campus.jpg"
                alt="Tree-lined academic campus"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[45%] overflow-hidden rounded-card border-[6px] border-surface shadow-card">
              <div className="relative h-48 sm:h-60">
                <Photo
                  src="/images/classroom.jpg"
                  alt="Young children listening in a classroom"
                  sizes="25vw"
                />
              </div>
            </div>
            <div className="absolute left-5 top-5 rounded-xl bg-white px-5 py-4 shadow-card">
              <strong className="block font-heading text-3xl text-primary">
                25+
              </strong>
              <span className="text-xs text-muted">years of learning</span>
            </div>
          </div>
          <div>
            <Eyebrow>Welcome to EAK</Eyebrow>
            <h2 className="font-heading text-3xl font-semibold leading-[1.13] tracking-tight text-primary sm:text-4xl">
              A school built around what children can become.
            </h2>
            <p className="mt-6 leading-8 text-muted">
              Since {school.established}, EAK has been a place where academic
              ambition and human kindness go hand in hand. Learning stretches
              beyond the classroom, and no one has to find their path alone.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-7">
              <Stat value="1,800" label="Students" />
              <Stat value="1:20" label="Teacher ratio" />
            </div>
            <TextLink href="/about" className="mt-8">
              Get to know our story
            </TextLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Academics"
            title="A journey for every stage of growth."
            text="From first discoveries to future-ready choices, we meet students where they are and help them reach further."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, i) => (
              <Link
                href="/academics"
                key={stage.name}
                className="group flex min-h-64 flex-col rounded-card border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="font-heading text-xs font-bold text-secondary">
                  0{i + 1} / {stage.grades}
                </span>
                <h3 className="mt-7 font-heading text-2xl font-semibold text-primary">
                  {stage.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {stage.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Explore learning{" "}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-warm">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="Spaces to thrive"
              title="The campus is part of the classroom."
              text="Purposeful spaces invite children to experiment, play, create and take a breath."
              className="mb-0"
            />
            <TextLink href="/facilities">Explore all facilities</TextLink>
          </div>
          <div className="mt-10 grid gap-4 md:h-[610px] md:grid-cols-[minmax(0,1.35fr)_minmax(0,.85fr)] md:grid-rows-2">
            {facilities.slice(0, 3).map((item, i) => (
              <Link
                key={item.id}
                href="/facilities#virtual-tour"
                className={cn(
                  "group relative isolate flex min-h-[280px] overflow-hidden rounded-card text-white",
                  i === 0 && "md:row-span-2",
                )}
              >
                <Photo
                  src={item.image}
                  alt={item.alt}
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 60vw"
                      : "(max-width: 768px) 100vw, 40vw"
                  }
                  className="-z-10 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/95 via-primary/25 to-transparent" />
                <div className="mt-auto p-6 sm:p-8">
                  <h3
                    className={cn(
                      "font-heading font-semibold",
                      i === 0 ? "text-2xl sm:text-3xl" : "text-xl",
                    )}
                  >
                    {item.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/90">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
                    Explore this space{" "}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid items-center gap-8 rounded-[1.75rem] bg-primary-100 p-8 md:grid-cols-[.9fr_1.1fr] md:p-12">
            <div>
              <Eyebrow>Every milestone matters</Eyebrow>
              <h2 className="font-heading text-3xl font-semibold leading-tight text-primary md:text-4xl">
                Excellence is a habit of growing.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                We celebrate the courage to try, the discipline to improve and
                the joy of achieving together.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-7">
              <Stat value="1,800" label="Learners" />
              <Stat value="90" label="Educators" />
              <Stat value="25+" label="Years of learning" />
              <Stat value="100%" label="Grade XII pass rate" />
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Academic curiosity",
              "Sporting spirit",
              "Creative confidence",
            ].map((title, i) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-card border border-line p-6"
              >
                <Medal
                  className="h-7 w-7 shrink-0 text-secondary"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-heading font-semibold text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {
                      [
                        "Projects, olympiads and ideas worth sharing.",
                        "Teamwork, fair play and progress at every pace.",
                        "Art, music and performances that find a voice.",
                      ][i]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="grid items-center gap-10 md:grid-cols-[.8fr_1.2fr] lg:grid-cols-[.55fr_1fr] lg:gap-16">
          <div className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-card md:mx-0 md:h-[420px] md:max-w-none">
            <Photo
              src="/images/principal.webp"
              alt="Principal Dr. Meera Srinivasan"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-[center_32%]"
            />
          </div>
          <div>
            <Eyebrow>A note from our principal</Eyebrow>
            <blockquote className="font-heading text-2xl font-medium leading-[1.4] text-primary md:text-3xl">
              “A school should help every child discover the kind of difference
              they can make.”
            </blockquote>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
              We believe students do their best when they feel safe to ask,
              supported to explore and inspired to care for others. That belief
              shapes every learning experience we create.
            </p>
            <p className="mt-6 font-heading font-semibold text-primary">
              {school.principal}
            </p>
            <p className="text-xs text-muted">
              Principal, EAK International School
            </p>
            <TextLink href="/about" className="mt-4">
              Explore our values
            </TextLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="Around our school"
              title="What’s happening at EAK."
              text="Discover the latest from our classrooms, community and campus."
              className="mb-0"
            />
            <TextLink href="/events">View all updates</TextLink>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {events.slice(0, 3).map((item) => (
              <Link
                href="/events"
                key={item.id}
                className="group flex h-full flex-col rounded-card border border-line p-6 hover:shadow-card"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-secondary">
                  {item.category} · {formatDate(item.date)}
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Read update <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="On the calendar"
            title="Moments worth looking forward to."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {events
              .filter((item) => item.category === "Events")
              .slice(0, 2)
              .map((item) => (
                <Link
                  href="/events"
                  key={item.id}
                  className="group flex gap-5 rounded-card bg-white p-6 shadow-card"
                >
                  <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-accent text-primary">
                    <strong className="font-heading text-2xl leading-none">
                      {new Date(`${item.date}T12:00:00Z`).getUTCDate()}
                    </strong>
                    <span className="text-xs font-bold uppercase">
                      {formatDate(item.date, { month: "short" })}
                    </span>
                  </span>
                  <span>
                    <strong className="block font-heading text-lg text-primary">
                      {item.title}
                    </strong>
                    <span className="mt-2 block text-sm text-muted">
                      {item.location} · {item.time}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
                      Event details <ChevronRight className="h-4 w-4" />
                    </span>
                  </span>
                </Link>
              ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-primary-100/60">
        <Container>
          <SectionHeading
            eyebrow="Voices of our community"
            title="Trusted by families at EAK."
            text="The everyday moments that make learning feel personal."
            className="mx-auto text-center"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-card sm:p-8"
              >
                <div
                  aria-label="Five out of five stars"
                  className="flex gap-1 text-accent-600"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-current"
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm italic leading-7 text-muted">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 font-heading text-xs font-bold text-primary">
                    {item.initials}
                  </span>
                  <span>
                    <strong className="block font-heading text-sm text-primary">
                      {item.name}
                    </strong>
                    <span className="text-xs text-muted">{item.relation}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
      <section className="bg-primary py-18 text-white md:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Eyebrow className="text-accent">Admissions 2027–28</Eyebrow>
            <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-tight md:text-4xl">
              The next chapter starts here.
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Explore the process, see the dates and discover where your child
              could grow.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/admissions">Explore admissions</Button>
            <Button
              href="/downloads/prospectus-2027-28.txt"
              variant="light"
              download
            >
              Download prospectus
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
