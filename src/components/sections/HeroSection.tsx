import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroSection({
  imageSrc = "/assets/images/team/Team1.webp",
  imageAlt = "That Garage Vibe",
}: HeroSectionProps) {
  return (
    <section
      aria-label="Hero"
      className="-mt-24 relative h-[min(92vh,820px)] w-full overflow-hidden bg-black md:-mt-32 md:h-screen md:max-h-none"
    >
      {/* Editorial image — full photo on small screens (contain); full-bleed crop on md+ */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-contain object-center md:object-cover"
        loading="eager"
        fetchPriority="high"
      />

      {/* Subtle dark overlay for contrast against the pill nav */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

      {/* Bottom vignette — black fade for clean section transition */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black via-black/50 to-transparent"
      />

      {/* Hero overlay — brand name, tagline, CTA */}
      <div className="absolute bottom-16 left-0 right-0 px-5 sm:px-8 md:bottom-20 md:px-20">
        <div className="mx-auto max-w-[1100px]">
          <h1 className="mb-3 text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
            That Garage Vibe
          </h1>
          <p className="mb-8 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Underground music collective — Los Angeles / Las Vegas / Utah
          </p>
          <Button variant="outline" size="md" asChild>
            <Link to="/events">See Upcoming Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
