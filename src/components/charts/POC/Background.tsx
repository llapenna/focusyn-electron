import { FC } from 'react';

interface Props {
  x?: number;
  y?: number;
  width: number;
  height: number;
  color?: string;
}

export const Background: FC<Props> = ({
  x = 0,
  y = 0,
  width,
  height,
  color = '#FAFAFA',
}) => <rect {...{ x, y, width, height, fill: color }}></rect>;
