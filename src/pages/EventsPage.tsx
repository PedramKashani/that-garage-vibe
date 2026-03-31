import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { upcomingEvents, pastEvents } from '../data/events';
import { formatDate } from '../lib/utils';
import type { Event } from '../types';

function EventRow({ event, isPast = false }: { event: Event; isPast?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between ${
        isPast ? 'opacity-50' : ''
      }`}
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          {formatDate(event.date)} — {event.venue}, {event.city}
        </p>
        <h2 className="text-xl font-semibold uppercase tracking-tight text-white">
          {event.title}
        </h2>
        <p className="text-sm text-neutral-500">{event.artists.join(' · ')}</p>
      </div>

      <div className="shrink-0">
        {isPast ? (
          <span className="text-xs uppercase tracking-[0.15em] text-neutral-700">
            Archived
          </span>
        ) : event.isSoldOut ? (
          <span className="text-xs uppercase tracking-[0.15em] text-neutral-600">
            Sold Out
          </span>
        ) : event.ticketUrl ? (
          <Button variant="outline" size="sm" asChild>
            <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
              Tickets
            </a>
          </Button>
        ) : (
          <span className="text-xs uppercase tracking-[0.15em] text-neutral-600">
            TBA
          </span>
        )}
      </div>
    </div>
  );
}

export function EventsPage() {
  return (
    <Section>
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
        Schedule
      </p>
      <h1 className="mb-10 text-3xl font-bold uppercase leading-none tracking-tight text-white sm:mb-16 sm:text-4xl md:text-5xl">
        Events
      </h1>

      {/* Upcoming */}
      <div className="mb-20">
        <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Upcoming
        </p>

        {upcomingEvents.length > 0 ? (
          <div className="divide-y divide-[#1f1f1f]">
            {upcomingEvents.map((event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="py-8 text-sm text-neutral-700">
            No upcoming dates at this time.
          </p>
        )}

        {/* Stay updated nudge */}
        <p className="mt-10 text-xs uppercase tracking-[0.25em] text-neutral-700">
          More dates soon — stay updated via the newsletter
        </p>
      </div>

      {/* Past */}
      {pastEvents.length > 0 && (
        <div>
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-neutral-600">
            Past
          </p>
          <div className="divide-y divide-[#1a1a1a]">
            {pastEvents.map((event) => (
              <EventRow key={event.id} event={event} isPast />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
