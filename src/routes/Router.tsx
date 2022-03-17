import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Root from "../pages/Root/Root";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard/*" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Root />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
