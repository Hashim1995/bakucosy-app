import Home from "./home/home";
import axios from "axios";
export default function Index({ data }) {
  return (
    <div>
      <Home data={data} />
    </div>
  );
}
export async function getStaticProps() {
  // Fetch data from external API
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACK_END}/productlist`
  );

  return {
    props: {
      data: data || {},
    },
  };

  // Pass data to the page via props
}
