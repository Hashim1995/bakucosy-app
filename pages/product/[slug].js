import axios from "axios";
import Head from "next/head";
import ProductDetail from "../../src/components/ProductDetail/ProductDetail";
const Product = ({ product }) => {
  return (
    <div>
      <Head>
        <title>{product && product.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {product && <ProductDetail data={product} />}
    </div>
  );
};
export default Product;

export async function getStaticPaths() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACK_END}/productlist/showall`
  );

  const paths = data.map((product) => {
    return {
      params: { slug: product.slug },
    };
  });

  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACK_END}/productlist/${slug}`
  );

  return {
    props: { product: data[0] },
    revalidate: 30,
  };
}
