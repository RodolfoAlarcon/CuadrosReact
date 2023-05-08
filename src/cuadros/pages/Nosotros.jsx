import imgNosotros from "../../assets/imgNosotros.jpg";

export const Nosotros = () => {
  return (
    <>
      <div className="container pt-3 ps-2 pe-2 ps-md-5 pe-md-5">
        <div className="row pt-5">
          <div className="col-sm-12 col-md-6 ps-1 pe-1 ps-md-4 pe-md-3">
            <img
              src={imgNosotros}
              className="img-fluid w-lg-10 w-sm-100"
              alt="Descripción de la imagen"
            />
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="text-center fs-1 ps-1 ps-lg-6 tittleNosotros fst-normal">
              Quienes somos
            </div>

            <div className="text-start pt-3 text-secondary textoNosotros ps-1 pe-1 ps-md-2 pe-md-3">
              «Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.»
            </div>

            <div className="text-start pt-3 text-secondary textoNosotros pt-5 ps-1 pe-1 ps-md-2 pe-md-3">
              «Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.»
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="text-start fs-1 ps-1 ps-lg-6 tittleNosotros pt-4 fst-normal">
              Misión:
            </div>
            <div className="text-start pt-3 text-secondary textoNosotros pt-4">
              Ofrecer a nuestros clientes una amplia variedad de cuadros de alta
              calidad, con diseños originales y personalizados, que reflejen su
              personalidad y estilo. Queremos ser una tienda de referencia en el
              mercado del arte digital, que se distinga por su innovación,
              creatividad y atención al cliente.
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="text-start fs-1 ps-1 ps-lg-6 tittleNosotros pt-4 fst-normal">
              Visión:
            </div>
            <div className="text-start pt-3 text-secondary textoNosotros pt-4">
              Ser una empresa líder en el sector de la decoración con cuadros,
              que se expanda a nivel nacional, y que contribuya al desarrollo
              cultural y artístico de la sociedad. Aspiramos a crear una
              comunidad de clientes satisfechos y fieles, que reconozcan nuestra
              marca como sinónimo de calidad y buen gusto.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
