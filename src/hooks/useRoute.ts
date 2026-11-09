import { useEffect, useState } from 'react';

export type Route =
  | { page: 'about' }
  | { page: 'advisory' }
  | { page: 'writing' }
  | { page: 'article'; slug: string };

/**
 * Hash routes (#/, #/advisory, #/writing, #/writing/<slug>) so the site works on any static
 * host, including the GitHub Pages subpath, without server rewrites.
 * Also checks window.location.pathname for /advisory on initial load.
 */
function parse(hash: string): Route | null {
  if (hash === '' || hash === '#') {
    if (typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '').endsWith('/advisory')) {
      return { page: 'advisory' };
    }
    return { page: 'about' };
  }
  if (!hash.startsWith('#/')) {
    if (typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '').endsWith('/advisory')) {
      return { page: 'advisory' };
    }
    return null;
  }
  const parts = hash.slice(2).split('/').filter(Boolean);
  if (parts[0] === 'advisory') return { page: 'advisory' };
  if (parts[0] === 'writing') return parts[1] ? { page: 'article', slug: decodeURIComponent(parts[1]) } : { page: 'writing' };
  return { page: 'about' };
}

export const hrefFor = (route: Route): string =>
  route.page === 'about'
    ? '#/'
    : route.page === 'advisory'
    ? '#/advisory'
    : route.page === 'writing'
    ? '#/writing'
    : `#/writing/${encodeURIComponent(route.slug)}`;

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash) ?? { page: 'about' });

  useEffect(() => {
    const onHash = () => {
      const next = parse(window.location.hash);
      if (!next) return;
      setRoute(next);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return route;
}
