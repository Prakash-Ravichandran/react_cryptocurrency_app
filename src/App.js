import React, { useState } from "react";
import {
  Contact,
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  HomePage,
  Navbar,
} from "./components";

import NewsComponent from "./components/NewsComponent";

import { Layout } from "antd";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { store } from "./app/store";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signout from "./components/Signout";

const App = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState({});

  if (!token) {
    return <Login setToken={setToken} user={user} setUser={setUser} />;
  }

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
                    <Route
                      path="/"
                      element={
                        <HomePage
                          setToken={setToken}
                          user={user}
                          setUser={setUser}
                        />
                      }
                    ></Route>
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

                    <Route
                      exact
                      path="/news"
                      element={<NewsComponent />}
                    ></Route>
                    <Route
                      exact
                      path="/contact"
                      element={<Contact setToken={setToken} user={user} />}
                    ></Route>
                    <Route
                      exact
                      path="/signout"
                      element={<Signout setToken={setToken} />}
                    ></Route>
                    {/* <Route exact path="/login" element={<Login />}></Route> */}
                  </Routes>
                </div>
              </Layout>
              <Footer />
              {/* <div className="footer">
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
              </div> */}
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
