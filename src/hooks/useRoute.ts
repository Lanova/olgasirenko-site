import { useEffect, useState } from 'react';

export type Route =
  | { page: 'work' }
  | { page: 'case'; company?: string; slug: string }
  | { page: 'about' }
  | { page: 'advisory' }
  | { page: 'writing' }
  | { page: 'article'; slug: string };

/**
 * Hash routes (#/, #/work/<company>/<slug>, #/about, #/advisory, #/writing, #/writing/<slug>)
 * so the site works on any static host, including GitHub Pages subpaths, without server rewrites.
 * Also checks window.location.pathname on initial load.
 */
function parsePathRoute(): Route | null {
  if (typeof window === 'undefined') return null;
  const path = window.location.pathname.replace(/\/$/, '');
  const workCompanyMatch = path.match(/\/work\/([^/]+)\/([^/]+)$/);
  if (workCompanyMatch) {
    return {
      page: 'case',
      company: decodeURIComponent(workCompanyMatch[1]),
      slug: decodeURIComponent(workCompanyMatch[2]),
    };
  }
  const workMatch = path.match(/\/work\/([^/]+)$/);
  if (workMatch) {
    return { page: 'case', slug: decodeURIComponent(workMatch[1]) };
  }
  if (path.endsWith('/about')) return { page: 'about' };
  if (path.endsWith('/advisory')) return { page: 'advisory' };
  const writingMatch = path.match(/\/writing(?:\/([^/]+))?$/);
  if (writingMatch) {
    return writingMatch[1]
      ? { page: 'article', slug: decodeURIComponent(writingMatch[1]) }
      : { page: 'writing' };
  }
  return null;
}

function parse(hash: string): Route | null {
  if (hash === '' || hash === '#') {
    return parsePathRoute() ?? { page: 'work' };
  }
  if (!hash.startsWith('#/')) {
    return parsePathRoute();
  }
  const parts = hash.slice(2).split('/').filter(Boolean);
  if (parts[0] === 'work') {
    if (parts[1] && parts[2]) {
      return {
        page: 'case',
        company: decodeURIComponent(parts[1]),
        slug: decodeURIComponent(parts[2]),
      };
    }
    return parts[1] ? { page: 'case', slug: decodeURIComponent(parts[1]) } : { page: 'work' };
  }
  if (parts[0] === 'about') return { page: 'about' };
  if (parts[0] === 'advisory') return { page: 'advisory' };
  if (parts[0] === 'writing') return parts[1] ? { page: 'article', slug: decodeURIComponent(parts[1]) } : { page: 'writing' };
  return { page: 'work' };
}

export const hrefFor = (route: Route): string =>
  route.page === 'work'
    ? '#/'
    : route.page === 'case'
    ? route.company
      ? `#/work/${encodeURIComponent(route.company)}/${encodeURIComponent(route.slug)}`
      : `#/work/${encodeURIComponent(route.slug)}`
    : route.page === 'about'
    ? '#/about'
    : route.page === 'advisory'
    ? '#/advisory'
    : route.page === 'writing'
    ? '#/writing'
    : `#/writing/${encodeURIComponent(route.slug)}`;

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash) ?? { page: 'work' });

  useEffect(() => {
    const onHash = () => {
      const next = parse(window.location.hash);
      if (!next) return;
      setRoute(next);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return route;
}
