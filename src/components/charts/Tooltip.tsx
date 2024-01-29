import { Tooltip as VTooltip, defaultStyles } from '@visx/tooltip';

export interface TooltipData {
  title: string;
  description: string;
}
interface Props {
  isOpen: boolean;
  data?: TooltipData;
  top?: number;
  left?: number;
}

export const Tooltip = ({ isOpen, data, top = 0, left = 0 }: Props) => {
  if (!isOpen || !data) return null;

  return (
    <VTooltip style={defaultStyles} {...{ top, left }}>
      <div>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
    </VTooltip>
  );
};
