import { Navigate, Route, Routes } from "react-router-dom";
import {Navbar} from '../ui'
import {
  Contactanos,
  Galeria,
  Inicio,
  Nosotros,
  PreguntasFrecuentes,
} from "../cuadros/pages";

export const AppRouter = () => {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="Nosotros" element={<Nosotros />} />
        <Route path="Galeria" element={<Galeria />} />
        <Route path="PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
        <Route path="Contactanos" element={<Contactanos />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
};