import React from "react";
import Style from "./Account.module.scss";
import Link from "next/link";
import { Row, Col } from "antd";
import MyAccount from "./MyAccount/MyAccount";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountSubLayout from "./AccountSubLayout";
const AccountLayout = ({ children }) => {
  return (
    <section className={Style.main}>
      <div className="container">
        <Row>
          <Col lg={6}>
            <div className={Style.left}>
              <h3>Hashim Hashimli</h3>
              <ul>
                <li className={Style.active}>
                  <Link passHref href="/account/myaccount">
                    <a>
                      {" "}
                      My Account <PersonOutlineIcon />
                    </a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link passHref href="/account/edit">
                    <a>
                      {" "}
                      Edit Account <ManageAccountsOutlinedIcon />
                    </a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link passHref href="/">
                    <a>
                      {" "}
                      Shipping address <HomeOutlinedIcon />
                    </a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link passHref href="/">
                    <a>
                      {" "}
                      Payment methods <CreditCardIcon />
                    </a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link passHref href="/">
                    <a>
                      {" "}
                      Order tracking <MyLocationIcon />
                    </a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link passHref href="/">
                    <a>
                      {" "}
                      Order history <HistoryIcon />
                    </a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link passHref href="/">
                    <a>
                      {" "}
                      Log out <LogoutIcon />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={18}>
            <div className={Style.right}>
              {children}
              <AccountSubLayout />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AccountLayout;
