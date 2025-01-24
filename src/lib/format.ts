const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatNumber(
  input: any,
  type: 'currency' | 'number' = 'number',
): string {
  const value = parseFloat(input) || 0;

  if (value === 0) return '0';

  if (value < 0) {
    return `-${formatNumber(Math.abs(value), type)}`;
  }

  // Handle very large numbers
  if (value >= 1e12) {
    return `${type === 'currency' ? '$' : ''}${(value / 1e12).toFixed(2)}T`;
  }
  if (value >= 1e9) {
    return `${type === 'currency' ? '$' : ''}${(value / 1e9).toFixed(2)}B`;
  }
  if (value >= 1e6) {
    return `${type === 'currency' ? '$' : ''}${(value / 1e6).toFixed(2)}M`;
  }
  if (value >= 1e3) {
    return `${type === 'currency' ? '$' : ''}${(value / 1e3).toFixed(2)}K`;
  }

  return type === 'currency'
    ? formatter.format(value)
    : numberFormatter.format(value);
}

export function formatChartPrice(value: number): string {
  const absValue = Math.abs(value);

  // Special case for exact zero:
  if (absValue === 0) {
    return '0';
  }

  // Very small values: show scientific notation if < 1e-6
  if (absValue < 1e-6) {
    return value.toExponential(3); // e.g. "2.85e-5"
  }
  // Values under 1: show up to 6 decimal places
  else if (absValue < 1) {
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    });
  }
  // Up to 1,000: show exactly 2 decimals
  else if (absValue < 1_000) {
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  // 1,000 to under 1 billion: show 2 decimals with comma separators
  else if (absValue < 1e9) {
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  // 1 billion or bigger: revert to scientific notation with 2 decimals
  else {
    return value.toExponential(2);
  }
}
