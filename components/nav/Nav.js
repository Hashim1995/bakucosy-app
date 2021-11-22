import React from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import Style from "./Nav.module.scss";
import Image from "next/image";
import logo from "../../assets/images/logo-black.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Menu } from "antd";
const Nav = () => {
  const { SubMenu } = Menu;
  return (
    <nav>
      <Menu className={Style.menu} mode="horizontal">
        <div className={Style.menuLeftGroup}>
          <Menu.Item
            key="Home"
            className={Style.menuItem}
            icon={<HomeOutlinedIcon />}
          >
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="Products"
            className={Style.menuItem}
            icon={<ShoppingCartOutlinedIcon />}
          >
            <Link href="/Products">Products </Link>
          </Menu.Item>
          <Menu.Item
            key="Categories"
            className={Style.menuItem}
            icon={<CategoryOutlinedIcon />}
          >
            <Link href="/Categories">Categories</Link>
          </Menu.Item>
          <Menu.Item
            key="About"
            className={Style.menuItem}
            icon={<HelpOutlineOutlinedIcon />}
          >
            <Link href="/About">About</Link>
          </Menu.Item>
          <Menu.Item
            key="Contact"
            className={Style.menuItem}
            icon={<PhoneEnabledOutlinedIcon />}
          >
            <Link href="/Contact">Contact</Link>
          </Menu.Item>
        </div>
        <div className={Style.menuCenterGroup}>
          <Menu.Item key="Logo">
            <Link passHref={true} href="/">
              <a>
                {" "}
                <Image
                  className={Style.navLogo}
                  alt="baku cosy shop logo"
                  src={logo}
                />
              </a>
            </Link>
          </Menu.Item>
        </div>
        <div className={Style.menuRightGroup}>
          <Menu.Item
            key="sign"
            className={Style.menuItem}
            icon={<AccountCircleOutlinedIcon />}
          >
            <Link href="/login">sign in</Link>
          </Menu.Item>
          <Menu.Item
            key="Cart"
            className={Style.menuItem}
            icon={<AddShoppingCartOutlinedIcon />}
          >
            <Link href="/Cart">Cart</Link>
          </Menu.Item>
        </div>
      </Menu>
    </nav>
  );
};

export default Nav;
