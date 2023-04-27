import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { Inicio, Nosotros, Galeria, PreguntasFrecuentes, Contactanos } from "../pages";

export const CuadrosRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/Contactanos" element={<Contactanos />} />
          <Route path="/" element={<Navigate to="/Inicio" />} />
        </Routes>
      </div>

    </>

  );

};
