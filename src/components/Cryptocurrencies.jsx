import React, { Fragment } from "react";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import { useState } from "react";
import { Typography, Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";

const { Title } = Typography;

const Crytocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCrytoMarketsQuery(count);
  const [cryptos, setcryptoList] = useState(cryptoList?.data?.coins);
  console.log(cryptos);

  if (isFetching) return "Loading ...";

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => {
          return (
            <Col xs={24} sm={12} lg={6} key={currency.id}>
              <Link to={`/crypto/${currency.id}`}>
                <Card
                  className="card"
                  title={`${currency.rank}.${currency.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      hoverable
                    />
                  }
                  key={currency.id}
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Crytocurrencies;
