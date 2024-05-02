import React, { useState } from "react";
import axios from "axios";
import Login from "./components/Auth/Login";
import AppRouter from "./AppRouter";
axios.defaults.baseURL = "https://app-b273150c-9f46-40f7-8dc3-1e4d9a5d318b.cleverapps.io/";
const App = () => {
  const [user, setUser] = useState({ auth: false, name: "" });
  return (
    <div className="App">
      {user.auth ? (
        <AppRouter user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} /> 
      )}
    </div>
  );
};
export default App;
