import React from "react";
import {
  Contact,
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  HomePage,
  Navbar,
  News,
} from "./components";

import NewsComponent from "./components/NewsComponent";

import { Layout, Space, Typography } from "antd";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { store } from "./app/store";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Provider store={store}>
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
                    <Route path="crypto">
                      <Route path=":coinId" element={<CryptoDetails />} />
                    </Route>

                    <Route exact path="/news" element={<News />}></Route>
                    <Route
                      exact
                      path="/newscomp"
                      element={<NewsComponent />}
                    ></Route>
                    <Route exact path="/contact" element={<Contact />}></Route>
                  </Routes>
                </div>
              </Layout>
              <div className="footer">
                <Typography.Title
                  level={5}
                  style={{ color: "white", textAlign: "center" }}
                >
                  <Link to="/">
                    Cryptoverse <br />
                  </Link>
                  All Rights Reserved
                </Typography.Title>
                <Space>
                  <Link to="/">Home</Link>
                  <Link to="/exchanges">Exhanges</Link>
                  <Link to="/news">News</Link>
                </Space>
              </div>
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
