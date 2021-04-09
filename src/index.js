import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Components/Navbar";
import Particles from "./Components/Particles";
import reportWebVitals from "./reportWebVitals";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-tiger-transition/styles/main.min.css";

ReactDOM.render(
   <Router>
      <Navigation />
      <Particles />
      <Routes>
         <App />
      </Routes>
   </Router>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
