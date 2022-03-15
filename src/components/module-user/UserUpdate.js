import React, { useState, useEffect } from "react";
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

const UserUpdate = ({ user }) => {
  const classes = useStyles();
  let navigate = useNavigate();

  const [editUser, setEditUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    document: "",
  });

  useEffect(() => {
    setEditUser(user);
  }, [user]);

  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  //Metodo put
  const putUser = (e) => {
    e.preventDefault();
    const user = {
      id: editUser.id,
      firstname: editUser.firstname,
      lastname: editUser.lastname,
      password: editUser.password,
      email: editUser.email,
      document: editUser.document,
    };

    axios
      .put("users/" + user.id, user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/home/users");
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#F2F6FE" }}>
        <form className={classes.root} onSubmit={putUser}>
          <TextField
            id="outlined-textarea"
            name="firstname"
            label="Primer Nombre"
            placeholder="Oscar"
            value={editUser.firstname}
            multiline
            onChange={handleChange}
          />

          <TextField
            name="lastname"
            placeholder="Gomez Valencia"
            label="Apellidos"
            value={editUser.lastname}
            multiline
            onChange={handleChange}
          />

          <TextField
            name="password"
            label="Contraseña"
            type="password"
            value={editUser.password}
            multiline
            autoComplete="current-password"
            onChange={handleChange}
          />

          <TextField
            name="email"
            multiline
            label="Correo Electronico"
            placeholder="xxxxx@email.com"
            value={editUser.email}
            onChange={handleChange}
          />
          <TextField
            name="document"
            label="Documento de Identidad"
            placeholder="1233333"
            value={editUser.document}
            multiline
            onChange={handleChange}
          />

          <Button sx={{ mt: 5, pr: 3 }} variant="contained" type="submit">
            Editar Usuario
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default UserUpdate;
