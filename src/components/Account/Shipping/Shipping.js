import React from "react";
import Style from "./Shiping.module.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Card, Col, Row, Descriptions } from "antd";
const Shipping = () => {
  const { Meta } = Card;
  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={12}>
          <Col span={12}>
            <Card className={Style.card}>
              <Descriptions
                column={1}
                title="Description"
                bordered
                size={"small"}
                labelStyle={{ padding: "8px 8px" }}
                contentStyle={{ padding: "8px 8px" }}
              >
                <Descriptions.Item label="Country">
                  Azerbaijan test 2
                </Descriptions.Item>
                <Descriptions.Item label="City">Baku</Descriptions.Item>
                <Descriptions.Item label="District">
                  Narimanov
                </Descriptions.Item>
                <Descriptions.Item label="Street">
                  Aliyar Aliyev
                </Descriptions.Item>
                <Descriptions.Item label="House">26</Descriptions.Item>
                <Descriptions.Item label="Entrance">3</Descriptions.Item>
                <Descriptions.Item label="Floor">17</Descriptions.Item>
                <Descriptions.Item label="Apartment">276</Descriptions.Item>
                <Descriptions.Item label="Detailed">
                  Azerbaijan, Baku, Narimanov, Aliyar Aliyev, 26, 276
                </Descriptions.Item>
              </Descriptions>
              <div className={Style.bottom}>
                <DeleteOutlineOutlinedIcon key="setting" />
                <EditOutlinedIcon key="edit" />
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              actions={[
                <DeleteOutlineOutlinedIcon key="setting" />,
                <EditOutlinedIcon key="edit" />,
              ]}
            >
              <Meta title="Card title" description="This is the description" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Shipping;
