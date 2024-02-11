import { Avatar, Card, Row, Typography } from "antd";

import React from "react";
import { CardBody } from "react-bootstrap";
import GoogleSignoutButton from "./GoogleSignoutBtn";

const { Title } = Typography;

const Header = ({ setToken, user, setuser }) => {
  return (
    <>
      <Card className="mb-10">
        <CardBody>
          <Row justify={"space-between"} align={"middle"}>
            <div style={{ display: "flex", gap: "10px" }}>
              <Avatar src={user?.profileObj.imageUrl}></Avatar>
              <Title level={4} className="heading">
                {`Welcome ! ${user?.profileObj.name}`}
              </Title>
            </div>
            <GoogleSignoutButton setToken={setToken} user={user} />
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default Header;
