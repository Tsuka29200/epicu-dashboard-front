import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import ProspectionForm from "./ProspectionForm"; // Assuming your form component is named ProspectionForm

const AddProspectionDialog = ({
  open,
  onClose,
  onSubmit,
  setProspectsList,
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (formData) => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { borderRadius: "25px !important" } }}
    >
      <DialogTitle
        style={{
          fontWeight: "bold",
          fontSize: "1rem",
          fontFamily: "Poppins Sans Serif, sans-serif",
        }}
      >
        Ajouter un prospect
      </DialogTitle>
      <DialogContent>
        <ProspectionForm
          onSubmit={handleSubmit}
          setProspectsList={setProspectsList}
          handleClose={handleClose}
        />
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: "#fe7e5c" }} onClick={handleClose}>
          Annuler
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProspectionDialog;
