import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import React, { useState } from "react";
import { useGetgeneralNewsApiQuery } from "../services/generalNewsApi";
const { Title, Text } = Typography;
const { Option } = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const category = [
  "general",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

const NewsComponent = () => {
  const [newsCategory, setNewsCategory] = useState("general");
  const { data: news, isFetching } = useGetgeneralNewsApiQuery();

  console.log("News=" + JSON.stringify(news?.articles));

  if (isFetching) return "Loading ...";
  return (
    <>
      <Row gutter={[24, 24]} className="news-row">
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a news category"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase())
            }
          >
            {category.map((value, id) => (
              <Option value={value} key={id}>
                {value}
              </Option>
            ))}
          </Select>
        </Col>

        {news?.articles?.map((value, id) => {
          return (
            <>
              <Col xs={24} sm={12} lg={8} key={id}>
                <Card key={id}>
                  <a href={value?.url} target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-title" level={4}>
                        {value?.source?.name}
                      </Title>
                      <Avatar src={value?.image || demoImage}></Avatar>
                    </div>

                    <p className="news-description">{value?.description}</p>
                    <div className="news-image-container news-image-center">
                      <div>
                        <img src={value?.image || demoImage}></img>
                      </div>
                    </div>
                    <div className="provider-container">
                      <h3 className="news-description">{`${value?.content}`}</h3>
                    </div>
                  </a>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default NewsComponent;
