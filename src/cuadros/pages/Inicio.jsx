import logo from "../../assets/person_01.jpg";

export const Inicio = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="row d-flex align-items-center justify-content-start">
          <div className="col-md-6">
            <img
              src={logo}
              className="img-fluid w-100"
              alt="Descripción de la imagen"
            />
          </div>
          <div className="col-md-6 ps-sm-5">
            <p className="text-md-start text-center ps-sm-5 firstTittleHome fw-bolder">Lo más nuevo</p>
            <p className="heading-inicio ps-sm-5 text-md-start text-center">
              La Ropa Perfecta
            </p>
            <div className="container heading-description mx-auto ps-sm-5">
              <p className="fs-5">
                Esta es tu oportunidad de mejorar tu guardarropa con una
                variedad de estilos y cortes que son a la vez femeninos y
                relajados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
