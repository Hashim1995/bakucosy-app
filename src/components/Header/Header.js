import Style from "./Header.module.scss";
import categories from "../../utils/categories";
import { useDispatch } from "react-redux";
import { selectMainCategory } from "../../../redux/selectedMainCategory";

const Header = () => {
  const dispatch = useDispatch();
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
        </div>
      </section>
    </div>
  );
};

export default Header;
