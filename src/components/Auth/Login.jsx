import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
import axios from "axios";
import logoepicu from "../../images/logoepicu.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe7e5c",
    },
  },
});

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors("");
    axios
      .post("/login", { name: username, password: password })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.token;
        setUser({ auth: true, user: res.data.user });
        console.log("res", res);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) setErrors("Invalid credentials");
          else setErrors("Please try again.");
        }
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh", backgroundColor: "#fe7e5c" }}
      >
        <img
          src={logoepicu}
          alt="epicu-logo"
          style={{
            height: "100px",
            width: "auto",
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        />
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            fontFamily: "Poppins Sans Serif, sans-serif",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Bienvenue sur EpicuDash
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            bgcolor: "#fff",
            p: 6,
            borderRadius: 20,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            width: "300px",
            textAlign: "center",
          }}
        >
          <TextField
            type="text"
            label="Nom d'utilisateur"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            label="Mot de passe"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: "10px", color: "white" }}
            fullWidth
          >
            Se Connecter
          </Button>
          {errors && (
            <Typography color="error" mt={2}>
              {errors}
            </Typography>
          )}
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
