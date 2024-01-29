import range from 'lodash-es/range';

export const chart = {
  // 60 minutes/h * 24h/day = 1440 minutes/day
  maxBarQty: 60 * 24,
  size: {
    h: 100,
    w(width: number) {
      return width - container.size.margin * 2;
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
};

export const container = {
  size: {
    margin: 25,
    get h(): number {
      return chart.size.h + axis.size.h + this.margin * 2;
    },
    w: '100%',
  },
};
