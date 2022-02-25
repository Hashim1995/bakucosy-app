import React from "react";
import Style from "./myAccount.module.scss";
import { Descriptions, Badge } from "antd";
import { useSelector } from "react-redux";

const MyAccount = () => {
  const loggedUser = useSelector((state) => state.loggedUser.value);
  return (
    <div>
      {" "}
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item label="Name">
          {loggedUser.user.name}
        </Descriptions.Item>
        <Descriptions.Item label="Surname">
          {loggedUser.user.surname}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {loggedUser.user.email}
        </Descriptions.Item>
        <Descriptions.Item label="Phone number">
          {loggedUser.user.phone}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">
          {loggedUser.user.gender}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default MyAccount;
