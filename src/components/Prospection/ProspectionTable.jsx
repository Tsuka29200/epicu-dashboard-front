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
  const [selectedProspectId, setSelectedProspectId] = useState(null);

  const handleRowClick = (id) => {
    console.log(id);
    if (id === selectedProspectId) {
      setSelectedProspectId(null);
    } else {
      setSelectedProspectId(id);
    }
    console.log("selected client", selectedProspectId);
  };

  const handleChangeFilter = (event) => {
    setFilterStatus(event.target.value);
  };

  const filteredData = filterStatus
    ? data?.filter((item) => item.status === filterStatus)
    : data;

  return (
    <div>
      {/* <FormControl>
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
      </FormControl> */}

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
                Date de prospection
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  fontFamily: "Poppins Sans Serif, sans-serif",
                }}
              >
                Statut
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  fontFamily: "Poppins Sans Serif, sans-serif",
                }}
              >
                Commentaires
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((prospect, index) => (
              <TableRow
                key={index}
                onClick={() => {
                  handleRowClick(prospect.id);
                  console.log("prospect", prospect);
                }}
                style={{
                  backgroundColor:
                    prospect.id === selectedProspectId ? "#fe7e5c" : "inherit",
                }}
              >
                <TableCell
                  style={{
                    color:
                      prospect.id === selectedProspectId ? "white" : "inherit",
                  }}
                >
                  {prospect.establishment}
                </TableCell>
                <TableCell
                  style={{
                    color:
                      prospect.id === selectedProspectId ? "white" : "inherit",
                  }}
                >
                  {prospect.date}
                </TableCell>
                <TableCell
                  style={{
                    color:
                      prospect.id === selectedProspectId ? "white" : "inherit",
                  }}
                >
                  {prospect.status}
                </TableCell>
                <TableCell
                  style={{
                    color:
                      prospect.id === selectedProspectId ? "white" : "inherit",
                  }}
                >
                  {prospect.comments}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProspectionTable;
