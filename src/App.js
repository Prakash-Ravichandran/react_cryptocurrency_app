import React from "react";
import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main"></div>
        <div className="footer"></div>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
