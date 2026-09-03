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
    genre: "Tech House / House / Techno",
    imageUrl: "/assets/images/artists/jonathan/Jonathan3.webp",
    statement: `Jonathan Sam, known professionally as Damian Sam, was born and raised in Sri Lanka. Inspired by his father, a DJ himself, Damian began mixing at just 12 years old and played his first event at 14, beginning a journey that has now spanned nearly two decades behind the decks.

After moving to Los Angeles, Damian turned his focus toward house music and quickly established himself within the West Coast underground scene. He has performed at venues including Exchange LA, Avalon Hollywood, Academy LA, Bauhaus Las Vegas, Lick N Dip, EGO After Hours Las Vegas, and Pattern Bar, while sharing lineups and providing support for GUZ, Sebastian Ledher, Tokyo T, and Sage Armstrong.

Beyond performing, Damian works in A&R with Tech Avenue Records and is a co-founder of The Garage Vibe, helping grow the collective from a grassroots garage party into a growing house music movement with events across Los Angeles, Las Vegas, and Salt Lake City.

Driven by groove, energy, and a strong connection with the dance floor, Damian continues to build his presence as both a DJ and curator within the underground house music scene.`,
    links: {
      instagram: "https://www.instagram.com/djdamiansam/",
      soundcloud: "https://soundcloud.com/djdamiansam",
      facebook: "https://www.facebook.com/discjockeyphoenix",
    },
  },
  {
    id: "cazier",
    name: "Cazier",
    genre: "Tech House / House / Techno",
    imageUrl: "/assets/images/artists/aliya/aliya1.webp",
    statement: `Cazier is a deep and tech house DJ with a focus on groove and late-night energy.

Her background in music started early, growing up playing multiple instruments, which shaped the way she approaches sound today. Keeping things minimal and steady, her sets lean into the underground—built for rooms where the music speaks for itself.

Focused on consistency and feel, Cazier is building a sound that stays locked in from start to finish.`,
    links: {
      instagram: "https://www.instagram.com/djcazier?igsh=NTc4MTIwNjQ2YQ==",
      soundcloud: "https://soundcloud.com/aliya-sam-221167637",
    },
  },
 {
  id: "josh",
  name: "Swain Sam",
  genre: "Tech House / Techno / Bass House",
  imageUrl: "/assets/images/artists/josh/Josh1.webp",
  statement: `Swain Sam is a Los Angeles- and Las Vegas-based DJ with nearly 20 years behind the decks, specializing in techno, tech house, bass house, and underground electronic music. DJing since the age of 12, he has built a reputation for reading the crowd and delivering high-energy sets that keep dance floors moving from start to finish.

Whether playing intimate after-hours events or packed clubs, Swain Sam creates experiences driven by rhythm, connection, and passion. Known for dancing alongside the crowd from behind the decks, his infectious energy turns every performance into a shared celebration. His goal is simple: leave every audience energized, connected, and excited for the next set.`,
  links: {
    instagram: "https://www.instagram.com/djswainsam?igsh=NTc4MTIwNjQ2YQ==",
    soundcloud: "https://soundcloud.com/swainsammusic",
  },
},
  {
    id: "malone",
    name: "Malone Wright",
    genre: "Melodic / Techno",
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
    id: "elias",
    name: "Elias Mayfield",
    genre: "Industrial",
    imageUrl: "/assets/images/artists/elias/Elias.webp",
    statement: `Elias is an EDM DJ and producer driven by a love for every genre of electronic music, from high-energy soundscapes and dancefloor connection to the psychedelic sounds of psytrance. Blending driving house grooves, euphoric trance melodies, and modern bass elements, he crafts sets that build emotion and move crowds. With jazz being of of his favorite genres he is always aiming to have unique and memorable sets, extending the range of music he plays to bring a different experience every time he's behind the decks. Elias brings precision mixing and live energy to every show — turning moments into memories and keeping crowds moving from the first beat to the last.`,
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