import React from "react";
import { bool, func } from "prop-types";
import Style from "./ProductDetail.module.scss";
import { Row, Col } from "antd";
import { useState } from "react";
import { Rate } from "antd";
import ImageGallery from "react-image-gallery";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const ProductDetail = ({ data }) => {
  const { title, imgList, price, about, stockCount, rate } = data;
  const [qualityVal, setQualityVal] = useState(1);
  const images = imgList.map((item) => ({
    original: item.src,
    thumbnail: item.src,
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
    <section className={Style.main}>
      <div className="container">
        <Row>
          <Col className={Style.left} xl={8}>
            <div className={Style.leftTop}>
              <h1>{title}</h1>
              <h3>{price} $</h3>
            </div>
            <div className={Style.leftBottom}>
              <p>{about.description}</p>
              <Rate className={Style.rate} value={rate} />
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
  );
};

export default ProductDetail;
