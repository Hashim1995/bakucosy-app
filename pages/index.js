import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detectDevice } from "../redux/device";
import Nav from "../src/components/nav/Nav";
import Carousel from "../src/components/Carousel/Carousel";
import Header from "../src/components/Header/Header";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.innerWidth < 576) {
      dispatch(detectDevice());
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Carousel />
      <Header />
    </div>
  );
}
