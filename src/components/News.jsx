import { Card, Row, Col } from "antd";
import { Typography } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";

import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Title } = Typography;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: newsList, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const value = newsList?.value;

  console.log(value);
  if (isFetching) return "Loading ...";

  return (
    <>
      <Row gutter={[24, 24]}>
        {value.map((newsItem, index) => {
          return (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card>
                <a href={newsItem.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>
                      {newsItem.name}
                    </Title>
                    <img
                      src={newsItem?.image?.thumbnail?.contentUrl || demoImage}
                      alt="news"
                    />
                  </div>
                  <p>
                    {newsItem.description.length > 100
                      ? `${newsItem.description.substring(0, 100)}...`
                      : newsItem.description}
                  </p>
                </a>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default News;
