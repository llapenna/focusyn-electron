interface Props {
  left?: number;
  top?: number;
  width: number | string;
  height: number | string;
  color?: string;
  borderRadius?: number;
}

export const Background = ({
  left = 0,
  top = 0,
  width,
  height,
  color = '#FAFAFA',
  borderRadius = 16,
}: Props) => (
  <rect
    {...{ x: left, y: top, width, height, fill: color, rx: borderRadius }}
  ></rect>
);
