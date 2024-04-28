import React, { useState, useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe7e5c",
    },
  },
});

const ClientForm = ({
  editMode,
  selectedClient,
  setClientsList,
  handleClose,
  clientsList,
}) => {
  const [establishmentName, setEstablishmentName] = useState("");
  const [shootingDate, setShootingDate] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [siretNumber, setSiretNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contractDate, setContractDate] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const parts = dateString.split("-");
    if (parts.length !== 3) {
      console.error(`Invalid date string: ${dateString}`);
      return "";
    }

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    const date = new Date(year, month - 1, day);

    if (isNaN(date.getTime())) {
      console.error(`Invalid date string: ${dateString}`);
      return "";
    }

    const formattedDate = date.toISOString().substr(0, 10);

    return formattedDate;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newClient = {
      establishmentName,
      shootingDate,
      publicationDate,
      siretNumber,
      email,
      phoneNumber,
      contractDate,
      invoiceDate,
      paymentStatus,
    };

    if (editMode === "Edit" && selectedClient) {
      const updatedClientsList = clientsList.map((client) =>
        client === selectedClient ? { ...client, ...newClient } : client
      );
      setClientsList(updatedClientsList);
    } else {
      setClientsList((prevClients) => [...prevClients, newClient]);
    }

    setEstablishmentName("");
    setShootingDate("");
    setPublicationDate("");
    setSiretNumber("");
    setEmail("");
    setPhoneNumber("");
    setContractDate("");
    setInvoiceDate("");
    setPaymentStatus("");

    handleClose();
  };

  useEffect(() => {
    const loadData = () => {
      if (editMode === "Edit" && selectedClient) {
        setEstablishmentName(selectedClient.establishmentName);
        setShootingDate(formatDate(selectedClient.shootingDate));
        setPublicationDate(formatDate(selectedClient.publicationDate));
        setSiretNumber(selectedClient.siretNumber);
        setEmail(selectedClient.email);
        setPhoneNumber(selectedClient.phoneNumber);
        setContractDate(formatDate(selectedClient.contractDate));
        setInvoiceDate(formatDate(selectedClient.invoiceDate));
        setPaymentStatus(selectedClient.paymentStatus);
      }
      setLoading(false);
    };

    loadData();
  }, [editMode, selectedClient]);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
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
            <InputLabel id="payment-status-label">
              Statut du paiement
            </InputLabel>
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ color: "white" }}
            >
              {editMode === "Edit"
                ? "Enregistrer les modifications"
                : "Enregistrer"}
            </Button>
          </Box>
        </form>
      )}
    </ThemeProvider>
  );
};

export default ClientForm;
