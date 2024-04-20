import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import ClientForm from "./ClientForm"; // Assuming your form component is named ClientForm

const AddClientDialog = ({
  open,
  onClose,
  onSubmit,
  setClientsList,
  editMode,
  selectedClient,
  setSelectedClientId,
  setEditMode,
  clientsList,
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (formData) => {
    onSubmit(formData);
    onClose();
    setSelectedClientId(null);
    setEditMode("Add");
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
        {editMode === "Add" ? "Ajouter un Client" : "Modification du client"}
      </DialogTitle>
      <DialogContent>
        <ClientForm
          onSubmit={handleSubmit}
          setClientsList={setClientsList}
          handleClose={handleClose}
          editMode={editMode}
          selectedClient={selectedClient}
          clientsList={clientsList}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: "#fe7e5c" }}>
          Annuler
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddClientDialog;
