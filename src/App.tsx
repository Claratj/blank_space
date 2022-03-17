import React, { useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import Router from "./constants/Router";
import { defaultSession } from "./services/session.service";

function App() {
  const [state, dispatch] = useReducer(authReducer, defaultSession);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router />
    </AuthContext.Provider>
  );
}

export default App;
