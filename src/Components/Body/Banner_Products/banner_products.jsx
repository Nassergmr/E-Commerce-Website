import "./banner_products.scss";
import img_1 from "/Images/forniture.jpg";
import img_2 from "/Images/images.jpg";
import img_3 from "/Images/images_sport.jpg";
import img_4 from "/Images/banner_products_img.jpg";
import img_5 from "/Images/Toy-List-Hero-Image.jpg";
import img_6 from "/Images/download.jpg";

export default function Banner_products() {
  return (
    <div>
      <div className="banner_products">
        <div className="banner_container">
          <div className="box">
            <div className="img_container">
              <img src={img_5} alt="" />
            </div>
            <h3>Toys</h3>
          </div>

          <div className="box">
            <div className="img_container">
              <img src={img_3} alt="" />
            </div>
            <h3>Sports</h3>
          </div>

          <div className="box">
            <div className="img_container">
              <img src={img_4} alt="" style={{ objectPosition: "top" }} />
            </div>
            <h3>Fashion</h3>
          </div>

          <div className="box">
            <div className="img_container">
              <img src={img_6} alt="" />
            </div>
            <h3>Cameras</h3>
          </div>

          <div className="box">
            <div className="img_container">
              <img src={img_1} alt="" />
            </div>
            <h3>Fornitures</h3>
          </div>

          <div className="box">
            <div className="img_container">
              <img src={img_2} alt="" style={{ objectPosition: "right" }} />
            </div>
            <h3>Gaming</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
