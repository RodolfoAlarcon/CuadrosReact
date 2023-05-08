import React, { useState, useEffect } from "react";

import logo from "../../assets/person_01.jpg";

import { FirebaseApi } from "../../Apis/http";



export const Inicio = () => {

  const params = "jDpjWNZg7fVyA2sjYNJV"

  const [nombre, setnombre] = useState("")
  const [Loading, setLoading] = useState(false)
  const [productos, setProductos] = useState([])


  useEffect(() => {

    setLoading(true)

    FirebaseApi.consultaProducto()
      .then(rodolfo => {
        let arraynuevo = new Array
        rodolfo.forEach((element) => {
          arraynuevo.push({
            id: element.id,
            data: element.data
          })
        })
        setProductos(arraynuevo)
      })
      .catch(err => { console.log(err) })

    FirebaseApi.consultaProductoFinal(params)
      .then(prodctoUnico => {
        console.log(prodctoUnico)
        setnombre(prodctoUnico.nombre)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })


  }, [])


  return (
    productos.length != 0
      ?
      <>
        <div className="container-fluid mx-auto mt-xl-4 mt-sm-0">
          <div className="row d-flex align-items-center justify-content-start">
            <div className="col-md-6">
              <img
                src={logo}
                className="img-fluid w-100"
                alt="Descripción de la imagen"
              />
            </div>
            <div className="col-md-6 ps-sm-5">
              <p className="text-md-start text-center ps-sm-5  firstTittleHome fw-bolder mt-md-0 mt-4">
                Lo más nuevo
              </p>
              <p className="heading-inicio ps-sm-5 text-md-start text-center">
                La Ropa Perfecta
              </p>
              <div className="container-fluid heading-description mx-auto ps-sm-5">
                <p className="fs-5 px-auto">
                  Esta es tu oportunidad de mejorar tu guardarropa con una
                  variedad de estilos y cortes que son a la vez femeninos y
                  relajados.
                </p>
                <a href="/Galeria" className="nav-item nuestraColeccion fs-5">
                  {" "}
                  Nuestra Colección
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 mb-5">
          <div className="row">
            <div className="text-center ">
              <h1 className="display-6">La guía de estilo boutique</h1>
            </div>
          </div>
        </div>


      </>
      :
      <>
        No se a encontrado el producto
      </>
  );
};
