import { Card } from "antd";
import React from "react";

import { CardBody, CardFooter } from "react-bootstrap";
import GoogleSignoutButton from "./GoogleSignoutBtn";

const Signout = ({ setToken }) => {
  return (
    <>
      <Card>
        <CardBody>
          <p>are you sure you want to logout</p>
        </CardBody>
        <CardFooter>
          <GoogleSignoutButton setToken={setToken} />
        </CardFooter>
      </Card>
    </>
  );
};

export default Signout;
