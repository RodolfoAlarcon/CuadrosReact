import { useState, useEffect } from "react";
import { FirebaseApi } from "../../Apis/http";
import { Link } from "react-router-dom";

export const Galeria = () => {
  const [pintoresFamosos, setPintoresFamosos] = useState([]);
  const [generoCuadros, setGeneroCuadros] = useState([]);
  const [estilosCuadros, setEstilosCuadros] = useState([]);
  const [temaCuadros, setTemasCuadros] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    FirebaseApi.consultaProducto()
      .then((listaDeProductos) => {
        setProductos(listaDeProductos);
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
          <div className="col-sm-12 col-md-2">
            <div className="text-start mt-0 me-5 fs-2">Filtros</div>
            <div className="tittle mt-3">
              CATEGORÍA
              <div className="container mt-2">Pintores Famosos</div>
              <ul className="ul">
                <li>
                  {pintoresFamosos.map((pintor) => {
                    return (
                      <a
                        key={pintor}
                        className="text ms-3 subcategoria"
                        href={pintor}
                      >
                        {pintor}
                        <br></br>
                      </a>
                    );
                  })}
                </li>
              </ul>
              <span className="container mt-2">Genero</span>
              <ul className="ul">
                <li>
                  {generoCuadros.map((genero) => {
                    return (
                      <a
                        key={genero}
                        className="text ms-3 subcategoria"
                        href={genero}
                      >
                        {genero}
                        <br></br>
                      </a>
                    );
                  })}
                </li>
              </ul>
              <span className="container mt-2">Estilos</span>
              <ul className="ul">
                <li>
                  {estilosCuadros.map((estilos) => {
                    return (
                      <a
                        key={estilos}
                        className="text ms-3 subcategoria"
                        href={estilos}
                      >
                        {estilos}
                        <br></br>
                      </a>
                    );
                  })}
                </li>
              </ul>
              <span className="container mt-2">Temas</span>
              <ul className="ul">
                <li>
                  {temaCuadros.map((temas) => {
                    return (
                      <a
                        key={temas}
                        className="text ms-3 subcategoria"
                        href={temas}
                      >
                        {temas}
                        <br></br>
                      </a>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-12 col-md-10">
            <div className="container">
              <div className="row">
                {productos.map((datas) => {
                  return (
                    <div key={datas.id} className="col-sm-12 col-md-3">
                      <div className="container">
                        <img
                          src={datas.data.galeria[0]}
                          className="w-100"
                          alt="..."
                        />
                        
                          <h4 className="fs-6">{datas.data.nombre}</h4>
                          <h4 className="fs-6">${datas.data.precio}-{datas.data.precio}</h4>
                          <Link to={`/cuadros/${datas.id}`}>
                            Comprar
                            </Link>
                        </div>
          
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
