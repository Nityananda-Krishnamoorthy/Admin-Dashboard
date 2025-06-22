// components/RevenuePieChart.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const sampleData = {
  Week: [
    { id: "Men", label: "Men", value: 12000 },
    { id: "Women", label: "Women", value: 18000 },
    { id: "Kids", label: "Kids", value: 7000 },
  ],
  Month: [
    { id: "Men", label: "Men", value: 55000 },
    { id: "Women", label: "Women", value: 75000 },
    { id: "Kids", label: "Kids", value: 27000 },
  ],
  Year: [
    { id: "Men", label: "Men", value: 670000 },
    { id: "Women", label: "Women", value: 880000 },
    { id: "Kids", label: "Kids", value: 320000 },
  ],
};

const RevenuePieChart = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState("Week");

  const data = sampleData[filter];

  return (
    <Card sx={{ borderRadius: 2, backgroundColor: theme.palette.background.alt }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">Revenue by Category</Typography>
          <FormControl size="small">
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              sx={{ minWidth: 100 }}
            >
              <MenuItem value="Week">Week</MenuItem>
              <MenuItem value="Month">Month</MenuItem>
              <MenuItem value="Year">Year</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box height="300px">
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={1.5}
            cornerRadius={5}
            colors={{ scheme: "set2" }}
            enableArcLabels={true}
            arcLabelsSkipAngle={10}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={theme.palette.text.primary}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            tooltip={({ datum }) => (
              <div
                style={{
                  background: "white",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  border: `1px solid ${theme.palette.divider}`,
                  fontSize: 13,
                }}
              >
                <strong>{datum.label}:</strong> ₹{datum.value.toLocaleString()} (
                {datum.percentage.toFixed(1)}%)
              </div>
            )}
            valueFormat={(v) => `₹${v.toLocaleString()}`}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default RevenuePieChart;
