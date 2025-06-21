// src/scenes/orders/index.jsx
import React, { useState } from "react";
import {
  Box, Typography, Grid, TextField, Select, MenuItem,
  FormControl, InputLabel, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Chip, Button,
  IconButton, Pagination, useTheme, InputAdornment,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';



const sampleOrders = [
  {
    date: "07/12/2023",
    name: "Ramesh",
    location: "Coimbatore",
    contact: "99999 88888",
    category: "Men",
    subCategory: "Shirt",
    product: "Plain Shirt",
    quantity: 2,
    price: 200,
    status: "Dispatched",
  },
  {
    date: "07/12/2023",
    name: "Naveen",
    location: "Erode",
    contact: "99999 88888",
    category: "Women",
    subCategory: "Kurthi",
    product: "V Neck",
    quantity: 1,
    price: 100,
    status: "Cancelled",
  },
  {
    date: "07/12/2023",
    name: "Gokul",
    location: "Madurai",
    contact: "99999 88888",
    category: "Women",
    subCategory: "Saree",
    product: "Cotton Saree",
    quantity: 2,
    price: 200,
    status: "Dispatched",
  },
  {
    date: "07/12/2023",
    name: "Ajith",
    location: "Chennai",
    contact: "99999 88888",
    category: "Men",
    subCategory: "Shirt",
    product: "Casual Shirt",
    quantity: 1,
    price: 150,
    status: "Pending",
  },
  {
    date: "07/12/2023",
    name: "Ajin",
    location: "Teni",
    contact: "99999 88888",
    category: "Kids",
    subCategory: "Shorts",
    product: "Sports Shorts",
    quantity: 3,
    price: 300,
    status: "Dispatched",
  },
  {
    date: "07/12/2023",
    name: "Sherin",
    location: "Nagercoil",
    contact: "99999 88888",
    category: "Men",
    subCategory: "Shorts",
    product: "Denim Shorts",
    quantity: 2,
    price: 250,
    status: "Cancelled",
  },
  {
    date: "07/12/2023",
    name: "Abish",
    location: "Theni",
    contact: "99999 88888",
    category: "Women",
    subCategory: "Saree",
    product: "Silk Saree",
    quantity: 1,
    price: 400,
    status: "Dispatched",
  },
  {
    date: "07/12/2023",
    name: "Akash",
    location: "Tirunelveli",
    contact: "99999 88888",
    category: "Men",
    subCategory: "Vest",
    product: "Cotton Vest",
    quantity: 4,
    price: 180,
    status: "Pending",
  },
  {
    date: "07/12/2023",
    name: "Salim",
    location: "Salem",
    contact: "99999 88888",
    category: "Kids",
    subCategory: "T-Shirts",
    product: "Round Neck",
    quantity: 3,
    price: 300,
    status: "Cancelled",
  },
  {
    date: "07/12/2023",
    name: "Joseph",
    location: "Chennai",
    contact: "99999 88888",
    category: "Men",
    subCategory: "Shirt",
    product: "Formal Shirt",
    quantity: 1,
    price: 120,
    status: "Dispatched",
  },
];


const OrdersPage = () => {
  const [orders] = useState(sampleOrders);
  const [page, setPage] = useState(1);
  const theme = useTheme();
 

  return (
    
    <Box p={3}>
      <Typography variant="h4" mb={2}>Orders</Typography>

      {/* Filters */}
      <Grid container spacing={2} mb={3}>
         <Grid item xs={12} sm={2}>
          <Button variant="varient" fullWidth > <FilterListIcon/>Filters</Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl sx={{width: "150px"}}>
            <InputLabel >Category</InputLabel>
            <Select label="Category" defaultValue="All" >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Men">Men</MenuItem>
              <MenuItem value="Women">Women</MenuItem>
              <MenuItem value="Kids">Kids</MenuItem>
            </Select>
          </FormControl>
        </Grid>
         <Grid item xs={12} sm={3}>
          <FormControl sx={{width: "150px"}}>
            <InputLabel >Products</InputLabel>
            <Select label="Products" defaultValue="All" >
              
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Saree">Saree</MenuItem>
              <MenuItem value="Shirt">Shirt</MenuItem>
              <MenuItem value="T-Shirt">T-Shirt</MenuItem>
              <MenuItem value="Shorts">Shorts</MenuItem>
              <MenuItem value="Pant">Pant</MenuItem>
              <MenuItem value="Kurthi">Kurthi</MenuItem>
              <MenuItem value="Vest">Vest</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Box display="flex" justifyContent="flex-end" gap={2}>
           <Grid item xs={12} sm={3}>
          <FormControl sx={{width: "150px"}}>
            <InputLabel ><CalendarMonthIcon/></InputLabel>
            <Select label="" defaultValue="Today" >
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="Yesterday">Yesterday</MenuItem>
              <MenuItem value="one week">one week</MenuItem>
              <MenuItem value="one month">one month</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={3}>
             <TextField
      fullWidth
      placeholder="Search..."
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
        </Grid>
        </Box>
      </Grid>

      {/* Orders Table */}
      <TableContainer component={Paper}
      sx={{
          backgroundColor: theme.palette.background.alt,
          borderRadius: "8px",}}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.primary.light }}>
              {[
                "Sl. no.", "Date", "Name", "Location", "Contact Number",
                "Category", "Sub Category", "Products", "Qty", "Price", "Status", ""
              ].map((col, i) => <TableCell key={i} >{col}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.location}</TableCell>
                <TableCell>{order.contact}</TableCell>
                <TableCell>{order.category}</TableCell>
                <TableCell>{order.subCategory}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>₹{order.price}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={
                      order.status === "Dispatched"
                        ? "success"
                        : order.status === "Cancelled"
                        ? "error"
                        : "default"
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination count={5} page={page} onChange={(e, val) => setPage(val)} />
      </Box>
    </Box>

  );
};

export default OrdersPage;
