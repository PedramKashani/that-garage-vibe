import type { Event } from "../types";

export const upcomingEvents: Event[] = [
  {
    id: "tgv-004",
    title: "GUZ",
    date: "2026-04-25",
    venue: "115 N 7th Street",
    city: "Las Vegas, NV",
    artists: [
      "GUZ",
      "Damian Sam",
      "Cazier",
      "Swain Sam",
      "Malone Wright",
      "Elias Mayfield",
    ],
    ticketUrl: "https://posh.vip/e/guz-1",
    isSoldOut: false,
  },
];

export const pastEvents: Event[] = [
  {
    id: "tgv-001",
    title: "Valley House Call 001",
    date: "2024-07-19",
    venue: "Dark Horse Tavern",
    city: "Tarzana, CA",
    artists: [
      "Junior Costa",
      "Khalon",
      "Gerard Groove",
      "Damian Sam",
      "Swain Sam",
      "Malone Wright",
    ],
    isSoldOut: false,
  },
];

// Kept for any generic consumers
export const events: Event[] = [...upcomingEvents, ...pastEvents];
