"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type FieldKey =
  | "studentName"
  | "birthDate"
  | "gender"
  | "grade"
  | "currentSchool"
  | "guardianName"
  | "relationship"
  | "email"
  | "phone"
  | "currentCurriculum"
  | "curriculumInterest"
  | "learningSupport"
  | "visitType"
  | "visitDate"
  | "message";
type Values = Record<FieldKey, string>;
type Errors = Partial<Record<FieldKey, string>>;
type Field = {
  key: FieldKey;
  label: string;
  required?: boolean;
  type?: "date" | "email" | "tel" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  autoComplete?: string;
  full?: boolean;
};
type Step = { label: string; heading: string; intro: string; fields: Field[] };

const grades = [
  "Grade I",
  "Grade II",
  "Grade III",
  "Grade IV",
  "Grade V",
  "Grade VI",
  "Grade VII",
  "Grade VIII",
  "Grade IX",
  "Grade XI",
];
const steps: Step[] = [
  {
    label: "Student Profile",
    heading: "Your child’s details",
    intro: "Start with a few details about the learner joining EAK.",
    fields: [
      {
        key: "studentName",
        label: "Student’s full name",
        required: true,
        placeholder: "e.g. Aarav Sharma",
        autoComplete: "off",
      },
      {
        key: "birthDate",
        label: "Date of birth",
        type: "date",
        required: true,
      },
      {
        key: "gender",
        label: "Gender",
        type: "select",
        required: true,
        options: ["Female", "Male", "Non-binary", "Prefer not to say"],
      },
      {
        key: "grade",
        label: "Grade applying for",
        type: "select",
        required: true,
        options: grades,
      },
      {
        key: "currentSchool",
        label: "Current or last school",
        placeholder: "School name and city",
        full: true,
      },
    ],
  },
  {
    label: "Parents/Guardians",
    heading: "Parent or guardian details",
    intro: "Tell us who to contact about your child’s learning journey.",
    fields: [
      {
        key: "guardianName",
        label: "Parent or guardian’s full name",
        required: true,
        placeholder: "Your full name",
        autoComplete: "name",
      },
      {
        key: "relationship",
        label: "Relationship to student",
        type: "select",
        required: true,
        options: ["Mother", "Father", "Guardian", "Other"],
      },
      {
        key: "email",
        label: "Email address",
        type: "email",
        required: true,
        placeholder: "you@example.com",
        autoComplete: "email",
      },
      {
        key: "phone",
        label: "Phone number",
        type: "tel",
        required: true,
        placeholder: "+91 98765 43210",
        autoComplete: "tel",
      },
    ],
  },
  {
    label: "Curriculum Track",
    heading: "Learning background",
    intro:
      "This helps frame a useful conversation about the right path forward.",
    fields: [
      {
        key: "currentCurriculum",
        label: "Current curriculum",
        type: "select",
        required: true,
        options: [
          "CBSE",
          "ICSE",
          "State Board",
          "International curriculum",
          "Other",
          "Not yet in school",
        ],
      },
      {
        key: "curriculumInterest",
        label: "Pathway of interest",
        type: "select",
        options: [
          "Explore the options",
          "Science",
          "Commerce",
          "Humanities",
          "Not applicable yet",
        ],
      },
      {
        key: "learningSupport",
        label: "Anything we should know about learning support?",
        type: "textarea",
        placeholder: "Share anything that would help us understand your child",
        full: true,
      },
    ],
  },
  {
    label: "Tour & Diagnostic",
    heading: "Visit and questions",
    intro:
      "Tell us how you’d like to explore EAK and what matters most to your family.",
    fields: [
      {
        key: "visitType",
        label: "What would you like to explore?",
        type: "select",
        required: true,
        options: [
          "Campus tour",
          "Learning interaction",
          "Phone conversation",
          "I’m not sure yet",
        ],
      },
      { key: "visitDate", label: "Preferred visit date", type: "date" },
      {
        key: "message",
        label: "Your questions or priorities",
        type: "textarea",
        placeholder: "What would you like to ask our team?",
        full: true,
      },
    ],
  },
];
const emptyValues: Values = {
  studentName: "",
  birthDate: "",
  gender: "",
  grade: "",
  currentSchool: "",
  guardianName: "",
  relationship: "",
  email: "",
  phone: "",
  currentCurriculum: "",
  curriculumInterest: "",
  learningSupport: "",
  visitType: "",
  visitDate: "",
  message: "",
};

function validate(fields: Field[], values: Values): Errors {
  const next: Errors = {};
  for (const field of fields) {
    const value = values[field.key].trim();
    if (field.required && !value)
      next[field.key] = `${field.label} is required.`;
    else if (field.key === "studentName" && value && value.length < 2)
      next[field.key] = "Enter at least two characters.";
    else if (
      field.key === "email" &&
      value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    )
      next[field.key] = "Enter a valid email address.";
    else if (
      field.key === "phone" &&
      value &&
      value.replace(/\D/g, "").length < 10
    )
      next[field.key] = "Enter a phone number with at least 10 digits.";
    else if (
      field.key === "birthDate" &&
      value &&
      value > new Date().toISOString().slice(0, 10)
    )
      next[field.key] = "Enter a date of birth in the past.";
  }
  return next;
}

export function ContactWizard() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [complete, setComplete] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const completeRef = useRef<HTMLDivElement>(null);
  const active = steps[step];

  const change = (key: FieldKey, value: string) => {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(active.fields, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() => errorRef.current?.focus());
      return;
    }
    if (step < steps.length - 1) {
      setStep(step + 1);
      requestAnimationFrame(() => headingRef.current?.focus());
    } else {
      setValues(emptyValues);
      setComplete(true);
      requestAnimationFrame(() => completeRef.current?.focus());
    }
  };

  if (complete)
    return (
      <div
        ref={completeRef}
        tabIndex={-1}
        role="status"
        className="rounded-card border border-secondary/25 bg-white p-7 shadow-card sm:p-10"
      >
        <Check className="h-10 w-10 text-secondary" aria-hidden />
        <h3 className="mt-5 font-heading text-2xl font-semibold text-primary">
          Your form is complete.
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-muted">
          Your entries were checked in this browser. No enquiry was sent or
          saved, and no visit was booked. To speak with the school, please use
          the phone or email shown above.
        </p>
        <button
          type="button"
          onClick={() => {
            setComplete(false);
            setStep(0);
            setErrors({});
            requestAnimationFrame(() => headingRef.current?.focus());
          }}
          className="mt-6 min-h-11 font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4"
        >
          Start again
        </button>
      </div>
    );

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-card border border-line bg-[#f7f8ff] p-5 shadow-card sm:p-9 lg:p-11"
    >
      <ol
        aria-label="Enquiry steps"
        className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4"
      >
        {steps.map((item, index) => (
          <li
            key={item.label}
            aria-current={index === step ? "step" : undefined}
            className={cn(
              "min-w-0 border-b-[3px] pb-3",
              index === step
                ? "border-primary"
                : index < step
                  ? "border-secondary"
                  : "border-primary-100",
            )}
          >
            <span
              className={cn(
                "block text-[11px] font-bold uppercase tracking-[.12em]",
                index === step ? "text-accent-600" : "text-muted",
              )}
            >
              Step {index + 1}
              {index < step ? " · Done" : ""}
            </span>
            <span
              className={cn(
                "mt-1 block font-heading text-xs font-semibold leading-5 sm:text-sm",
                index === step ? "text-primary" : "text-muted",
              )}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <p className="text-xs font-bold uppercase tracking-[.15em] text-secondary">
          Step {step + 1} of {steps.length}
        </p>
        <h3
          ref={headingRef}
          tabIndex={-1}
          className="mt-2 font-heading text-2xl font-semibold text-primary outline-none sm:text-3xl"
        >
          {active.heading}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{active.intro}</p>
      </div>
      {Object.keys(errors).length > 0 && (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 rounded-xl border border-error/25 bg-white p-4 text-sm text-error"
        >
          <strong className="block font-heading">
            Please check these details:
          </strong>
          <ul className="mt-2 list-inside list-disc space-y-1">
            {active.fields
              .filter((field) => errors[field.key])
              .map((field) => (
                <li key={field.key}>
                  <a
                    href={`#contact-${field.key}`}
                    className="underline underline-offset-2"
                  >
                    {errors[field.key]}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
      <div className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2">
        {active.fields.map((field) => (
          <div key={field.key} className={field.full ? "sm:col-span-2" : ""}>
            <label
              htmlFor={`contact-${field.key}`}
              className="mb-2 block text-sm font-semibold text-primary"
            >
              {field.label}
              {field.required && (
                <span className="ml-1 text-error" aria-hidden="true">
                  *
                </span>
              )}
            </label>
            {field.type === "select" ? (
              <select
                id={`contact-${field.key}`}
                value={values[field.key]}
                onChange={(event) => change(field.key, event.target.value)}
                required={field.required}
                aria-invalid={Boolean(errors[field.key])}
                aria-describedby={
                  errors[field.key] ? `contact-${field.key}-error` : undefined
                }
                className="min-h-12 w-full rounded-lg border border-line bg-white px-4 text-sm text-primary focus:border-secondary"
              >
                <option value="">Select an option</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={`contact-${field.key}`}
                value={values[field.key]}
                onChange={(event) => change(field.key, event.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                aria-invalid={Boolean(errors[field.key])}
                aria-describedby={
                  errors[field.key] ? `contact-${field.key}-error` : undefined
                }
                className="min-h-28 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-primary placeholder:text-muted/70 focus:border-secondary"
              />
            ) : (
              <input
                id={`contact-${field.key}`}
                type={field.type || "text"}
                value={values[field.key]}
                onChange={(event) => change(field.key, event.target.value)}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                required={field.required}
                aria-invalid={Boolean(errors[field.key])}
                aria-describedby={
                  errors[field.key] ? `contact-${field.key}-error` : undefined
                }
                className="min-h-12 w-full rounded-lg border border-line bg-white px-4 text-sm text-primary placeholder:text-muted/70 focus:border-secondary"
              />
            )}
            {errors[field.key] && (
              <p
                id={`contact-${field.key}-error`}
                className="mt-1 text-xs font-semibold text-error"
              >
                {errors[field.key]}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <p className="max-w-sm text-xs leading-5 text-muted">
          Entries are checked locally. Nothing is sent or saved.
        </p>
        <div className="flex w-full flex-wrap gap-3 sm:w-auto">
          {step > 0 && (
            <button
              type="button"
              onClick={() => {
                setStep(step - 1);
                setErrors({});
                requestAnimationFrame(() => headingRef.current?.focus());
              }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/25 px-5 text-sm font-semibold text-primary hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back
            </button>
          )}
          <button
            type="submit"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-bold text-primary hover:bg-[#ffd17b] sm:flex-none"
          >
            {step === steps.length - 1
              ? "Check enquiry"
              : `Next: ${steps[step + 1].label}`}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </form>
  );
}
