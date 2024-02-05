import { ContainerVariants, container } from './styles';

type Props = ContainerVariants & {
  children: React.ReactNode;
  as?: 'div' | 'main' | 'section' | 'article' | 'aside' | 'header' | 'footer';
};

const Container = ({ children, as = 'div' }: Props) => {
  const Component = as;
  return <Component className={container()}>{children}</Component>;
};

export default Container;
