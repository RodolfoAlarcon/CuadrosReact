import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export const Navbar = () => {
  return (
    <>
      {window.innerWidth > 992 ? (
        <div className="container-fluid mt-xl-4 mt-sm-0">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center"></div>
            <div className="col-md-4 d-flex justify-content-center">
              <img src={logo} className="img-fluid logo-page" alt="Logo" />
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              
              <form>
                <div className="form-group form-field mt-4 mt-small-0">
                  <input
                    type="text"
                    placeholder="Buscar en Productos"
                    className="form-control inputSearch"
                    id="inputDerecho"
                  />
                  <i className="far fa-search search-icon fa-lg iconLupita"></i>
                </div>
              </form>

            </div>
          </div>
        </div>
      ) : null}

      <nav className="navbar navbar-expand-lg navbar-transparent bg-transparen">
        <div className="container-fluid containerMobile">
          <Link className="navbar-brand mx-auto" to="/">
            {window.innerWidth < 992 ? (
              <div className="text-center mt-0">
                <img src={logo} className="img-fluid logoMobile" alt="Logo" />
              </div>
            ) : null}
          </Link>
          <div className="d-flex align-items-center order-last">
            {window.innerWidth < 992 ? (
              <div className="text-center">
                <i className="fas fa-search search-icon lupitaMb"></i>
                <i className="far fa-shopping-bag fa-lg shopping-bag-icon"></i>
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
              <div className="navbar-nav ml-auto ms-5">
                <NavLink
                  className="nav-item nav-link"
                  to="/inicio"
                  style={{ color: "#000000" }}
                >
                  Inicio
                </NavLink>

                <NavLink
                  className="nav-item nav-link"
                  to="/Nosotros"
                  style={{ color: "#000000" }}
                >
                  Nosotros
                </NavLink>

                <NavLink
                  className="nav-item nav-link"
                  to="/Galeria"
                  style={{ color: "#000000" }}
                >
                  Galeria
                </NavLink>

                <NavLink
                  className="nav-item nav-link"
                  to="/Preguntasfrecuentes"
                  style={{ color: "#000000" }}
                >
                  Preguntas Frecuentes
                </NavLink>

                <NavLink
                  className="nav-item nav-link"
                  to="/Contactanos"
                  style={{ color: "#000000" }}
                >
                  Contáctanos
                </NavLink>

              </div>
            </div>
          </div>

          {window.innerWidth > 992 ? (
              <div className="nav-item">
              <div className="ml-auto">
                <a className="nav-link" href="#">
                  <i className="far fa-shopping-bag fa-lg mx-3 justify-content-center iconBolsaPc"></i>
                </a>
              </div>
            </div>
            ) : null}

        </div>
      </nav>
    </>
  );
};
