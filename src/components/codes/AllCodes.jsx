import React, { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useFetchCodes } from "../../hooks/useFetchCodes";
import { useParams } from "react-router-dom";

const AllCodes = () => {
  const { id } = useParams();
  const { codes, getAllCodes, loading } = useFetchCodes();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    getAllCodes(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        sx={{ textTransform: "capitalize", mt: "10px" }}
        variant="contained"
        onClick={handleClickOpen}
      >
        All Codes
      </Button>
      <Dialog fullWidth={"lg"} open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "#234250", color: "white" }}>
          All Codes
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : codes.length === 0 ? (
            <p style={{textAlign:'center'}}>There are not codes for this course</p>
          ) : (
            <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {codes?.map((code) => (
                <li key={code.id}>{code.code}</li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default AllCodes;
