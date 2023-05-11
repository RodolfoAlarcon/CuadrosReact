import { useState, useEffect } from "react";

import logo from "../../assets/imagen_2023-05-08_160726495.png";

import { FirebaseApi } from "../../Apis/http";
import { Link } from "react-router-dom";

export const Inicio = () => {
  const [Loading, setLoading] = useState(false);
  const [nombre, setnombre] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setLoading(true);

    FirebaseApi.consultaProducto()
      .then((listaDeProductos) => {
        setProductos(listaDeProductos);
      })
      .catch((err) => {
        console.log(err);
      });

    FirebaseApi.consultaProductoFinal()
      .then((productoUnico) => {
        setnombre(productoUnico.nombre);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return productos.length != 0 ? (
    <>
      <div className="container pt-0 ps-5">
        <div className="row pt-5">
          <div className="col-sm-12 col-md-6 pt-4">
            <img
              src={logo}
              className="img-fluid w-lg-10 w-sm-100 pt-5"
              alt="Descripción de la imagen"
            />
          </div>

          <div className="col-sm-12 col-md-6">
            <p className="text-md-start text-center fs-6 fs-md-3 fw-bolder mt-md-0 mt-4 ps-0 ps-md-5">
              Lo más nuevo
            </p>

            <p className="heading-inicio text-md-start text-center ps-0 ps-md-5">
            Bienvenido {<br/>}a
            </p>

            <div className="col-md-9 text-start text-secondary textoNosotros fs-6 ps-0 ps-md-5 mt-0 mt-md-4 mb-3 mb-md-5">
              Aquí podrá encontrar una gran variedad de obras de arte de
              diferentes estilos, épocas y autores. Nuestro objetivo es
              ofrecerle una experiencia única y personalizada, donde podrá
              apreciar la belleza y el valor de cada cuadro.
            </div>

            <a href="/Galeria" className="nav-item nuestraColeccion fs-6 ps-0 ps-md-5 mt-3 mt-md-5 mb-3 mb-md-5">
                Nuestra Colección
              </a>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3 mt-md-5 mb-3 mb-md-5">
        <div className="row">
          <div className="text-center ">
            <h1 className="display-6 mt-3 mt-md-5 mb-3 mb-md-5">La guía de estilo boutique</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {productos.map((datas) => {
            return (
              <div key={datas.id} className="col-sm-12 col-md-3">
                <div className="card">
                  <img
                    src={datas.data.galeria[0]}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4 className="card-title">{datas.data.nombre}</h4>
                    <h5 className="card-title">
                      Pintores: {datas.data.pintores}
                    </h5>
                    <h5 className="card-title">Medidas: {datas.data.medida}</h5>
                    <h5 className="card-title">
                      Famosos: {datas.data.famosos}
                    </h5>
                    <h5 className="card-title">Genero: {datas.data.genero}</h5>
                    <Link to={`/cuadros/${datas.id}`}>
                    Comprar
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <>No se a encontrado el producto</>
  );
};
