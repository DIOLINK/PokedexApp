export function convertedHeightWeight(
  value: number = 0,
  constant: number = 1
): number {
  return value / constant;
}

export function addZero(value: number | string): string | number {
  if (String(value).length === 3) return value;
  return addZero(`0${value}`);
}

export function colorType(value: string = 'all'): string {
  return `var(--type-${value})`;
}
