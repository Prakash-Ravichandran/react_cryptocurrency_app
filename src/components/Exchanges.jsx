import { Card, Col, Row, Select, Table, Typography } from "antd";
import Column from "antd/es/table/Column";
import { default as React, useEffect, useState } from "react";
import { CardBody } from "react-bootstrap";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";
import { useGetcryptoExIDApiQuery } from "../services/cryptoExIDApi";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import Header from "./Header";
import Loader from "./Loader";

const { Option } = Select;
const { Title } = Typography;

const Exchanges = ({ setToken, user, setUser }) => {
  let dataSourceArr = [];

  const [currencyName, setCurrName] = useState("ETH");
  const [exchanges, setExchange] = useState();
  const [country, setcountry] = useState();
  const { data: data, isFetching } = useGetCryptoExchangesQuery({
    currencyName,
  });
  const { data: dropdownData } = useGetCrytoMarketsQuery(100);
  const { data: currencyDropdown } = useGetcryptoExIDApiQuery();
  const { data: cryptoList } = useGetCrytoMarketsQuery();

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

  if (isFetching)
    return (
      <>
        <Row
          gutter={[24, 24]}
          className="news-row"
          justify={"center"}
          align={"middle"}
        >
          <Loader />
        </Row>
      </>
    );

  return (
    <>
      <Header user={user} setToken={setToken} setUser={setUser} />

      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Card className="">
            <CardBody>
              <Row justify={"flex-start"} align={"middle"} className="mb-10 ">
                <Title level={5} italic className="mr-5 link">
                  Select an Exchange :
                </Title>
                <Select
                  showSearch
                  className="select-news"
                  placeholder="Select a Currency"
                  optionFilterProp="children"
                  onChange={(value) => setCurrName(value)}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase())
                  }
                  value={currencyName}
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
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Table dataSource={dataSourceState}>
        <Column
          title={"CURRENCY"}
          dataIndex={"CURRENCY"}
          key={"CURRENCY"}
          className="exchange-col-title"
        ></Column>
        <Column
          title={`EXCHANGE of ${currencyName}`}
          dataIndex={"EXCHANGE"}
          key={"EXCHANGE"}
          className="exchange-col-title"
        ></Column>
        <Column
          title={"COUNTRY"}
          dataIndex={`COUNTRY`}
          key={"COUNTRY"}
          className="exchange-col-title"
          render={() => <>{`${currencyName}`}</>}
        />

        <Column
          title={"LEVEL"}
          dataIndex={"LEVEL"}
          key={"LEVEL"}
          className="exchange-col-title"
        ></Column>
      </Table>
    </>
  );
};

export default Exchanges;
