import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "../../components/module-user/UserList";
import Home from "../../components/module-user/HomeUser";
import Create from "../../components/module-user/UserCreate";
import Update from "../../components/module-user/UserUpdate";

const MainUser = () => {
  const [userEdit, setUserEdit] = useState({});

  const edit = (user) => {
    setUserEdit(user);
    console.log("Estoy en edit");
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home name="GESTION DE USUARIOS " />}>
            <Route path="users" element={<UserList edit={edit} />} />
          </Route>

          <Route path="/home" element={<Home name="CREACIÓN DE USUARIO" />}>
            <Route path="create" element={<Create />} />
          </Route>

          <Route
            path="/home"
            element={<Home name="ACTUALIZACIÓN DE USUARIO" />}
          >
            <Route path="update" element={<Update user={userEdit} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MainUser;
