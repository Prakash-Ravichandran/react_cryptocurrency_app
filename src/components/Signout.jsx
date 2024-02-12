import { Card, Row, Typography } from "antd";
import React from "react";

import { CardBody } from "react-bootstrap";
import GoogleSignoutButton from "./GoogleSignoutBtn";

const { Title } = Typography;

const Signout = ({ setToken, user, setUser }) => {
  return (
    <>
      <Card>
        <CardBody>
          <Row justify={"space-between"} align={"middle"}>
            <div>
              <Title level={5} className="heading" type="primary" italic>
                {`${user?.profileObj.name} !`}
                {
                  "Hope You have explored all our cryptocurrencies, we are please to see you comeback & checkout the currencies."
                }
              </Title>
              <Title level={5} className="heading" type="primary" italic>
                {
                  " We will enroll new currencies every week & we will send you an update to you"
                }
                <span className="success">
                  {" "}
                  {` ${user?.profileObj.email} !`}
                </span>
              </Title>
            </div>
            <GoogleSignoutButton setToken={setToken} />
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default Signout;
