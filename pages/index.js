import Home from "./home/home";
import axios from "axios";

import { useState } from "react";
export default function Index({ data }) {
  const [products, setProducts] = useState(data);
  const [start, setStart] = useState(1);

  const getMoreProducts = async () => {
    setStart(start + 1);
    const { newProducts } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACK_END}/productlist/pagination`,

      {
        params: {
          page: start,
          limit: 5,
        },
        headers: {
          "Access-Control-Allow-Credentials": true,
          crossorigin: true,
        },
      }
    );

    setProducts([...products, ...newProducts]);
  };

  return (
    <div>
      <Home data={products} />
      <button onClick={getMoreProducts}> laod more {start}</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACK_END}/productlist/showall`,
    {
      params: {
        page: 1,
        limit: 5,
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
