import React from "react";

import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Space>
          <Link to="/" className="router-item">
            Home
          </Link>
          <Link to="/exchanges" className="router-item">
            Exhanges
          </Link>
          <Link to="/cryptocurrencies" className="router-item">
            Cryptocurrencies
          </Link>
          <Link to="/contact" className="router-item">
            Contact
          </Link>
          <Link to="/news" className="router-item">
            News
          </Link>
        </Space>
        <div>
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            <Link to="/" style={{ color: "white", textAlign: "center" }}>
              Crypto Markets <br />
            </Link>
          </Typography.Title>
        </div>

        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Developed & Maintained by Prakash
        </Typography.Title>
        <div>
          <Space>
            <GithubOutlined className="social-icons" />
            <a
              href="https://github.com/Prakash-Ravichandran"
              target="_blank"
              className="social-icons-color"
            >
              Github
            </a>

            <LinkedinOutlined className="social-icons" />
            <span>
              <a
                href="https://www.linkedin.com/in/prakash-ravichandran/"
                target="_blank"
                className="social-icons-color"
              >
                LinkedIn
              </a>
            </span>
          </Space>
        </div>
      </div>
    </>
  );
};

export default Footer;
