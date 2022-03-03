import Home from "./home/home";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detectDevice } from "../redux/device";
import { reactLocalStorage } from "reactjs-localstorage";
import { setCurrentUser } from "../redux/currentUser";
export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedUser = reactLocalStorage.getObject("loggedUser");

    dispatch(setCurrentUser(loggedUser));
  });
  useEffect(() => {
    if (window.innerWidth < 576) {
      dispatch(detectDevice());
    }
  });
  return (
    <div>
      <Home />
    </div>
  );
}
