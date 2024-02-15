import { Brush as VBrush } from '@visx/brush';
import { Bounds } from '@visx/brush/lib/types';
import { scaleLinear } from '@visx/scale';

import { BRUSH } from './config';
import { useScale } from './useScale';

interface Props {
  containerWidth: number;
  onClick: () => void;
  onChange: (bounds: Bounds | null) => void;
  scale: ReturnType<typeof useScale>;
}
export const Brush = ({ containerWidth, onChange, onClick, scale }: Props) => {
  const yScale = scaleLinear<number>({
    domain: [0, 1],
    range: [1, 0],
  });

  return (
    <VBrush
      xScale={scale}
      yScale={yScale}
      onClick={onClick}
      onChange={onChange}
      handleSize={8}
      width={containerWidth}
      height={BRUSH.SIZE.H}
    />
  );
};
