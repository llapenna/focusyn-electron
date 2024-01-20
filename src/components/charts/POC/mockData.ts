export interface Data {
  x: number;
  y0: number;
  y1: number;
  y2: number;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const generateRandomData = (i: number): Data => {
  const x = i;
  const y0 = getRandomInt(0, 4);
  const y1 = getRandomInt(0, 4 - y0);
  const y2 = 3 - y1 - y0 > 0 ? 3 - y1 - y0 : 0;
  return { x, y0, y1, y2 };
};

const data: Data[] = [
  {
    x: 0,
    y0: 0,
    y1: 1,
    y2: 2,
  },
  {
    x: 1,
    y0: 1,
    y1: 2,
    y2: 0,
  },
  {
    x: 2,
    y0: 1,
    y1: 1,
    y2: 1,
  },
];

export default data;
