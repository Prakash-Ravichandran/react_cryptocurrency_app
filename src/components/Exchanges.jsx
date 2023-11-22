import { Col, Row, Select, Table, Tag } from "antd";
import Column from "antd/es/table/Column";
import React, { useEffect, useState } from "react";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";
import { useGetcryptoExIDApiQuery } from "../services/cryptoExIDApi";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
const { Option } = Select;

const Exchanges = () => {
  let dataSourceArr = [];

  const [currencyName, setCurrName] = useState("ETH");
  const [country, setcountry] = useState();
  const { data: data } = useGetCryptoExchangesQuery({ currencyName });
  const { data: dropdownData } = useGetCrytoMarketsQuery(100);
  const { data: currencyDropdown } = useGetcryptoExIDApiQuery();
  console.log(currencyDropdown);

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

  const tags = ["poor", "loser"];

  useEffect(() => {
    Object.entries(rates || {}).map(([coinName, exchange], i) => {
      dataSourceArr = [
        ...dataSourceArr,
        {
          key: i,
          CURRENCY: coinName,
          EXCHANGE: exchange,
          COUNTRY: "t",
          TAGS: "H",
        },
      ];
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
            {currencyDropdown?.data?.map((coin, index) => {
              return (
                <Option
                  value={coin.id}
                  key={index}
                >{`${coin.id} - ${coin.name}`}</Option>
              );
            })}
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
            <Column
              title={"COUNTRY"}
              dataIndex={`COUNTRY`}
              key={"COUNTRY"}
              render={() => <>{`${currencyName}`}</>}
            />
            <Column
              title="TAGS"
              dataIndex="TAGS"
              key="TAGS"
              render={() => (
                <>
                  <Tag color="blue">Poor</Tag>
                </>
              )}
            />
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Exchanges;
