import React from "react";
import LogoIcesi from "../assets/logo_icesi.png";
import LogoCEDEP from "../assets/logo_cedep.png";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-4 p-3 ">
            <img
              src={LogoIcesi}
              className="rounded "
              width="180px"
              height="60px"
              alt="Universidad ICESI"
            />
          </div>
          <div className="col-4 p-3">
            <img
              src={LogoCEDEP}
              className="rounded"
              width="180px"
              height="60px"
              alt="CEDEP"
            />
          </div>
        </div>

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
                    <Link to="/preguntas-frecuentes">
                      {" "}
                      Preguntas Frecuentes{" "}
                    </Link>
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
      </div>
    </div>
  );
};

export default Banner;
