import AccountLayout from "../../src/components/Account/AccountLayout";
import Head from "next/head";
import Edit from "../../src/components/Account/Edit/Edit";
const edit = () => {
  return (
    <div>
      <Head>
        <title>Edit profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountLayout>
        <Edit />
      </AccountLayout>
    </div>
  );
};

export default edit;
