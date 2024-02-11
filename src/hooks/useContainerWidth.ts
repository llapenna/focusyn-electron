import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Gets the width of an element as it changes, attaching a resize event listener.
 * @returns Ref and width (in px) of the element.
 */
export const useContainerWidth = <
  TElement extends Element = HTMLDivElement
>() => {
  const ref = useRef<TElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const getWidth = () => {
      const container = ref.current;
      // Ensure the container is available
      if (!container) return;

      const width = container.getBoundingClientRect().width;
      setWidth(width);
    };

    // Set initial width
    getWidth();
    window.addEventListener('resize', getWidth);

    return () => window.removeEventListener('resize', getWidth);
  }, []);

  return { ref, width };
};
