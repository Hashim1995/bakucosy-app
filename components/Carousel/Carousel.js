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
      <CarouselAnt dots={false} autoplay={true} arrows {...settings}>
        {carouselImages.map((item, index) => {
          console.log(item.img);
          return (
            <div key={index}>
              <img className={Style.CarouselImg} src={item.img.src} alt="" />
            </div>
          );
        })}
      </CarouselAnt>
    </div>
  );
};

export default Carousel;
