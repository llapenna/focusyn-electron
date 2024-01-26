import range from 'lodash-es/range';

export const sizes = {
  h: 150,
  w: '100%',
  axisH: 50,
};

export const margins = 20;

export const chart = {
  // 60 minutes/h * 24h/day = 1440 minutes/day
  ticks: 60 * 24,
  tickValues() {
    // Total number of ticks
    const nTicks = 8;
    const tickWidth = this.ticks / nTicks;

    return range(0, this.ticks + tickWidth, tickWidth);
  },

  step(width: number) {
    return width / this.ticks;
  },
  bounds: {
    x(width: number) {
      return width - margins * 2;
    },
    y: sizes.h - margins * 2,
  },
};
