import { getArtistById } from '../data/artists';

const SITE = 'That Garage Vibe';

/** Browser tab title for the current path (React Router pathname). */
export function getDocumentTitle(pathname: string): string {
  if (pathname === '/') return SITE;

  const parts = pathname.split('/').filter(Boolean);
  const [first, second] = parts;

  switch (first) {
    case 'about':
      return `About | ${SITE}`;
    case 'events':
      return `Events | ${SITE}`;
    case 'artists':
      if (second) {
        const artist = getArtistById(second);
        return artist ? `${artist.name} | ${SITE}` : `Not Found | ${SITE}`;
      }
      return `Artists | ${SITE}`;
    case 'merch':
      return `Merch | ${SITE}`;
    case 'partners':
      return `Partners | ${SITE}`;
    case 'tribute':
      return `Tribute | ${SITE}`;
    default:
      return `Not Found | ${SITE}`;
  }
}
