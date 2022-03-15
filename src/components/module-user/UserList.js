import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TablePagination,
  Button,
} from "@mui/material";
import axios from "../../config/axios";
import User from "./User";
//import Search from "./RequestSearch";
//import Update from "./RequestUpdate";
import { useNavigate } from "react-router";

const UserList = ({ edit }) => {
  const [userList, setUserList] = useState([]);

  //lista de paginacion de la tabla
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  //navigate
  let navigate = useNavigate();

  //Axios
  useEffect(() => {
    axios.get("users").then((res) => setUserList(res.data));
  }, []);

  //Metodo delete
  const delUser = (user) => {
    axios.delete("users/" + user.id).then(() => {
      axios.get("users").then((res) => {
        setUserList(res.data);
      });
    });
  };

  //Metodo edit
  const editUser = (user) => {
    edit(user);
    navigate("/home/update");
  };

  //Metodos handleChange
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleClick = () => {
    navigate("/home/create");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //El Render
  const renderList = () => {
    return userList
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((user) => (
        <User user={user} key={user.id} delUser={delUser} editUser={editUser} />
      ));
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Primer Nombre</TableCell>
                <TableCell align="right">Apellido</TableCell>
                <TableCell align="right">Documento de Identidad </TableCell>
                <TableCell align="right">Correo Eletronico </TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderList()}</TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={userList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Button sx={{ mt: 5 }} variant="contained" onClick={handleClick}>
        Crear Usuario
      </Button>
    </div>
  );
};

export default UserList;
