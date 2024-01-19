import { RecipeVariantProps, cva } from '@/reactapp/styled/css';

export const container = cva({
  base: {
    display: 'flex',
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
    orientation: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'horizontal',
      },
    },
  },
  defaultVariants: {
    type: 'main',
    orientation: 'vertical',
  },
});

export type ContainerVariants = RecipeVariantProps<typeof container>;
