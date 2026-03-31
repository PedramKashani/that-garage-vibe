import { useParams, Link } from 'react-router-dom';
import {
  SiInstagram,
  SiSoundcloud,
  SiSpotify,
  SiMixcloud,
  SiYoutube,
  SiBeatport,
  SiFacebook,
} from 'react-icons/si';
import { Globe } from 'lucide-react';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';
import { getArtistById } from '../data/artists';
import { Container } from '../components/ui/Container';
import { NotFoundPage } from './NotFoundPage';
import type { ArtistLinks } from '../types';

const linkMeta: Record<keyof ArtistLinks, { label: string; icon: IconType | LucideIcon }> = {
  instagram:  { label: 'Instagram',  icon: SiInstagram },
  soundcloud: { label: 'SoundCloud', icon: SiSoundcloud },
  spotify:    { label: 'Spotify',    icon: SiSpotify },
  mixcloud:   { label: 'Mixcloud',   icon: SiMixcloud },
  youtube:    { label: 'YouTube',    icon: SiYoutube },
  beatport:   { label: 'Beatport',   icon: SiBeatport },
  facebook:   { label: 'Facebook',   icon: SiFacebook },
  website:    { label: 'Website',    icon: Globe },
};

export function ArtistDetailPage() {
  const { id } = useParams<{ id: string }>();
  const artist = id ? getArtistById(id) : undefined;

  if (!artist) return <NotFoundPage />;

  const hasLinks = artist.links && Object.values(artist.links).some(Boolean);

  return (
    <div className="pb-24">
      <Container>

        {/* Back link */}
        <div className="py-8">
          <Link
            to="/artists"
            className="text-[11px] uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:text-white"
          >
            ← Artists
          </Link>
        </div>

        {/* Main layout: image left, content right on desktop */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[5fr_6fr] md:gap-16">

          {/* Image */}
          {artist.imageUrl && (
            <div className="aspect-[3/4] overflow-hidden sm:aspect-auto">
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="h-full w-full object-cover object-top"
                style={{ maxHeight: '80vh' }}
              />
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col justify-end py-4 md:py-10">

            {artist.genre && (
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                {artist.genre}
              </p>
            )}

            <h1 className="mb-8 text-4xl font-bold uppercase leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              {artist.name}
            </h1>

            {artist.statement && (
              <div className="mb-8 max-w-sm space-y-4 text-sm leading-relaxed text-neutral-300">
                {artist.statement.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            {artist.bio && !artist.statement && (
              <p className="mb-8 max-w-sm text-sm leading-relaxed text-neutral-400">
                {artist.bio}
              </p>
            )}

            {hasLinks && (
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                  Listen / Follow
                </p>
                <div className="flex flex-wrap gap-3">
                  {(Object.entries(artist.links!) as [keyof ArtistLinks, string][])
                    .filter(([, href]) => Boolean(href))
                    .map(([key, href]) => {
                      const { label, icon: Icon } = linkMeta[key];
                      return (
                        <a
                          key={key}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-all duration-200 hover:border-neutral-500 hover:text-white"
                        >
                          <Icon size={16} />
                        </a>
                      );
                    })}
                </div>
              </div>
            )}

          </div>
        </div>

      </Container>
    </div>
  );
}
