import Style from "./ItemList.module.scss";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Item from "../Item/Item";
import Checkbox from "antd/lib/checkbox";
import Radio from "antd/lib/radio";
import Tag from "antd/lib/tag";
import productList from "../../utils/productList";
import { useSelector, useDispatch } from "react-redux";
import { searchQuery } from "../../../redux/search";
const ItemList = () => {
  const dispatch = useDispatch();
  const [productAllList, setProductAllList] = useState(null);
  const [filterVisibile, setFilterVisibile] = useState(false);
  const [sortValue, setSortValue] = useState(1);
  const [priceValue, setPriceValue] = useState(0);
  const { CheckableTag } = Tag;
  const tagsData = [
    "Bathroom",
    "Classic",
    "Contemporary",
    "Decor",
    "Essential",
    "Grooming",
    "Interier",
    "Kitchen",
    "Leather",
    "Lighting",
    "Minimak",
    "Practical",
    "Tableware",
    "Travel",
  ];
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

  useEffect(() => {
    if (productAllList !== null) {
      if (sortValue === 1) {
        productAllList.sort((a, b) =>
          a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
        );
      }
      if (sortValue === 2) {
        productAllList.sort((a, b) => {
          a.title < b.title ? 1 : b.title < a.title ? -1 : 0;
        });
      }
      if (sortValue === 3) {
        productAllList.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (sortValue === 4) {
        productAllList.sort((a, b) => {
          return b.price - a.price;
        });
      }
    }
  }, [sortValue]);

  return (
    <div className="container">
      <div className={Style.topWrap}>
        <div className={Style.top}>
          <p
            onClick={() => {
              setFilterVisibile((value) => !value);
            }}
          >
            Filter
          </p>
          <div>
            <input
              onChange={(e) => dispatch(searchQuery(e.target.value))}
              type="search"
              placeholder="Search in products"
              className=""
            />{" "}
            <SearchIcon />
            <span></span>
          </div>
        </div>
        <div
          className={`${Style.bottom} ${
            filterVisibile ? Style.auto : Style.zero
          }`}
          id="headerBottom"
        >
          <div
            className={filterVisibile ? Style.filterShow : Style.filterHidden}
          >
            <Row>
              <Col xs={24} md={12} lg={6}>
                <div className={Style.sortWrap}>
                  <h6 className={Style.filtersTitle}>Sorty by</h6>
                  <Radio.Group
                    className={Style.sortWrap}
                    onChange={(e) => setSortValue(e.target.value)}
                    value={sortValue}
                  >
                    <Radio defaultChecked value={1}>
                      Popularity
                    </Radio>
                    <Radio value={2}>Average rating</Radio>

                    <Radio value={3}>Price: High to Low</Radio>
                    <Radio value={4}>Price: Low to High</Radio>
                  </Radio.Group>
                </div>
              </Col>

              <Col xs={24} md={12} lg={6}>
                <div className={Style.colorWrap}>
                  <h6 className={Style.filtersTitle}>Price</h6>
                  <Radio.Group
                    className={Style.priceWrap}
                    onChange={(e) => setPriceValue(e.target.value)}
                    value={priceValue}
                  >
                    <Radio value={0}>All</Radio>
                    <Radio value={50}>$0 - $50</Radio>
                    <Radio value={100}>$50 - $100</Radio>
                    <Radio value={150}>$100 - $150</Radio>
                    <Radio value={200}>$150 - $200</Radio>
                    <Radio value={20000}>$200+</Radio>
                  </Radio.Group>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6}>
                <div className={Style.colorWrap}>
                  <h6 className={Style.filtersTitle}>Color</h6>
                  <Checkbox.Group
                    className={`${Style.filterGroup} filterGroup`}
                    style={{ width: "100%" }}
                  >
                    <Checkbox style={{ color: "#3c6ee3" }} value="Blue">
                      Blue
                    </Checkbox>
                    <Checkbox style={{ color: "#c55050" }} value="Brown">
                      red
                    </Checkbox>
                    <Checkbox style={{ color: "#777777" }} value="Gray">
                      Gray
                    </Checkbox>
                    <Checkbox style={{ color: "#05ac92" }} value="Green">
                      Green
                    </Checkbox>
                    <Checkbox style={{ color: "#dc9814" }} value="Orange">
                      Orange
                    </Checkbox>
                    <Checkbox value="White">White</Checkbox>
                  </Checkbox.Group>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6}>
                <div className={Style.tagsWrap}>
                  <h6 className={Style.filtersTitle}>Tags</h6>
                  <div>
                    {tagsData.map((tag) => (
                      <CheckableTag className={Style.filterTags} key={tag}>
                        {tag}
                      </CheckableTag>
                    ))}
                  </div>
                </div>
              </Col>
              <button className={`${Style.filterBtn} black-button`}>
                get filtered products
              </button>
            </Row>
          </div>
        </div>
      </div>
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
