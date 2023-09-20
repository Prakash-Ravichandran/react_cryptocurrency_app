import React from "react";
import {
  Navbar,
  HomePage,
  Exchanges,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "./components";

import { Routes, Route, Link, BrowserRouter, Router } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="app">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route
                    exact
                    path="/exchanges"
                    element={<Exchanges />}
                  ></Route>
                  <Route
                    exact
                    path="/cryptocurrencies"
                    element={<Cryptocurrencies />}
                  ></Route>
                  <Route
                    exact
                    path="/crypto/:coinId"
                    element={<CryptoDetails />}
                  ></Route>
                  <Route exact path="/news" element={<News />}></Route>
                </Routes>
              </div>
            </Layout>
          </div>
        </div>
        <div className="footer"></div>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
