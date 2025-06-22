import React, { useState } from "react";
import {
  Box, Typography, Grid, Card, CardContent, CardActions, Button, Avatar,
  useTheme, Divider, Dialog, DialogTitle, DialogContent, TextField,
  DialogActions, IconButton
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Images
import Mens from "../../assets/images/Mens.jpeg";
import Womens from "../../assets/images/Womens.jpg";
import Kids from "../../assets/images/Kids.jpeg";
import Others from "../../assets/images/Others.jpeg";

// Default ads
const initialAds = [
  { id: 1, category: "Mens", image: Mens },
  { id: 2, category: "Women", image: Womens },
  { id: 3, category: "Kids", image: Kids },
  { id: 4, category: "Others", image: Others },
];

const AdvertisementPage = () => {
  const [ads, setAds] = useState(initialAds);
  const [open, setOpen] = useState(false);
  const [editingAd, setEditingAd] = useState(null);

  const theme = useTheme();

  const handleDelete = (id) => {
    setAds((prev) => prev.filter((ad) => ad.id !== id));
  };

  const handleOpenDialog = (ad = null) => {
    setEditingAd(ad);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setEditingAd(null);
    setOpen(false);
  };

  const handleSave = () => {
    if (!editingAd?.category || !editingAd?.image) return;

    if (editingAd.id) {
      // Update
      setAds((prev) =>
        prev.map((ad) => (ad.id === editingAd.id ? editingAd : ad))
      );
    } else {
      // Add new
      setAds((prev) => [
        ...prev,
        { ...editingAd, id: prev.length + 1 }
      ]);
    }

    handleCloseDialog();
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Advertisement</Typography>
        <Button variant="contained" color="secondary" onClick={() => handleOpenDialog()}>
          + Add Products
        </Button>
      </Box>

      <Grid container spacing={3}>
        {ads.map((ad) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={ad.id}>
            <Card sx={{ borderRadius: 2, backgroundColor: theme.palette.background.alt }} elevation={2}>
              {/* Image + Info */}
              <Box display="flex" alignItems="center" p={2}>
                <Avatar
                  src={ad.image}
                  variant="rounded"
                  sx={{ width: 100, height: 100, mr: 2 }}
                />
                <Box>
                  <Typography fontWeight="bold">
                    Product No.: {String(ad.id).padStart(2, "0")}
                  </Typography>
                  <Typography color="text.secondary">Product Category</Typography>
                  <Typography fontWeight="500">{ad.category}</Typography>
                </Box>
              </Box>

              <Divider />

              {/* Actions */}
              <CardActions sx={{ justifyContent: "center", py: 1 }}>
                <Button startIcon={<DeleteIcon />} color="error" onClick={() => handleDelete(ad.id)}>
                  Delete
                </Button>
                <Button startIcon={<EditIcon />} color="success" onClick={() => handleOpenDialog(ad)}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for Add/Edit */}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{editingAd?.id ? "Edit Advertisement" : "Add Advertisement"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Category"
            fullWidth
            margin="normal"
            value={editingAd?.category || ""}
            onChange={(e) => setEditingAd({ ...editingAd, category: e.target.value })}
          />
          <TextField
            label="Image URL or Path"
            fullWidth
            margin="normal"
            value={editingAd?.image || ""}
            onChange={(e) => setEditingAd({ ...editingAd, image: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            {editingAd?.id ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdvertisementPage;
