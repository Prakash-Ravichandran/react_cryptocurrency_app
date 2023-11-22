import { Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";

const Exchanges = () => {
  const currencyName = "ETH";
  const dataSourceArr = [];
  const { data: data } = useGetCryptoExchangesQuery({ currencyName });
  const [dataSourceState, setDataSourceState] = useState([]);
  const rates = data?.data?.rates;

  const columns = [
    {
      title: "CURRENCY",
      dataIndex: "CURRENCY",
      key: "CURRENCY",
    },
    {
      title: "EXCHANGE",
      dataIndex: "EXCHANGE",
      key: "EXCHANGE",
    },
  ];

  useEffect(() => {
    Object.entries(rates || {}).map(([coinName, exchange], i) => {
      console.log("i=" + i, "coinName=" + coinName, "exchanges=" + exchange);
      dataSourceArr.push({
        key: i,
        CURRENCY: coinName,
        EXCHANGE: exchange,
      });
    });
    setDataSourceState(dataSourceArr);
  }, [rates]);

  return (
    <>
      <Row gutter={[32, 32]}>
        <Col>
          <Table columns={columns} dataSource={dataSourceState} />
        </Col>
      </Row>
    </>
  );
};

export default Exchanges;
