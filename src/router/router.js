import React from "react";
import { Route, Routes } from "react-router-dom";

import KMS from "../pages/KMS/index";
import Converter from "../pages/TransformaLetras/index";

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<KMS />} path="/" />
      <Route element={<Converter />} path="/converter" />
    </Routes>
  );
}
