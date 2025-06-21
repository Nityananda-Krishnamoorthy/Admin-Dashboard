import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Button, Pagination} from "@mui/material";
import ProductTable from "./ProductTable";
import UploadForm from "./UploadForm";
import ProductPreview from "./ProductPreview";

const UploadProducts = () => {
  const [tab, setTab] = useState("active");
  const [viewMode, setViewMode] = useState("table"); // "table", "form", "preview"
  const [productData, setProductData] = useState(null);
  const [variantData, setVariantData] = useState(null);
  const [page, setPage] = useState(1);

  const handleFormSubmit = (product, variants) => {
    setProductData(product);
    setVariantData(variants);
    setViewMode("preview");
  };

  return (
    <Box m="2rem">
      <Typography variant="h4" mb={2}>Product Details</Typography>

      {viewMode === "table" && (
        <>
          <Tabs value={tab} onChange={(e, val) => setTab(val)}>
            <Tab label="Active" value="active" />
            <Tab label="Inactive" value="inactive" />
            <Tab label="Out of Stock" value="out-of-stock" />
          </Tabs>
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={() => setViewMode("form")}>
              + New Product
            </Button>
          </Box>
          <Box mt={2}>
            <ProductTable status={tab} />
          </Box>
        </>
      )}

      {viewMode === "form" && (
        <UploadForm
          onBack={() => setViewMode("table")}
          onSubmit={(product, variants) => handleFormSubmit(product, variants)}
        />
      )}

      {viewMode === "preview" && (
        <ProductPreview
          product={productData}
          variants={variantData}
          onBack={() => setViewMode("form")}
        />
      )}
       {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination count={5} page={page} onChange={(e, val) => setPage(val)} />
      </Box>
    </Box>
    
  );
};


export default UploadProducts;