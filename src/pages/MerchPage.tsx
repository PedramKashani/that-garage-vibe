import { Section } from '../components/ui/Section';
import { merchItems } from '../data/merch';

export function MerchPage() {
  return (
    <Section>
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
        Shop
      </p>
      <h1 className="mb-8 text-3xl font-bold uppercase leading-none tracking-tight text-white sm:mb-12 sm:text-4xl md:text-5xl">
        Merch
      </h1>

      <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {merchItems.map((item) => (
          <article
            key={item.id}
            className="group w-full max-w-[420px] border border-[#1f1f1f] bg-[#0a0a0a] p-8 transition duration-300 ease-out hover:scale-[1.02]"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-contain transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-85"
              />
            </div>

            <div className="mt-5 space-y-2">
              <h2 className="text-base font-semibold uppercase tracking-tight text-white">
                {item.name}
              </h2>
              <p className="text-sm text-neutral-400">{item.price}</p>
            </div>

            <div className="pt-4">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-white hover:text-black"
              >
                Buy
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
