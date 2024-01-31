import { useEffect, useRef, useState } from 'react';

/**
 * Hook to get the width of an element as it changes
 * @returns ref and width (in px) of the element
 */
export const useWidth = <TElement extends Element = SVGSVGElement>() => {
  const ref = useRef<TElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const getWidth = () => {
      const el = ref.current;
      const width = el?.getBoundingClientRect().width ?? 0;

      setWidth(width);
    };

    getWidth();
    window.addEventListener('resize', getWidth);

    return () => window.removeEventListener('resize', getWidth);
  }, []);

  return { ref, width };
};
