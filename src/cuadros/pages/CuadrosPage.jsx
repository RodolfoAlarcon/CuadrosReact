import { useState, useEffect } from "react";
import { FirebaseApi } from "../../Apis/http";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./product-image-slider.css";

export const CuadrosPage = () => {
  const { id } = useParams();
  const [productoFinal, setProductoFinal] = useState(null);
  const [activeThumb, setActiveThumb] = useState();
  const [productos, setProductos] = useState([]);
  const [cantidad, setCantidad] = useState(0)
  const [tipoTela, setTipoTela] = useState("Elige una Opción")
  const [medidaSelect, setmedidaSelect] = useState(null)
  const [precioFinal, setPrecioFinal] = useState("")

  useEffect(() => {
    FirebaseApi.consultaProductoFinal(id)
      .then((producto) => {
        setProductoFinal(producto);
        console.log("line 22 ->", producto)
      })
      .catch((err) => {
        console.log(err);
      });


  }, [id]);


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


  const handleRestar = () => {

    if (cantidad <= 0) {
      setCantidad(0)
    } else {
      setCantidad(cantidad - 1)
    }

  }


  const handleSumar = () => {

    setCantidad(cantidad + 1)

  }


  if (!productoFinal) {
    return <div>Cargando producto...</div>;
  }


  const handleTela = (event) => {
    event.preventDefault();
    setTipoTela("Impresión en Tela")
  }

  const handleBastidor = (event) => {
    event.preventDefault();
    setTipoTela("Impresión en Tela aplicado en bastidor")
  }

  const handlePrecio = () => {

    if (tipoTela == "Elige una Opción" || medidaSelect == null) {
      return (
        <>
          {productoFinal.precio}
        </>
      )
    } else if (tipoTela == "Elige una Opción") {
      return (
        <>
          {productoFinal.precio}
        </>
      )
    } else if (medidaSelect == null) {
      return (
        <>
          {productoFinal.precio}
        </>
      )
    }else{
      if(tipoTela == "Impresión en Tela"){
        return(
          <>
            {medidaSelect.medida.precio}$
          </>
        )
      }else{
        if(medidaSelect.id == 0){
          return(
            <>
              {medidaSelect.medida.precio + 20}$
            </>
          )
        }
        if(medidaSelect.id == 1){
          return(
            <>
              {medidaSelect.medida.precio + 30}$
            </>
          )
        }
        if(medidaSelect.id == 2){
          return(
            <>
              {medidaSelect.medida.precio + 40}$
            </>
          )
        }
        if(medidaSelect.id == 3){
          return(
            <>
              {medidaSelect.medida.precio + 50}$
            </>
          )
        }
        if(medidaSelect.id == 4){
          return(
            <>
              {medidaSelect.medida.precio + 60}$
            </>
          )
        }
      }
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

          </div>
          <div className="col-sm-12 col-md-6 pt-sm-0 pt-md-4 ps-sm-0 ps-md-5">
            <div className="text-start fs-2 ps-1 ps-lg-6">
              {productoFinal.nombre}
            </div>
            <div className="text-start pt-sm-0 pt-md-3 fs-3 ">
              {
                handlePrecio()
              }
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
                    <a className="dropdown-item" onClick={handleTela}>
                      Impresión en Tela
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={handleBastidor}>
                      Impresión en Tela aplicado en bastidor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-3 fs-6 mb-2">Medidas:</div>
            <div className="d-flex flex-row flex-wrap medidas-caja">

              {
                productoFinal.medida.map((e,index) => (
                  <div key={index} className={medidaSelect == null || medidaSelect.medida.medida != e.medida ? 'me-2 mb-2 medidasBotonesDistancia' : "me-2 mb-2 medidasBotonesDistancia active"}>
                    <button onClick={() => setmedidaSelect({medida:e, id:index})} type="button" className="btn text-dark btnMedidas w-100">
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
                    onClick={() => handleRestar()}
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
                    onClick={() => handleSumar()}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-sm-9 col-8">
                <button
                  className="btn btn-transparent text-center p-0 btn-small w-100"
                  type="button"
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
