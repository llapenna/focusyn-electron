import { sva } from '@/reactapp/styled/css';

export const total = sva({
  slots: ['title', 'value', 'timeUnit'],
  base: {
    title: {
      fontSize: 'xxs',
      fontWeight: 'bold',
      color: 'gray.400',
    },
    value: {
      mr: 'xxs',
      fontSize: 'sm',
    },
    timeUnit: {
      mr: 'sm',

      fontSize: 'xs',
      fontWeight: 'light',
    },
  },
});
