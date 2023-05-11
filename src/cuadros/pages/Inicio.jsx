import { useState, useEffect } from "react";
import logo from "../../assets/imagen_2023-05-08_160726495.png";
import { FirebaseApi } from "../../Apis/http";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Inicio = () => {
  const [Loading, setLoading] = useState(false);
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
  }, []);
  
  console.log(productos);
  
  return productos.length != 0 ? (
    <>
      <div className="container pt-0 ps-3 ps-lg-5">
        <div className="row pt-0 pt-lg-5">
          <div className="col-sm-12 col-md-6 pt-0 pt-lg-4">
            <img
              src={logo}
              className="img-fluid w-lg-10 w-sm-100 pt-0 pt-lg-5"
              alt="Descripción de la imagen"
            />
          </div>

          <div className="col-sm-12 col-md-6">
            <p className="text-md-start text-center fs-6 fs-md-3 fw-bolder mt-md-0 mt-4 ps-0 ps-md-5">
              Lo más nuevo
            </p>

            <p className="heading-inicio text-md-start text-center ps-0 ps-md-5">
              Bienvenido {<br />}a
            </p>

            <div className="col-md-9 text-start text-secondary textoNosotros fs-6 ps-0 ps-md-5 mt-0 mt-md-4 mb-3 mb-md-5">
              Aquí podrá encontrar una gran variedad de obras de arte de
              diferentes estilos, épocas y autores. Nuestro objetivo es
              ofrecerle una experiencia única y personalizada, donde podrá
              apreciar la belleza y el valor de cada cuadro.
            </div>

            <a
              href="/Galeria"
              className="nav-item nuestraColeccion fs-6 ps-0 ps-md-5 mt-3 mt-md-5 mb-3 mb-md-5"
            >
              Nuestra Colección
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3 mt-md-5 mb-2 mb-md-4">
        <div className="row">
          <div className="text-center ">
            <h1 className="display-6 mt-3 mt-md-5 mb-2 mb-md-4">
              La guía de estilo boutique
            </h1>
          </div>
        </div>
      </div>



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
                  <div className="container" style={{ width: "90%", padding: "30px" }}>
                    <img
                      src={datas.data.galeria[0]}
                      className="card-img-top"
                      alt="..."
                    />
                    <h6 className="fs-6 text-secondary">Pintores: {datas.data.pintores}</h6>
                    <h4 className="fs-6">{datas.data.nombre}</h4>
                    <h4 className="fs-6">${datas.data.precio} - ${datas.data.precio}</h4>
                    <Link to={`/cuadros/${datas.id}`}>Comprar</Link>
                    
                  </div>
                </SwiperSlide>
              );
            })}
    </Swiper>

      

    </>
  ) : (
    <>No se a encontrado el producto</>
  );
};
