import { useLocation, useNavigate } from "react-router-dom";
import {
  Box, Typography, Grid, Button, Chip
} from "@mui/material";

const ProductPreview = ({ product, variants, onBack }) => {
  const navigate = useNavigate();
  if (!product || !variants) {
    return <Typography color="error">No product data available for preview.</Typography>;
  }

  return (
   <Box p={4}>
      <Typography variant="h5" mb={2}>New Product</Typography>
      
      <Grid item xs={12}>
      <Typography ><b>Product Code:</b> {product.code}</Typography>
        <Typography><b>Product Category:</b> {product.category}</Typography>
        <Typography><b>Sub Category:</b> {product.subCategory}</Typography>
        <Typography><b>Product Name:</b> {product.name}</Typography>
        <Typography><b>Product Type:</b> {product.productType}</Typography>
        <Typography><b>Price:</b> ₹{product.price}</Typography>
        <Typography><b>GST:</b> {product.gst}</Typography>
        <Box>
        <Typography><b>Colours:</b></Typography>
          <Box display="flex" gap={1} mt={1}>
            {variants.map((v, i) => (
              <Box key={i} sx={{ width: 20, height: 20, bgcolor: v.color, borderRadius: '50%' }} />
            ))}
          </Box>
          </Box>
        <Typography><b>Sizes:</b> {variants.map(v => v.size).filter(Boolean).join(', ')}</Typography>
        <Box>
        <Typography><b>Photos:</b></Typography>
          <Box display="flex" flexWrap="wrap" mt={1} gap={1}>
            {variants.map((v, i) =>
                Array.isArray(v.image)
                  ? v.image.map((file, j) =>
                      file instanceof File ? (
                        <img
                          key={`${i}-${j}`}
                          src={URL.createObjectURL(file)}
                          alt={`preview-${j}`}
                          style={{ height: 70, borderRadius: 5 }}
                          onLoad={(e) => URL.revokeObjectURL(e.target.src)}
                        />
                      ) : null
                    )
                  : null
              )}

          </Box>

        </Box>
        <Box>
          <b>Status:</b>
          <Box display="flex" mt={1} gap={2}>
            <Chip label="Active" color="success" />
            <Chip label="Inactive" color="error" variant="outlined" />
            <Chip label="Out of Stock" color="primary" variant="outlined" />
          </Box>
        </Box>
      </Grid>

      <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="outlined" onClick={onBack}>Back</Button>
        <Button variant="contained" color="primary">Submit Product</Button>
      </Box>
    </Box>
  );
};

export default ProductPreview;
