import { Dispatch, SetStateAction, WheelEventHandler, useState } from 'react';
import { chart } from './config';

interface Bounds {
  max: number;
  min: number;
}
type UpdateWithinBounds = (
  fn: Dispatch<SetStateAction<number>>,
  bounds: Bounds,
  value: number
) => void;

/**
 * Generates the bounds for the chart when zooming and panning is applied.
 * @returns A `WheelEventHandler` and the panned bounds after zooming.
 */
export const usePanning = () => {
  const [zoom, setZoom] = useState(1);
  // TODO: reset or adjust panning when reducing zoom.
  const [pan, setPan] = useState(0);

  const updateWithinBounds: UpdateWithinBounds = (
    update,
    { min, max },
    value
  ) => {
    update((v) => {
      const newValue = v + value;
      return newValue.clamp(min, max);
    });
  };

  const onWheel: WheelEventHandler = (e) => {
    const zoomBounds = { max: 4, min: 1 };
    const panBounds = { min: 0, max: chart.maxBarQty * (1 - 1 / zoom) };

    const { deltaX: dx, deltaY: dy } = e;

    if ((dx === 0 && dy === 0) || dx === dy) return;
    if (Math.abs(dx) > Math.abs(dy)) updateWithinBounds(setPan, panBounds, dx);
    else updateWithinBounds(setZoom, zoomBounds, -dy / 100);
  };

  const pannedBounds = [0, chart.maxBarQty].map((v) => v / zoom + pan) as [
    number,
    number
  ];

  return { onWheel, pannedBounds };
};
