import { RecipeVariantProps, cva } from '@/reactapp/styled/css';

export const container = cva({
  base: {
    backgroundColor: 'container',
    borderRadius: 'lg',

    p: 'lg',
  },
});

export type ContainerVariants = RecipeVariantProps<typeof container>;
