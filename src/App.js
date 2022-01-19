import { Provider } from "react-redux";
import "./App.css";

import CreateRequest from "./components/practiceRequest/Request";
import UpdateInformation from "./components/updateInformation/UpdateInformation";
import ShowRequest from "./components/showRequest/ShowRequest";
import Main from "./routes/Main.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
