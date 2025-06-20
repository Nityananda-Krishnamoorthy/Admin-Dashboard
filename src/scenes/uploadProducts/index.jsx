import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Button } from "@mui/material";
import ProductTable from "./ProductTable";
import UploadForm from "./UploadForm";

const UploadProducts = () => {
  const [tab, setTab] = useState("active");
  const [showForm, setShowForm] = useState(false);

  return (
    <Box m="2rem">
      <Typography variant="h4" mb={2}>Product Details</Typography>

      {!showForm ? (
        <>
          <Tabs value={tab} onChange={(e, val) => setTab(val)}>
            <Tab label="Active" value="active" />
            <Tab label="Inactive" value="inactive" />
            <Tab label="Out of Stock" value="out-of-stock" />
          </Tabs>
           <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
              + New Product
            </Button>
          </Box>

          <Box mt={2}>
            <ProductTable status={tab} />
          </Box>

         
        </>
      ) : (
        <UploadForm onBack={() => setShowForm(false)} />
      )}
    </Box>
  );
};

export default UploadProducts;