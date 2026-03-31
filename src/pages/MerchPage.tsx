import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { merch } from '../data/merch';
import { formatPrice } from '../lib/utils';

export function MerchPage() {
  return (
    <Section>
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
        Shop
      </p>
      <h1 className="mb-8 text-3xl font-bold uppercase leading-none tracking-tight text-white sm:mb-12 sm:text-4xl md:text-5xl">
        Merch
      </h1>

      <div className="grid grid-cols-1 gap-px bg-[#1f1f1f] sm:grid-cols-2 lg:grid-cols-3">
        {merch.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 bg-[#0a0a0a] p-8">
            {/* Placeholder image area */}
            <div className="aspect-square w-full bg-[#111111] border border-[#1f1f1f]" />

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                {item.category}
              </p>
              <h2 className="text-base font-semibold uppercase tracking-tight text-white">
                {item.name}
              </h2>
              <p className="text-sm text-neutral-500">
                {item.description}
              </p>
            </div>

            {item.sizes && (
              <div className="flex flex-wrap gap-2">
                {item.sizes.map((size) => (
                  <span
                    key={size}
                    className="border border-[#2a2a2a] px-2 py-0.5 text-xs uppercase tracking-wider text-neutral-500"
                  >
                    {size}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-medium text-white">
                {formatPrice(item.price)}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={!item.inStock}
                className={!item.inStock ? 'opacity-30 cursor-not-allowed' : ''}
              >
                {item.inStock ? 'Add to Cart' : 'Sold Out'}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-neutral-600">
        * Cart functionality coming soon. Inquire via DM for purchases.
      </p>
    </Section>
  );
}
