import { FC } from 'react';

interface Props {
  width: number | string;
  height: number | string;
  color?: string;
  stroke?: string;
  borderRadius?: number;
}

export const Border: FC<Props> = ({
  width,
  height,
  color = 'rgba(0,0,0,0.5)',
  stroke = 0.5,
  borderRadius = 16,
}) => (
  <rect
    width={width}
    height={height}
    stroke={color}
    fill="transparent"
    strokeWidth={stroke}
    rx={borderRadius}
  ></rect>
);
