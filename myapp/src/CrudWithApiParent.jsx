import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudDisplay from "./CrudDisplay";
import Button from "@mui/material/Button";

const CrudWithApiParent = () => {
  const [open, setOpen] = useState(false);
  const [d, setd] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setd(null);
  };
  const handleOpen = (data) => {
    setOpen(true);
    setd(data);
  };

  const handleAddOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleAddOpen}>
        Add Employee
      </Button>
      <CrudDisplay open={open} handleOpen={handleOpen} />
      <CrudForm handleClose={handleClose} open={open} d={d} />
    </div>
  );
};

export default CrudWithApiParent;
