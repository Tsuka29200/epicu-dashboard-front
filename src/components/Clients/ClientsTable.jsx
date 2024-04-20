import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  TextField,
  InputLabel,
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

const ClientsTable = ({
  clients,
  selectedClientId,
  setSelectedClientId,
  setEditMode,
}) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [publicationDateFilter, setPublicationDateFilter] = useState("");
  const [shootingDateFilter, setShootingDateFilter] = useState("");
  const [contractDateFilter, setContractDateFilter] = useState("");
  const [invoiceDateFilter, setInvoiceDateFilter] = useState("");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("");

  const handleRowClick = (id) => {
    console.log(id);
    if (id === selectedClientId) {
      setSelectedClientId(null);
      setEditMode("Add");
    } else {
      setSelectedClientId(id);
      setEditMode("Edit");
    }
    console.log("selected client", selectedClientId);
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
    setPublicationDateFilter("");
    setShootingDateFilter("");
    setInvoiceDateFilter("");
    setContractDateFilter("");
    setPaymentStatusFilter("");
  };

  const filteredClients = clients.filter((client) => {
    const matchesEstablishmentName = client.establishmentName
      .toLowerCase()
      .includes(searchFilter.toLowerCase());
    const matchesSiretNumber = client.siretNumber
      .toLowerCase()
      .includes(searchFilter.toLowerCase());
    const matchesEmail = client.email
      .toLowerCase()
      .includes(searchFilter.toLowerCase());
    const matchesPhoneNumber = client.phoneNumber
      .toLowerCase()
      .includes(searchFilter.toLowerCase());

    const matchesPaymentStatus =
      !paymentStatusFilter ||
      client.paymentStatus.toLowerCase() === paymentStatusFilter.toLowerCase();

    // Convert selected date to a Date object
    const filterShootingDate = shootingDateFilter
      ? new Date(shootingDateFilter)
      : null;
    const filterInvoiceDate = invoiceDateFilter
      ? new Date(invoiceDateFilter)
      : null;
    const filterContractDate = contractDateFilter
      ? new Date(contractDateFilter)
      : null;
    const filterPublicationDate = publicationDateFilter
      ? new Date(publicationDateFilter)
      : null;

    // Check if the shooting date matches the selected date
    const shootingDateMatches =
      !filterShootingDate ||
      new Date(client.shootingDate).toDateString() ===
        filterShootingDate.toDateString();
    const contractDateMatches =
      !filterContractDate ||
      new Date(client.contractDate).toDateString() ===
        filterContractDate.toDateString();
    const invoiceDateMatches =
      !filterInvoiceDate ||
      new Date(client.invoiceDate).toDateString() ===
        filterInvoiceDate.toDateString();
    const publicationDateMatches =
      !filterPublicationDate ||
      new Date(client.publicationDate).toDateString() ===
        filterPublicationDate.toDateString();

    return (
      (matchesEstablishmentName ||
        matchesSiretNumber ||
        matchesEmail ||
        matchesPhoneNumber) &&
      matchesPaymentStatus &&
      shootingDateMatches &&
      contractDateMatches &&
      publicationDateMatches &&
      invoiceDateMatches
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
              label="Date de publication"
              type="date"
              value={publicationDateFilter}
              onChange={(e) => setPublicationDateFilter(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Date de tournage"
              type="date"
              value={shootingDateFilter}
              onChange={(e) => setShootingDateFilter(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Date de signature du contract"
              type="date"
              value={contractDateFilter}
              onChange={(e) => setContractDateFilter(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Date d'envoi de la facture"
              type="date"
              value={invoiceDateFilter}
              onChange={(e) => setInvoiceDateFilter(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>

          <FormControl>
            <InputLabel>Statut du paiement</InputLabel>
            <Select
              sx={{ width: 200 }}
              value={paymentStatusFilter}
              onChange={(e) => setPaymentStatusFilter(e.target.value)}
              endAdornment={
                paymentStatusFilter && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setPaymentStatusFilter("")}
                      edge="end"
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }
            >
              <MenuItem value="payé">Payé</MenuItem>
              <MenuItem value="en attente">En attente</MenuItem>
              <MenuItem value="en retard">En retard</MenuItem>
            </Select>
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
                  Nom de l'établissement
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Date de publication prévue
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Date de tournage prévue
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Numéro de téléphone du gérant
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Email du gérant
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Numéro de SIRET
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Date de signature du contrat
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Date d'envoi de la facture
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Poppins Sans Serif, sans-serif",
                  }}
                >
                  Statut du paiement
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredClients.map((client, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(client.id)}
                  style={{
                    backgroundColor:
                      client.id === selectedClientId ? "#fe7e5c" : "inherit",
                  }}
                >
                  {/* Table cells */}
                  <TableCell
                    style={{
                      color:
                        client.id === selectedClientId ? "white" : "inherit",
                    }}
                  >
                    {client.establishmentName}
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        client.id === selectedClientId ? "white" : "inherit",
                    }}
                  >
                    {formatDate(client.publicationDate)}
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        client.id === selectedClientId ? "white" : "inherit",
                    }}
                  >
                    {formatDate(client.shootingDate)}
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        client.id === selectedClientId ? "white" : "inherit",
                    }}
                  >
                    {client.phoneNumber}
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        client.id === selectedClientId ? "white" : "inherit",
                    }}
                  >
                    {client.email}
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        client.id === selectedClientId ? "white" : "inherit",
                    }}
                  >
                    {client.siretNumber}
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        client.id === selectedClientId ? "white" : "inherit",
                    }}
                  >
                    {formatDate(client.contractDate)}
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        client.id === selectedClientId ? "white" : "inherit",
                    }}
                  >
                    {formatDate(client.invoiceDate)}
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        client.id === selectedClientId ? "white" : "inherit",
                    }}
                  >
                    {client.paymentStatus}
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

export default ClientsTable;
