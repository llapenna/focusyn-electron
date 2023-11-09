interface Props {
  children: React.ReactNode;
}
const ChartContainer: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default ChartContainer;
