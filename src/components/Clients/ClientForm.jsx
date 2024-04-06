import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe7e5c",
    },
  },
});

const ClientForm = ({ setClientsList, handleClose }) => {
  const [establishmentName, setEstablishmentName] = useState("");
  const [shootingDate, setShootingDate] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [siretNumber, setSiretNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contractDate, setContractDate] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a new prospect object from form data
    const newClient = {
      establishmentName: establishmentName,
      shootingDate: shootingDate,
      publicationDate: publicationDate,
      siretNumber: siretNumber,
      email: email,
      phoneNumber: phoneNumber,
      contractDate: contractDate,
      invoiceDate: invoiceDate,
      paymentStatus: paymentStatus,
    };

    // Add the new prospect object to the ClientsList array
    setClientsList((prevClients) => [...prevClients, newClient]);

    // Clear the form fields after submission
    setEstablishmentName("");
    setShootingDate("");
    setPublicationDate("");
    setSiretNumber("");
    setEmail("");
    setPhoneNumber("");
    setContractDate("");
    setInvoiceDate("");
    setPaymentStatus("");

    // Log the new prospect object
    console.log("New client:", newClient);
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom de l'établissement"
          value={establishmentName}
          onChange={(event) => setEstablishmentName(event.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Grid sx={{ display: "flex", alignContent: "row" }}>
          <TextField
            label="Date de tournage prévue"
            type="date"
            value={shootingDate}
            onChange={(event) => setShootingDate(event.target.value)}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Date de publication prévue"
            type="date"
            value={publicationDate}
            onChange={(event) => setPublicationDate(event.target.value)}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <TextField
          label="Numéro de SIRET de l'établissement"
          value={siretNumber}
          onChange={(event) => setSiretNumber(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Adresse e-mail du gérant"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Numéro de téléphone du gérant"
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          fullWidth
          margin="normal"
        />
        <Grid sx={{ display: "flex", alignContent: "row" }}>
          <TextField
            label="Date de signature du contrat"
            type="date"
            value={contractDate}
            onChange={(event) => setContractDate(event.target.value)}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Date d'envoi de la facture"
            type="date"
            value={invoiceDate}
            onChange={(event) => setInvoiceDate(event.target.value)}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <FormControl fullWidth margin="normal">
          <InputLabel id="payment-status-label">Statut du paiement</InputLabel>
          <Select
            labelId="payment-status-label"
            value={paymentStatus}
            onChange={(event) => setPaymentStatus(event.target.value)}
            fullWidth
            required
          >
            <MenuItem value="payé">Payé</MenuItem>
            <MenuItem value="en attente">En attente</MenuItem>
            <MenuItem value="en retard">En retard</MenuItem>
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

export default ClientForm;
