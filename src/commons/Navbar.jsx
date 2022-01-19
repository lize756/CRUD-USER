import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="nav navbar-nav  ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link to="/"> Inicio </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/preguntas-frecuentes"> Preguntas Frecuentes </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/contacto"> Contacto </Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  <Link to="/bolsa-empleo-icesi"> Bolsa de Empleo </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
