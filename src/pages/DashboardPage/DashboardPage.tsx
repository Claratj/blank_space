import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";

export default function DashboardPage() {
  const { state } = useContext(AuthContext);
  return (
    <div>
      <p>Welcome {state.userName}</p>
    </div>
  );
}
