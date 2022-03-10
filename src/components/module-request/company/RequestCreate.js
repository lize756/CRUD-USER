import React, { useState } from "react";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { makeStyles } from "@material-ui/core";
import axios from "../../../config/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(2, 25, 2, 25),

    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "100%",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

//navigate
const RequestCreate = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  const [data, setData] = useState({
    carreras: "",
    area: "",
    studnumber: 0,
    fechaInicio: "",
    funciones: "",
    compentenciasClaves: "",
    tipoVinculacion: "",
    duracion: "",
    bonificacion: "",
    beneficios: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, carreras: e.target.value });
  };
  const handleChange = (e) => {
    console.log("Estoy aqui");
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //Metodo add
  const addRequest = (e) => {
    e.preventDefault();
    const request = {
      id: Math.floor(Math.random() * 10000),
      faculty: "Ingenieria de Sistema",
      career: "Sistemas",
      studnumber: data.studnumber,
      acadperiod: data.fechaInicio,
      area: data.area,
      funciones: data.funciones,
      compentenciasClaves: data.compentenciasClaves,
      tipoVinculacion: data.tipoVinculacion,
      duracion: data.duracion,
      bonificacion: data.bonificacion,
      beneficios: data.beneficios,
    };
    axios
      .post("requests/", request)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log("Llegue a add");
    navigate("/company/request");
  };

  return (
    <div>
      <form className={classes.root} onSubmit={addRequest}>
        <Autocomplete
          fullWidth
          disablePortal
          options={["Sistemas", "Bioquimica"]}
          name="carreras"
          renderInput={(params) => (
            <TextField {...params} label="Carreras de Interés" />
          )}
          onInputChange={handleInputChange}
        />
        <TextField
          id="outlined-textarea"
          name="area"
          label="Area o Departamento"
          multiline
          onChange={handleChange}
        />
        <TextField
          name="studnumber"
          placeholder="12"
          label="Número de Estudiantes"
          multiline
          onChange={handleChange}
        />
        <TextField
          name="fechaInicio"
          placeholder="yyyy-mm-dd"
          label="Fecha de Inicio"
          multiline
          onChange={handleChange}
        />
        <TextField
          name="funciones"
          multiline
          label="Funciones Principales"
          rows={10}
          onChange={handleChange}
        />
        <TextField
          name="CompentenciasClaves"
          multiline
          label="Competencis Claves del Éxito"
          rows={10}
          onChange={handleChange}
        />
        <TextField
          name="tipoVinculacion"
          multiline
          label="Tipo de Vinculación"
          onChange={handleChange}
        />
        <TextField
          name="duracion"
          label="Duración de la Practica"
          multiline
          onChange={handleChange}
        />
        <TextField
          name="bonificacion"
          label="Valor de Bonificación"
          multiline
          onChange={handleChange}
        />
        <TextField
          name="beneficios"
          label="Otros Beneficios"
          multiline
          onChange={handleChange}
        />
        <Button sx={{ mt: 5, pr: 3 }} variant="contained" type="submit">
          Crear Solicitud
        </Button>
      </form>
    </div>
  );
};

export default RequestCreate;
