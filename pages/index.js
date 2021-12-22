import Home from "./home/home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export default function Index() {
  const dispatch = useDispatch();
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
