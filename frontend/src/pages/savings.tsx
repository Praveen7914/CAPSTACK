import { Container, Typography, Card, CardContent, Button, Box } from '@mui/material';

export default function Savings() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom sx={{ my: 4 }}>
        Savings Management
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Current Savings Plan</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Target: $10,000 | Current: $3,000 | Locked: $2,500
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" color="primary">
              Lock More Savings
            </Button>
            <Button variant="outlined" color="secondary">
              Unlock Savings
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}