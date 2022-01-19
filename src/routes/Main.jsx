import React from "react";
import Banner from "../commons/Banner";
import Navbar from "../commons/Navbar";
import CreateRequest from "../components/practiceRequest/Request";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectModule from "../components/selectModuleCompany/SelectModule";
import TableRequest from "../components/seePracticeRequest/TableRequest";
import UpdateInformation from "../components/updateInformation/UpdateInformation";
import ShowRequest from "../components/showRequest/ShowRequest";

const Main = () => {
  return (
    <>
      <Router>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<SelectModule />} />
          <Route path="/home" element={<TableRequest />} />

          <Route
            path="/crear-solicitud-practicante"
            element={<CreateRequest type={true} />}
          />

          <Route path="/update-information" element={<UpdateInformation />} />
          <Route path="/show-request" element={<ShowRequest />} />
          <Route
            path="/update-request"
            element={<CreateRequest type={false} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
