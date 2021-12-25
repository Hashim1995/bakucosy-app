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
            <Col key={index} md={8} sm={12} xs={24} xl={6}>
              <Item data={item} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ItemList;
