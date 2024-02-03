import {
  Dispatch,
  DragEventHandler,
  SetStateAction,
  WheelEventHandler,
  useState,
} from 'react';
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
  const [dragPos, setDragPos] = useState(0);

  const bounds = {
    zoomBounds: { max: 4, min: 1 },
    panBounds: { min: 0, max: chart.maxBarQty * (1 - 1 / zoom) },
  };

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
    const { deltaX: dx, deltaY: dy } = e;
    const noMovement = dx === 0 && dy === 0;
    const sameDirection = dx === dy;

    // This avoids updating when no movement is detected or when the movement is performed in both directions at the same rate.
    if (noMovement || sameDirection) return;
    if (Math.abs(dx) > Math.abs(dy))
      updateWithinBounds(setPan, bounds.panBounds, dx);
    else {
      // -dy because the wheel event is inverted
      updateWithinBounds(setZoom, bounds.zoomBounds, -dy / 100);
    }
  };

  // Removes the 'ghost' image when dragging
  const onDragStart: DragEventHandler = (e) => {
    e.dataTransfer.setDragImage(new Image(), 0, 0);
  };

  const onDrag: DragEventHandler = ({ clientX }) => {
    const value = clientX - dragPos;
    setDragPos(clientX);
    if (value === 0 || Math.abs(value) > 10) return;
    console.log(value);

    updateWithinBounds(setPan, bounds.panBounds, -value);
  };

  const pannedBounds = [0, chart.maxBarQty].map((v) => v / zoom + pan) as [
    number,
    number
  ];

  return {
    handlers: { onWheel, onDragStart, onDrag },
    pannedBounds,
    zoom,
    pan,
  };
};
