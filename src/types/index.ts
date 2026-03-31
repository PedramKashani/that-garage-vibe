export interface ArtistLinks {
  instagram?: string;
  soundcloud?: string;
  spotify?: string;
  mixcloud?: string;
  youtube?: string;
  beatport?: string;
  facebook?: string;
  website?: string;
}

export interface Artist {
  id: string;        // also used as the URL slug, e.g. "jonathan" → /artists/jonathan
  name: string;
  genre?: string;
  bio?: string;      // short one-liner shown on the roster card
  statement?: string; // longer artist statement shown on the detail page
  imageUrl?: string;
  links?: ArtistLinks;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  city: string;
  ticketUrl?: string;
  artists: string[];
  isSoldOut?: boolean;
}

export interface MerchItem {
  id: string;
  name: string;
  price: string;
  image: string;
  href: string;
}
