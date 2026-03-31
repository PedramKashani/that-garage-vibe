import type { Artist } from '../types';

/**
 * Central artist data source.
 *
 * Each artist's `id` doubles as their URL slug:
 *   /artists/jonathan, /artists/malone, etc.
 *
 * All fields except `id` and `name` are optional.
 * Add bios, statements, and links here when ready.
 */
export const artists: Artist[] = [
  {
    id: 'jonathan',
    name: 'Jonathan',
    genre: 'House',
    imageUrl: '/assets/images/artists/jonathan/Jonathan2.webp',
    statement: `Jonathan Sam, known professionally as Damian Sam, was born and raised on the tropical island of Sri Lanka. Inspired by his father, a DJ himself, Damian began learning to mix at just 12 years old and played his first event at 14. Since then, he has been performing nonstop, carving his path as a dynamic force in the music scene.

After moving to Los Angeles, California, Damian redirected his focus toward house music, quickly making a name for himself across the West Coast. From California to Nevada, he has performed at renowned venues such as Exchange LA, Avalon Hollywood, Academy, Lick n Dip, EGO After Hours Las Vegas, and Pattern Bar, and has shared the stage with talents like Sage Armstrong.

Beyond the decks, Damian is also deeply involved in the industry, taking on A&R work with Tech Avenue Records, one of Los Angeles' fastest-growing labels. As co-founder of The Garage Vibe, Damian has been instrumental in transforming a grassroots garage party into a growing movement, curating unforgettable events across LA, Las Vegas, and Salt Lake City.

Known for his distinct sound, seamless energy, and deep connection with his audience, Damian Sam is on a steady rise, continuously pushing boundaries, building community, and leaving a lasting mark on the house music scene.`,
    links: {
      instagram: 'https://www.instagram.com/djdamiansam/',
      soundcloud: 'https://soundcloud.com/djdamiansam',
      facebook: 'https://www.facebook.com/discjockeyphoenix',
    },
  },
  {
    id: 'malone',
    name: 'Malone',
    genre: 'House',
    imageUrl: '/assets/images/artists/malone/Malone2.webp',
    // bio: '',
    // statement: '',
    links: {
      instagram: 'https://www.instagram.com/malone_wr1ght/',
      soundcloud: 'https://soundcloud.com/malonewright',
      facebook: 'https://www.facebook.com/malone.wright/',
    },
  },
  {
    id: 'josh',
    name: 'Josh',
    genre: 'Drum & Bass',
    imageUrl: '/assets/images/artists/josh/Josh1.webp',
    // bio: '',
    // statement: '',
    // links: { instagram: '', soundcloud: '' },
  },
  {
    id: 'aliya',
    name: 'Aliya',
    genre: 'Ambient',
    imageUrl: '/assets/images/artists/aliya/aliya1.webp',
    // bio: '',
    // statement: '',
    // links: { instagram: '', spotify: '' },
  },
  {
    id: 'elias',
    name: 'Elias',
    genre: 'Industrial',
    imageUrl: '/assets/images/artists/elias/Elias.webp',
    // bio: '',
    // statement: '',
    // links: { instagram: '', soundcloud: '' },
  },
];

/** Look up a single artist by id/slug. */
export function getArtistById(id: string): Artist | undefined {
  return artists.find((a) => a.id === id);
}
