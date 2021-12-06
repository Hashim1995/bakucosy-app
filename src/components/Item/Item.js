import Style from "./Item.module.scss";
import Image from "next/image";
const Item = ({ data }) => {
  const { title, imgList, price } = data;
  return (
    <div className={Style.wrap}>
      <div className={Style.top}>
        <Image
          alt="a"
          className={Style.img}
          src={imgList[0].src}
          layout="fill"
        />
      </div>

      <div className={Style.bottom}>
        <div className={Style.info}>
          <h6>{title}</h6>
          <p>{price}$</p>
        </div>
        <div className={Style.btns}>
          <button>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
