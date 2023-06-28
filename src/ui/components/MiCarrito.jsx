import React, { useState, useReducer } from "react";
import noHayProductos from "../../assets/empty-cart.png";
import producto1 from "../../assets/producto1.jpg";
import { CarritoHook } from "../../Hook/CarritoHook";

const initialState = []


export const MiCarrito = () => {
  const [cantidad, setCantidad] = useState(0);

  const [todos, dispatch] = useReducer(CarritoHook, initialState)

  const handleNewTodo = ( todo ) => {

    const action = {

      type: 'Add Todo',
      payload: todo

    }

    dispatch( action )

  }

  const handleDeleteTodo = ( ) => {


    const action = {
      type: 'Delete Todo',
      payload: []
    }

    dispatch( action )

  } 




  const primerProducto = {
    nombre: "Cuadro 1",
    tipoDeEntrega: "Impresión en Tela",
    medidas: "10x10",
    precio: "$10",
  };

  const arrayProductos = [];


  const handleRestar = () => {
    /*if (cantidad <= 0) {
      setCantidad(0);
    } else {
      setCantidad(cantidad - 1);
    }*/
    handleDeleteTodo()

  };

  const handleSumar = () => {
    const ProductoAdd = {
      id: new Date().getTime(),
      nombre: "nombre de 1",
      medida: "30 x 30",
      precio: 23,
      cantidad: 2,
      tela: " Impresión en Tela"
    };

    handleNewTodo( ProductoAdd )

  };

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
        {todos.length == 0 ? (
          <div className="container text-center">
            <img src={noHayProductos} className="img-fluid w-75" alt="Logo" />
            <p className="pt-1">Su carrito está vacío.</p>
            <button
              className="btn btn-dark btn-volverTienda d-block m-auto"
              onClick={() => navigation.navigate("Galeria")}
            >
              Volver a la Tienda
            </button>
          </div>
        ) : (

          todos.map((e) => (
            <div className="container">
              <div className="container text-start">
                <div className="row">
                  <div className="col-4">
                    <img src={producto1} className="img-fluid w-100" alt="Logo" />
                  </div>
                  <div className="col-8">
                    <div className="text nombre"> {e.nombre} </div>
                    <div className="text tipoDeEntregaProducto">
                      TIPO DE ENTREGA: {e.tela}
                    </div>
                    <div className="text medidas">
                      MEDIDAS: {e.medida}
                    </div>
                    <div className="text precio">${e.precio}</div>
                    <div className="col-sm-6">
                      <div className="input-group input-group-css">
                        <button
                          className="btn btn-outline-secondary inputCount"
                          type="button"
                          onClick={() => handleRestar()}
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
                          onClick={() => handleSumar()}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="containerPreciosCarrito mt-2">
                <div className="row facturacion subtotal">
                  <div className="col-6 text-start text-secondary">Subtotal</div>
                  <div className="col-6 text-end fs-6 pe-5">{primerProducto.precio}.00</div>
                </div>
                <div className="row facturacion">
                  <div className="col-6 text-start">Total</div>
                  <div className="col-6 text-end fs-5 pe-5">{primerProducto.precio}.00</div>
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
