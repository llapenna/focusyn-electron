import { sva } from '@/reactapp/styled/css';

export const main = sva({
  slots: ['wrapper', 'title'],
  base: {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: 'sm',

      p: 'lg',

      backgroundColor: 'background',
    },
    title: {
      fontSize: 'md',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
});
