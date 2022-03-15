import React from "react";
import { Link as RouterLink, Outlet } from "react-router-dom";
import Link from "@mui/material/Link";
import "./StylesUser.css";

const HomeUser = (props) => {
  return (
    <div className="home-container">
      <nav>
        <RouterLink to="/company">Home</RouterLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="#"> Preguntas Frecuentes </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="#"> Contacto </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </nav>

      <h2>{props.name}</h2>

      <Outlet />
    </div>
  );
};

export default HomeUser;
