import Style from "./Carousel.module.scss";
import { Carousel as CarouselAnt } from "antd";
import carouselImages from "../../assets/images/carouselImages/carouselImages";
const Carousel = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}></div>
    );
  };
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <CarouselAnt
        effect="fade"
        dots={true}
        autoplay={true}
        arrows
        {...settings}
      >
        {carouselImages.map((item, index) => {
          return (
            <div key={index}>
              <img className={Style.CarouselImg} src={item.img.src} alt="" />
              <div className="container">
                <div className={Style.textWrap}>
                  <h3 className={Style.title}>{item.title}</h3>
                  <h5 className={Style.category}>{item.category}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </CarouselAnt>
    </div>
  );
};

export default Carousel;
