import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1360px] px-5 sm:px-6 lg:px-7",
        className,
      )}
    >
      {children}
    </div>
  );
}
export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-18 md:py-24 lg:py-28", className)}>
      {children}
    </section>
  );
}
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 font-heading text-xs font-bold uppercase tracking-[.18em] text-secondary",
        className,
      )}
    >
      {children}
    </p>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  text,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 max-w-2xl md:mb-12", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-semibold leading-[1.14] tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {text && (
        <p className="mt-4 max-w-[62ch] text-base leading-7 text-muted md:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}
type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light";
  className?: string;
  download?: boolean;
  showArrow?: boolean;
};
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  download,
  showArrow = true,
}: ButtonProps) {
  const styles = {
    primary: "bg-accent text-primary hover:bg-[#ffd17b]",
    secondary: "bg-primary text-white hover:bg-primary-600",
    outline: "border border-primary/25 text-primary hover:bg-primary-100",
    light:
      "border border-white/55 text-white hover:bg-white hover:text-primary",
  };
  return (
    <Link
      href={href}
      download={download}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold transition-colors focus-visible:outline-offset-4",
        styles[variant],
        className,
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  );
}
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-11 items-center gap-2 font-heading text-sm font-semibold text-primary underline decoration-accent decoration-2 underline-offset-6 hover:decoration-secondary",
        className,
      )}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={65}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      className={cn("object-cover", className)}
    />
  );
}
export function PageHero({
  title,
  lead,
  image,
  alt,
  eyebrow,
}: {
  title: string;
  lead: string;
  image?: string;
  alt?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-white">
      {image && (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Photo
            src={image}
            alt={alt || ""}
            sizes="100vw"
            eager
            className="object-center"
          />
        </div>
      )}
      <div
        className="absolute inset-0 -z-10 bg-primary/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/70 via-primary/45 to-primary/15"
        aria-hidden="true"
      />
      <Container className="relative flex min-h-[350px] flex-col justify-center py-14 md:min-h-[440px] md:py-18">
        <div className="max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-9 flex items-center gap-2 text-xs text-white/80"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden />
            <span aria-current="page">{eyebrow || title}</span>
          </nav>
          <h1 className="font-heading text-[clamp(2.45rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-tight">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
            {lead}
          </p>
        </div>
      </Container>
    </section>
  );
}
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl">
        {value}
      </div>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
