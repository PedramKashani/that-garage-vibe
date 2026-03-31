import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
          404
        </p>
        <h1 className="mb-4 text-4xl font-bold uppercase leading-none tracking-tight text-white">
          Lost in the noise
        </h1>
        <p className="mb-8 text-neutral-500">
          That page doesn't exist. Maybe it never did.
        </p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </Section>
  );
}
