import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  useTheme,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const SalesLineChart = () => {
  const theme = useTheme();
  const [range, setRange] = useState("weekly");

  // Dummy data based on range selection
  const dataSets = {
    daily: {
      xLabels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 200 + 50))
    },
    weekly: {
      xLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [120, 200, 150, 90, 180, 220, 140]
    },
    monthly: {
      xLabels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 250 + 100))
    }
  };

  const { xLabels, data } = dataSets[range];

  return (
    <Card sx={{ borderRadius: 2, backgroundColor: theme.palette.background.alt }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Sales Overview</Typography>
          <FormControl size="small">
            <Select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              label="Range"
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box height={300}>
          <LineChart
            xAxis={[{ scaleType: "point", data: xLabels }]}
            series={[
              {
                data,
                label: "Sales",
                color: theme.palette.secondary.main,
              }
            ]}
            tooltip={{
              trigger: "axis",
              formatter: (val) => `Sales: ₹${val[0].value.toLocaleString()}`
            }}
            height={280}
            margin={{ top: 10, bottom: 40, left: 60, right: 20 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesLineChart;
