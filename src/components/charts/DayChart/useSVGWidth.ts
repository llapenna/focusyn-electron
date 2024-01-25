import { useEffect, useRef, useState } from 'react';

export const useSVGWidth = () => {
  const ref = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const getSVGWidth = () => {
      const svg = ref.current;
      const width = svg?.getBoundingClientRect().width ?? 0;

      setWidth(width);
    };

    getSVGWidth();
    window.addEventListener('resize', getSVGWidth);

    return () => window.removeEventListener('resize', getSVGWidth);
  }, []);

  return { ref, width };
};
