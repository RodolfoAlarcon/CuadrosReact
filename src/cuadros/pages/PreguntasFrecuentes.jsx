import fq from "../../assets/imagenfq.png";

export const PreguntasFrecuentes = () => {
  return (
    <>
      <section className="page-title">
        <div className="auto-container">
          <h2>Preguntas frecuentes</h2>
          <ul className="bread-crumb clearfix pt-2">
            <li>
              <a>Inicio {`>`} </a>
            </li>
            <li className="ps-2">Preguntas frecuentes</li>
          </ul>
        </div>
      </section>

      <div className="container">
        <div className="row row-cols-1 row-cols-lg-1 g-1 g-lg-1">
          <div className="col text-center">
            <img
              src={fq}
              className="img-fluid w-lg-10 w-sm-100"
              alt="Descripción de la imagen"
            />
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8">
            <div className="text-start small titulo1Fq fs-6 ps-1 ps-lg-4 pe-2">
              Bienvenido a la sección de preguntas frecuentes de nuestro sitio
              web
            </div>
            <div className="text-start small text-secondary respuestasAcordeon ps-1 ps-lg-4 pe-2 pt-3">
              Aquí encontrará las respuestas a las consultas más comunes de
              nuestros clientes y usuarios.
            </div>
            <div className="text-start small text-secondary respuestasAcordeon ps-1 ps-lg-4 pe-2 pt-3">
              Esperamos que esta sección le sea de utilidad y le ayude a
              resolver sus inquietudes. Si no encuentra la respuesta que busca,
              puede contactarnos a través de nuestro formulario de contacto o
              llamarnos al número que aparece en la página. Estaremos encantados
              de atenderle..
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 pt-lg-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8">
            <div className="accordion accordion-flush" id="myAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed bg-transparent text-dark border-0 botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    ¿Cómo comprar los cuadros IMPRESOS?
                  </button>
                </h2>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    Realizar la compra y pago en nuestro sitio es muy sencillo,
                    solo tiene que pulsar el botón de compra, que se encuentra
                    al lado de cada producto de arte que quiera adquirir. Si
                    quiere continuar con la compra de cuadros u otros artículos
                    puede hacerlo, mediante este sistema su pedido con uno o más
                    elementos se acumularán automáticamente el carrito de
                    compra.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ¿Qué tipo de cuadros ofrecen?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    Ofrecemos una amplia variedad de cuadros impresos en
                    diferentes tamaños y estilos. Puede elegir entre cuadros
                    abstractos, paisajes, retratos, animales y más.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading3">
                  <button
                    className="accordion-button collapsed botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ¿Qué métodos de pago aceptan?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading3"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    Puede pagar con tarjeta MasterCard y Visa. También con
                    cuenta PayPal y transferencia bancaria. En el último paso de
                    la compra encontrará las opciones para que elija la que más
                    cómoda sea para usted.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading4">
                  <button
                    className="accordion-button collapsed botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    ¿Los cuadros vienen enmarcados?
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading4"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    No, nuestra filosofía es ser simples, sin embargo puedes
                    adquirir el marco a un precio adicional con nosotros.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading5">
                  <button
                    className="accordion-button collapsed botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    ¿Puedo pedir un cuadro que no está en el catálogo?
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading5"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    Sí, envíenos un mail a …. con la imagen del cuadro que desea
                    y las medidas. Le enviaremos cuanto antes un presupuesto, el
                    precio final está directamente relacionado con las medidas
                    que elija.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading6">
                  <button
                    className="accordion-button collapsed botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded="false"
                    aria-controls="collapse6"
                  >
                    ¿Son precisas son las medidas de los cuadros?
                  </button>
                </h2>
                <div
                  id="collapse6"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading6"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    Sí, las medidas indicadas en cada cuadro, son bastante
                    precisas, guardan la proporción correcta con la foto
                    original de la obra. Por ello independientemente del tamaño
                    que elija, el lienzo siempre tiene la misma proporción
                    ancho/alto.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading7">
                  <button
                    className="accordion-button collapsed botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse7"
                    aria-expanded="false"
                    aria-controls="collapse7"
                  >
                    ¿Cómo puedo hacer un Pedido?
                  </button>
                </h2>
                <div
                  id="collapse7"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading7"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    Escoja los cuadros que desee comprar, añádalos al carrito de
                    compras y siga los pasos que el sistema indica. Si aún tiene
                    dudas consúltenos y estaremos encantados de atenderle.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading8">
                  <button
                    className="accordion-button collapsed botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse8"
                    aria-expanded="false"
                    aria-controls="collapse8"
                  >
                    ¿Cuánto tarda el envío y cuánto cuesta?
                  </button>
                </h2>
                <div
                  id="collapse8"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading8"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    El tiempo de envío depende del destino y del tipo de envío
                    que elija.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading9">
                  <button
                    className="accordion-button collapsed botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse9"
                    aria-expanded="false"
                    aria-controls="collapse9"
                  >
                    ¿Quién pinta las obras ?
                  </button>
                </h2>
                <div
                  id="collapse9"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading9"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    Las obras son una representación impresa de la obra original
                    en material tipo lienzo. El objetivo es ofrecer al cliente
                    una experiencia visual similar a la de ver la obra original
                    en persona.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading10">
                  <button
                    className="accordion-button collapsed botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse10"
                    aria-expanded="false"
                    aria-controls="collapse10"
                  >
                    ¿Cuál es la política de devoluciones?
                  </button>
                </h2>
                <div
                  id="collapse10"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading10"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    Estamos comprometidos en comercializar los productos de la
                    calidad más alta presente en el mercado, queremos que usted
                    esté 100% satisfecho con su compra, si por cualquier razón
                    usted no está totalmente satisfecho con su compra la puede
                    hacer un cambio dentro de los primeros 30 días desde su
                    recepción. Saber más sobre la garantía.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="heading11">
                  <button
                    className="accordion-button collapsed botonAcordeon"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse11"
                    aria-expanded="false"
                    aria-controls="collapse11"
                  >
                    ¿Puedo devolver o cambiar un cuadro si no me gusta o está
                    dañado?
                  </button>
                </h2>
                <div
                  id="collapse11"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading11"
                  data-bs-parent="#myAccordion"
                >
                  <div className="accordion-body small text-secondary respuestasAcordeon">
                    Sí, puede devolver o cambiar un cuadro si no está satisfecho
                    con él o si llega dañado. Tiene un plazo de 14 días desde la
                    recepción del pedido para solicitar la devolución o el
                    cambio. Debe contactarnos por correo electrónico o teléfono
                    y explicarnos el motivo de la devolución o el cambio. Le
                    enviaremos una etiqueta de devolución que debe pegar en el
                    paquete y enviarlo a nuestra dirección. Una vez que
                    recibamos el cuadro, le reembolsaremos el dinero o le
                    enviaremos otro cuadro según su preferencia.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
