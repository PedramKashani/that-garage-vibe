import { Section } from '../components/ui/Section';

export function PartnersPage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
          Partners
        </p>
        <h1 className="mb-8 text-3xl font-bold uppercase leading-none tracking-tight text-white sm:text-4xl md:text-5xl">
          Our Partners
        </h1>
        <p className="text-neutral-400 leading-relaxed">
          We work with brands, venues, and organizations that share our values.
          Partner details coming soon.
        </p>
      </div>
    </Section>
  );
}
