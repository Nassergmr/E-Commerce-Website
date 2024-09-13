import "./footer.scss";
import footer_img_play from "/Images/Product_Men_Imgs/128x128.png";
import footer_img_app from "/Images/Product_Men_Imgs/appstore.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row_container">
        <div className="row" style={{ width: "40%" }}>
          <p>
            Quality and style in every product is a priority. Shop with us for
            the latest arrivals and timeless classics, crafted to elevate your
            fashion experience.
          </p>
          <div className="img_container">
            <img src={footer_img_play} alt="" />
            <img src={footer_img_app} alt="" />
          </div>
        </div>

        <div className="row">
          <h3>About Us</h3>
          <ul>
            <li>Our Store</li>
            <li>Carrers</li>
            <li>Our Cares</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="row">
          <h3>Customer Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Information</li>
            <li>Return Policy</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div className="row">
          <h3>Contact Us</h3>
          <ul>
            <li>Address: 123 Main Street, Anytown, Morocco 12345</li>
            <li>Email: contact@example.com</li>
            <li>Phone: +1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
