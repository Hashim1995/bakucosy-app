import React from "react";
import { bool, func } from "prop-types";
import Style from "./ProductDetail.module.scss";
import { useState } from "react";

import { Select, Row, Col, Rate, Tabs, Descriptions, Badge, Tag } from "antd";
import ImageGallery from "react-image-gallery";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const ProductDetail = ({ data }) => {
  const {
    bardocode,
    title,
    discount,
    imgList,
    price,
    about,
    stockCount,
    isStock,
    isNew,
    isSale,
    rate,
    colors = about.colors,
    sizes = about.sizes,
    weight = about.weight,
    dimensions = about.dimensions,
    origin = about.origin,
    materials = about.materials,
    tags = about.tags,
    description = about.description,
  } = data;
  const { TabPane } = Tabs;
  const { Option } = Select;
  const [qualityVal, setQualityVal] = useState(1);
  const [showMoreTags, setShowMoreTags] = useState(false);
  const images = imgList.map((item) => ({
    original: item,
    thumbnail: item,
  }));

  const LeftNav = React.memo(({ disabled, onClick }) => {
    return (
      <button
        type="button"
        className={`${Style.arrow} image-gallery-icon image-gallery-left-nav`}
        disabled={disabled}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        <ArrowBackIosIcon />
      </button>
    );
  });

  LeftNav.displayName = "LeftNav";

  LeftNav.propTypes = {
    disabled: bool.isRequired,
    onClick: func.isRequired,
  };

  const RightNav = React.memo(({ disabled, onClick }) => {
    return (
      <button
        type="button"
        className={`${Style.arrow} image-gallery-icon image-gallery-right-nav`}
        disabled={disabled}
        onClick={onClick}
        aria-label="Next Slide"
      >
        <ArrowForwardIosIcon />
      </button>
    );
  });

  RightNav.displayName = "RightNav";

  RightNav.propTypes = {
    disabled: bool.isRequired,
    onClick: func.isRequired,
  };

  return (
    <>
      <section className={Style.main}>
        <div className="container">
          <Row>
            <Col className={Style.left} xl={8}>
              <div className={Style.leftTop}>
                <h1>{title}</h1>
                <h3>{price} $</h3>
              </div>
              <div className={Style.leftBottom}>
                <p>
                  {about.description.length > 250
                    ? about.description.substring(0, 250) + "..."
                    : about.description}{" "}
                </p>
                <Rate disabled className={Style.rate} value={rate} />
                <br />
                <label className={Style.labelColor}>Color:</label>
                <Select defaultValue={colors[0]} style={{ width: 200 }}>
                  {colors.map((color, i) => (
                    <Option key={i} value={color}>
                      <Badge
                        className={Style.badgeSelectColor}
                        color={color}
                        text={color}
                      />
                    </Option>
                  ))}
                </Select>
                <br />
                <br />
                <div className={Style.btnGroup}>
                  <button
                    onClick={() =>
                      qualityVal > 1 ? setQualityVal(qualityVal - 1) : null
                    }
                  >
                    -
                  </button>
                  <div>{qualityVal}</div>
                  <button
                    onClick={() =>
                      qualityVal < stockCount
                        ? setQualityVal(qualityVal + 1)
                        : null
                    }
                  >
                    +
                  </button>
                </div>
                <button className={`${Style.addBtn} black-button`}>
                  add to cart
                </button>
              </div>
            </Col>
            <Col className={Style.right} xl={16}>
              <ImageGallery
                renderLeftNav={(onClick, disabled) => (
                  <LeftNav onClick={onClick} disabled={disabled} />
                )}
                renderRightNav={(onClick, disabled) => (
                  <RightNav onClick={onClick} disabled={disabled} />
                )}
                infinite={true}
                thumbnailPosition="right"
                items={images}
                showPlayButton={false}
                slideDuration={150}
                additionalClass={Style.orginal}
              />
            </Col>
          </Row>
        </div>
      </section>
      <div className="container">
        <section className={Style.bottom}>
          <Tabs
            tabBarStyle={{ color: "var(--dark-grey)" }}
            defaultActiveKey="1"
          >
            <TabPane className={Style.tabPane} tab="Description" key="1">
              <p className={Style.description}>{description}</p>
            </TabPane>
            <TabPane
              className={Style.tabPane}
              tab="Additional information"
              key="2"
            >
              <div className={Style.detailed}>
                <Descriptions
                  size="small"
                  title="More detailed information"
                  bordered
                  column={{ xxl: 1, xl: 1, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                  {title && (
                    <Descriptions.Item label="Title">{title}</Descriptions.Item>
                  )}
                  {bardocode && (
                    <Descriptions.Item label="Bardocode">
                      {bardocode}
                    </Descriptions.Item>
                  )}

                  {price && (
                    <Descriptions.Item label="Amount">
                      {price}$
                    </Descriptions.Item>
                  )}
                  {isStock && (
                    <Descriptions.Item label="Aviable">
                      {isStock ? (
                        <span className={Style.yes}>Yes</span>
                      ) : (
                        <span className={Style.no}>No</span>
                      )}
                    </Descriptions.Item>
                  )}
                  {isNew && (
                    <Descriptions.Item label="Status">
                      {isNew ? (
                        <span className={Style.yes}>New</span>
                      ) : (
                        <span className={Style.no}>Used</span>
                      )}
                    </Descriptions.Item>
                  )}
                  {discount && (
                    <Descriptions.Item label="Discount">
                      {" "}
                      {discount ? (
                        <span className={Style.yes}>{discount}%</span>
                      ) : (
                        <span className={Style.no}>No discount</span>
                      )}
                    </Descriptions.Item>
                  )}
                  {origin && (
                    <Descriptions.Item label="Made in">
                      {origin}
                    </Descriptions.Item>
                  )}
                  {weight && (
                    <Descriptions.Item label="Weight">
                      {weight}
                    </Descriptions.Item>
                  )}
                  {dimensions && (
                    <Descriptions.Item label="Dimensions">
                      {dimensions}
                    </Descriptions.Item>
                  )}
                  {materials && (
                    <Descriptions.Item label="Materials">
                      <div className={Style.materialWrap}>
                        {materials.map((material, i) => (
                          <span key={i}>{material},</span>
                        ))}
                      </div>
                    </Descriptions.Item>
                  )}

                  {sizes && (
                    <Descriptions.Item label="Sizes">
                      <div className={Style.sizesWrap}>
                        {sizes.map((size, i) => (
                          <span key={i}>{size},</span>
                        ))}
                      </div>
                    </Descriptions.Item>
                  )}
                  {colors && (
                    <Descriptions.Item
                      className={Style.badgeWrap}
                      label="Colors"
                    >
                      {colors.map((color, i) => (
                        <div key={i}>
                          <Badge className={Style.badge} color={color} />
                        </div>
                      ))}
                    </Descriptions.Item>
                  )}
                  {description && (
                    <Descriptions.Item label="Description">
                      {description}
                    </Descriptions.Item>
                  )}
                  {tags && (
                    <Descriptions.Item label="Tags">
                      <div className={Style.tagsWrap}>
                        {tags.map((tag, i) =>
                          showMoreTags ? (
                            <Tag key={i}>{tag}</Tag>
                          ) : (
                            i < 6 && <Tag key={i}>{tag}</Tag>
                          )
                        )}
                        {tags.length > 6 && (
                          <Tag
                            className={Style.tagsShowBtn}
                            onClick={() => setShowMoreTags(!showMoreTags)}
                          >
                            {!showMoreTags ? "...more" : "hide"}
                          </Tag>
                        )}
                      </div>
                    </Descriptions.Item>
                  )}
                </Descriptions>
              </div>
            </TabPane>
          </Tabs>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
