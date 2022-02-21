import React from "react";
import AccountSubLayout from "../../src/components/Account/AccountSubLayout";
import MyAccount from "../../src/components/Account/MyAccount/MyAccount";
import AccountLayout from "../../src/components/Account/AccountLayout";
const MainProfile = ({ children }) => {
  return (
    <div>
      <AccountLayout>
        <AccountSubLayout>
          <MyAccount />
        </AccountSubLayout>
      </AccountLayout>
    </div>
  );
};

export default MainProfile;
