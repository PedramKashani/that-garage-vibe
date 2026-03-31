import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import { Container } from '../ui/Container';

const SENDER_EMBED_SCRIPT_URL =
  import.meta.env.VITE_SENDER_EMBED_SCRIPT_URL ??
  'https://cdn.sender.net/accounts_resources/universal.js';
const SENDER_ACCOUNT_ID = import.meta.env.VITE_SENDER_ACCOUNT_ID;
const SENDER_FORM_ID = import.meta.env.VITE_SENDER_FORM_ID;

declare global {
  interface Window {
    sender?: ((id: string) => void) & { q?: unknown[]; l?: number };
    Sender?: string;
  }
}

export function NewsletterSection() {
  const isConfigured = Boolean(SENDER_ACCOUNT_ID || SENDER_FORM_ID);
  const [embedLoading, setEmbedLoading] = useState(() => isConfigured);

  useEffect(() => {
    if (!isConfigured) return;

    let cancelled = false;
    const finish = () => {
      if (!cancelled) setEmbedLoading(false);
    };

    const safetyId = window.setTimeout(finish, 8000);
    const clearSafety = () => window.clearTimeout(safetyId);

    const afterScriptReady = () => {
      clearSafety();
      window.setTimeout(finish, 400);
    };

    const scriptSrc = SENDER_EMBED_SCRIPT_URL;

    // Match Sender's official snippet pattern.
    window.Sender = 'sender';
    if (!window.sender) {
      window.sender = (function (...args: unknown[]) {
        (window.sender!.q = window.sender!.q || []).push(args);
      } as ((id: string) => void) & { q?: unknown[]; l?: number });
      window.sender.l = Date.now();
    }

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      if (SENDER_ACCOUNT_ID) {
        window.sender(SENDER_ACCOUNT_ID);
      }
      afterScriptReady();
      return () => {
        cancelled = true;
        clearSafety();
      };
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = scriptSrc;
    script.onload = () => {
      if (SENDER_ACCOUNT_ID) {
        window.sender?.(SENDER_ACCOUNT_ID);
      }
      afterScriptReady();
    };
    script.onerror = () => {
      afterScriptReady();
    };
    document.body.appendChild(script);

    // Queue call immediately too, per snippet behavior.
    if (SENDER_ACCOUNT_ID) {
      window.sender(SENDER_ACCOUNT_ID);
    }

    return () => {
      cancelled = true;
      clearSafety();
    };
  }, [isConfigured]);

  return (
    <section className="py-16 sm:py-24 md:py-40">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-normal leading-snug text-white/90 md:text-4xl">
            Tap into the collective.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-neutral-500">
            Get updates on upcoming events, shows we're hitting, merch drops, and new music.
          </p>

          {isConfigured ? (
            <div
              className="relative mt-12 min-h-[120px]"
              aria-busy={embedLoading}
              aria-live="polite"
            >
              {SENDER_FORM_ID ? (
                <div className="sender-form-field" data-sender-form-id={SENDER_FORM_ID} />
              ) : (
                <div id="sender-embed-anchor" className="min-h-10" />
              )}
              <div
                className={cn(
                  'absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-[#0a0a0a] py-6 transition-opacity duration-300',
                  embedLoading ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'
                )}
                aria-hidden={!embedLoading}
              >
                <span className="sr-only">Loading newsletter form…</span>
                <div className="h-11 w-full max-w-md animate-pulse rounded-md bg-neutral-800/90" />
                <div className="h-10 w-32 animate-pulse rounded-md bg-neutral-800/70" />
              </div>
            </div>
          ) : (
            <p className="mt-12 text-xs tracking-[0.08em] text-neutral-600">
              Sender embed is not configured yet.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
