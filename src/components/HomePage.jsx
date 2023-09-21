import React from "react";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const HomePage = () => {
  return (
    <div>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row>
        <Col>
          <Statistic span={12} title="Total Cryptocurrencies"></Statistic>
          <Statistic span={12} title="Total Exchanges"></Statistic>
          <Statistic span={12} title="Total Market Cap"></Statistic>
          <Statistic span={12} title="Total 24h Volume"></Statistic>
          <Statistic span={12} title="Total Markets"></Statistic>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default HomePage;
