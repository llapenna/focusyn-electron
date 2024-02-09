import range from 'lodash-es/range';

import { token } from '@/reactapp/styled/tokens';

const borderRadius = 12;

export const chart = {
  // 60 minutes/h * 24h/day = 1440 minutes/day
  maxBarQty: 60 * 24,
  bg: token('colors.slate.700'),
  borderRadius,
  size: {
    h: 50,
    w(width: number) {
      return width - container.size.marginX * 2;
    },
  },
  get tickValues() {
    // Total number of ticks
    const nTicks = 8;
    const tickWidth = this.maxBarQty / nTicks;

    return range(0, this.maxBarQty + tickWidth, tickWidth);
  },
  step(width: number) {
    return width / this.maxBarQty;
  },
};

export const axis = {
  size: {
    h: 20,
    w: '100%',
  },
  marginTop: borderRadius,
};

export const container = {
  size: {
    // FIXME: fix margins so the start and end ticks labels are not cut off
    marginX: borderRadius,
    get h(): number {
      return chart.size.h + (axis.marginTop + axis.size.h);
    },
    w: '100%',
  },
};
