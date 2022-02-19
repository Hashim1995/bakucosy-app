import Home from "./home/home";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detectDevice } from "../redux/device";
import { set_User_DB } from "../redux/user_DB";

export default function Index() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser.value);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const users_DB = localStorage.getItem("users_DB");
      dispatch(set_User_DB(JSON.parse(users_DB)));
    }
  }, []);

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
