import { useState } from 'react';

export const useHealthScore = () => {
  const [score, setScore] = useState(0);
  return { score, setScore };
};