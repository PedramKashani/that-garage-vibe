import { Section } from "../components/ui/Section";
import { merchItems } from "../data/merch";

const PRINTFUL_STORE_URL = "https://thatgaragevibe.printful.me/";

export function MerchPage() {
  return (
    <Section>
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
        Shop
      </p>
      <h1 className="mb-8 text-3xl font-bold uppercase leading-none tracking-tight text-white sm:mb-12 sm:text-4xl md:text-5xl">
        Merch
      </h1>

      <div className="grid grid-cols-1 justify-items-stretch gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {merchItems.map((item, index) => (
          <article
            key={item.id}
            className="group flex h-full w-full max-w-[420px] flex-col justify-self-center border border-[#1f1f1f] bg-[#0a0a0a] p-8 outline-none transition duration-300 ease-out hover:scale-[1.02] hover:border-white/20 focus-within:border-white/30 focus-within:ring-2 focus-within:ring-white/25 sm:max-w-none"
          >
            <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-neutral-900">
              <img
                src={item.image}
                alt={item.name}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-contain transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-85"
              />
            </div>

            <div className="mt-5 flex flex-1 flex-col">
              <h2 className="text-base font-semibold uppercase tracking-tight text-white">
                {item.name}
              </h2>
              <div className="mt-auto pt-6">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  Buy
                </a>
              </div>
            </div>
          </article>
        ))}

        <a
          href={PRINTFUL_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full w-full max-w-[420px] flex-col justify-self-center border border-white/20 bg-gradient-to-b from-white/[0.07] to-[#0a0a0a] p-8 text-left outline-none ring-1 ring-inset ring-white/10 transition duration-300 ease-out hover:scale-[1.02] hover:border-white/35 hover:from-white/[0.1] focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:max-w-none"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            STORE
          </p>
          <h2 className="mt-3 text-base font-semibold uppercase leading-snug tracking-tight text-white sm:text-lg">
            Shop the full collection
          </h2>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-400">
            Explore the full Garage Vibe merch store for all available items and
            future drops.
          </p>
          <span className="mt-8 inline-flex w-fit items-center justify-center border border-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-200 group-hover:bg-white group-hover:text-black">
            View store
          </span>
        </a>
      </div>
    </Section>
  );
}
