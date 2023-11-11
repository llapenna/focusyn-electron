import { Container } from '@/reactapp/components/layout';

interface Props {
  title: string;
  value: string;
}
export const Total: React.FC<Props> = ({ title, value }) => (
  <Container type="subtle">
    <p>{title}</p>
    <p>{value}</p>
  </Container>
);
