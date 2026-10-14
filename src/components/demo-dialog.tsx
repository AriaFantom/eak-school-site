"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

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
    const prior = document.activeElement;
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
      if (prior === triggerButton) triggerButton?.focus();
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
      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-5">
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-ink/65"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-dialog-title"
            className="relative w-full max-w-md rounded-card bg-white p-8 text-ink shadow-lift"
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
          </div>
        </div>
      )}
    </>
  );
}
