import { useState } from 'react';
import { Container } from '../ui/Container';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  }

  return (
    <section className="py-16 sm:py-24 md:py-40">
      <Container>
        <div className="mx-auto max-w-xl text-center">

          <h2 className="text-3xl font-normal leading-snug text-white/90 md:text-4xl">
            Tap into the collective.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-neutral-500">
            Get updates on upcoming events, shows we're hitting,
            merch drops, and new music.
          </p>

          {submitted ? (
            <p className="mt-12 text-xs uppercase tracking-[0.3em] text-neutral-500">
              You're in.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-12 flex items-center border-b border-neutral-700"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                required
                className="min-w-0 flex-1 bg-transparent py-4 text-base text-white placeholder-neutral-600 outline-none"
              />
              <button
                type="submit"
                className="shrink-0 py-4 pl-8 text-xs uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-white cursor-pointer"
              >
                Tap in
              </button>
            </form>
          )}

        </div>
      </Container>
    </section>
  );
}
