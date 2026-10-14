"use client";
import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  MapPin,
  Search,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  categories,
  events,
  facilities,
  faqs,
  formatDate,
  stages,
  type Facility,
} from "@/data/school";
import { Photo } from "@/components/ui";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function DemoDialogButton({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    const triggerButton = trigger.current;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const buttons = [
          ...(close.current
            ?.closest('[role="dialog"]')
            ?.querySelectorAll<HTMLButtonElement>("button") || []),
        ];
        if (event.shiftKey && document.activeElement === buttons[0]) {
          event.preventDefault();
          buttons.at(-1)?.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === buttons.at(-1)
        ) {
          event.preventDefault();
          buttons[0]?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    requestAnimationFrame(() => close.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKey);
      if (previous === triggerButton) triggerButton?.focus();
    };
  }, [open]);
  return (
    <>
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen(true)}
        className="min-h-6 hover:text-white"
      >
        {children}
      </button>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-5">
            <motion.button
              type="button"
              aria-label="Close dialog"
              className="absolute inset-0 bg-ink/65"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-dialog-title"
              className="relative w-full max-w-md rounded-card bg-white p-8 text-ink shadow-lift"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
            >
              <button
                ref={close}
                type="button"
                aria-label="Close dialog"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-secondary">
                Information
              </p>
              <h2
                id="demo-dialog-title"
                className="text-2xl font-semibold text-primary"
              >
                {title}
              </h2>
              <p className="mt-4 leading-7 text-muted">{text}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-7 min-h-11 rounded-full bg-primary px-6 font-bold text-white"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export function AcademicTabs() {
  const [index, setIndex] = useState(0);
  const tabPrefix = useId();
  const active = stages[index];
  const onKey = (event: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (event.key === "ArrowRight") next = (i + 1) % stages.length;
    else if (event.key === "ArrowLeft")
      next = (i + stages.length - 1) % stages.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = stages.length - 1;
    else return;
    event.preventDefault();
    setIndex(next);
    document.getElementById(`${tabPrefix}-tab-${next}`)?.focus();
  };
  return (
    <>
      <div
        role="tablist"
        aria-label="Academic stages"
        className="flex gap-2 overflow-x-auto pb-3"
      >
        {stages.map((stage, i) => (
          <button
            id={`${tabPrefix}-tab-${i}`}
            key={stage.name}
            type="button"
            role="tab"
            aria-controls={`${tabPrefix}-panel`}
            aria-selected={i === index}
            tabIndex={i === index ? 0 : -1}
            onKeyDown={(e) => onKey(e, i)}
            onClick={() => setIndex(i)}
            className={cn(
              "relative min-h-12 shrink-0 rounded-full px-5 font-heading text-sm font-semibold",
              i === index
                ? "bg-primary text-white"
                : "bg-surface text-primary hover:bg-primary-100",
            )}
          >
            {stage.name}
          </button>
        ))}
      </div>
      <div
        id={`${tabPrefix}-panel`}
        role="tabpanel"
        aria-labelledby={`${tabPrefix}-tab-${index}`}
        tabIndex={0}
        className="mt-8 grid gap-8 rounded-card bg-surface p-6 md:grid-cols-2 md:p-10"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-[.16em] text-secondary">
            {active.grades} · {active.ages}
          </span>
          <h3 className="mt-4 font-heading text-2xl font-semibold text-primary md:text-3xl">
            {active.summary}
          </h3>
          <p className="mt-5 leading-7 text-muted">{active.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {active.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-primary"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-card bg-white p-6">
          <h4 className="mb-5 font-heading font-semibold text-primary">
            Learning areas
          </h4>
          <ul className="space-y-3">
            {active.subjects.map((s) => (
              <li
                className="flex items-start gap-3 text-sm leading-6 text-muted"
                key={s}
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export function FaqAccordion() {
  const [index, setIndex] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item, i) => (
        <div key={item.question}>
          <h3>
            <button
              type="button"
              aria-expanded={index === i}
              aria-controls={`faq-${i}`}
              onClick={() => setIndex(index === i ? null : i)}
              className="flex min-h-16 w-full items-center justify-between gap-5 py-4 text-left font-heading text-base font-semibold text-primary"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 transition-transform",
                  index === i && "rotate-180",
                )}
              />
            </button>
          </h3>
          <AnimatePresence initial={false}>
            {index === i && (
              <motion.div
                id={`faq-${i}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="max-w-3xl pb-5 text-sm leading-7 text-muted">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function EventsExplorer() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [month, setMonth] = useState("All dates");
  const [count, setCount] = useState(6);
  const [loading, setLoading] = useState(false);
  const filtered = events.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      (month === "All dates" || item.date.slice(0, 7) === month) &&
      `${item.title} ${item.description} ${item.category}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  const update = (fn: () => void) => {
    fn();
    setCount(6);
    setLoading(false);
  };
  const loadMore = () => {
    setLoading(true);
    window.setTimeout(() => {
      setCount((c) => c + 4);
      setLoading(false);
    }, 400);
  };
  return (
    <>
      <div className="rounded-card border border-line bg-white p-5 shadow-card sm:p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_220px]">
          <label className="relative block">
            <span className="sr-only">Search events and notices</span>
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted" />
            <input
              value={query}
              onChange={(e) => update(() => setQuery(e.target.value))}
              placeholder="Search events and notices"
              className="h-12 w-full rounded-xl border border-line bg-surface pl-11 pr-4 text-sm focus:border-secondary"
            />
          </label>
          <label className="block">
            <span className="sr-only">Filter by month</span>
            <select
              value={month}
              onChange={(e) => update(() => setMonth(e.target.value))}
              className="h-12 w-full rounded-xl border border-line bg-surface px-4 text-sm focus:border-secondary"
            >
              <option>All dates</option>
              <option value="2026-10">October 2026</option>
              <option value="2026-11">November 2026</option>
              <option value="2026-12">December 2026</option>
              <option value="2027-01">January 2027</option>
            </select>
          </label>
        </div>
        <div
          aria-label="Filter by category"
          className="mt-5 flex gap-2 overflow-x-auto pb-2"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => update(() => setCategory(c))}
              className={cn(
                "min-h-10 shrink-0 rounded-full px-4 text-xs font-semibold",
                category === c
                  ? "bg-primary text-white"
                  : "bg-surface text-primary hover:bg-primary-100",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div role="status" className="mt-6 text-sm text-muted">
        {filtered.length} {filtered.length === 1 ? "item" : "items"} found
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {filtered.slice(0, count).map((item) => (
          <article
            key={item.id}
            className="flex flex-col rounded-card border border-line bg-white p-6 transition-shadow hover:shadow-card"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="rounded-full bg-primary-100 px-3 py-1 text-[11px] font-bold text-primary">
                {item.category}
              </span>
              <time
                dateTime={item.date}
                className="text-xs font-semibold text-muted"
              >
                {formatDate(item.date)}
              </time>
            </div>
            <h3 className="font-heading text-xl font-semibold text-primary">
              {item.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">
              {item.description}
            </p>
            {item.location && (
              <p className="mt-4 inline-flex items-start gap-2 text-xs text-muted">
                <MapPin className="h-4 w-4 shrink-0 text-secondary" />
                {item.location} · {item.time}
              </p>
            )}
            {["Circulars", "Exam Notices", "Holidays"].includes(
              item.category,
            ) && (
              <a
                href="/downloads/school-calendar-2026-27.txt"
                download
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4"
              >
                Download calendar overview <Download className="h-4 w-4" />
              </a>
            )}
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="mt-4 rounded-card bg-surface p-10 text-center">
          <Search className="mx-auto h-9 w-9 text-secondary" />
          <h3 className="mt-4 font-heading text-xl font-semibold text-primary">
            No matching items
          </h3>
          <p className="mt-2 text-sm text-muted">
            Try a different search, category or month.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setMonth("All dates");
              setCategory("All");
              setCount(6);
            }}
            className="mt-5 min-h-11 font-semibold text-primary underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      )}
      {filtered.length > count && (
        <div className="mt-10 text-center">
          <button
            type="button"
            disabled={loading}
            onClick={loadMore}
            className="min-h-12 rounded-full border border-primary/25 px-7 font-heading text-sm font-semibold text-primary hover:bg-primary-100 disabled:opacity-60"
          >
            {loading ? "Loading more…" : "Load more"}
          </button>
          {loading && (
            <p role="status" className="mt-2 text-xs text-muted">
              Loading more items
            </p>
          )}
        </div>
      )}
    </>
  );
}

export function FacilityExplorer({ tour = false }: { tour?: boolean }) {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Facility | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const close = useRef<HTMLButtonElement>(null);
  const chosen = facilities.filter(
    (item) => category === "All" || item.category === category,
  );
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!selected) return;
    const button = trigger.current;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "Tab") {
        event.preventDefault();
        close.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => close.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      button?.focus();
    };
  }, [selected]);
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {["All", "Academic", "Sports", "Student Life", "Support"].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={cn(
              "min-h-11 rounded-full px-5 text-sm font-semibold",
              category === c
                ? "bg-primary text-white"
                : "bg-surface text-primary hover:bg-primary-100",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {chosen.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={(event) => {
              trigger.current = event.currentTarget;
              setSelected(item);
            }}
            className={cn(
              "group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white text-left shadow-card transition-transform hover:-translate-y-1",
              i === 0 && !tour && "lg:col-span-2",
            )}
          >
            <div className="relative h-56 shrink-0 overflow-hidden">
              <Photo
                src={item.image}
                alt={item.alt}
                sizes={
                  i === 0 && !tour
                    ? "(max-width: 768px) 100vw, 65vw"
                    : "(max-width: 768px) 100vw, 33vw"
                }
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-bold uppercase tracking-[.15em] text-secondary">
                {item.category}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-primary">
                {item.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                {item.description}
              </p>
              <p className="mt-4 text-xs font-medium text-primary/80">
                {item.detail}
              </p>
              <span className="mt-4 inline-flex min-h-9 items-center gap-2 text-sm font-bold text-primary">
                View photo <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8">
            <motion.button
              type="button"
              aria-label="Close photo"
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-ink/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.name}
              className="relative w-full max-w-5xl"
              initial={reduced ? undefined : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
            >
              <button
                ref={close}
                type="button"
                aria-label="Close photo"
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary"
              >
                <X />
              </button>
              <div className="relative h-[min(70dvh,700px)] overflow-hidden rounded-card bg-primary">
                <Image
                  src={selected.image}
                  alt={selected.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 font-heading text-lg font-semibold text-white">
                {selected.name}
              </p>
              <p className="mt-1 text-sm text-white/75">
                {selected.description}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
