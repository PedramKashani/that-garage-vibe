import { Link } from "react-router-dom";
import { Container } from "../ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 text-neutral-600">
      <Container className="max-w-none">
        <div className="flex items-center justify-between gap-6">
          <p className="text-sm text-neutral-600">© {year} That Garage Vibe.</p>
          <Link
            to="/tribute"
            className="text-xs uppercase tracking-[0.2em] text-neutral-700 transition-colors hover:text-neutral-400"
          >
            In memory of Shep
          </Link>
        </div>
      </Container>
    </footer>
  );
}
