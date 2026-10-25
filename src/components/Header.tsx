import React, { useEffect, useRef } from 'react';
import { Theme } from '../hooks/useTheme';
import { Route, hrefFor } from '../hooks/useRoute';

interface HeaderProps {
  name: string;
  monogram: string;
  theme: Theme;
  onToggleTheme: () => void;
  route: Route;
}

const NAV: { label: string; route: Route }[] = [
  { label: 'About', route: { page: 'about' } },
  { label: 'Writing', route: { page: 'writing' } },
];

/** Thin cyan bar under the header that fills as an article is read. */
const ReadingProgress: React.FC = () => {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = bar.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Lazy-loaded figures change the page height without a scroll event.
    const resize = new ResizeObserver(onScroll);
    resize.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      resize.disconnect();
    };
  }, []);

  return <div ref={bar} className="reading-progress" aria-hidden="true" />;
};

export const Header: React.FC<HeaderProps> = ({
  name,
  monogram,
  theme,
  onToggleTheme,
  route,
}) => {
  const active = route.page === 'article' ? 'writing' : route.page;

  // The monogram goes to About; when already there it scrolls back to the top.
  const onBrandClick = (e: React.MouseEvent) => {
    if (route.page === 'about') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="header" id="top">
        <div className="container header__inner">
          <a className="brand" href={hrefFor({ page: 'about' })} onClick={onBrandClick} aria-label={`${name}, home`}>
            <span className="monogram" aria-hidden="true">
              {monogram}
            </span>
            <span className="brand__name">{name}</span>
          </a>

          <nav className="nav" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.label}
                className={`nav__link${active === item.route.page ? ' is-active' : ''}`}
                href={hrefFor(item.route)}
                aria-current={active === item.route.page ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}

            <button
              className="theme-toggle"
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                /* Material Symbols Outlined: light_mode */
                <svg viewBox="0 -960 960 960" aria-hidden="true">
                  <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                </svg>
              ) : (
                /* Material Symbols Outlined: dark_mode */
                <svg viewBox="0 -960 960 960" aria-hidden="true">
                  <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
        {route.page === 'article' && <ReadingProgress key={route.slug} />}
      </header>
    </>
  );
};
