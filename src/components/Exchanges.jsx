import { Card, Col, Row } from "antd";
import React from "react";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";

const Exchanges = () => {
  // const { data: data } = useGetCryptoExchangesQuery("binance");
  const { data: data } = useGetCryptoExchangesQuery();
  console.log("data=" + JSON.stringify(data));
  console.log("data=" + JSON.stringify(data?.data?.rates));

  const rates = data?.data?.rates;

  const obj = {};

  for (var key in rates) {
    // Console logs all the values in the objArr Array:
    console.log(key, rates[key]);
  }

  // const keyValue = (input) =>
  //   Object.entries(input).forEach(([key, value]) => {
  //     console.log(key, value);
  //   });

  // keyValue(data?.data);

  // console.log("Exchanges=" + data);
  // console.log("Exchanges=" + JSON.stringify(data));

  // console.log("Exchanges=" + JSON.stringify(data?.name));

  // console.log("Exchanges=" + JSON.stringify(data?.description));

  // console.log("Exchanges=" + JSON.stringify(data?.links.twitter));

  return (
    <>
      <Row>
        <Col>
          <Card>
            <p>Hello</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Exchanges;
