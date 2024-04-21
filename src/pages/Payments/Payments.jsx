import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddPaymentDialog from "../../components/Payments/AddPaymentDialog";
import { Button, CircularProgress, Typography, Grid } from "@mui/material";
import PaymentsTable from "../../components/Payments/PaymentsTable";
import { Delete, Edit } from "@mui/icons-material";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";

export default function Payments() {
  const [paymentsList, setPaymentsList] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [initializeData, setInitializeData] = useState(true);
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const [editMode, setEditMode] = useState("Add");
  const [selectedPaymentId, setSelectedPaymentId] = useState(null);
  const selectedPayment =
    selectedPaymentId != null
      ? paymentsList.filter((payment) => payment.id === selectedPaymentId)[0]
      : null;

  useEffect(() => {
    // Simulate loading data from an API or database
    const loadData = async () => {
      setLoading(true);
      // Simulating an API call with a setTimeout
      setTimeout(() => {
        const newData = [
          {
            id: 1,
            receptionDate: "2024-04-12",
            clientName: "RestoRennes",
            amountHT: "800",
            amountTTC: "1000",
          },
          {
            id: 2,
            receptionDate: "2024-04-30",
            clientName: "La Cave de Gustave",
            amountHT: "2500",
            amountTTC: "3000",
          },
          {
            id: 3,
            receptionDate: "2024-05-02",
            clientName: "Café Parisien",
            amountHT: "400",
            amountTTC: "500",
          },
          {
            id: 4,
            receptionDate: "2024-05-10",
            clientName: "Café Parisien",
            amountHT: "400",
            amountTTC: "500",
          },
          {
            id: 5,
            receptionDate: "2024-05-18",
            clientName: "Pizzeria Napoli",
            amountHT: "300",
            amountTTC: "375",
          },
          {
            id: 6,
            receptionDate: "2024-05-26",
            clientName: "Sushi Express",
            amountHT: "1200",
            amountTTC: "1450",
          },
          {
            id: 7,
            receptionDate: "2024-06-03",
            clientName: "Burger House",
            amountHT: "670",
            amountTTC: "795",
          },
          {
            id: 8,
            receptionDate: "2024-06-11",
            clientName: "The Tea Room",
            amountHT: "4300",
            amountTTC: "4895",
          },
          {
            id: 9,
            receptionDate: "2024-06-19",
            clientName: "Café Central",
            amountHT: "250",
            amountTTC: "280",
          },
          {
            id: 10,
            receptionDate: "2024-06-27",
            clientName: "The Grill House",
            amountHT: "730",
            amountTTC: "950",
          },
        ];

        setPaymentsList(newData);
        setLoading(false);
      }, 2000); // Simulated loading time
    };

    if (initializeData) {
      loadData();
      setInitializeData(false);
    }
  }, [initializeData]);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmitForm = (formData) => {
    console.log("Form submitted:", formData);
  };

  const deletePayment = () => {
    const updatedPaymentsList = paymentsList.filter(
      (payment) => payment.id !== selectedPaymentId
    );
    setPaymentsList(updatedPaymentsList);
    setSelectedPaymentId(null);
    setOpenDeleteDialog(false);
  };

  return (
    <div id="plantadd">
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: 2,
          marginBottom: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item>
          {editMode === "Add" ? (
            <Button
              variant="contained"
              style={{ backgroundColor: "#FE7E5C", color: "white" }}
              startIcon={<AddIcon />}
              onClick={handleOpenDialog}
            >
              Ajouter
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{ backgroundColor: "#FE7E5C", color: "white" }}
              startIcon={<Edit />}
              onClick={handleOpenDialog}
            >
              Modifier
            </Button>
          )}
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{
              backgroundColor:
                selectedPaymentId === null ? "#cccccc" : "#f44336",
              color: "white",
            }}
            startIcon={<Delete />}
            disabled={selectedPaymentId === null}
            onClick={handleOpenDeleteDialog}
          >
            Supprimer
          </Button>
        </Grid>
      </Grid>

      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <CircularProgress size={24} style={{ marginRight: "10px" }} />
          <Typography variant="body1">
            Chargement des données de comptabilité en cours...
          </Typography>
        </div>
      ) : (
        <PaymentsTable
          payments={paymentsList}
          selectedPaymentId={selectedPaymentId}
          setSelectedPaymentId={setSelectedPaymentId}
          setEditMode={setEditMode}
        />
      )}

      <AddPaymentDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmitForm}
        paymentsList={paymentsList}
        setPaymentsList={setPaymentsList}
        editMode={editMode}
        setSelectedPaymentId={setSelectedPaymentId}
        setEditMode={setEditMode}
        selectedPayment={selectedPayment}
      />
      <ConfirmDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        onConfirm={deletePayment}
        title={"Supprimer un paiement"}
        contentText={
          "Attention les changements sont permanents, voulez-vous supprimer ce paiement?"
        }
      />
    </div>
  );
}
