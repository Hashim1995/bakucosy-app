import Style from "./ItemList.module.scss";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Item from "../Item/Item";
import Checkbox from "antd/lib/checkbox";
import Radio from "antd/lib/radio";
import Tag from "antd/lib/tag";
import { Spin } from "antd";
import productList from "../../utils/productList";
import { useSelector, useDispatch } from "react-redux";
import { searchQuery } from "../../../redux/search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
const ItemList = () => {
  const dispatch = useDispatch();
  const [productAllList, setProductAllList] = useState(null);
  const [filterVisibile, setFilterVisibile] = useState(false);
  const [sortValue, setSortValue] = useState(1);
  const [priceValue, setPriceValue] = useState(0);
  const [getData, setGetdata] = useState(false);
  const [loader, setLoader] = useState(false);
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
      const arrayList = [];
      for (let value of Object.values(arr)) {
        arrayList.push(value);
      }

      setProductAllList(arrayList.flat());
    };
    getFullProductList(productList);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (Array.isArray(productAllList)) {
        if (sortValue === 1) {
          let sorted = productAllList.sort((a, b) => {
            return b.popularity - a.popularity;
          });
          setLoader(false);
          setProductAllList(sorted);
        }
        if (sortValue === 2) {
          let sorted = productAllList.sort((a, b) => {
            return a.popularity - b.popularity;
          });
          setLoader(false);
          setProductAllList(sorted);
        }
        if (sortValue === 3) {
          let sorted = productAllList.sort((a, b) => {
            return b.price - a.price;
          });
          setLoader(false);
          setProductAllList(sorted);
        }
        if (sortValue === 4) {
          let sorted = productAllList.sort((a, b) => {
            return a.price - b.price;
          });
          setLoader(false);
          setProductAllList(sorted);
        }
      }
    }, 100);
  }, [productAllList, sortValue]);

  const radioFunc = (e) => {
    setLoader(true);
    setSortValue(e.target.value);
  };

  return (
    <div className="container">
      <div className={Style.topWrap}>
        <div className={Style.top}>
          {console.log("rendered")}
          <p
            onClick={() => {
              setFilterVisibile((value) => !value);
            }}
          >
            Filter <FilterAltIcon />
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
                    onChange={radioFunc}
                    value={sortValue}
                  >
                    <Radio value={1}>Popularity</Radio>
                    <Radio value={2}>Average rating</Radio>

                    <Radio value={3}>Price: High to Low</Radio>
                    <Radio value={4}>Price: Low to High</Radio>
                  </Radio.Group>
                </div>
              </Col>

              <Col xs={24} md={12} lg={6}>
                <div className={Style.colorWrap}>
                  <h6 className={Style.filtersTitle}>Price</h6>
                  <Radio.Group className={Style.priceWrap} value={priceValue}>
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
              <button
                onClick={() => setGetdata}
                className={`${Style.filterBtn} black-button`}
              >
                get filtered products
              </button>
            </Row>
          </div>
        </div>
      </div>
      {
        <Row gutter={24}>
          {}
          {productAllList &&
            productAllList.map((item, index) => (
              <Col key={index} md={8} sm={12} xs={24} xl={6}>
                <Item data={item} />
              </Col>
            ))}
        </Row>
      }
    </div>
  );
};

export default ItemList;
