import { container } from "./Container.styles";

interface Props {
  children: React.ReactNode;
  as?: "div" | "main" | "section" | "article" | "aside" | "header" | "footer";
}

const Container: React.FC<Props> = ({ children, as = "div" }) => {
  const Component = as;
  return <Component className={container()}>{children}</Component>;
};

export default Container;
