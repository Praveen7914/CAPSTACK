import { Card, CardContent, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';

interface Alert {
  id: number;
  message: string;
  type: 'info' | 'warning' | 'error';
}

interface AlertsPanelProps {
  alerts: Alert[];
}

export default function AlertsPanel({ alerts }: AlertsPanelProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Financial Alerts
        </Typography>
        <List>
          {alerts.map((alert) => (
            <ListItem key={alert.id}>
              <ListItemText primary={alert.message} />
              <Chip
                label={alert.type}
                color={alert.type === 'error' ? 'error' : alert.type === 'warning' ? 'warning' : 'info'}
                size="small"
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}