import React from "react";
import { Button } from "@mui/material";

const ActionMenu = ({ onConfirm, onDelete }) => (
  <div style={menuStyle}>
    <Button size="small" onClick={onConfirm}>
      Confirm
    </Button>
    <Button size="small" color="error" onClick={onDelete}>
      Delete
    </Button>
  </div>
);

const menuStyle = {
  backgroundColor: "#fff",
  padding: "10px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
  position: "absolute",
  zIndex: 1000,
};

export default ActionMenu;
