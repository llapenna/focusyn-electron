export const dataToDataset = (
  windowData: Record<string, number>,
  type: 'doughnut' | 'bars' = 'doughnut'
) => {
  if (type === 'bars') {
    const datasets = Object.entries(windowData).map(([key, value]) => ({
      label: key,
      data: [value],
      backgroundColor: key.toColor(),
    }));
    return { labels: ['Time'], datasets };
  } else {
    const entries = Object.keys(windowData);
    const data = Object.entries(windowData).map(([key, value]) => ({
      y: value,
      color: key.toColor(),
    }));

    const datasets = [
      {
        label: 'Time (seconds)',
        data: data.map(({ y }) => y),
        backgroundColor: data.map(({ color }) => color),
      },
    ];
    return { labels: entries, datasets };
  }
};
