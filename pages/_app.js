import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import "../src/assets/styles/globals.scss";
import "../src/assets/styles/ant-customize.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Layout from "../src/components/Layout";
import { useEffect } from "react";
import NProgress from "nprogress";
import "../src/assets/styles/nprogress.css";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
