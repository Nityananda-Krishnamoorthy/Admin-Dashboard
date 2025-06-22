// Dashboard.jsx
import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import StatCard from "../../components/StatCard";
import SalesLineChart from "../../components/SalesLineCharts";
import RevenuePieChart from "../../components/RevenuePieCharts";


const Dashboard = () => {
  const stats = [
    { title: "Mens", value: 500 },
    { title: "Womens", value: 660 },
    { title: "Kids", value: 400 },
    { title: "Accessories", value: 250 },
  ];

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>Dashboard</Typography>

      <Grid container spacing={2} display="flex" justifyContent="space-around">
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StatCard title={stat.title} value={stat.value} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} mt={3}>
  {/* Sales Overview Chart */}
  <Grid item xs={12} md={6}>
    <Card
      sx={{
        backgroundColor: theme.palette.background.alt,
        borderRadius: 2,
        padding: 2,
        height: "100%",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Sales Overview</Typography>
        <Select
          size="small"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="day">Daily</MenuItem>
          <MenuItem value="week">Weekly</MenuItem>
          <MenuItem value="month">Monthly</MenuItem>
        </Select>
      </Box>
      <SalesLineChart filter={filter} />
    </Card>
  </Grid>

  {/* Revenue Pie Chart */}
  <Grid item xs={12} md={6}>
    <Card
      sx={{
        backgroundColor: theme.palette.background.alt,
        borderRadius: 2,
        padding: 2,
        height: "100%",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Revenue by Category</Typography>
        <Select
          size="small"
          value={revenueFilter}
          onChange={(e) => setRevenueFilter(e.target.value)}
        >
          <MenuItem value="week">Week</MenuItem>
          <MenuItem value="month">Month</MenuItem>
          <MenuItem value="year">Year</MenuItem>
        </Select>
      </Box>
      <RevenuePieChart filter={revenueFilter} />
    </Card>
  </Grid>
</Grid>

    </Box>
    
  );
};

export default Dashboard;
