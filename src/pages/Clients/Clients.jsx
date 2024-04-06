import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddClientDialog from "../../components/Clients/AddClientDialog";
import { Button, CircularProgress, Typography } from "@mui/material";
import ClientsTable from "../../components/Clients/ClientsTable";

export default function Clients() {
  const [clientsList, setClientsList] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [initializeData, setInitializeData] = useState(true);
  const [loading, setLoading] = useState(true); // Initially set loading to true

  useEffect(() => {
    // Simulate loading data from an API or database
    const loadData = async () => {
      setLoading(true);
      // Simulating an API call with a setTimeout
      setTimeout(() => {
        const newData = [
          {
            publicationDate: "12/04/2024",
            shootingDate: "09/04/2024",
            establishmentName: "RestoRennes",
            siretNumber: "732 829 320 00074",
            email: "restorennes@gmail.com",
            phoneNumber: "0601026738",
            contractDate: "03/04/2024",
            invoiceDate: "08/04/2024",
            paymentStatus: "Payé",
          },
          {
            publicationDate: "30/04/2024",
            shootingDate: "25/04/2024",
            establishmentName: "La Cave de Gustave",
            siretNumber: "712 983 420 00074",
            email: "contact@gustave-cave.com",
            phoneNumber: "0744320321",
            contractDate: "15/04/2024",
            invoiceDate: "17/04/2024",
            paymentStatus: "En Attente",
          },
        ];
        setClientsList(newData);
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

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmitForm = (formData) => {
    console.log("Form submitted:", formData);
  };

  return (
    <div id="plantadd">
      <Button
        variant="contained"
        style={{ backgroundColor: "#FE7E5C", color: "white" }}
        startIcon={<AddIcon />}
        onClick={handleOpenDialog}
      >
        Ajouter
      </Button>

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
            Chargement des données clients en cours...
          </Typography>
        </div>
      ) : (
        <ClientsTable clients={clientsList} />
      )}

      <AddClientDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmitForm}
        setClientsList={setClientsList}
      />
    </div>
  );
}
