import Style from "./Item.module.scss";
import Image from "next/image";
import { Modal } from "antd";
import { useState } from "react";
import ItemModal from "./ItemModal/ItemModal";
const Item = ({ data }) => {
  const { title, imgList, price } = data;
  const [isModalVisible, setIsModalVisible] = useState(false);
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
          <button onClick={() => setIsModalVisible(true)}>add to cart</button>
        </div>
      </div>
      <Modal
        className={`${Style.modal} itemModal`}
        title={title}
        visible={isModalVisible}
        footer={false}
        onCancel={() => setIsModalVisible(false)}
      >
        <ItemModal data={data} />
      </Modal>
    </div>
  );
};

export default Item;
