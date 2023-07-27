import React, { useState, useContext, useEffect, useReducer } from "react";
import noHayProductos from "../../assets/empty-cart.png";
import producto1 from "../../assets/producto1.jpg";
import { contextProvider } from "../../Context/ContextProvider";
import { CarritoHook } from "../../Hook/CarritoHook";



export const MiCarrito = () => {

  const { carritoListaContext, setcarritoCountContex, carritoCountContex } = useContext(contextProvider)

  const [cantidad, setCantidad] = useState(0);

  let todo = []
  todo = carritoListaContext
  console.log('16 ->', todo)


  const handleDeleteTodo = ( ) => {

    localStorage.removeItem('todos');
    setcarritoCountContex(carritoCountContex + 1)

  } 



  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasWithBackdrop"
      aria-labelledby="offcanvasWithBackdropLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
          Carro de la compra.
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body canvasCarrito">
        {todo.length == 0 ? (
          <div className="container text-center">
            <img src={noHayProductos} className="img-fluid w-75" alt="Logo" />
            <p className="pt-1">Su carrito está vacío.</p>
            <button
              className="btn btn-dark btn-volverTienda d-block m-auto"
            >
              Volver a la Tienda
            </button>
          </div>
        ) : (

          todo.map((e) => (
            <div className="container">
              <div className="container text-start">
                <div className="row">
                  <div className="col-4">
                    <img src={e.perfil} className="img-fluid w-100" alt="Logo" />
                  </div>
                  <div className="col-8">
                    <div className="text nombre"> {e.nombre} </div>
                    <div className="text tipoDeEntregaProducto">
                      TIPO DE ENTREGA: {e.telaEntrega}
                    </div>
                    <div className="text medidas">
                      MEDIDAS: {e.medidaSelecionada}
                    </div>
                    <div className="text precio">${e.precioSumar}</div>
                    <div className="col-sm-6">
                      <div className="input-group input-group-css">
                        <button
                          className="btn btn-outline-secondary inputCount"
                          type="button"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control inputCount"
                          aria-label="Amount (to the nearest dollar)"
                          value={e.cantidad}
                        />
                        <button
                          className="btn btn-outline-secondary inputCount"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="containerPreciosCarrito mt-2">
                <div className="row facturacion">
                  <div className="col-6 text-start">Total</div>
                  <div className="col-6 text-end fs-5 pe-5">.00</div>
                </div>
                <div className="row facturacion">
                  <div className="d-grid gap-2 col-11 mx-auto">
                    <button className="btn btn-dark btn-volverTienda" type="button">
                      Finalizar Compra
                    </button>
                    <button onClick={() => handleDeleteTodo()} className="btn btn-transparent fs-6" type="button">
                      Elimiar Todo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
