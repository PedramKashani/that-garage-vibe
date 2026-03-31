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

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-neutral-600">
        {label}
      </p>
      <p className="text-sm font-medium text-neutral-300">{value}</p>
    </div>
  );
}

export function ArtistDetailPage() {
  const { id } = useParams<{ id: string }>();
  const artist = id ? getArtistById(id) : undefined;

  if (!artist) return <NotFoundPage />;

  const hasLinks = artist.links && Object.values(artist.links).some(Boolean);

  return (
    <div className="pb-28">
      <Container>
        <div className="pt-8 pb-10">
          <Link
            to="/artists"
            className="text-[11px] uppercase tracking-[0.22em] text-neutral-600 transition-colors hover:text-white"
          >
            ← Back to Artists
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[6fr_5fr] xl:gap-16">
          {artist.imageUrl && (
            <div className="xl:sticky xl:top-40 xl:self-start">
              <div className="overflow-hidden border border-neutral-900 bg-neutral-950">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="h-[62vh] w-full object-cover object-top sm:h-[70vh] xl:h-[78vh]"
                />
              </div>
            </div>
          )}

          <div className="min-w-0">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-neutral-600">
              Artist Profile
            </p>

            <h1 className="mb-8 text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
              {artist.name}
            </h1>

            <div className="mb-10 grid grid-cols-1 gap-6 border-y border-neutral-900 py-6 sm:grid-cols-2">
              <MetaItem label="Collective" value="That Garage Vibe" />
              <MetaItem label="Status" value="Sound Undisclosed" />
            </div>

            {artist.statement && (
              <div className="mb-10 max-w-[44ch] space-y-6 text-base leading-relaxed text-neutral-300">
                {artist.statement.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            {artist.bio && !artist.statement && (
              <p className="mb-10 max-w-[44ch] text-base leading-relaxed text-neutral-400">
                {artist.bio}
              </p>
            )}

            {!artist.statement && !artist.bio && (
              <p className="mb-10 max-w-[44ch] text-base leading-relaxed text-neutral-500">
                More on this artist coming soon.
              </p>
            )}

            {hasLinks && (
              <div className="pt-2">
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
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-all duration-200 hover:border-neutral-500 hover:text-white"
                        >
                          <Icon size={17} />
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
