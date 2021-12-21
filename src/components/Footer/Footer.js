import Style from "./Footer.module.scss";
import { Row, Col } from "antd";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className="container">
        <Row align="bottom">
          <Col className={Style.left} xl={20}>
            <ul>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                {" "}
                <Link href="#">FAQs</Link>
              </li>
              <li>
                {" "}
                <Link href="#">Order Tracking</Link>
              </li>
            </ul>
          </Col>
          <Col className={Style.right} xl={4}>
            <ul>
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <WhatsAppIcon />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
