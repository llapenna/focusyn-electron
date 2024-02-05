import { sva } from '@/reactapp/styled/css';

export const main = sva({
  slots: ['padding', 'title', 'wrapper'],
  base: {
    padding: {
      display: 'flex',
      flexDirection: 'row',
      gap: 'md',

      p: 'xl',

      minHeight: 'fullHeight',
    },
    wrapper: {
      background: 'mainBackground',
      borderRadius: 'xl',

      p: 'xxl',
      width: 'w100',
    },
    title: {
      fontSize: 'lg',
      letterSpacing: '0.25em',
    },
  },
});
