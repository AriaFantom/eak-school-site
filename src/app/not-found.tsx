import { Button, Container } from "@/components/ui";
export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[65dvh] items-center bg-surface"
    >
      <Container>
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-secondary">
          404 · A new direction
        </p>
        <h1 className="mt-4 max-w-xl font-heading text-4xl font-semibold text-primary md:text-6xl">
          This page is on another path.
        </h1>
        <p className="mt-5 max-w-md leading-7 text-muted">
          The page you are looking for may have moved. Let’s get you back to
          exploring EAK.
        </p>
        <Button href="/" className="mt-8">
          Back to home
        </Button>
      </Container>
    </main>
  );
}
