import React from "react";
import LogoIcesi from "../assets/logo_icesi.png";
import LogoCEDEP from "../assets/logo_cedep.png";
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
      </div>
    </div>
  );
};

export default Banner;
