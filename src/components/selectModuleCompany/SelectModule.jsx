import React from "react";
import { Link } from "react-router-dom";
import Interns from "../../assets/interns.png";
import "./SelectModule.css";
import GeneralTitle from "../mainContainer/GeneralTitle";
import CardModule from "../../commons/CardModule";

const SelectModule = () => {
  return (
    <div>
      <GeneralTitle name="PORTAL DE SOLICITUDES PRACTICANTES DE LA UNIVERSIDAD ICESI" />
      <div className="container-fluid  row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <Link to="/#">
            <CardModule />
          </Link>
        </div>
        <div className="col">
          <Link to="/home">
            <CardModule src={Interns} alt="Interns" title="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectModule;
