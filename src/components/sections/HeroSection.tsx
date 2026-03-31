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
      className="-mt-24 relative h-[85vh] w-full overflow-hidden bg-black md:-mt-32 md:h-screen"
    >
      {/* Editorial image — full bleed, covering the viewport */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Subtle dark overlay for contrast against the pill nav */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />


      {/* Bottom vignette — black fade for clean section transition */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black via-black/50 to-transparent"
      />
    </section>
  );
}
