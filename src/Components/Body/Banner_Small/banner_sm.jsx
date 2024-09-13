import "./banner_sm.scss";

export default function Banner_sm() {
  return (
    <div className="banner_sm">
      <div className="banner_container">
        <div className="banner_text">
          <h2>All Selected Products</h2>
          <p>All our new arrivals in an exclusive brand selection</p>
        </div>
        <div className="button_cont">
          <a href="#new_arrivals">
            <button className="active">New Arrivals</button>
          </a>
          <a href="#men">
            <button>Men Category</button>
          </a>
          <a href="#women">
            <button>Women Category</button>
          </a>
        </div>
      </div>
    </div>
  );
}
