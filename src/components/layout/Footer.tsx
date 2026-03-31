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
            className="text-[10px] tracking-[0.08em] text-neutral-800/80 transition-colors hover:text-neutral-600"
          >
            In memory of Shep
          </Link>
        </div>
      </Container>
    </footer>
  );
}
