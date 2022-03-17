import React, { useContext } from "react";
import { AuthContext } from "../../auth/authContext";

export default function DashboardPage() {
  const { email } = useContext(AuthContext);
  return (
    <div>
      <p>Welcome {email}</p>
    </div>
  );
}
