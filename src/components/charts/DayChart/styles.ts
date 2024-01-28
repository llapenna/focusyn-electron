import { cva } from '@/reactapp/styled/css';
import { container } from './config';

const outlineWidth = 2;

// TODO: make the hover effect nicer
export const bar = cva({
  base: {
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: `translateY(-18px)`,
      height: container.size.h - outlineWidth * 3,
      outline: `${outlineWidth}px solid #F00`,
    },
  },
});
