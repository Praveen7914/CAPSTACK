import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

interface HealthScoreCardProps {
  score: number;
  category: string;
}

export default function HealthScoreCard({ score, category }: HealthScoreCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Financial Health Score
        </Typography>
        <Typography variant="h4" color="primary">
          {score}/100
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Category: {category}
        </Typography>
        <LinearProgress variant="determinate" value={score} />
      </CardContent>
    </Card>
  );
}