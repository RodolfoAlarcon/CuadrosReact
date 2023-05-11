import { useState, useEffect } from "react";
import { FirebaseApi } from "../../Apis/http";
import { useParams } from "react-router-dom";

export const CuadrosPage = () => {
  const { id } = useParams();
  const [productoFinal, setProductoFinal] = useState(null);

  useEffect(() => {
    FirebaseApi.consultaProductoFinal(id)
      .then((producto) => {
        setProductoFinal(producto);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!productoFinal) {
    return <div>Cargando producto...</div>;
  }

  console.log(productoFinal)

  return (
    <>
      <section className="page-title">
        <div className="auto-container">
          <ul className="bread-crumb clearfix pt-2">
            <li>
              <a>Inicio {`>`} </a>
            </li>
            <li className="ps-2">Galería {`>`} </li>
          </ul>
        </div>
      </section>

      <div className="container pt-0 ps-5">
        <div className="row">
          <div className="col-sm-12 col-md-1">
            <img
              src={productoFinal.galeria[0]}
              className="img-fluid w-100"
              alt="Logo"
            />
            <img
              src={productoFinal.galeria[0]}
              className="img-fluid w-100"
              alt="Logo"
            />
          </div>
          <div className="col-sm-12 col-md-5">
            <img
              src={productoFinal.galeria[0]}
              className="img-fluid w-100"
              alt="Logo"
            />
          </div>
          <div className="col-sm-12 col-md-6 pt-sm-0 pt-md-4 ps-sm-0 ps-md-5">
            <div className="text-start fs-2 ps-1 ps-lg-6">
              {productoFinal.nombre}
            </div>
            <div className="text-start pt-sm-0 pt-md-3 fs-3 ">
              {productoFinal.precio}$-{productoFinal.precio}$
            </div>
            <div className="text-start pt-sm-0 pt-md-3 text-secondary fs-6">
              Autor: {productoFinal.pintores}
              <br />
              Estilo: {productoFinal.estilos}
            </div>
            <div className="text-start pt-sm-0 pt-md-5 fs-6">
              Tipo de Entrega:
              <div className="dropdown pt-3">
                <a
                  className="btn btn-transparent dropdown-toggle tipoDeEntrega"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Elige una Opción
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Impresión en Tela
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Impresión en Tela aplicado en bastidor
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-start pt-sm-0 pt-md-4 fs-6">
              Medidas:
              <div>
                <button type="button" className="btn fs-5 text-dark btnMedidas">
                  {productoFinal.medida}
                </button>
                <button
                  type="button"
                  className="btn fs-5 text-dark btnMedidas ms-2"
                >
                  {productoFinal.medida}
                </button>
                <button
                  type="button"
                  className="btn fs-5 text-dark btnMedidas ms-2"
                >
                  {productoFinal.medida}
                </button>
              </div>
              <div className="pt-2">
                <button type="button" className="btn fs-5 text-dark btnMedidas">
                  {productoFinal.medida}
                </button>
                <button
                  type="button"
                  className="btn fs-5 text-dark btnMedidas ms-2"
                >
                  {productoFinal.medida}
                </button>
              </div>
            </div>

            <div className="row pt-5 ms-1">
              <div className="col-sm-3 col-md-3 cantidadesBoton">
              <button type="button" className="btn btn-transparent mt-1">
                  -1
                </button>
                <span className="btn mt-1">0</span>
              <button type="button" className="btn btn-transparent mt-1">
                  +1
                </button>
              </div>
              <div className="col-sm-9 col-md-9">
                <button type="button" className="btn btn-transparent justify-content-end tipoDeEntrega">
                  Añadir al carrito
                </button>

              </div>
              </div>

              <div className="d-grid">
                <button className="btn btn-dark pt-2 pb-2 mt-3 btn-md" type="button">
                  Comprar Ahora
                </button>
                <button className="btn btn-success pt-2 pb-2 mt-3 btn-md" type="button">
                  Cotizar Vía WhatsApp
                </button>
            </div>

            <div className="accordion-item mt-5">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed botonAcordeon fs-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Detalles del Porducto
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                   {productoFinal.descripcion}
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </>
  );
};
