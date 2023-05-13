import { useState, useEffect } from "react";
import { FirebaseApi } from "../../Apis/http";
import { useParams } from "react-router-dom";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./product-image-slider.css";

export const CuadrosPage = () => {
  const { id } = useParams();
  const [productoFinal, setProductoFinal] = useState(null);
  const [activeThumb, setActiveThumb] = useState();

  useEffect(() => {
    FirebaseApi.consultaProductoFinal(id)
      .then((producto) => {
        setProductoFinal(producto);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!productoFinal) {
    return <div>Cargando producto...</div>;
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

      <div className="container pt-0 ps-sm-1">
        <div className="row">
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
                justifyContent: 'center'}}
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
              {productoFinal.precio}$-{productoFinal.precio}$
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
                  Elige una Opción
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Impresión en Tela
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Impresión en Tela aplicado en bastidor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-3 fs-6 mb-2">Medidas:</div>
            <div className="d-flex flex-row">
              <div className="col-md-3 pb-1 medidasBotonesDistancia">
                <button type="button" className="btn text-dark btnMedidas">
                  {productoFinal.medida}
                </button>
              </div>

              <div className="col-md-3 pb-3 ps-2 medidasBotonesDistancia">
                <button type="button" className="btn text-dark btnMedidas">
                  {productoFinal.medida}
                </button>
              </div>

              <div className="col-md-3 pb-1 ps-2 medidasBotonesDistancia">
                <button type="button" className="btn text-dark btnMedidas">
                  {productoFinal.medida}
                </button>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="col-md-3 pb-1 medidasBotonesDistancia">
                <button type="button" className="btn text-dark btnMedidas">
                  {productoFinal.medida}
                </button>
              </div>

              <div className="col-md-3 ps-2 medidasBotonesDistancia">
                <button type="button" className="btn fs-6 text-dark btnMedidas">
                  {productoFinal.medida}
                </button>
              </div>
            </div>
            <div className="pt-3 fs-6 mb-2">Cantidad:</div>
            <div className="row pt-1">
              <div className="col-sm-3 col-4">
                <div className="input-group">
                  <button
                    className="btn btn-outline-secondary inputCount"
                    type="button"
                  >
                    -1
                  </button>
                  <input
                    type="text"
                    className="form-control inputCount"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <button
                    className="btn btn-outline-secondary inputCount"
                    type="button"
                  >
                    +1
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
      </div>
    </>
  );
};
