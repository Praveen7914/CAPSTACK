import { useState } from 'react';

export const useSavings = () => {
  const [savings, setSavings] = useState(0);
  return { savings, setSavings };
};