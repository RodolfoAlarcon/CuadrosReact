import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-transparent navbar-light justify-content-center">
            
        <Link 
            className="navbar-brand" 
            to="/"
        >
        </Link>
    
        <div className="navbar-collapse justify-content-center">
            <div className="navbar-nav">
    
            <NavLink 
                    className="nav-item nav-link" 
                    to="/inicio"
                    style={{color: "#000000"}}
                >
                    Inicio
                </NavLink>
    
                <NavLink 
                    className="nav-item nav-link" 
                    to="/Nosotros"
                    style={{color: "#000000"}}
                >
                    Nosotros
                </NavLink>
    
                <NavLink 
                    className="nav-item nav-link" 
                    to="/Galeria"
                    style={{color: "#000000"}}
                >
                    Galeria
                </NavLink>
    
                <NavLink 
                    className="nav-item nav-link" 
                    to="/Preguntasfrecuentes"
                    style={{color: "#000000"}}
                >
                    Preguntas Frecuentes
                </NavLink>

                <NavLink 
                    className="nav-item nav-link" 
                    to="/Contactanos"
                    style={{color: "#000000"}}
                >
                    Contáctanos
                </NavLink>
            </div>
        </div>
               
    </nav>
    
    )
}