import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import Header from "../../components/core/Header/Header";

export default function DashboardPage() {
  const { state } = useContext(AuthContext);

  console.log(state);

  return (
    <div>
      <Header />
      <p>Welcome {state.email}</p>
    </div>
  );
}
