import { Typography, Button, Container, Box } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to CAPSTACK
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Your Personal Financial Health Companion
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Take control of your finances with AI-powered insights, automated savings, and emergency planning.
        </Typography>
        <Button variant="contained" size="large" component={Link} href="/onboarding">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}