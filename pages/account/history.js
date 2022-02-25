import AccountLayout from "../../src/components/Account/AccountLayout";
import Head from "next/head";
import History from "../../src/components/Account/History/History";
const history = () => {
  return (
    <div>
      <Head>
        <title>Your order history</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountLayout>
        <History />
      </AccountLayout>
    </div>
  );
};

export default history;
