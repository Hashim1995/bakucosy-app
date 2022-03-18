import { useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Modal from "antd/lib/modal";
import Dropdown from "antd/lib/dropdown";
import Style from "./Nav.module.scss";
import { useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import Image from "next/image";
import { Divider } from "antd";
import logo from "../../assets/images/logo-black.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import categories from "../../utils/categories";
import { useSelector } from "react-redux";
import Log from "../Log/Log";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";

const Nav = () => {
  const mobile = useSelector((state) => state.isMobile.value);
  const loggedUser = useSelector((state) => state.currentUser.value);

  const [mobileModal, setMobileModal] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [logModal, setLogModal] = useState(false);
  const [hooverCatgegory, setHooverCatgegory] = useState(false);
  const router = useRouter();

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
          <a>
            <div className={Style.categoriesOverlayItems}>
              <img src={category.img.src} alt="" />
              <h4>{category.title}</h4>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );

  const userMenuDropdown = (
    <div className={Style.userMenuDropdown}>
      <ul>
        <li className={Style.userMenuItem}>
          <Link passHref href="/account/mainProfile">
            <a className={Style.userMenuDropdownA}>
              {" "}
              Account <AccountCircleOutlinedIcon />
            </a>
          </Link>
        </li>
        <Divider />
        <li className={Style.userMenuItem}>
          <Link passHref href="/">
            <a className={Style.userMenuDropdownA}>
              {" "}
              Cart <AddShoppingCartOutlinedIcon />
            </a>
          </Link>
        </li>{" "}
        <Divider />
        <li
          onClick={() => {
            reactLocalStorage.remove("loggedUser");
            signOut(auth)
              .then((res) => {
                console.log(res);
                router.reload();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          className={Style.userMenuDropdownA}
        >
          Log out <LogoutIcon />
        </li>
      </ul>
    </div>
  );

  return (
    <nav className={`${Style.Nav} ${scroll && Style.Top}`}>
      <div className="container">
        {!mobile ? (
          <>
            <div className={Style.menuLeftGroup}>
              <Link passHref href="/">
                <a>
                  <div>
                    {" "}
                    Home <HomeOutlinedIcon />
                  </div>
                </a>
              </Link>
              <Link passHref href="#">
                <a>
                  <div>
                    {" "}
                    Products <ShoppingCartOutlinedIcon />
                  </div>
                </a>
              </Link>

              <Link passHref href="#">
                <a>
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
                </a>
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
              {loggedUser && loggedUser.isLogged ? (
                <Dropdown
                  overlay={userMenuDropdown}
                  placement="bottomCenter"
                  trigger={["click"]}
                >
                  <div>
                    {loggedUser.value.email} <PersonOutlineIcon />
                  </div>
                </Dropdown>
              ) : (
                <div onClick={() => setLogModal(true)}>
                  {" "}
                  Sign in <AccountCircleOutlinedIcon />
                </div>
              )}

              <div>
                {" "}
                Cart <AddShoppingCartOutlinedIcon />
              </div>
            </div>
          </>
        ) : (
          <>
            §
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
