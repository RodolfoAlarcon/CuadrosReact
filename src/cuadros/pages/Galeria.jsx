import { useState, useEffect } from "react";
import { FirebaseApi } from "../../Apis/http";
import { Link } from "react-router-dom";

export const Galeria = () => {
  const [pintoresFamosos, setPintoresFamosos] = useState([]);
  const [generoCuadros, setGeneroCuadros] = useState([]);
  const [estilosCuadros, setEstilosCuadros] = useState([]);
  const [temaCuadros, setTemasCuadros] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosFinal, setProductosFinal] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eliminar, seteliminar] = useState(false);

  useEffect(() => {
    FirebaseApi.consultaProducto()
      .then((listaDeProductos) => {
        setProductos(listaDeProductos);
        setProductosFinal(listaDeProductos);
        console.log(listaDeProductos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const consultarDatosFirebase = async () => {
      try {
        const [pintoresFamosos, genero, estilos, temas] = await Promise.all([
          FirebaseApi.consultaPintoresFamosos(),
          FirebaseApi.consultaGenero(),
          FirebaseApi.consultaEstilos(),
          FirebaseApi.consultaTemas(),
        ]);
        setPintoresFamosos(pintoresFamosos);
        setGeneroCuadros(genero);
        setEstilosCuadros(estilos);
        setTemasCuadros(temas);
      } catch (err) {
        console.log(err);
      }
    };
    consultarDatosFirebase();
  }, []);

  const handleFamoso = (item) => {
    seteliminar(true);

    let filtro = productos.filter((e) => e.data.famosos === item);

    setProductosFinal(filtro);
  };

  const handleVendidos = (item) => {
    seteliminar(true);

    let filtro = productos.filter((e) => e.data.vendido === item);

    setProductosFinal(filtro);
  };

  const handlePintores = (item) => {
    seteliminar(true);

    let filtro = productos.filter((e) => e.data.pintores === item);

    setProductosFinal(filtro);
  };

  const handleGenero = (item) => {
    seteliminar(true);

    let filtro = productos.filter((e) => e.data.genero === item);

    setProductosFinal(filtro);
  };

  const handleEstilo = (item) => {
    seteliminar(true);

    let filtro = productos.filter((e) => e.data.estilos === item);

    setProductosFinal(filtro);
  };

  const handleTemas = (item) => {
    seteliminar(true);

    let filtro = productos.filter((e) => e.data.tema === item);

    setProductosFinal(filtro);
  };

  const handleGeometria = (item) => {
    seteliminar(true);

    let filtro = productos.filter((e) => e.data.geometria === item);

    setProductosFinal(filtro);
  };

  const handleElimanrFiltro = () => {
    setProductosFinal(productos);

    seteliminar(false);
  };

  return (
    <>
      <section className="page-title">
        <div className="auto-container">
          <h2>Galeria</h2>
          <ul className="bread-crumb clearfix pt-2">
            <li>
              <a>Inicio {`>`} </a>
            </li>
            <li className="ps-2">Galeria</li>
          </ul>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3 mb-2">
            <div className="text-start mt-0 me-5 fs-2">Filtros</div>
            <div className="tittle mt-3">
              CATEGORÍA
              <div className="container mt-2">
                <button
                  type="button"
                  className="btn btn-transparent mb-1 btnFilter"
                  onClick={() => handleFamoso("Si")}
                >
                  LOS MÁS FAMOSOS
                </button>
              </div>
              <div className="container">
                <button
                  type="button"
                  className="btn btn-transparent mb-1 btnFilter"
                  onClick={() => handleVendidos("Si")}
                >
                  LOS MÁS VENDIDOS
                </button>
              </div>
              <div className="container">
                <button
                  type="button"
                  className="btn btn-transparent mb-1 btnFilter"
                  onClick={() => handleElimanrFiltro()}
                >
                  PINTORES FAMOSOS
                </button>
              </div>
              <ul className="ul">
                <li>
                  {pintoresFamosos.map((pintor) => {
                    return (
                      <a
                        key={pintor}
                        className="text ms-3 subcategoria"
                        onClick={() => handlePintores(pintor)}
                      >
                        {pintor}
                        <br></br>
                      </a>
                    );
                  })}
                </li>
              </ul>
              <span className="container mt-2">
                <button
                  type="button"
                  className="btn btn-transparent mb-1 btnFilter"
                  onClick={() => handleElimanrFiltro()}
                >
                  GENERO
                </button>
              </span>
              <ul className="ul">
                <li>
                  {generoCuadros.map((genero) => {
                    return (
                      <a
                        key={genero}
                        className="text ms-3 subcategoria"
                        onClick={() => handleGenero(genero)}
                      >
                        {genero}
                        <br></br>
                      </a>
                    );
                  })}
                </li>
              </ul>
              <span className="container mt-2">
                <button
                  type="button"
                  className="btn btn-transparent mb-1 btnFilter"
                  onClick={() => handleElimanrFiltro()}
                >
                  ESTILOS
                </button>
              </span>
              <ul className="ul">
                <li>
                  {estilosCuadros.map((estilos) => {
                    return (
                      <a
                        key={estilos}
                        className="text ms-3 subcategoria"
                        onClick={() => handleEstilo(estilos)}
                      >
                        {estilos}
                        <br></br>
                      </a>
                    );
                  })}
                </li>
              </ul>
              <span className="container mt-2">
                <button
                  type="button"
                  className="btn btn-transparent mb-1 btnFilter"
                  onClick={() => handleElimanrFiltro()}
                >
                  TEMAS
                </button>
              </span>
              <ul className="ul">
                <li>
                  {temaCuadros.map((temas) => {
                    return (
                      <a
                        key={temas}
                        className="text ms-3 subcategoria"
                        onClick={() => handleTemas(temas)}
                      >
                        {temas}
                        <br></br>
                      </a>
                    );
                  })}
                </li>
              </ul>
              <span className="container mt-2">
                <button
                  type="button"
                  className="btn btn-transparent mb-1 btnFilter"
                  onClick={() => handleElimanrFiltro()}
                >
                  FORMA
                </button>
              </span>
              <ul className="ul">
                <li>
                  <a
                    className="text ms-3 subcategoria"
                    onClick={() => handleGeometria("Cuadrado")}
                  >
                    Cuadrado
                  </a>
                  <br />
                </li>
                <li>
                  <a
                    className="text ms-3 subcategoria"
                    onClick={() => handleGeometria("Horizontal")}
                  >
                    Horizontal
                  </a>
                  <br />
                </li>
                <li>
                  <a
                    className="text ms-3 subcategoria"
                    onClick={() => handleGeometria("Vertical")}
                  >
                    Vertical
                  </a>
                  <br />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-12 col-md-9">
            <div className="container">
              <div className="row">
                {eliminar == false ? (
                  <></>
                ) : (
                  <div className="container">
                    <a
                      className="text ms-3 deleteFilter"
                      onClick={() => handleElimanrFiltro()}
                    >
                      Limpiar filtros
                    </a>
                  </div>
                )}
                {productosFinal.length == 0 ? (
                  <>
                    <div className="row text-center align-item-center justify-content-center mt-5">
                      <div className="col-12 col-auto">
                        <div className="text">
                          NO SE ENCONTRARON PRODUCTOS DISPONIBLES
                        </div>
                      </div>
                      <i className="fal fa-frown fa-lg mt-sm-2 mt-md-5 caritaTriste"></i>
                    </div>
                  </>
                ) : (
                  productosFinal.map((datas) => {
                    return (
                      <div key={datas.id} className="col-sm-12 col-md-3">
                        <div className="container containerCuadrosComprar">
                          <img
                            src={datas.data.galeria[0]}
                            className="w-100 imageCuadrosComprar"
                            alt="..."
                          />

                          <h4 className="fs-6">{datas.data.nombre}</h4>
                          <h4 className="fs-6">
                            ${datas.data.precio}-{datas.data.precio}
                          </h4>
                          <div className="middleCuadrosComprar">
                              <Link to={`/cuadros/${datas.id}`} className="textCuadrosComprar">Comprar</Link>
                          </div>
                        </div>
                        
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
