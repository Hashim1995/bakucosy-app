import { useEffect } from "react";
import Link from "next/link";
import Modal from "antd/lib/modal";
import Dropdown from "antd/lib/dropdown";
import Style from "./Nav.module.scss";
import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/logo-black.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import categories from "../../utils/categories";
import { useSelector } from "react-redux";
import Log from "../Log/Log";
const Nav = () => {
  const mobile = useSelector((state) => state.isMobile.value);
  const [mobileModal, setMobileModal] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [logModal, setLogModal] = useState(false);
  const [hooverCatgegory, setHooverCatgegory] = useState(false);

  const handleScroll = (e) => {
    if (e.target.scrollTop > 300) {
      setScroll(true);
      if (hooverCatgegory) {
        document
          .getElementsByClassName("ant-dropdown-placement-bottomLeft")[0]
          .parentNode.classList.add("categorySticky");
      }
    }
    if (e.target.scrollTop < 50) {
      setScroll(false);
      if (hooverCatgegory) {
        document
          .getElementsByClassName("ant-dropdown-placement-bottomLeft")[0]
          .parentNode.classList.remove("categorySticky");
      }
    }
  };
  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  });

  const menuOnMobile = (
    <div className={Style.menuLeftGroupMobile}>
      <Link className="menuItemOnMobile" href="/">
        Home
      </Link>
      <Link className="menuItemOnMobile" href="/">
        Products
      </Link>
      <Link className="menuItemOnMobile" href="/">
        Categories
      </Link>
      <Link className="menuItemOnMobile" href="/">
        About
      </Link>
      <Link className="menuItemOnMobile" href="/">
        Contact
      </Link>
    </div>
  );

  const categoriesOverlay = (
    <div className={Style.categoriesOverlay}>
      {categories.map((category, i) => (
        <Link passHref key={i} href="/">
          <div className={Style.categoriesOverlayItems}>
            <img src={category.img.src} alt="" />
            <h4>{category.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <nav className={`${Style.Nav} ${scroll && Style.Top}`}>
      <div className="container">
        {!mobile ? (
          <>
            <div className={Style.menuLeftGroup}>
              <Link passHref href="/">
                <div>
                  {" "}
                  Home <HomeOutlinedIcon />
                </div>
              </Link>
              <Link passHref href="#">
                <div>
                  {" "}
                  Products <ShoppingCartOutlinedIcon />
                </div>
              </Link>

              <Link passHref href="#">
                <Dropdown
                  onVisibleChange={() => setHooverCatgegory(true)}
                  className="navbarCategories"
                  overlayClassName="zzzzz"
                  overlay={categoriesOverlay}
                >
                  <div>
                    Categories <CategoryOutlinedIcon />
                  </div>
                </Dropdown>
              </Link>

              {/* <Link href="#">
                <div>
                  {" "}
                  About <HelpOutlineOutlinedIcon />
                </div>
              </Link>
              <Link href="#">
                <div>
                  {" "}
                  Contact <PhoneEnabledOutlinedIcon />
                </div>
              </Link> */}
            </div>
            <div className={Style.menuCenterGroup}>
              <Link passHref={true} href="/">
                <a className={Style.logoWrap}>
                  {" "}
                  <Image
                    className={Style.navLogo}
                    alt="baku cosy shop logo"
                    src={logo}
                  />
                </a>
              </Link>
            </div>
            <div className={Style.menuRightGroup}>
              <div onClick={() => setLogModal(true)}>
                {" "}
                Sign in <AccountCircleOutlinedIcon />
              </div>

              <Link passHref href="/Cart">
                <div>
                  {" "}
                  Cart <AddShoppingCartOutlinedIcon />
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            <MenuIcon
              onClick={() => setMobileModal(true)}
              className={Style.MenuHamburgerIcon}
            />
            <Modal
              className={Style.mobileMenuModal}
              visible={mobileModal}
              footer={null}
              onCancel={() => setMobileModal(false)}
            >
              {menuOnMobile}
            </Modal>
            <div className={Style.menuCenterGroup}>
              <Link passHref={true} href="#">
                <a>
                  {" "}
                  <Image
                    className={Style.navLogo}
                    alt="baku cosy shop logo"
                    src={logo}
                  />
                </a>
              </Link>
            </div>
            <div className={Style.menuRightGroup}>
              <Link href="/login">Sign in</Link>

              <Link href="/Cart">Cart</Link>
            </div>
          </>
        )}
      </div>
      <Modal
        width={"40vw"}
        title="Sign in/up"
        visible={logModal}
        footer={null}
        onCancel={() => setLogModal(false)}
      >
        <Log />
      </Modal>
    </nav>
  );
};

export default Nav;
