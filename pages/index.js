import Home from "./home/home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detectDevice } from "../redux/device";
import { set_User_DB } from "../redux/user_DB";
export default function Index() {
  const dispatch = useDispatch();

  if (typeof window !== "undefined") {
    const authValue = localStorage.getItem("users_DB");

    dispatch(set_User_DB(JSON.parse(authValue)));
  }
  const mobile = useSelector((state) => state.users_DB.value);

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
