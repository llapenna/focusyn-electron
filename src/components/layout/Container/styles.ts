import { RecipeVariantProps, cva } from '@/reactapp/styled/css';

export const container = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'sm',

    backgroundColor: 'overlay',
  },
  variants: {
    type: {
      main: {
        padding: 'lg',
        borderWidth: '1px',
        borderColor: 'overlayBorder',
        borderStyle: 'solid',
        borderRadius: 'md',
      },
      subtle: {
        padding: 'sm',
        borderWidth: '0.5px',
        borderColor: 'subtleBorder',
        borderStyle: 'solid',
        borderRadius: 'md',
      },
    },
  },
  defaultVariants: {
    type: 'main',
  },
});

export type ContainerVariants = RecipeVariantProps<typeof container>;
