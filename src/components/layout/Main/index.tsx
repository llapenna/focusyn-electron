import Container from '../Container';

import { main } from './styles';

interface Props {
  children: React.ReactNode;
}
const Main: React.FC<Props> = ({ children }) => {
  const classes = main();
  return (
    <main className={classes.wrapper}>
      <Container>
        <h1 className={classes.title}>Focusyn</h1>
      </Container>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
