import React from "react";
import axios from "axios";
import { Button, Grid, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe7e5c",
    },
  },
});

const Profile = ({ user, setUser }) => {
  console.log("user", user);
  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .get("/logout")
      .then((res) => {
        localStorage.removeItem("jwtToken");
        delete axios.defaults.headers.common["Authorization"];
        setUser({ auth: false, name: "" });
      })
      .catch((err) => console.log(err));
  };

  console.log("user", user);

  return (
    <ThemeProvider theme={theme}>
      <Grid mt={4}>
        <p>{`Bonjour ${user.user.name}`}</p>
        <Button
          variant="contained"
          color="primary"
          sx={{ color: "white" }}
          onClick={handleLogout}
        >
          Se Déconnecter
        </Button>
      </Grid>
    </ThemeProvider>
  );
};

export default Profile;
