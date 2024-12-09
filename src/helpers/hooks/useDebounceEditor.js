import { useRef, useCallback } from 'react';

export const useDebounceEditor = (callback, delay) => {
  const timerRef = useRef();

  return useCallback((...args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => callback(...args), delay);
  }, [callback, delay]);
}