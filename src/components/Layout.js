import React from "react";
import Nav from "./nav/Nav";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { reactLocalStorage } from "reactjs-localstorage";

import { setCurrentUser } from "../../redux/currentUser";
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedUser = reactLocalStorage.getObject("loggedUser");

    dispatch(setCurrentUser(loggedUser));
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
