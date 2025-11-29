import { useState } from 'react';

export const useSurvival = () => {
  const [days, setDays] = useState(0);
  return { days, setDays };
};