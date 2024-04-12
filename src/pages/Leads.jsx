import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify/iconify';

import LeadCard from 'src/components/cards/LeadCard';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { Link } from 'react-router-dom';

export const Leads = ({ item }) => {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const breadcrumbs = [
    <Button>
      <Iconify icon="ic:outline-home" />
    </Button>,

    <Typography key="3" color="text.primary">
      Leads
    </Typography>,
  ];

  return (
    <Container>
      <Grid marginBottom={5}>
        <Breadcrumbs separator={<Iconify icon="ph:caret-right-bold" />} aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Grid>
      <Grid mb={5} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">Leads</Typography>
        <Grid style={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
          <Button
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="material-symbols:view-list-outline" />}
            style={{ color: 'black', backgroundColor: 'white' }}
          >
            List View
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="heroicons-solid:view-grid" />}
          >
            Grid View
          </Button>
          <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
            Add Lead
          </Button>
        </Grid>
      </Grid>
      <Grid xs={12} md={12} lg={12} container spacing={4}>
        {[1, 2, 3, 6, 7].map(() => (
          <LeadCard />
        ))}
      </Grid>
    </Container>
  );
};
export default Leads;
