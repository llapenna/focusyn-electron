import { filter } from './styles';

interface ButtonProps {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => (
  <button className={filter()}>{children}</button>
);
