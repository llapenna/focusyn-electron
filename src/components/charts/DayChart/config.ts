import range from 'lodash-es/range';

import { token } from '@/reactapp/styled/tokens';
import convert from 'convert';

export const BORDER_RADIUS = 12;
// FIXME: fix margins so the start and end ticks labels are not cut off
export const MARGIN_X = BORDER_RADIUS;

export const TICKS = {
  BARS: convert(1, 'day').to('min'),
  NUM: 8,
  get VALUES() {
    return range(0, this.BARS * (1 + 1 / this.NUM), this.BARS / this.NUM);
  },
  STEP(width: number) {
    return width / this.BARS;
  },
};
export const CHART = {
  BG: token('colors.slate.700'),
  BR: BORDER_RADIUS,
  SIZE: {
    H: 50,
    W(width: number) {
      return width - MARGIN_X * 2;
    },
  },
};

export const BRUSH = {
  SIZE: {
    H: 25,
    W: '100%',
  },
  MARGIN_TOP: MARGIN_X,
  get TOP_POSITION() {
    return CHART.SIZE.H + this.MARGIN_TOP;
  },
  HANDLE_SIZE: 8,
};

export const AXIS = {
  SIZE: {
    H: 20,
    W: '100%',
  },
  get TOP() {
    return CHART.SIZE.H + BRUSH.SIZE.H + BRUSH.MARGIN_TOP;
  },
  MARGIN_TOP: MARGIN_X,
};

export const SVG = {
  SIZE: {
    get H(): number {
      // Chart + Axis (height + margin) + Brush (height + margin)
      return (
        CHART.SIZE.H +
        (AXIS.MARGIN_TOP + AXIS.SIZE.H) +
        (BRUSH.MARGIN_TOP + BRUSH.SIZE.H)
      );
    },
    W: '100%',
  },
};
