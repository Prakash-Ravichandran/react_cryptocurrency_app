import { Card, Col, Row, Statistic, Typography } from "antd";
import millify from "millify";
import React from "react";
import { CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import Cryptocurrencies from "./Cryptocurrencies";
import Header from "./Header";
import Loader from "./Loader";
import NewsComponent from "./NewsComponent";

const { Title } = Typography;

const HomePage = ({ setToken, user, setUser }) => {
  const { data, isFetching } = useGetCrytoMarketsQuery(10);
  console.log(data);
  console.log("user =" + JSON.stringify(user));
  const globalStats = data?.data?.stats;

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
    <div>
      <Header user={user} setToken={setToken} setUser={setUser} />
      <Card className="card-shadow">
        <CardBody>
          <Row justify={"space-between"} align={"middle"}>
            <Title level={2} className="heading" type="success" italic>
              Global Crypto Statistics
            </Title>
            {/* <GoogleSignoutButton setToken={setToken} user={user} /> */}
          </Row>
        </CardBody>
        {/* <Row justify={"flex-start"} align={"middle"}>
          <Title level={3} className="heading">
            {`Welcome ! ${user.profileObj.name}`}
          </Title>
          <Avatar src={user.profileObj.imageUrl}></Avatar>
        </Row> */}
        <Row gutter={[32, 32]}>
          <Col span={12}>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats && globalStats.total}
              className="heading"
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Exchanges"
              value={millify(globalStats && globalStats.totalExchanges)}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Market Cap"
              value={`$${millify(globalStats && globalStats.totalMarketCap)}`}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24h Volume"
              value={`$${millify(globalStats && globalStats.total24hVolume)}`}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={globalStats && globalStats.totalMarkets}
            ></Statistic>
          </Col>
        </Row>
      </Card>

      <div className="home-heading-container">
        <Title level={2} className="home-title" type="success" italic>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title" type="success" italic>
          Latest News
        </Title>
        <Title level={4} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <NewsComponent />
    </div>
  );
};

export default HomePage;
