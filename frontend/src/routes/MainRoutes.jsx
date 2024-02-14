import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import AuthPage from "../pages/AuthPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="logout" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
