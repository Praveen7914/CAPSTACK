import { Container, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

export default function Insights() {
  const alerts = [
    { id: 1, message: 'Your expense ratio is high', type: 'warning' },
    { id: 2, message: 'Consider increasing emergency fund', type: 'info' },
    { id: 3, message: 'Savings target achieved!', type: 'success' }
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ my: 4 }}>
        Financial Insights & Alerts
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Alerts
          </Typography>
          <List>
            {alerts.map((alert) => (
              <ListItem key={alert.id}>
                <ListItemText primary={alert.message} secondary={alert.type} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}