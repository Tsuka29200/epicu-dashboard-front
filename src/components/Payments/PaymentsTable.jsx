import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  TextField,
  IconButton,
  InputAdornment,
  createTheme,
  ThemeProvider,
  Grid,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe7e5c",
    },
  },
});

const PaymentsTable = ({
  payments,
  selectedPaymentId,
  setSelectedPaymentId,
  setEditMode,
}) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [receptionDateFilter, setReceptionDateFilter] = useState("");

  const handleRowClick = (id) => {
    console.log(id);
    if (id === selectedPaymentId) {
      setSelectedPaymentId(null);
      setEditMode("Add");
    } else {
      setSelectedPaymentId(id);
      setEditMode("Edit");
    }
    console.log("selected Payment", selectedPaymentId);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const resetFilters = () => {
    setSearchFilter("");
    setReceptionDateFilter("");
  };

  const filteredPayments = payments.filter((payment) => {
    const matchesClientName = payment.clientName
      .toLowerCase()
      .includes(searchFilter.toLowerCase());
    const matchesAmountHT = payment.amountHT
      .toLowerCase()
      .includes(searchFilter.toLowerCase());
    const matchesAmountTTC = payment.amountTTC
      .toLowerCase()
      .includes(searchFilter.toLowerCase());

    // Convert selected date to a Date object
    const filterReceptionDate = receptionDateFilter
      ? new Date(receptionDateFilter)
      : null;

    // Check if the shooting date matches the selected date
    const receptionDateMatches =
      !filterReceptionDate ||
      new Date(payment.receptionDate).toDateString() ===
        filterReceptionDate.toDateString();
    return (
      (matchesClientName || matchesAmountHT || matchesAmountTTC) &&
      receptionDateMatches
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            "& > *": {
              margin: "0 8px", // Adjust the margin value as needed
            },
          }}
        >
          <FormControl>
            <TextField
              label="Recherche"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              endAdornment={
                searchFilter && (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setSearchFilter("")} edge="end">
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
          </FormControl>

          <FormControl>
            <TextField
              label="Date de réception"
              type="date"
              value={receptionDateFilter}
              onChange={(e) => setReceptionDateFilter(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>

          <IconButton onClick={resetFilters} aria-label="reset filters">
            <RestartAltIcon />
          </IconButton>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Nom du Client
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Date de réception
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Montant HT
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Montant TTC
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPayments.map((payment, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(payment.id)}
                  style={{
                    backgroundColor:
                      payment.id === selectedPaymentId ? "#fe7e5c" : "inherit",
                  }}
                >
                  <TableCell
                    style={{
                      color:
                        payment.id === selectedPaymentId ? "white" : "inherit",
                    }}
                  >
                    {payment.clientName}
                  </TableCell>

                  <TableCell
                    style={{
                      color:
                        payment.id === selectedPaymentId ? "white" : "inherit",
                    }}
                  >
                    {formatDate(payment.receptionDate)}
                  </TableCell>

                  <TableCell
                    style={{
                      color:
                        payment.id === selectedPaymentId ? "white" : "inherit",
                    }}
                  >
                    {`${payment.amountHT} €`}
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        payment.id === selectedPaymentId ? "white" : "inherit",
                    }}
                  >
                    {`${payment.amountTTC} €`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </ThemeProvider>
  );
};

export default PaymentsTable;
