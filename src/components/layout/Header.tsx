import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/artists', label: 'Artists' },
  { to: '/merch', label: 'Merch' },
  { to: '/partners', label: 'Partners' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-5 sm:px-8 md:top-5 md:px-20">
      <div className="relative mx-auto max-w-[1100px]">

        {/* Main pill */}
        <div className="flex h-[64px] items-center justify-between rounded-full border border-white/[0.07] bg-black/97 px-5 backdrop-blur-md sm:px-7 md:h-[88px] md:px-8">

          {/* Left: Logo */}
          <NavLink to="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src="/assets/images/Logo/ThatGarageVibe-LOGO.webp"
              alt="That Garage Vibe"
              className="h-10 w-auto md:h-14"
            />
          </NavLink>

          {/* Center: Nav — desktop only */}
          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-5 py-2 text-sm uppercase tracking-[0.12em] transition-all duration-150',
                    isActive
                      ? 'border border-white/60 bg-white/[0.07] text-white'
                      : 'border border-transparent text-neutral-500 hover:text-neutral-300'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Location mark — desktop only */}
          <div className="hidden shrink-0 flex-col items-end gap-1 md:flex">
            <span className="text-xs uppercase leading-none tracking-[0.2em] text-neutral-600">
              Los Angeles
            </span>
            <span className="text-[11px] uppercase leading-none tracking-[0.25em] text-neutral-700">
              Est. 2021
            </span>
          </div>

          {/* Right: Hamburger — mobile only */}
          <button
            className="flex h-8 w-8 items-center justify-center text-neutral-500 transition-colors hover:text-white md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <div className="mt-2 rounded-2xl border border-white/[0.07] bg-black/97 px-5 py-5 backdrop-blur-md md:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 text-sm uppercase tracking-[0.12em] transition-colors',
                      isActive
                        ? 'text-white'
                        : 'text-neutral-500 hover:text-neutral-300'
                    )
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
