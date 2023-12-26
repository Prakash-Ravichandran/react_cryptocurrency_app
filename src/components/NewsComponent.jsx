import { Avatar, Card, Col, Row, Typography } from "antd";
import React from "react";
import { useGetgeneralNewsApiQuery } from "../services/generalNewsApi";
const { Title, Text } = Typography;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const NewsComponent = () => {
  const { data: news, isFetching } = useGetgeneralNewsApiQuery();

  console.log("News=" + JSON.stringify(news?.articles));

  if (isFetching) return "Loading ...";
  return (
    <>
      <Row gutter={[24, 24]} className="news-row">
        {news?.articles?.map((value, id) => {
          return (
            <>
              <Col xs={24} sm={12} lg={8} key={id}>
                <Card>
                  <a href={value?.url} target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-title" level={4}>
                        {value?.source?.name}
                      </Title>
                      <Avatar src={value?.image || demoImage}></Avatar>
                    </div>

                    <p className="news-description">
                      Headline:{value?.description}
                    </p>
                    <div className="news-image-container news-image-center">
                      <div>
                        <img src={value?.image || demoImage}></img>
                      </div>
                    </div>

                    <div className="provider-container">
                      <h3 className="news-description">{`Author: ${value?.content}`}</h3>
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
