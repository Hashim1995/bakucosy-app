import "antd/dist/antd.css";
import "../src/assets/styles/globals.scss";
import "../src/assets/styles/ant-customize.scss";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
