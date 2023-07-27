import { useState, useEffect, useReducer, useContext } from "react";
import { FirebaseApi } from "../../Apis/http";
import { useParams } from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./product-image-slider.css";
import { FreeMode, Navigation, Thumbs, Pagination, Scrollbar, A11y } from "swiper";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { CarritoHook } from "../../Hook/CarritoHook";
import { contextProvider } from "../../Context/ContextProvider";


const MySwal = withReactContent(Swal)

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const CuadrosPage = () => {

  const { setcarritoCountContex, carritoCountContex } = useContext(contextProvider)

  const [todos, dispatch] = useReducer(CarritoHook, initialState, init)

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos))
    setcarritoCountContex(carritoCountContex + 1)

  }, [todos])

  const handleNewTodo = (data) => {

    const action = {

      type: 'Add Todo',
      payload: data

    }

    dispatch(action)

  }

  const { id } = useParams();
  const [productoFinal, setProductoFinal] = useState(null);
  const [activeThumb, setActiveThumb] = useState();
  const [productos, setProductos] = useState([]);
  const [cantidad, setCantidad] = useState(0)
  const [tipoTela, setTipoTela] = useState("Elige una Opción")
  const [medidaSelect, setmedidaSelect] = useState(null)
  const [precioFinal, setPrecioFinal] = useState("")
  const [precioFin, setPrecioFin] = useState(0)
  const [precioSumar, setprecioSumar] = useState(0)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  useEffect(() => {
    FirebaseApi.consultaProductoFinal(id)
      .then((producto) => {
        setProductoFinal(producto);
        setPrecioFin(producto.medida[0].precio)
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);


  useEffect(() => {


    if (cantidad != 0 && tipoTela != "Elige una Opción" && medidaSelect != null) {
      if (tipoTela == "Impresión en Tela") {
        if (cantidad == 1) {
          setPrecioFin(medidaSelect.medida.precio)
          setprecioSumar(medidaSelect.medida.precio)
        } else {
          setPrecioFin(medidaSelect.medida.precio * cantidad)
          setprecioSumar(medidaSelect.medida.precio)
        }
      } else {
        let precioTotal
        if (cantidad == 1) {
          if (medidaSelect.id == 0) {
            precioTotal = medidaSelect.medida.precio + 20
            setprecioSumar(precioTotal)
            setPrecioFin(precioTotal)
          } else if (medidaSelect.id == 1) {
            precioTotal = medidaSelect.medida.precio + 30
            setprecioSumar(precioTotal)
            setPrecioFin(precioTotal)
          } else if (medidaSelect.id == 2) {
            precioTotal = medidaSelect.medida.precio + 40
            setprecioSumar(precioTotal)
            setPrecioFin(precioTotal)
          } else if (medidaSelect.id == 3) {
            precioTotal = medidaSelect.medida.precio + 50
            setprecioSumar(precioTotal)
            setPrecioFin(precioTotal)
          } else {
            precioTotal = medidaSelect.medida.precio + 60
            setprecioSumar(precioTotal)
            setPrecioFin(precioTotal)
          }
        } else {
          if (medidaSelect.id == 0) {
            precioTotal = medidaSelect.medida.precio + 20
            setprecioSumar(precioTotal)
            setPrecioFin(precioTotal * cantidad)
          } else if (medidaSelect.id == 1) {
            precioTotal = medidaSelect.medida.precio + 30
            setprecioSumar(precioTotal)
            setPrecioFin(precioTotal * cantidad)
          } else if (medidaSelect.id == 2) {
            precioTotal = medidaSelect.medida.precio + 40
            setprecioSumar(precioTotal)
            setPrecioFin(precioTotal * cantidad)
          } else if (medidaSelect.id == 3) {
            precioTotal = medidaSelect.medida.precio + 50
            setprecioSumar(precioTotal)
            setPrecioFin(precioTotal * cantidad)
          } else {
            precioTotal = medidaSelect.medida.precio + 60
            setprecioSumar(precioTotal)
            setPrecioFin(precioTotal * cantidad)
          }
        }
      }
    }


  }, [cantidad, tipoTela, medidaSelect])


  if (productoFinal != null) {
    FirebaseApi.consultaProducto()
      .then((listaDeProductos) => {
        let productofiltrado = listaDeProductos.filter((e) => e.data.tema == productoFinal.tema)
        setProductos(productofiltrado);
      })
      .catch((err) => {
        console.log(err);
      });
  }



  if (!productoFinal) {
    return <div>Cargando producto...</div>;
  }



  const handleCarritoAdd = () => {

    if (tipoTela == "Elige una Opción" || medidaSelect == null || cantidad <= 0) {
      MySwal.fire({
        html: <i>Faltan campos por seleccionar</i>,
        icon: 'error'
      })
    } else {
      let data = productoFinal
      data.cantidad = cantidad
      data.precioPagar = precioFin
      data.medidaSelecionada = medidaSelect.medida.medida
      data.telaEntrega = tipoTela
      data.precioSumar = precioSumar
      handleNewTodo(data)
    }
  }



  return (

    <>
      <section className="page-title">
        <div className="container">
          <ul className="bread-crumb clearfix pt-2">
            <li>
              <a>Inicio {`>`} </a>
            </li>
            <li className="ps-sm-0 ps-2">Galería {`>`} </li>
          </ul>
        </div>
      </section>

      <div className="container mb-5 pt-0 ps-sm-1">

        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 pt-sm-0 pt-md-4 ps-sm-0 ps-md-5">

            {/*
                <Swiper
              loop={true}
              spaceBetween={10}
              modules={[Navigation, Thumbs]}
              grabCursor={true}
              thumbs={{ swiper: activeThumb }}
              className="product-images-slider"
              style={{
                height: '770px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <SwiperSlide key={"foto1"}>
                <img src={productoFinal.galeria[0]} alt="" />
              </SwiperSlide>
              <SwiperSlide key={"foto2"}>
                <img src={productoFinal.galeria[0]} alt="" />
              </SwiperSlide>
            </Swiper>

            <Swiper
              onSwiper={setActiveThumb}
              loop={true}
              spaceBetween={5}
              slidesPerView={3}
              modules={[Thumbs]}
              className="product-images-slider-thumbs"
            >
              <SwiperSlide key={"foto1"}>
                <div className="product-images-slider-thumbs-wrapper">
                  <img src={productoFinal.galeria[0]} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide key={"foto2"}>
                <div className="product-images-slider-thumbs-wrapper">
                  <img src={productoFinal.galeria[0]} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
    */}

            <>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-images-slider"
              >
                {
                  productoFinal.galeria.map((e, index) => (
                    <SwiperSlide key={index}>
                    <img src={e} />
                  </SwiperSlide>
                  ))
                }
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={15}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-images-slider-thumbs mt-1"
              >
                {
                  productoFinal.galeria.map((e, index) => (
                    <SwiperSlide key={index}>
                    <img src={e} />
                  </SwiperSlide>
                  ))
                }
              </Swiper>
            </>

          </div>
          <div className="col-sm-12 col-md-6 pt-sm-0 pt-md-4 ps-sm-0 ps-md-5">
            <div className="text-start fs-2 ps-1 ps-lg-6">
              {productoFinal.nombre}
            </div>
            <div className="text-start pt-sm-0 pt-md-3 fs-3 ">
              ${precioFin}
            </div>
            <div className="text-start pt-sm-0 pt-md-3 text-secondary fs-6">
              Autor: {productoFinal.pintores}
              <br />
              Estilo: {productoFinal.estilos}
            </div>
            <div className="text-start pt-3 fs-6">
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
                  {tipoTela}
                </a>

                <ul
                  className="dropdown-menu telaBastidor"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" onClick={() => setTipoTela("Impresión en Tela")}>
                      Impresión en Tela
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => setTipoTela("Impresión en Tela aplicado en bastidor")}>
                      Impresión en Tela aplicado en bastidor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-3 fs-6 mb-2">Medidas:</div>
            <div className="d-flex flex-row flex-wrap medidas-caja">

              {
                productoFinal.medida.map((e, index) => (
                  <div key={index} className={medidaSelect == null || medidaSelect.medida.medida != e.medida ? 'me-2 mb-2 medidasBotonesDistancia' : "me-2 mb-2 medidasBotonesDistancia active"}>
                    <button onClick={() => setmedidaSelect({ medida: e, id: index })} type="button" className="btn text-dark btnMedidas w-100">
                      {e.medida}
                    </button>
                  </div>
                ))
              }

            </div>

            <div className="pt-3 fs-6 mb-2">Cantidad:</div>
            <div className="row pt-1">
              <div className="col-sm-3 col-4">
                <div className="input-group input-group-css">
                  <button
                    className="btn btn-outline-secondary inputCount"
                    type="button"
                    onClick={() => cantidad <= 0 ? setCantidad(0) : setCantidad(cantidad - 1)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="form-control inputCount"
                    aria-label="Amount (to the nearest dollar)"
                    value={cantidad}

                  />
                  <button
                    className="btn btn-outline-secondary inputCount"
                    type="button"
                    onClick={() => setCantidad(cantidad + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-sm-9 col-8">
                <button
                  className="btn btn-transparent text-center p-0 btn-small w-100"
                  type="button"
                  onClick={() => handleCarritoAdd()}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
            <div className="d-grid">
              <button
                className="btn btn-dark pt-2 pb-2 mt-3 btn-md"
                type="button"
              >
                Comprar Ahora
              </button>
              <button
                className="btn btn-success pt-2 pb-2 mt-3 btn-md"
                type="button"
              >
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
                  Detalles del Producto
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


        <div className="row">
          <div className="text-center ">
            <h1 className="display-6 mt-3 mt-md-5 mb-2 mb-md-4">
              Productos relacionados
            </h1>
          </div>
        </div>


        {
          productos.length == 0 ?
            <></>
            :
            <div className="row">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  450: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
                navigation
              >
                {productos.map((datas) => {
                  return (
                    <SwiperSlide key={datas.id}>
                      <div className="container" style={{ width: "90%", padding: "20px" }}>
                        <div className="contenido">
                          <img
                            src={datas.data.galeria[0]}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="middle">
                            <button className="btn btn-primary comprar" onClick={() => navigation.navigate(`${datas.id}`)}>Cotizar</button>
                          </div>
                        </div>
                        <h6 className="fs-6 text-secondary">Pintores: {datas.data.pintores}</h6>
                        <h4 className="fs-6">{datas.data.nombre}</h4>
                        <h4 className="fs-6">{datas.data.precio}</h4>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
        }
      </div>
    </>
  );
};
