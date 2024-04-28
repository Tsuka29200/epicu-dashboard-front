import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddClientDialog from "../../components/Clients/AddClientDialog";
import { Button, CircularProgress, Typography, Grid } from "@mui/material";
import ClientsTable from "../../components/Clients/ClientsTable";
import { Delete, Edit } from "@mui/icons-material";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";

export default function Clients() {
  const [clientsList, setClientsList] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [initializeData, setInitializeData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState("Add");
  const [selectedClientId, setSelectedClientId] = useState(null);
  const selectedClient =
    selectedClientId != null
      ? clientsList.filter((client) => client.id === selectedClientId)[0]
      : null;

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setTimeout(() => {
        const newData = [
          {
            id: 1,
            publicationDate: "2024-04-12",
            shootingDate: "2024-04-09",
            establishmentName: "RestoRennes",
            siretNumber: "732 829 320 00074",
            email: "restorennes@gmail.com",
            phoneNumber: "0601026738",
            contractDate: "2024-04-03",
            invoiceDate: "2024-04-08",
            paymentStatus: "Payé",
          },
          {
            id: 2,
            publicationDate: "2024-04-30",
            shootingDate: "2024-04-25",
            establishmentName: "La Cave de Gustave",
            siretNumber: "712 983 420 00074",
            email: "contact@gustave-cave.com",
            phoneNumber: "0744320321",
            contractDate: "2024-04-15",
            invoiceDate: "2024-04-17",
            paymentStatus: "En Attente",
          },
          {
            id: 3,
            publicationDate: "2024-05-02",
            shootingDate: "2024-04-28",
            establishmentName: "Café Parisien",
            siretNumber: "123 456 789 00001",
            email: "cafe.parisien@example.com",
            phoneNumber: "0123456789",
            contractDate: "2024-04-20",
            invoiceDate: "2024-04-25",
            paymentStatus: "En Attente",
          },
          {
            id: 4,
            publicationDate: "2024-05-10",
            shootingDate: "2024-05-05",
            establishmentName: "Le Petit Bistro",
            siretNumber: "987 654 321 00002",
            email: "contact@lepetitbistro.fr",
            phoneNumber: "0987654321",
            contractDate: "2024-05-02",
            invoiceDate: "2024-05-04",
            paymentStatus: "En Attente",
          },
          {
            id: 5,
            publicationDate: "2024-05-18",
            shootingDate: "2024-05-15",
            establishmentName: "Pizzeria Napoli",
            siretNumber: "246 810 975 00003",
            email: "info@pizzeria-napoli.com",
            phoneNumber: "0246810975",
            contractDate: "2024-05-10",
            invoiceDate: "2024-05-13",
            paymentStatus: "En Attente",
          },
          {
            id: 6,
            publicationDate: "2024-05-26",
            shootingDate: "2024-05-20",
            establishmentName: "Sushi Express",
            siretNumber: "135 792 468 00004",
            email: "hello@sushiexpress.com",
            phoneNumber: "1357924680",
            contractDate: "2024-05-17",
            invoiceDate: "2024-05-19",
            paymentStatus: "Payé",
          },
          {
            id: 7,
            publicationDate: "2024-06-03",
            shootingDate: "2024-05-30",
            establishmentName: "Burger House",
            siretNumber: "369 258 147 00005",
            email: "info@burgerhouse.net",
            phoneNumber: "0369258147",
            contractDate: "2024-05-25",
            invoiceDate: "2024-05-28",
            paymentStatus: "En Attente",
          },
          {
            id: 8,
            publicationDate: "2024-06-11",
            shootingDate: "2024-06-08",
            establishmentName: "The Tea Room",
            siretNumber: "258 147 369 00006",
            email: "contact@thetearoom.com",
            phoneNumber: "0258147369",
            contractDate: "2024-06-05",
            invoiceDate: "2024-06-07",
            paymentStatus: "Payé",
          },
          {
            id: 9,
            publicationDate: "2024-06-19",
            shootingDate: "2024-06-14",
            establishmentName: "Café Central",
            siretNumber: "456 123 789 00007",
            email: "hello@cafecentral.org",
            phoneNumber: "0456123789",
            contractDate: "2024-06-10",
            invoiceDate: "2024-06-12",
            paymentStatus: "En Attente",
          },
          {
            id: 10,
            publicationDate: "2024-06-27",
            shootingDate: "2024-06-22",
            establishmentName: "The Grill House",
            siretNumber: "789 456 123 00008",
            email: "info@thegrillhouse.com",
            phoneNumber: "0789456123",
            contractDate: "2024-06-18",
            invoiceDate: "2024-06-21",
            paymentStatus: "En Attente",
          },
        ];

        setClientsList(newData);
        setLoading(false);
      }, 2000);
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

  const deleteClient = () => {
    const updatedClientsList = clientsList.filter(
      (client) => client.id !== selectedClientId
    );
    setClientsList(updatedClientsList);
    setSelectedClientId(null);
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
                selectedClientId === null ? "#cccccc" : "#f44336",
              color: "white",
            }}
            startIcon={<Delete />}
            disabled={selectedClientId === null}
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
            Chargement des données clients en cours...
          </Typography>
        </div>
      ) : (
        <ClientsTable
          clients={clientsList}
          selectedClientId={selectedClientId}
          setSelectedClientId={setSelectedClientId}
          setEditMode={setEditMode}
        />
      )}

      <AddClientDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmitForm}
        clientsList={clientsList}
        setClientsList={setClientsList}
        editMode={editMode}
        setSelectedClientId={setSelectedClientId}
        setEditMode={setEditMode}
        selectedClient={selectedClient}
      />
      <ConfirmDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        onConfirm={deleteClient}
        title={"Supprimer un client"}
        contentText={
          "Attention les changements sont permanents, voulez-vous supprimer ce client?"
        }
      />
    </div>
  );
}
