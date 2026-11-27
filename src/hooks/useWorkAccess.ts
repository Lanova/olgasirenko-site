import { useCallback, useEffect, useState } from 'react';
import { WORK_ACCESS_CODE } from '../data/work';

const LEGACY_KEYS = ['os-unlocked', 'os-nda-access'];
const UNLOCK_KEY = 'os-nda-access-v2';
const UNLOCK_EVENT = 'os-work-unlock-change';

function readUnlocked(): boolean {
  try {
    if (typeof sessionStorage === 'undefined') return false;
    for (const key of LEGACY_KEYS) {
      if (sessionStorage.getItem(key)) {
        sessionStorage.removeItem(key);
      }
    }
    return sessionStorage.getItem(UNLOCK_KEY) === '1';
  } catch {
    return false;
  }
}

export function useWorkAccess() {
  const [unlocked, setUnlocked] = useState<boolean>(readUnlocked);

  useEffect(() => {
    const sync = () => setUnlocked(readUnlocked());
    window.addEventListener(UNLOCK_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(UNLOCK_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const verifyAndUnlock = useCallback((rawCode: string): boolean => {
    if (rawCode.trim().toUpperCase() !== WORK_ACCESS_CODE) {
      return false;
    }
    try {
      sessionStorage.setItem(UNLOCK_KEY, '1');
    } catch {
      // safe fallback in private browsing modes
    }
    setUnlocked(true);
    window.dispatchEvent(new Event(UNLOCK_EVENT));
    return true;
  }, []);

  const relock = useCallback(() => {
    try {
      sessionStorage.removeItem(UNLOCK_KEY);
      for (const key of LEGACY_KEYS) {
        sessionStorage.removeItem(key);
      }
    } catch {
      // safe
    }
    setUnlocked(false);
    window.dispatchEvent(new Event(UNLOCK_EVENT));
  }, []);

  return { unlocked, verifyAndUnlock, relock };
}
