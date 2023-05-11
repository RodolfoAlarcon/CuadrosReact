import imgContacto from '../../assets/contacto.png'

export const Contactanos = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3">
            <div className="icon-contactanos mt-3 mb-3">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5 className="titulo-icon-container">Número De Teléfono</h5>
            <a href="#" className="a-link-contacto">
              +593993371891
            </a>
          </div>
          <div className="col-md-3">
            <div className="icon-contactanos mt-3 mb-3">
              <i className="far fa-map"></i>
            </div>
            <h5 className="titulo-icon-container">Dirección:</h5>
            <a href="#" className="a-link-contacto">
              Lomas de Urdesa, Av. 5ta #307
            </a>
          </div>
          <div className="col-md-3">
            <div className="icon-contactanos mt-3 mb-3">
              <i className="fas fa-mail-bulk"></i>
            </div>
            <h5 className="titulo-icon-container">Correo Electrónico:</h5>
            <a href="#" className="a-link-contacto">
              ventas@alucinamkt.com
            </a>
          </div>
          <div className="col-md-3">
            <div className="icon-contactanos mt-3 mb-3">
              <i className="far fa-link"></i>
            </div>
            <h5 className="titulo-icon-container">Nuestras Redes:</h5>
            <div className="caja-contactenos">
              <a href="#" className="red-contacto">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="red-contacto">
              <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="red-contacto">
              <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2 className="titulo-contacto">
              Nos encantaría saber de usted.
            </h2>
            <p className="descripcion-contacto">
              Si tiene excelentes productos que está haciendo o desea trabajar con nosotros, escríbanos.
            </p>
            <img src={imgContacto}  className='m-auto d-block'/>
          </div>
          <div className="col-md-6">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <label>
                    Nombre:
                  </label>
                  <input className='form-control' type='text'/>
                </div>
                <div className="col-md-6">
                <label>
                    Email:
                  </label>
                  <input className='form-control' type='email'/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>
                    Teléfono:
                  </label>
                  <input className='form-control' type='number'/>
                </div>
                <div className="col-md-6">
                <label>
                    Asunto:
                  </label>
                  <input className='form-control' type='text'/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>
                    Mensaje
                  </label>
                  <textarea className='form-control' style={{height:150}}></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-primary btn-contacto">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7973.944016308879!2d-79.9170238368945!3d-2.164353318744533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d91efa2f215%3A0x3a914e7e2891aeb3!2sLomas%20De%20Urdesa%2C%20Guayaquil%2C%20Ecuador!5e0!3m2!1ses!2sve!4v1683817590723!5m2!1ses!2sve" ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
