import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ my: 4 }}>
        Financial Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Health Score</Typography>
              <Typography variant="h4" color="primary">75</Typography>
              <Typography variant="body2">Good financial health</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Survival Months</Typography>
              <Typography variant="h4" color="secondary">6</Typography>
              <Typography variant="body2">Emergency fund coverage</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Savings Locked</Typography>
              <Typography variant="h4" color="success.main">$3,000</Typography>
              <Typography variant="body2">Automated savings</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}