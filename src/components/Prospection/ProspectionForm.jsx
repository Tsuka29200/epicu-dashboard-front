import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe7e5c", // Change the main color to your desired orange color
    },
  },
});

const ProspectionForm = ({ setProspectsList, handleClose }) => {
  const [establishment, setEstablishment] = useState("");
  const [date, setDate] = useState("");
  const [comments, setComments] = useState("");
  const [status, setStatus] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a new prospect object from form data
    const newProspect = {
      date: date, // Assuming date, establishment, comments, and status are state variables
      establishment: establishment,
      comments: comments,
      status: status,
    };

    // Add the new prospect object to the prospectsList array
    setProspectsList((prevProspects) => [...prevProspects, newProspect]);

    // Clear the form fields after submission
    setDate("");
    setEstablishment("");
    setComments("");
    setStatus("");

    // Log the new prospect object
    console.log("New prospect:", newProspect);
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Nom de l'établissement prospecté"
          value={establishment}
          onChange={(e) => setEstablishment(e.target.value)}
          fullWidth
          required
          margin="normal"
          sx={{
            "&:focus": {
              borderColor: "#fe7e5c",
            },
          }}
        />
        <TextField
          label="Date de prospection"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            "&:focus": {
              borderColor: "#fe7e5c",
            },
          }}
        />
        <TextField
          label="Commentaires"
          multiline
          rows={4}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          fullWidth
          margin="normal"
          sx={{
            "&:focus": {
              borderColor: "#fe7e5c",
            },
          }}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="status-label">Statut en cours</InputLabel>
          <Select
            labelId="status-label"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            required
            sx={{
              "&:focus": {
                borderColor: "#fe7e5c",
              },
            }}
          >
            <MenuItem value="En attente">En attente</MenuItem>
            <MenuItem value="Contacté">Contacté</MenuItem>
            <MenuItem value="Intérêt confirmé">Intérêt confirmé</MenuItem>
            <MenuItem value="Non intéressé">Non intéressé</MenuItem>
          </Select>
        </FormControl>
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Enregistrer
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default ProspectionForm;
