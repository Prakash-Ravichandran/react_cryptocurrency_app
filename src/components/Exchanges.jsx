import { Col, Row, Select, Table } from "antd";
import Column from "antd/es/table/Column";
import React, { useEffect, useState } from "react";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";
import { useGetcryptoExIDApiQuery } from "../services/cryptoExIDApi";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
const { Option } = Select;

const Exchanges = () => {
  // const currencyName = "AMD";
  const dataSourceArr = [];

  const [currencyName, setCurrName] = useState("ETH");

  const { data: data } = useGetCryptoExchangesQuery({ currencyName });
  const { data: dropdownData } = useGetCrytoMarketsQuery(100);
  const { data: currencyDropdown } = useGetcryptoExIDApiQuery();
  console.log(data);

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
      <Row>
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Currency"
            optionFilterProp="children"
            onChange={(value) => setCurrName(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase())
            }
          >
            <Option value="crytpocurrency">Cryptocurrency</Option>
            {currencyDropdown?.data?.map((coin, index) => (
              <Option value={coin.id}>{coin.id}</Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        <Col>
          <Table dataSource={dataSourceState}>
            <Column
              title={"CURRENCY"}
              dataIndex={"CURRENCY"}
              key={"CURRENCY"}
            ></Column>
            <Column
              title={`EXCHANGE of ${currencyName}`}
              dataIndex={"EXCHANGE"}
              key={"EXCHANGE"}
            ></Column>
            <Column title={"Tags"} />
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Exchanges;
