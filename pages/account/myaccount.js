import React from "react";
import Head from "next/head";
import MyAccount from "../../src/components/Account/MyAccount/MyAccount";
import AccountLayout from "../../src/components/Account/AccountLayout";
const MainProfile = () => {
  return (
    <div>
      <Head>
        <title>Account</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountLayout>
        <MyAccount />
      </AccountLayout>
    </div>
  );
};

export default MainProfile;
