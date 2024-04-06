import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import ClientForm from "./ClientForm"; // Assuming your form component is named ClientForm

const AddClientDialog = ({ open, onClose, onSubmit, setClientsList }) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (formData) => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajouter un Client</DialogTitle>
      <DialogContent>
        <ClientForm
          onSubmit={handleSubmit}
          setClientsList={setClientsList}
          handleClose={handleClose}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddClientDialog;
