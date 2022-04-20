import Style from "./ItemModal.module.scss";
import { useState } from "react";
import { Col, Row } from "antd";
import { Carousel, Rate } from "antd";
import Slider from "react-slick";
const ItemModal = ({ data }) => {
  const { title, imgList, price, about, stockCount, rate } = data;
  const [qualityVal, setQualityVal] = useState(1);

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
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
                  qualityVal < stockCount ? setQualityVal(qualityVal + 1) : null
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
          <Slider className="itemModalSlick" {...settings}>
            {imgList.map((item, i) => {
              return <img className={Style.carouselImg} src={item} key={i} />;
            })}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default ItemModal;
