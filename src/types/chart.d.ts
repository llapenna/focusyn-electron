import { ActiveWindow } from '@/shared/types/activeWindow';

/**
 * Prop to render any kind of chart
 */
export interface ChartProps {
  data: ActiveWindow.Grouped[];
}
