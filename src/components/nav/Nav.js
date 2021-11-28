import React from "react";
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
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import categories from "../../utils/categories";
import { useSelector } from "react-redux";
const Nav = () => {
  const mobile = useSelector((state) => state.isMobile.value);
  const [mobileModal, setMobileModal] = useState(false);
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
        <Link key={i} href="/">
          <div className={Style.categoriesOverlayItems}>
            <img src={category.img.src} alt="" />
            <h4>{category.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
  return (
    <nav className={Style.Nav}>
      {!mobile ? (
        <>
          <div className={Style.menuLeftGroup}>
            <Link href="/">
              <div>
                {" "}
                Home <HomeOutlinedIcon />
              </div>
            </Link>
            <Link href="/">
              <div>
                {" "}
                Products <ShoppingCartOutlinedIcon />
              </div>
            </Link>

            <Link href="/">
              <Dropdown
                className="navbarCategories"
                overlay={categoriesOverlay}
              >
                <div>
                  Categories <CategoryOutlinedIcon />
                </div>
              </Dropdown>
            </Link>

            <Link href="/">
              <div>
                {" "}
                About <HelpOutlineOutlinedIcon />
              </div>
            </Link>
            <Link href="/">
              <div>
                {" "}
                Contact <PhoneEnabledOutlinedIcon />
              </div>
            </Link>
          </div>
          <div className={Style.menuCenterGroup}>
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
          </div>
          <div className={Style.menuRightGroup}>
            <Link href="/login">
              <div>
                {" "}
                Sign in <AccountCircleOutlinedIcon />
              </div>
            </Link>

            <Link href="/Cart">
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
          </div>
          <div className={Style.menuRightGroup}>
            <Link href="/login">Sign in</Link>

            <Link href="/Cart">Cart</Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
