import Style from "./Header.module.scss";
import categories from "../../utils/categories";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Checkbox from "antd/lib/checkbox";
import Radio from "antd/lib/radio";
import Tag from "antd/lib/tag";
import { useSelector, useDispatch } from "react-redux";
import { selectMainCategory } from "../../../redux/selectedMainCategory";

const Header = () => {
  const dispatch = useDispatch();
  const [searchVisibile, setSearchVisibile] = useState(false);
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

  if (typeof window !== "undefined") {
    if (document.getElementById("headerBottom") !== null) {
      searchVisibile || filterVisibile
        ? (document.getElementById("headerBottom").style.height = "auto")
        : (document.getElementById("headerBottom").style.height = "0");
    }
  }

  return (
    <div className="container header">
      <section className={Style.wrap}>
        <div className={Style.top}>
          <div className={Style.left}>
            {categories.map((item, index) => (
              <p
                onClick={() => dispatch(selectMainCategory(item.title))}
                key={index}
              >
                {item.title} /
              </p>
            ))}
          </div>
          <div className={Style.right}>
            <p
              onClick={() => {
                setFilterVisibile((value) => !value);
                setSearchVisibile(false);
              }}
            >
              Filter
            </p>
            <p
              onClick={() => {
                setSearchVisibile((value) => !value);
                setFilterVisibile(false);
              }}
            >
              Search <SearchIcon />
            </p>
          </div>
        </div>
        <div className={Style.bottom} id="headerBottom">
          <div
            className={searchVisibile ? Style.showSearch : Style.hiddenSearch}
          >
            <input type="search" placeholder="Search" />
          </div>
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
                    <Radio value={1}>Default</Radio>
                    <Radio value={2}>Popularity</Radio>
                    <Radio value={3}>Average rating</Radio>
                    <Radio value={5}>Newness</Radio>
                    <Radio value={6}>Price: High to Low</Radio>
                    <Radio value={7}>Price: Low to High</Radio>
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
      </section>
    </div>
  );
};

export default Header;
