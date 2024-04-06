import React, { useState, useEffect } from "react";
import ProspectionTable from "../../components/Prospection/ProspectionTable";
import AddIcon from "@mui/icons-material/Add";
import AddProspectionDialog from "../../components/Prospection/AddProspectionDialog";
import { Button, CircularProgress, Typography } from "@mui/material";

export default function Prospection() {
  const [prospectsList, setProspectsList] = useState([]);
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
            date: "07/11/1997",
            establishment: "FoirFouille",
            comments: "A tester",
            status: "Contacté",
          },
        ];
        setProspectsList(newData);
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
