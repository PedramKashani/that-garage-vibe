import {
  SiInstagram,
  SiYoutube,
  SiSoundcloud,
  SiTwitch,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Container } from "../ui/Container";

interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thegaragevibe/",
    icon: SiInstagram,
  },
  {
    label: "Twitch",
    href: "https://m.twitch.tv/thegaragevibe/home",
    icon: SiTwitch,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@thegaragevibe?si=BxNgKBJQSfgR78PB",
    icon: SiYoutube,
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/thegaragevibe",
    icon: SiSoundcloud,
  },
];

const contactItems = [
  { label: "for inquiries", email: "inquiry@thegaragevibe.com" },
];

export function MediaSection() {
  return (
    <section className="py-14 sm:py-20 md:py-28">
      <Container className="max-w-none px-5 sm:px-8 md:px-10 lg:pl-48 lg:pr-20">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[200px_1fr_auto] lg:items-center lg:gap-x-10">
          {/* Left: Brand logo — fixed 200px column so it never blows out the grid */}
          <div>
            <img
              src="/assets/images/Logo/ThatGarageVibe-LOGO.webp"
              alt="That Garage Vibe"
              className="h-auto max-h-[449px] w-full object-contain object-left"
              loading="lazy"
            />
          </div>

          {/* Center: Media heading + social icons */}
          <div className="min-w-0 flex flex-col items-start lg:items-center">
            <h3 className="mb-4 text-sm font-bold italic text-white/80">
              media
            </h3>
            <div className="flex flex-wrap gap-3 lg:justify-center">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-transparent text-neutral-500 transition-all duration-200 hover:border-neutral-500 hover:text-white"
                >
                  <Icon size={37} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col gap-5 items-start lg:items-end lg:text-right">
            {contactItems.map(({ label, email }) => (
              <div key={email}>
                <p className="mb-1 text-xs text-neutral-600">{label}</p>
                <a
                  href={`mailto:${email}`}
                  className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  {email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
