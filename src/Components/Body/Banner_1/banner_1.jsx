import "./banner_1.scss";
import { MdArrowForward } from "react-icons/md";

export default function Banner_1() {
  return (
    <div className="banner_1">
      <div className="box_container">
        <div className="box">
          <div className="content">
            <p>NEW ARRIVAL</p>
            <h3>TRENDING WOMEN SUNGLASSES</h3>
            <div className="button_cont">
              <p>Shop Now</p>
              <i>
                <MdArrowForward />
              </i>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <p>NEW ARRIVAL</p>
            <h3>NEW LATEST BAG COLLECTION</h3>

            <div className="button_cont">
              <p>Shop Now</p>
              <i>
                <MdArrowForward />
              </i>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <p>NEW ARRIVAL</p>
            <h3>
              SHOES SALE <span>Up to 35% Off</span>
            </h3>
            <div className="button_cont">
              <p>Shop Now</p>
              <i>
                <MdArrowForward />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
