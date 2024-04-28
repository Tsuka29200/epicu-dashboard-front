import React, { useState, useEffect } from "react";
import ProspectionTable from "../../components/Prospection/ProspectionTable";
import AddIcon from "@mui/icons-material/Add";
import AddProspectionDialog from "../../components/Prospection/AddProspectionDialog";
import { Button, CircularProgress, Typography } from "@mui/material";

export default function Prospection() {
  const [prospectsList, setProspectsList] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [initializeData, setInitializeData] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setTimeout(() => {
        const newData = [
          {
            id: 1,
            date: "07/11/2023",
            establishment: "FoirFouille",
            comments: "A tester",
            status: "Contacté",
          },
          {
            id: 2,
            date: "12/03/2005",
            establishment: "Supermarché X",
            comments: "Bonne expérience",
            status: "Finalisé",
          },
          {
            id: 3,
            date: "21/09/2010",
            establishment: "Magasin Y",
            comments: "Service rapide",
            status: "Contacté",
          },
          {
            id: 4,
            date: "05/06/2015",
            establishment: "Boutique Z",
            comments: "Produits de qualité",
            status: "En attente",
          },
          {
            id: 5,
            date: "18/12/2018",
            establishment: "Centre commercial A",
            comments: "Personnel sympathique",
            status: "Finalisé",
          },
          {
            id: 6,
            date: "09/08/2020",
            establishment: "Grande surface B",
            comments: "Prix compétitifs",
            status: "Contacté",
          },
          {
            id: 7,
            date: "03/02/2023",
            establishment: "Marché C",
            comments: "Grand choix de produits",
            status: "En attente",
          },
        ];

        setProspectsList(newData);
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
          <Typography variant="body1">Chargement en cours...</Typography>
        </div>
      ) : (
        <ProspectionTable data={prospectsList} />
      )}

      <AddProspectionDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmitForm}
        setProspectsList={setProspectsList}
      />
    </div>
  );
}
