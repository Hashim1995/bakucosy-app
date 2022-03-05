import { useState } from "react";
import Style from "./Account.module.scss";
import Link from "next/link";
import { Row, Col } from "antd";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
const AccountLayout = ({ children }) => {
  let URLPath = useRouter().asPath;
  URLPath = URLPath.split("/");
  const selectedAccountPage = URLPath[URLPath.length - 1];

  return (
    <section className={Style.main}>
      <div className="container">
        <Row>
          <Col lg={6}>
            <div className={Style.left}>
              <h3>Hashim Hashimli</h3>
              <ul>
                <li
                  className={
                    selectedAccountPage === "myaccount" && Style.active
                  }
                >
                  <Link
                    onClick={() => setSelectedAccountPage("myaccount")}
                    passHref
                    href="/account/mainProfile"
                  >
                    <a>
                      {" "}
                      My Account <PersonOutlineIcon />
                    </a>
                  </Link>
                </li>
                <li className={selectedAccountPage === "edit" && Style.active}>
                  {" "}
                  <Link
                    onClick={() => setSelectedAccountPage("edit")}
                    passHref
                    href="/account/edit"
                  >
                    <a>
                      {" "}
                      Edit Account <ManageAccountsOutlinedIcon />
                    </a>
                  </Link>
                </li>
                <li
                  className={selectedAccountPage === "shipping" && Style.active}
                >
                  {" "}
                  <Link
                    onClick={() => setSelectedAccountPage("shipping")}
                    passHref
                    href="/account/shipping"
                  >
                    <a>
                      {" "}
                      Shipping address <HomeOutlinedIcon />
                    </a>
                  </Link>
                </li>
                <li
                  className={selectedAccountPage === "payment" && Style.active}
                >
                  {" "}
                  <Link
                    onClick={() => setSelectedAccountPage("payment")}
                    passHref
                    href="/account/payment"
                  >
                    <a>
                      {" "}
                      Payment methods <CreditCardIcon />
                    </a>
                  </Link>
                </li>
                <li className={selectedAccountPage === "order" && Style.active}>
                  {" "}
                  <Link
                    onClick={() => setSelectedAccountPage("order")}
                    passHref
                    href="/account/order"
                  >
                    <a>
                      {" "}
                      Order tracking <MyLocationIcon />
                    </a>
                  </Link>
                </li>
                <li
                  className={selectedAccountPage === "history" && Style.active}
                >
                  {" "}
                  <Link
                    onClick={() => setSelectedAccountPage("history")}
                    passHref
                    href="/account/history"
                  >
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
            <div className={Style.right}>{children}</div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AccountLayout;
