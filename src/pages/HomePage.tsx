import { HeroSection } from "../components/sections/HeroSection";
import { NewsletterSection } from "../components/sections/NewsletterSection";
import { MediaSection } from "../components/sections/MediaSection";
import { Container } from "../components/ui/Container";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <NewsletterSection />

      <div aria-hidden="true">
        <Container className="max-w-none">
          <hr className="border-neutral-800" />
        </Container>
      </div>

      <MediaSection />
    </>
  );
}
