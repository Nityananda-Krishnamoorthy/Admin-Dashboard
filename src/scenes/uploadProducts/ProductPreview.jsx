import { useLocation, useNavigate } from "react-router-dom";
import {
  Box, Typography, Grid, Button, Chip
} from "@mui/material";

const ProductPreview = () => {
  const { state } = useLocation();
  const { product, variants } = state || {};
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant="h5" mb={2}>New Product</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}><b>Product Code:</b> {product.code}</Grid>
        <Grid item xs={6}><b>Product Category:</b> {product.category}</Grid>
        <Grid item xs={6}><b>Sub Category:</b> {product.subCategory}</Grid>
        <Grid item xs={6}><b>Product Name:</b> {product.name}</Grid>
        <Grid item xs={6}><b>Product Type:</b> {product.productType}</Grid>
        <Grid item xs={6}><b>Price:</b> ₹{product.price}</Grid>
        <Grid item xs={6}><b>GST:</b> {product.gst}</Grid>
        <Grid item xs={6}><b>Colours:</b>
          <Box display="flex" gap={1} mt={1}>
            {variants.map((v, i) => (
              <Box key={i} sx={{ width: 20, height: 20, bgcolor: v.color, borderRadius: '50%' }} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={6}><b>Sizes:</b> {variants.map(v => v.size).filter(Boolean).join(', ')}</Grid>
        <Grid item xs={12}><b>Photos:</b>
          <Box display="flex" flexWrap="wrap" mt={1} gap={1}>
            {variants.map((v, i) => v.image && (
              <img
                key={i}
                src={URL.createObjectURL(v.image)}
                alt="preview"
                style={{ height: 70, borderRadius: 5 }}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <b>Status:</b>
          <Box display="flex" mt={1} gap={2}>
            <Chip label="Active" color="success" />
            <Chip label="Inactive" color="error" variant="outlined" />
            <Chip label="Out of Stock" color="primary" variant="outlined" />
          </Box>
        </Grid>
      </Grid>

      <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
        <Button variant="contained" color="primary">Submit Product</Button>
      </Box>
    </Box>
  );
};

export default ProductPreview;
