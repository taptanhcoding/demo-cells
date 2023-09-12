import { useCallback, useState } from 'react';

const useDebouncedClick = (callback: any, delay?: number) => {
  const [clickTimeout, setClickTimeout] = useState<any>(null);

  const debouncedCallback = useCallback(
    (...args: any) => {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }
      setClickTimeout(
        setTimeout(() => {
          callback(...args);
          setClickTimeout(null);
        }, delay || 500),
      );
    },
    [callback, clickTimeout, delay],
  );

  return debouncedCallback;
};

export default useDebouncedClick;
