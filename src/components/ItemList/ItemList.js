import Style from "./ItemList.module.scss";
import { useEffect, useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Item from "../Item/Item";
import productList from "../../utils/productList";
const ItemList = () => {
  const [productAllList, setProductAllList] = useState(null);
  useEffect(() => {
    const getFullProductList = (arr) => {
      let arrayList = [];
      for (let value of Object.values(arr)) {
        arrayList.push(value);
      }

      setProductAllList(arrayList.flat());
    };
    getFullProductList(productList);
  }, []);
  return (
    <div className="container">
      <Row gutter={24}>
        {}
        {productAllList &&
          productAllList.map((item, index) => (
            <Col key={index} span={6}>
              <Item data={item} />
            </Col>
          ))}
      </Row>
      {/* <Row gutter={24}>
        {productList[0].decoration.map((item, index) => (
          <Col key={index} span={6}>
            <Item data={item} />
          </Col>
        ))}
      </Row>
      <Row gutter={24}>
        {productList[0].essentials.map((item, index) => (
          <Col key={index} span={6}>
            <Item data={item} />
          </Col>
        ))}
      </Row>
      <Row gutter={24}>
        {productList[0].interior.map((item, index) => (
          <Col key={index} span={6}>
            <Item data={item} />
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default ItemList;
