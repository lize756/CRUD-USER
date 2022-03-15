import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { makeStyles, Box, Container } from "@material-ui/core";
import axios from "../../config/axios";

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

const UserCreate = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  const [data, setData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    document: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //Metodo add
  const addUser = (e) => {
    e.preventDefault();

    const user = {
      id: Math.floor(Math.random() * 10000),
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password,
      email: data.email,
      document: data.document,
    };

    axios
      .post("users/", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/home/users");
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#F2F6FE" }}>
        <form className={classes.root} onSubmit={addUser}>
          <TextField
            id="outlined-textarea"
            name="firstname"
            label="Primer Nombre"
            placeholder="Oscar"
            multiline
            onChange={handleChange}
          />

          <TextField
            name="lastname"
            placeholder="Gomez Valencia"
            label="Apellidos"
            multiline
            onChange={handleChange}
          />

          <TextField
            name="password"
            label="Contraseña"
            type="password"
            multiline
            autoComplete="current-password"
            onChange={handleChange}
          />

          <TextField
            name="email"
            multiline
            label="Correo Electronico"
            placeholder="xxxxx@email.com"
            onChange={handleChange}
          />
          <TextField
            name="document"
            label="Documento de Identidad"
            placeholder="1233333"
            multiline
            onChange={handleChange}
          />

          <Button sx={{ mt: 5, pr: 3 }} variant="contained" type="submit">
            Crear Usuario
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default UserCreate;
