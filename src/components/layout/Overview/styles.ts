import { sva } from '@/reactapp/styled/css';

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
