import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';

export function TributePage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
          Tribute
        </p>

        <h1 className="mb-8 text-3xl font-bold uppercase leading-none tracking-tight text-white sm:text-4xl md:text-5xl">
          The Garage Vibe Lives On
        </h1>

        <div className="space-y-5 leading-relaxed text-neutral-400">
          <p>Forever part of the Garage Vibe family.</p>

          <p>
            Shep wasn't just someone who showed up — he was someone who showed
            love. Every time. To everyone. He was there when you needed him.
          </p>

          <p>
            He had a rare kind of energy — the kind that made people feel seen,
            supported, and celebrated. Whether you were behind the decks or just
            stepping into the scene, Shep made sure you knew you mattered.
          </p>

          <p>He believed in people deeply, and he wasn't quiet about it.</p>

          <p className="italic text-neutral-300">
            "I'm your number one fan — I'll always be front and center at your
            sets."
          </p>

          <p>
            And he meant it. He stood by us, lifted us up, and believed in the
            dream before it even felt real.
          </p>

          <p>To many, he was a friend. To us, he was family — a brother.</p>

          <p>
            Shep was part of the heartbeat of Garage Vibe — the energy, the
            community, the love on the dance floor. That doesn't fade.
          </p>

          <p>We carry that spirit forward:</p>

          <ul className="space-y-1 pl-4 text-neutral-300">
            <li>Through the music</li>
            <li>Through the people</li>
            <li>Through every event that brings us together</li>
          </ul>

          <p>That Garage Vibe will always carry his presence.</p>
        </div>

        <Link
          to="/about"
          className="mt-12 inline-block text-xs uppercase tracking-[0.2em] text-neutral-700 transition-colors hover:text-neutral-400"
        >
          ← Our Story
        </Link>
      </div>
    </Section>
  );
}
