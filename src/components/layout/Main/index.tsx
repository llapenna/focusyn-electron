import { main } from './styles';

interface Props {
  children: React.ReactNode;
}
const Main: React.FC<Props> = ({ children }) => {
  const classes = main();
  return (
    <>
      <div className="title-bar"></div>
      <div className={classes.padding}>
        <h1 className={classes.title}>focusyn</h1>
        <main className={classes.wrapper}>{children}</main>
      </div>
    </>
  );
};

export default Main;
