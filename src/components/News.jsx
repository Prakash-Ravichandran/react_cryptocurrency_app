import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment/moment";
import React, { useState } from "react";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const { Title, Text } = Typography;
const { Option } = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: newsList, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCrytoMarketsQuery(100);
  const value = newsList?.value;

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
      <Row gutter={[24, 24]} className="news-row">
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase())
              }
            >
              <Option value="crytpocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => (
                <Option value={coin.name}>{coin.name}</Option>
              ))}
            </Select>
          </Col>
        )}

        {value?.map((newsItem, index) => {
          return (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card>
                <a href={newsItem.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>
                      {/* {newsItem.name.length > 50
                        ? `${newsItem.name.substring(0, 100)}...`
                        : newsItem.name} */}
                      {newsItem.name}
                    </Title>
                    <span>
                      <img
                        src={
                          newsItem?.image?.thumbnail?.contentUrl || demoImage
                        }
                        alt="news"
                      />
                    </span>
                  </div>
                  <p>
                    {newsItem.description.length > 100
                      ? `${newsItem.description.substring(0, 100)}...`
                      : newsItem.description}
                  </p>
                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={
                          newsItem.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                      ></Avatar>
                      <Text>{newsItem.provider[0].name}</Text>
                    </div>
                    <Text>
                      {moment(newsItem.datePublished).startOf("ss").fromNow()}
                    </Text>
                  </div>
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
