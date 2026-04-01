import type { Artist } from "../types";

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
    id: "jonathan",
    name: "Damian Sam",
    genre: "House",
    imageUrl: "/assets/images/artists/jonathan/Jonathan2.webp",
    statement: `Jonathan Sam, known professionally as Damian Sam, was born and raised on the tropical island of Sri Lanka. Inspired by his father, a DJ himself, Damian began learning to mix at just 12 years old and played his first event at 14. Since then, he has been performing nonstop, carving his path as a dynamic force in the music scene.

After moving to Los Angeles, California, Damian redirected his focus toward house music, quickly making a name for himself across the West Coast. From California to Nevada, he has performed at renowned venues such as Exchange LA, Avalon Hollywood, Academy, Lick n Dip, EGO After Hours Las Vegas, and Pattern Bar, and has shared the stage with talents like Sage Armstrong.

Beyond the decks, Damian is also deeply involved in the industry, taking on A&R work with Tech Avenue Records, one of Los Angeles' fastest-growing labels. As co-founder of The Garage Vibe, Damian has been instrumental in transforming a grassroots garage party into a growing movement, curating unforgettable events across LA, Las Vegas, and Salt Lake City.

Known for his distinct sound, seamless energy, and deep connection with his audience, Damian Sam is on a steady rise, continuously pushing boundaries, building community, and leaving a lasting mark on the house music scene.`,
    links: {
      instagram: "https://www.instagram.com/djdamiansam/",
      soundcloud: "https://soundcloud.com/djdamiansam",
      facebook: "https://www.facebook.com/discjockeyphoenix",
    },
  },
  {
    id: "malone",
    name: "Malone Wright",
    genre: "House",
    imageUrl: "/assets/images/artists/malone/Malone2.webp",
    statement: `Malone Wright is a Utah-based DJ and producer. With roots in the scene dating back to 2016, his sound blends deep emotion with driving rhythms, creating immersive sets that resonate long after the music fades. Inspired by a deep love for electronic music, Malone crafts journeys that move seamlessly between melodic atmospheres and powerful, late-night energy.
He continues to evolve his sound while staying true to the passion that first drew him to EDM. Whether behind the decks or in the studio, his focus remains the same: to connect, elevate, and keeping the vibes right.`,
    links: {
      instagram: "https://www.instagram.com/malone_wr1ght/",
      soundcloud: "https://soundcloud.com/malonewright",
      facebook: "https://www.facebook.com/malone.wright/",
    },
  },
  {
    id: "josh",
    name: "Swain Sam",
    genre: "House",
    imageUrl: "/assets/images/artists/josh/Josh1.webp",
    links: {
      instagram: "https://www.instagram.com/djswainsam?igsh=NTc4MTIwNjQ2YQ==",
      soundcloud: "",
    },
    // bio: '',
    // statement: '',
    // links: { instagram: '', soundcloud: '' },
  },
  {
    id: "cazier",
    name: "Cazier",
    genre: "House",
    imageUrl: "/assets/images/artists/aliya/aliya1.webp",
    statement: `Cazier is a deep and tech house DJ with a focus on groove and late-night energy.

Her background in music started early, growing up playing multiple instruments, which shaped the way she approaches sound today. Keeping things minimal and steady, her sets lean into the underground—built for rooms where the music speaks for itself.

Focused on consistency and feel, Cazier is building a sound that stays locked in from start to finish.`,
    links: {
      instagram: "https://www.instagram.com/djcazier?igsh=NTc4MTIwNjQ2YQ==",
      spotify: "",
    },
  },
  {
    id: "elias",
    name: "Elias Mayfield",
    genre: "Industrial",
    imageUrl: "/assets/images/artists/elias/Elias.webp",
    statement: `Elias is an EDM DJ and producer driven by a love for every genre of electronic music, from high-energy soundscapes and dancefloor connection to the psychedelic sounds of psytrance. Blending driving house grooves, euphoric trance melodies, and modern bass elements, he crafts sets that build emotion and move crowds. With jazz being of of his favorite genres he is always aiming to have unique and memorable sets, extending the range of music he plays to bring a different experience every time he’s behind the decks. Elias brings precision mixing and live energy to every show — turning moments into memories and keeping crowds moving from the first beat to the last.`,
    links: {
      instagram:
        "https://www.instagram.com/badatbigguitar?igsh=NTc4MTIwNjQ2YQ==",
      soundcloud: "",
    },
  },
];

/** Look up a single artist by id/slug. */
export function getArtistById(id: string): Artist | undefined {
  return artists.find((a) => a.id === id);
}
