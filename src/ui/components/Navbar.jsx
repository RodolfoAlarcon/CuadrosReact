import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export const Navbar = () => {
  return (
    <>
      {window.innerWidth > 992 ? (
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center"></div>
            <div className="col-md-4 d-flex justify-content-center">
              <img src={logo} className="img-fluid logo-page" alt="Logo" />
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <form>
                <div className="form-group">
                  <label></label>
                  <input
                    type="text"
                    placeholder="Buscar en Productos"
                    className="form-control inputSearch"
                    id="inputDerecho"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      <nav className="navbar navbar-expand-lg navbar-transparent bg-transparen mb-5">
        <div className="container">
          <Link className="navbar-brand mx-auto" to="/">
            {window.innerWidth < 992 ? (
              <div className="text-center mt-4">
                <img src={logo} className="img-fluid logoMobile" alt="Logo" />
              </div>
            ) : null}
          </Link>
          <div className="d-flex align-items-center order-last">
            {window.innerWidth < 992 ? (
              <div className="text-center mt-4">
                <a href="#" className="btn btn-primary">
                  Botón
                </a>
              </div>
            ) : null}
          </div>
          <div className="d-flex align-items-center order-first">
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-start"
            id="offcanvasMenu"
            aria-labelledby="offcanvasMenuLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasMenuLabel">
                Menú
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="navbar-nav ml-auto">
                <NavLink
                  className="nav-item nav-link mr-3"
                  to="/inicio"
                  style={{ color: "#000000" }}
                >
                  Inicio
                </NavLink>

                <NavLink
                  className="nav-item nav-link mr-3"
                  to="/Nosotros"
                  style={{ color: "#000000" }}
                >
                  Nosotros
                </NavLink>

                <NavLink
                  className="nav-item nav-link mr-3"
                  to="/Galeria"
                  style={{ color: "#000000" }}
                >
                  Galeria
                </NavLink>

                <NavLink
                  className="nav-item nav-link mr-3"
                  to="/Preguntasfrecuentes"
                  style={{ color: "#000000" }}
                >
                  Preguntas Frecuentes
                </NavLink>

                <NavLink
                  className="nav-item nav-link mr-3"
                  to="/Contactanos"
                  style={{ color: "#000000" }}
                >
                  Contáctanos
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
