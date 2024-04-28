import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  createTheme,
  ThemeProvider,
  Select,
  MenuItem,
  CircularProgress,
  InputLabel,
  FormControl,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe7e5c",
    },
  },
});

const PaymentForm = ({
  editMode,
  selectedPayment,
  setPaymentsList,
  handleClose,
  paymentsList,
}) => {
  const [clientName, setClientName] = useState("");
  const [receptionDate, setReceptionDate] = useState("");
  const [amountHT, setAmountHT] = useState("");
  const [amountTTC, setAmountTTC] = useState("");
  const [loading, setLoading] = useState(true);
  const clientNames = Array.from(
    new Set(paymentsList.map((payment) => payment.clientName))
  );
  console.log("clientsNames", clientNames);
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

    const newPayment = {
      clientName,
      receptionDate,
      amountHT,
      amountTTC,
    };

    if (editMode === "Edit" && selectedPayment) {
      const updatedPaymentsList = paymentsList.map((payment) =>
        payment === selectedPayment ? { ...payment, ...newPayment } : payment
      );
      setPaymentsList(updatedPaymentsList);
    } else {
      setPaymentsList((prevPayments) => [...prevPayments, newPayment]);
    }

    setClientName("");
    setReceptionDate("");
    setAmountHT("");
    setAmountTTC("");

    handleClose();
  };

  useEffect(() => {
    const loadData = () => {
      if (editMode === "Edit" && selectedPayment) {
        setClientName(selectedPayment.clientName);
        setReceptionDate(formatDate(selectedPayment.receptionDate));
        setAmountHT(selectedPayment.amountHT);
        setAmountTTC(selectedPayment.amountTTC);
      }
      setLoading(false);
    };

    loadData();
  }, [editMode, selectedPayment]);

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
          <FormControl fullWidth margin="normal">
            <InputLabel id="client-name-label">Nom du client</InputLabel>
            <Select
              labelId="client-name-label"
              value={clientName}
              onChange={(event) => setClientName(event.target.value)}
              fullWidth
              required
              margin="normal"
            >
              {clientNames.map((name, index) => (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid sx={{ display: "flex", alignContent: "row" }}>
            <TextField
              label="Date de réception"
              type="date"
              value={receptionDate}
              onChange={(event) => setReceptionDate(event.target.value)}
              fullWidth
              required
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <TextField
            label="Montant HT"
            value={amountHT}
            onChange={(event) => setAmountHT(event.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Montant TTC"
            type="amountTTC"
            value={amountTTC}
            onChange={(event) => setAmountTTC(event.target.value)}
            fullWidth
            margin="normal"
          />
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

export default PaymentForm;
