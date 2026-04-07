import { Link } from "react-router-dom";
import { Section } from "../components/ui/Section";

export function AboutPage() {
  return (
    <Section>
      <div className="mx-auto max-w-[700px]">
        {/* Header */}
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-600">
          About
        </p>
        <h1 className="mb-20 text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
          Our Story
        </h1>

        {/* Origin */}
        <div className="mb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-600">
            Origin
          </p>
          <p className="text-2xl font-normal leading-snug text-white/90 sm:text-3xl">
            Born from a garage. Built on a belief that music, movement, and
            community could heal what distance had broken.
          </p>
        </div>

        <hr className="mb-20 border-neutral-800" />

        {/* The Beginning */}
        <div className="mb-20">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-600">
            The Beginning
          </p>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-400">
            <p>
              It was 2021. The world had just been through something no one was
              prepared for. Longtime friends Justin Shepard (Shep) and Damian
              Sam looked at an ordinary garage and saw something else - a
              sanctuary. A place to move, to feel, to reconnect.
            </p>
            <p>
              At a time when the world felt distant, they opened their doors.
              Small gatherings. Word of mouth. A safe, intimate space where
              people could come together to dance and rediscover each other.
            </p>
            <p>
              Those early nights had a specific kind of energy. Raw. Honest.
              Underground. The kind you don't engineer - you earn it.
            </p>
          </div>
        </div>

        <hr className="mb-20 border-neutral-800" />

        {/* The Movement */}
        <div className="mb-20">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-600">
            The Movement
          </p>
          <p className="mb-8 text-2xl font-normal leading-snug text-white/90 sm:text-3xl">
            What started in a garage became a collective.
          </p>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-400">
            <p>
              Inspired by those early nights, Shep and Damian built something
              larger - That Garage Vibe Collective. A network of passionate
              creatives, DJs, and event producers dedicated to curating
              experiences that matter.
            </p>
            <p>Not just events. Moments. The kind people talk about after.</p>
          </div>
        </div>

        <hr className="mb-20 border-neutral-800" />

        {/* Where We Are Now */}
        <div className="mb-20">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-600">
            Where We Are Now
          </p>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-400">
            <p>
              From Los Angeles to Las Vegas to Salt Lake City - That Garage Vibe
              has grown beyond its four walls. But the essence hasn't moved.
              Every event still carries that same underground spirit. That same
              welcoming energy. That same refusal to compromise on how it feels.
            </p>
          </div>
        </div>

        <hr className="mb-20 border-neutral-800" />

        {/* The Core — manifesto */}
        <div className="mb-24">
          <p className="mb-10 text-xs uppercase tracking-[0.3em] text-neutral-600">
            The Core
          </p>
          <div className="space-y-5">
            <p className="text-xl font-medium text-white sm:text-2xl">
              We are not an event brand.
            </p>
            <p className="text-xl font-medium text-white/70 sm:text-2xl">
              We are a community-driven experience.
            </p>
            <p className="text-xl font-medium text-white/50 sm:text-2xl">
              Built around music, creativity, and human connection.
            </p>
            <p className="text-xl font-medium text-white/30 sm:text-2xl">
              Bringing the raw garage energy to anyone ready to be part of
              something bigger.
            </p>
          </div>
        </div>

        {/* Tribute */}
        <Link
          to="/tribute"
          className="group inline-block border-t border-neutral-800 pt-8 transition-colors hover:border-neutral-600"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-2 group-hover:text-neutral-500">
            In Memoriam
          </p>
          <p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">
            In memory of Shep - forever part of The Garage Vibe.
          </p>
        </Link>
      </div>
    </Section>
  );
}
