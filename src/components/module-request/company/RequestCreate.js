import React, { useState } from "react";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { makeStyles, Box, Container } from "@material-ui/core";
import axios from "../../../config/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "90%",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const careers = [
  { title: "Diseño Industrial", label: "Diseño Industrial" },
  { title: "Ingeniería de Sistemas", label: "Ingeniería de Sistemas" },
  { title: "Derecho", label: "Derecho" },
  { title: "Psicología", label: "Psicología" },
  { title: "Química Farmacéutica", label: "Química Farmacéutica" },
  { title: "Medicina", label: "Medicina" },
];

const RequestCreate = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  const [data, setData] = useState({
    area: "",
    studnumber: 0,
    fechaInicio: "",
    funciones: "",
    competencias: "",
    tipoVinculacion: "",
    duracion: "",
    bonificacion: "",
    beneficios: "",
  });

  const [carrera, setCarrera] = useState(" ");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    setCarrera(e.target.value);
  };
  //Metodo add
  const addRequest = (e) => {
    e.preventDefault();
    console.log("competenciass " + data.competencias);

    const request = {
      id: Math.floor(Math.random() * 10000),
      faculty: "Ingenieria de Sistema",
      career: "Sistemas",
      studnumber: data.studnumber,
      fechaInicio: data.fechaInicio,
      area: data.area,
      funciones: data.funciones,
      competencias: data.competencias,
      tipoVinculacion: data.tipoVinculacion,
      duracion: data.duracion,
      bonificacion: data.bonificacion,
      beneficios: data.beneficios,
    };

    axios
      .post("requests/", request)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/company/request");
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#F2F6FE" }}>
        <form className={classes.root} onSubmit={addRequest}>
          <Autocomplete
            multiple
            fullWidth
            options={careers}
            getOptionLabel={(option) => option.title}
            name="carreras"
            value={undefined}
            onChange={handleSelect}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Carreras de Interés"
                placeholder="Carreras de Interés"
              />
            )}
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
            rows={8}
            onChange={handleChange}
          />
          <TextField
            name="competencias"
            multiline
            label="Competencias Claves del Éxito"
            rows={8}
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
      </Box>
    </Container>
  );
};

export default RequestCreate;
