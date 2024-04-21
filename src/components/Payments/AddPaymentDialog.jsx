import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import PaymentForm from "./PaymentForm"; // Assuming your form component is named PaymentForm

const AddPaymentDialog = ({
  open,
  onClose,
  onSubmit,
  setPaymentsList,
  editMode,
  selectedPayment,
  setSelectedPaymentId,
  setEditMode,
  paymentsList,
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (formData) => {
    onSubmit(formData);
    onClose();
    setSelectedPaymentId(null);
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
        {editMode === "Add"
          ? "Ajouter un Paiement"
          : "Modification du paiement"}
      </DialogTitle>
      <DialogContent>
        <PaymentForm
          onSubmit={handleSubmit}
          setPaymentsList={setPaymentsList}
          handleClose={handleClose}
          editMode={editMode}
          selectedPayment={selectedPayment}
          paymentsList={paymentsList}
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

export default AddPaymentDialog;
