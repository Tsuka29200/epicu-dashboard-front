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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajouter un prospect</DialogTitle>
      <DialogContent>
        <ProspectionForm
          onSubmit={handleSubmit}
          setProspectsList={setProspectsList}
          handleClose={handleClose}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProspectionDialog;
