import Home from "./home/home";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import { Spin, Space } from "antd";
export default function Index({ data }) {
  const [products, setProducts] = useState(data);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/productlist/alo").then((res) =>
      console.log(res)
    );
  }, []);
  const getMoreProducts = async () => {
    setStart(start + 1);
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACK_END}/productlist/pagination`, {
        params: {
          page: start,
          limit: 8,
        },
      })
      .then((res) => {
        res.data.length > 0
          ? setProducts([...products, ...res.data])
          : setEnd(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={products.length}
        next={getMoreProducts}
        hasMore={true}
        loader={
          <div className="container indexProductLoadingSpinner">
            {end ? (
              <strong>Yay! You have seen it all</strong>
            ) : (
              <Spin size="medium" />
            )}
          </div>
        }
      >
        <Home data={products} />
      </InfiniteScroll>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACK_END}/productlist/pagination`,
    {
      params: {
        page: 1,
        limit: 12,
      },
    }
  );

  return {
    props: {
      data: data || {},
    },
  };

  // Pass data to the page via props
}
