import { ContainerVariants, container } from './styles';

type Props = ContainerVariants & {
  children: React.ReactNode;
  as?: 'div' | 'main' | 'section' | 'article' | 'aside' | 'header' | 'footer';
};

const Container: React.FC<Props> = ({
  children,
  as = 'div',
  type = 'main',
}) => {
  const Component = as;
  return <Component className={container({ type })}>{children}</Component>;
};

export default Container;
