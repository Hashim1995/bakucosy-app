import Home from "./home/home";
import axios from "axios";
export default function Index({ data }) {
  console.log(data);
  return (
    <div>
      <Home />
    </div>
  );
}
export async function getStaticProps() {
  // Fetch data from external API
  const { data } = await axios.get(
    `https://bakucosybackend.vercel.app/productlist`
  );

  return {
    props: {
      data: data || {},
    },
  };

  // Pass data to the page via props
}
