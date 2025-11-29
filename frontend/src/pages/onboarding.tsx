import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';

export default function Onboarding() {
  const [formData, setFormData] = useState({
    income: '',
    expenses: '',
    savings: '',
    debt: ''
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save data and navigate to dashboard
    router.push('/dashboard');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Tell us about your finances
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Monthly Income"
                name="income"
                type="number"
                value={formData.income}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Monthly Expenses"
                name="expenses"
                type="number"
                value={formData.expenses}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Current Savings"
                name="savings"
                type="number"
                value={formData.savings}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Total Debt"
                name="debt"
                type="number"
                value={formData.debt}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" size="large">
                Continue to Dashboard
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}