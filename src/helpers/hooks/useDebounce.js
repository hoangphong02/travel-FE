/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDeBounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDeBounceValue(value), delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debounceValue;
};
