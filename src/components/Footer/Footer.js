import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="content px-5 border-top border-dark bg-white">
        <footer className="py-5">
        <div className="row hola">
            <div className="col-6 col-md-2 mb-3">
            <h5 id="footerh5" >Sección</h5>
            <div className="nav flex-column">
                <Link to={'/'} className="nav-item mb-2 linksFooter">Home</Link>
                <Link to={'/category/Remeras'} className="nav-item mb-2 linksFooter">Remeras</Link>
                <Link to={'/category/Faldas'} className="nav-item mb-2 linksFooter">Faldas</Link>
                <Link to={'/category/Vestidos'} className="nav-item mb-2 linksFooter">Vestidos</Link>
                <Link to={'/'} className="nav-item mb-2 linksFooter">Contacto</Link>
            </div>
            </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <div className="list-unstyled d-flex">
                <Link to={"https://www.whatsapp.com/?lang=es"} className="ms-3 icon"><svg className="bi" width="34" height="24"/><i className="fab fa-whatsapp"></i></Link>
                <Link to={"https://www.instagram.com/sofi_reinaudo/?hl=es-la"} className="ms-3 icon"><svg className="bi" width="24" height="24"/><i className="fab fa-instagram"></i></Link>
                <Link to={"https://github.com/SofiaReinaudo"} className="ms-3 icon"><svg className="bi" width="24" height="24"/><i className="fab fa-github"></i></Link>
            </div>
            <div className="text-center p-3">
                © Proyecto Final - Coderhause - ReactJs - 2023 - Sofía Reinaudo
            </div>
        </div>    
        </footer>
    </div> 
    )
};

export default Footer