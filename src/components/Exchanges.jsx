import { Card, Col, Row, Table } from "antd";
import React from "react";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";

const Exchanges = () => {
  const currencyName = "ETH";
  // const { data: data } = useGetCryptoExchangesQuery("BTC");
  // const { data: data } = useGetCryptoExchangesQuery("BTC");
  const { data: data } = useGetCryptoExchangesQuery({ currencyName });

  console.log(data);

  const rates = data?.data?.rates;

  // for (var key in rates) {
  //   // Console logs all the values in the objArr Array:
  //   console.log(key, rates[key]);
  //   // rates.push({key, rates[key]});
  // }

  return (
    <>
      <Row>
        <Col>
          <Card>
            <p>Static Value</p>
            <Table />;
            {rates &&
              Object.entries(rates).map(([coinName, Value], i) => {
                return (
                  <ul value={i} key={i}>
                    <li>
                      <span key={i}>
                        {coinName} : {Value}
                      </span>
                    </li>
                  </ul>
                );
              })}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Exchanges;
