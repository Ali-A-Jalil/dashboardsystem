import React from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

const FilterModal = ({ open, onClose, filterValues, onInputChange }) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={modalStyle}>
      <h3>Filter</h3>
      <TextField label="Refund Reason" name="refundReason" value={filterValues.refundReason} onChange={onInputChange} fullWidth margin="normal" />
      <TextField label="Amount" name="amount" value={filterValues.amount} onChange={onInputChange} fullWidth margin="normal" />
      <TextField label="From" name="dateFrom" type="date" InputLabelProps={{ shrink: true }} onChange={onInputChange} fullWidth margin="normal" />
      <TextField label="To" name="dateTo" type="date" InputLabelProps={{ shrink: true }} onChange={onInputChange} fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth onClick={onClose}>
        Apply
      </Button>
    </Box>
  </Modal>
);

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  p: 4,
  borderRadius: 2,
};

export default FilterModal;
