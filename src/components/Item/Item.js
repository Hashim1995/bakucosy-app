import Style from "./Item.module.scss";
import Image from "next/image";
import { Modal } from "antd";
import { useState } from "react";
import ItemModal from "./ItemModal/ItemModal";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const Item = ({ data }) => {
  const { slug, _id: id, title, imgList, price, barcode, categoryId } = data;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const uuid = uuidv4();
  return (
    <div className={`${Style.wrap}`}>
      {/* Link component */}
      <Link scroll={true} passHref title={title} href={`/product/${slug}`}>
        {/* Link component */}

        <div className={Style.top}>
          <Image
            alt="a"
            className={Style.img1}
            src={imgList[0]}
            layout="fill"
          />
          <Image
            alt="a"
            className={Style.img2}
            src={imgList[1]}
            layout="fill"
          />
        </div>
      </Link>
      <div className={Style.bottom}>
        <div className={Style.info}>
          <Link scroll={true} passHref title={title} href={`/product/${slug}`}>
            {title}
          </Link>
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
