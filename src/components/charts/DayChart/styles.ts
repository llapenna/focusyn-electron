import { cva } from '@/reactapp/styled/css';
import { container } from './config';

const outlineWidth = 2;

// TODO: make the hover effect nicer
export const bar = cva({
  base: {
    // transition: 'transform, outline, height 0.1s ease-in-out',
    '&:hover': {
      transform: `translateY(-${container.size.margin - outlineWidth}px)`,
      // total height - outline * 3 (top, bottom and translate)
      height: container.size.h - outlineWidth * 3,
      outline: `${outlineWidth}px solid #F00`,
    },
  },
});
