import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../Cart/CartWidget'
import "./NavBar.css"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link  to={'/'} className="navbar-brand">Made In Heaven</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <div className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle link-dark" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
                            <div className="dropdown-menu">
                                <NavLink to={'/category/Remeras'} className="dropdown-item">Remeras</NavLink>
                                <NavLink to={'/category/Faldas'} className="dropdown-item">Faldas</NavLink>
                                <NavLink to={'/category/Vestidos'} className="dropdown-item">Vestidos</NavLink>
                                <NavLink to={'/'} className="dropdown-item">Ver todos</NavLink>
                            </div>
                        </div>  
                    </div>    
                    <div className="nav-item link-dark">
                            <Link to={'/'} className="nav-link">Contacto</Link>
                        </div> 
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
};

export default NavBar;