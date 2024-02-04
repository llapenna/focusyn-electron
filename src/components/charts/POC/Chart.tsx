import { useState } from 'react';
import { BarStack } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { motion } from 'framer-motion';

import { Background } from './Background';
import defaultData, { Data, generateRandomData } from './mockData';
import * as defaults from './defaults';

const sizes = {
  w: 500,
  h: 500,
};
const keys = ['y0', 'y1', 'y2'];

const getX = (d: any) => d.x;

const Chart = () => {
  const [data, setData] = useState<Data[]>(defaultData);
  // Scales
  const xScale = scaleBand<number>({
    domain: data.map(getX),
    range: [0, sizes.w],
  });
  const yScale = scaleLinear<number>({
    domain: [0, 3],
    range: [sizes.h, 0],
  });
  const colorScale = scaleOrdinal<string, string>({
    domain: keys,
    range: [defaults.colors.y0, defaults.colors.y1, defaults.colors.y2],
  });

  const addData = () => {
    setData((d) => [...d, generateRandomData(d.length + 1)]);
  };
  return (
    <div>
      <button onClick={addData}>add</button>
      <svg width={sizes.w} height={sizes.h}>
        <Background width={sizes.w} height={sizes.h}></Background>
        <Group top={40}>
          <BarStack
            {...{ data, keys, xScale, yScale, color: colorScale, x: getX }}
          >
            {(stacks) => {
              console.log(stacks);

              return stacks.map((s) =>
                s.bars.map((b) => {
                  return (
                    <motion.rect
                      initial={{ width: 0, x: defaults.sizes.width }}
                      animate={{ width: b.width, x: b.x }}
                      transition={{ duration: 0.5 }}
                      key={`bar-stack-${s.index}-${b.index}`}
                      y={b.y}
                      height={b.height}
                      fill={b.color}
                      stroke="black"
                      strokeWidth={0.5}
                    ></motion.rect>
                  );
                })
              );
            }}
          </BarStack>
        </Group>
      </svg>
    </div>
  );
};

export default Chart;
