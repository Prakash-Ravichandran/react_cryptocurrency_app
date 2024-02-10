import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { ContactMailOutlined } from "@mui/icons-material";
import { Avatar, Button, Menu, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../images/bitcoin_btc.svg";
const { Title } = Typography;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/" className="font-sanserif">
            CryptoMarkets
          </Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/" className="router-item">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies" className="router-item">
              Cryptocurrencies
            </Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges" className="router-item">
              Exchanges
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news" className="router-item">
              News
            </Link>
          </Menu.Item>
          <Menu.Item icon={<ContactMailOutlined />}>
            <Link to="/contact" className="router-item">
              Contact
            </Link>
          </Menu.Item>
          <Menu.Item icon={<ContactMailOutlined />}>
            <Link to="/signout" className="router-item">
              Signout
            </Link>
          </Menu.Item>
          {/* <Menu.Item icon={<ContactMailOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item> */}
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
