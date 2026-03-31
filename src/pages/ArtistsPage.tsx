import { Link } from 'react-router-dom';
import { artists } from '../data/artists';
import { Container } from '../components/ui/Container';
import { cn } from '../lib/utils';

interface ArtistCardProps {
  id: string;
  name: string;
  imageUrl?: string;
  className?: string;
}

function ArtistCard({ id, name, imageUrl, className }: ArtistCardProps) {
  return (
    <Link
      to={`/artists/${id}`}
      className={cn('group relative block overflow-hidden bg-neutral-950', className)}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* Persistent dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h2 className="text-xl font-bold uppercase leading-none tracking-tight text-white md:text-2xl">
          {name}
        </h2>
      </div>
    </Link>
  );
}

export function ArtistsPage() {
  const [jonathan, malone, josh, aliya, elias] = artists;

  return (
    <div className="pb-16 md:pb-24">

      <Container className="py-10 md:py-14">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Collective
        </p>
        <h1 className="text-3xl font-bold uppercase leading-none tracking-tight text-white md:text-4xl">
          Artists
        </h1>
      </Container>

      <Container>
        <div className="grid grid-cols-12 gap-2 sm:gap-3">

          {/* Row 1: two unequal panels */}
          <ArtistCard
            {...jonathan}
            className="col-span-12 aspect-[3/4] sm:col-span-7 sm:aspect-auto sm:h-[460px] md:h-[580px]"
          />
          <ArtistCard
            {...malone}
            className="col-span-12 aspect-[3/4] sm:col-span-5 sm:aspect-auto sm:h-[460px] md:h-[580px]"
          />

          {/* Row 2: three equal panels */}
          <ArtistCard
            {...josh}
            className="col-span-6 aspect-[3/4] md:col-span-4 md:aspect-auto md:h-[420px]"
          />
          <ArtistCard
            {...aliya}
            className="col-span-6 aspect-[3/4] md:col-span-4 md:aspect-auto md:h-[420px]"
          />
          <ArtistCard
            {...elias}
            className="col-span-12 aspect-[3/4] sm:col-span-12 md:col-span-4 md:aspect-auto md:h-[420px]"
          />

        </div>
      </Container>

    </div>
  );
}
