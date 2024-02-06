import { cva } from '@/reactapp/styled/css';
import { sva } from '@/reactapp/styled/css';

export const overview = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'xl',
  },
});

export const total = sva({
  slots: ['width', 'title', 'value'],
  base: {
    width: {
      width: 'w100',
    },
    title: {
      color: 'slate.500',
      fontSize: 14,
      lineHeight: '20px',
    },
    value: {
      color: 'slate.300',
      fontSize: 20,
      letterSpacing: '0.10em',
      lineHeight: '24px',
    },
  },
});

export const filter = cva({
  base: {
    py: 'xs',
    px: 'md',

    fontSize: 14,

    borderRadius: 'xl',
    minWidth: 'lg',

    cursor: 'pointer',

    transition: 'background-color 0.25s ease-in-out',
    '&:hover': {
      bg: 'gray.700',
    },
  },
  variants: {
    active: {
      true: {
        color: 'indigo.300',
        bg: 'gray.900',
      },
      false: {
        bg: 'transparent',
        color: 'inherit',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
