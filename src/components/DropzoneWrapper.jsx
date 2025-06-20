// DropzoneWrapper.jsx
import React from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";

const DropzoneWrapper = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] }
  });

  return (
    <Box {...getRootProps()} p={2} border="1px dashed #888" mt={1}>
      <input {...getInputProps()} />
      <Typography textAlign="center">Drag and drop or click to upload</Typography>
    </Box>
  );
};

export default DropzoneWrapper;
