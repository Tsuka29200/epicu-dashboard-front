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
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ProspectionTable = ({ data }) => {
  const [filterStatus, setFilterStatus] = useState("");

  const handleChangeFilter = (event) => {
    setFilterStatus(event.target.value);
  };

  const filteredData = filterStatus
    ? data?.filter((item) => item.status === filterStatus)
    : data;

  return (
    <div>
      <FormControl>
        <InputLabel id="filter-status-label">Filtrer par statut</InputLabel>
        <Select
          labelId="filter-status-label"
          value={filterStatus}
          onChange={handleChangeFilter}
        >
          <MenuItem value="">Tous</MenuItem>
          <MenuItem value="En attente">En attente</MenuItem>
          <MenuItem value="Contacté">Contacté</MenuItem>
          <MenuItem value="Intérêt confirmé">Intérêt confirmé</MenuItem>
          <MenuItem value="Non intéressé">Non intéressé</MenuItem>
        </Select>
      </FormControl>

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
                Date de prospection
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              >
                Statut
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                }}
              >
                Commentaires
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.establishment}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.comments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProspectionTable;
