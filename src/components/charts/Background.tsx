import { FC } from 'react';

interface Props {
  x?: number;
  y?: number;
  width: number | string;
  height: number | string;
  color?: string;
  borderRadius?: number;
}

export const Background: FC<Props> = ({
  x = 0,
  y = 0,
  width,
  height,
  color = '#FAFAFA',
  borderRadius = 16,
}) => <rect {...{ x, y, width, height, fill: color, rx: borderRadius }}></rect>;
