import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { Inicio } from "../pages";

export const CuadrosRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />

          <Route path="/" element={<Navigate to="/Inicio" />} />
        </Routes>
      </div>

    </>

  );

};
