import React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';
import Grid from '@mui/material/Grid';
import AccountChart from 'src/sections/charts/AccountChart';

const AccountView = () => {
  return (
    <Grid xs={12} md={12} lg={12} container spacing={4}>
      <Grid xs={12} md={6} lg={6} item>
        <AccountChart
          title="Account Receivable"
          chart={{
            labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
            series: [
              {
                name: '',
                data: [30, 40, 35, 60, 50, 110, 90],
              },
            ],
            colors: ['#FA916A'],
          }}
        />
      </Grid>
      <Grid xs={12} md={6} lg={6} item>
        <AccountChart
          title="Account Payable"
          chart={{
            labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '05:00'],
            series: [
              {
                name: '',
                data: [30, 40, 35, 50, 49, 60, 70],
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AccountView;
