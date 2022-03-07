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
} from "@mui/material";
import axios from "../../../config/axios";
import Request from "./Request";

const RequestList = () => {
  //lista de solicitudes de practica
  const [requestList, setRequestList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  //se guarda en requestlist la informacion de las solicitudes
  useEffect(() => {
    axios.get("requests").then((res) => setRequestList(res.data));
    console.log(requestList);
  }, []);

  const delRequest = (request) => {
    axios.delete("requests/" + request.id).then(() => {
      axios.get("requests").then((res) => {
        //   tasks.push(task)
        setRequestList(res.data);
        //setTaskEdit({});
      });
    });
  };

  const renderList = () => {
    return requestList
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((request) => (
        <Request request={request} key={request.id} delRequest={delRequest} />
      ));
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Facultad</TableCell>
                <TableCell align="right">Carrera</TableCell>
                <TableCell align="right">Periodo Académico </TableCell>
                <TableCell align="right">Número de Estudiantes </TableCell>
                <TableCell align="scenter">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderList()}</TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={requestList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default RequestList;
