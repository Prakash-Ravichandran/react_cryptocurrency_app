import { Card, Col, Row } from "antd";
import React from "react";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";

const Exchanges = () => {
  const { data: data } = useGetCryptoExchangesQuery("binance");
  console.log("Exchanges=" + data);
  console.log("Exchanges=" + JSON.stringify(data));

  console.log("Exchanges=" + JSON.stringify(data?.name));

  console.log("Exchanges=" + JSON.stringify(data?.description));

  console.log("Exchanges=" + JSON.stringify(data?.links.twitter));

  return (
    <>
      <Row>
        <Col>
          <Card>
            <p> {data?.name}</p>
            <p> {data?.description}</p>
            <p> {data?.links.twitter}</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Exchanges;
