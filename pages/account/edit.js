import React from "react";
import AccountSubLayout from "../../src/components/Account/AccountSubLayout";
import AccountLayout from "../../src/components/Account/AccountLayout";
import EditAccount from "../../src/components/Account/EditAccount/EditAccount";
const General = ({ children }) => {
  return (
    <div>
      <AccountLayout>
        <AccountSubLayout>
          <EditAccount />
        </AccountSubLayout>
      </AccountLayout>
    </div>
  );
};

export default General;
