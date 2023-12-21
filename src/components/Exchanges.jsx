import { Col, Row, Select, Table } from "antd";
import Column from "antd/es/table/Column";
import React, { useEffect, useState } from "react";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";
import { useGetcryptoExIDApiQuery } from "../services/cryptoExIDApi";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import { useGetgeneralNewsApiQuery } from "../services/generalNewsApi";

const { Option } = Select;

const Exchanges = () => {
  let dataSourceArr = [];

  const [currencyName, setCurrName] = useState("ETH");
  const [exchanges, setExchange] = useState();
  const [country, setcountry] = useState();
  const { data: data } = useGetCryptoExchangesQuery({ currencyName });
  const { data: dropdownData } = useGetCrytoMarketsQuery(100);
  const { data: currencyDropdown } = useGetcryptoExIDApiQuery();
  const { data: cryptoList, isFetching } = useGetCrytoMarketsQuery();
  const { data: news } = useGetgeneralNewsApiQuery();

  console.log("news=" + JSON.stringify(news));

  console.log(exchanges);

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

  const tags = ["HIGH", "LOW"];

  useEffect(() => {
    Object.entries(rates || {}).map(([coinName, exchange], i) => {
      setExchange(exchange);
      dataSourceArr = [
        ...dataSourceArr,
        {
          key: i,
          CURRENCY: coinName,
          EXCHANGE: exchange,
          COUNTRY: "",
          LEVEL: exchange > 40 ? "High" : "Low",
        },
      ];
    });

    setDataSourceState(dataSourceArr);
  }, [rates]);

  return (
    <>
      <Row gutter={[32, 32]}>
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

        <Column title={"LEVEL"} dataIndex={"LEVEL"} key={"LEVEL"}></Column>
      </Table>
    </>
  );
};

export default Exchanges;
