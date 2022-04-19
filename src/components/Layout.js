import React from "react";
import Nav from "./nav/Nav";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { reactLocalStorage } from "reactjs-localstorage";
import { detectDevice } from "../../redux/device";
import { setCurrentUser } from "../../redux/currentUser";
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedUser = reactLocalStorage.getObject("loggedUser");
    dispatch(setCurrentUser(loggedUser));
    if (window.innerWidth < 576) {
      dispatch(detectDevice());
    }
  });

  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
