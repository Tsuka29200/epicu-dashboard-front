import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ClientsTable = ({ clients }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}
            >
              Nom de l'établissement
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}
            >
              Date de publication prévue
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}
            >
              Date de tournage prévue
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}
            >
              Numéro de téléphone du gérant
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}
            >
              Email du gérant
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}
            >
              Numéro de SIRET
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}
            >
              Date de signature du contrat
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}
            >
              Date d'envoi de la facture
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}
            >
              Statut du paiement
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow key={index}>
              <TableCell>{client.establishmentName}</TableCell>
              <TableCell>{client.publicationDate}</TableCell>
              <TableCell>{client.shootingDate}</TableCell>
              <TableCell>{client.phoneNumber}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.siretNumber}</TableCell>
              <TableCell>{client.contractDate}</TableCell>
              <TableCell>{client.invoiceDate}</TableCell>
              <TableCell>{client.paymentStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientsTable;
