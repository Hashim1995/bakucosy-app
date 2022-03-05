import AccountLayout from "../../src/components/Account/AccountLayout";
import Head from "next/head";
import Profile from "../../src/components/Account/Profile/Profile";
const MainProfile = () => {
  return (
    <div>
      <Head>
        <title>Account</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountLayout>
        <Profile /> aasfaf
      </AccountLayout>
    </div>
  );
};

export default MainProfile;
