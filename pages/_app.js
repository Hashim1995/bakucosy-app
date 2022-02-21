import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import "../src/assets/styles/globals.scss";
import "../src/assets/styles/ant-customize.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import Layout from "../src/components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
