"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { navigation, school } from "@/data/school";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    const button = menuButton.current;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && navRef.current) {
        const focusable = [
          ...navRef.current.querySelectorAll<HTMLElement>("a, button"),
        ];
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() =>
      navRef.current?.querySelector<HTMLElement>("a")?.focus(),
    );
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
      if (previous === button) button?.focus();
    };
  }, [open]);
  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-primary text-white transition-shadow",
        scrolled && "shadow-[0_10px_30px_rgb(11_18_32/.18)]",
      )}
    >
      <div className="hidden border-b border-white/10 bg-[#0b204b] lg:block">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-7 py-1.5 text-xs text-white/75">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Admissions open for 2027–28
          </span>
          <div className="flex gap-6">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-3 w-3" />
              {school.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3 w-3" />
              {school.email}
            </span>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "mx-auto flex max-w-[1360px] items-center justify-between gap-5 px-5 transition-[height] sm:px-6 lg:px-7",
          scrolled ? "h-[68px]" : "h-[76px]",
        )}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="EAK International School home"
        >
          <Image
            src="/logo-light.svg"
            alt=""
            width={42}
            height={48}
            className="h-11 w-10"
          />
          <span className="font-heading text-sm font-bold leading-tight tracking-tight sm:text-base">
            EAK{" "}
            <span className="block text-xs font-medium tracking-[.07em] text-white/80">
              INTERNATIONAL SCHOOL
            </span>
          </span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-[clamp(.6rem,1.2vw,1.2rem)] lg:flex"
        >
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "whitespace-nowrap border-b-2 py-2 text-[12px] font-semibold transition-colors xl:text-[13px]",
                pathname === link.href
                  ? "border-accent text-white"
                  : "border-transparent text-white/75 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact#enquiry"
          className="hidden min-h-11 shrink-0 items-center gap-2 rounded-full bg-accent px-5 font-heading text-xs font-bold text-primary transition-colors hover:bg-[#ffd17b] lg:inline-flex"
        >
          Apply now <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          ref={menuButton}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-x-0 bottom-0 top-[68px] z-[-1] bg-primary/55 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-navigation"
            ref={navRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-68px)] overflow-y-auto bg-primary px-5 pb-8 shadow-xl lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="grid divide-y divide-white/10"
            >
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center justify-between font-heading text-lg font-semibold"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-accent" />
                </Link>
              ))}
            </nav>
            <Link
              href="/contact#enquiry"
              onClick={() => setOpen(false)}
              className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent font-heading font-bold text-primary"
            >
              Apply now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </>
      )}
    </header>
  );
}

export function MobileApply() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-5 pb-[max(.65rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md lg:hidden">
      <Link
        href="/contact#enquiry"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent font-heading text-sm font-bold text-primary"
      >
        Apply for 2027–28 <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
