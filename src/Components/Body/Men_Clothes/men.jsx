/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import { CartContext } from "../../../App";
import "./men.scss";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import menProducts from "../../../Json/men_data.json";

export default function Main_card_men({ clickedItems, setClickedItems }) {
  const [cartItems, setCartItems] = useContext(CartContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1020, // max-width 950px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950, // max-width 950px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 630, // max-width 630px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450, // max-width 450px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setClickedItems(JSON.parse(storedItems));
    }
  }, []);

  const handleAddtoCart = (item) => {
    let isPresent = false;
    cartItems.forEach((element) => {
      if (item.id === element.id) {
        isPresent = true;
      }
    });

    if (isPresent) return;

    setCartItems([...cartItems, item]);
    setClickedItems((prev) => ({
      ...prev,
      [item.id]: true,
    }));

    localStorage.setItem(
      "items",
      JSON.stringify({ ...clickedItems, [item.id]: true })
    );
  };

  return (
    <>
      <div className="main_card_container">
        <div className="left" id="men">
          <div className="left_container">
            <div className="card">
              <h2>Men's Fashion</h2>
              {menProducts.map((item, index) => (
                <p key={index}>{item.title}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <Slider {...settings}>
            {menProducts.map((item) => {
              return (
                <div key={item.id} className="card">
                  <div className="img_container">
                    <img rel="preload" src={item.image} alt="" />
                  </div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <div className="stars_container">
                      <FaStar
                        className="star_filled"
                        style={{ color: "rgba(251,174,0,255)" }}
                      />
                      <FaStar
                        className="star_filled"
                        style={{ color: "rgba(251,174,0,255)" }}
                      />
                      <FaStar
                        className="star_filled"
                        style={{ color: "rgba(251,174,0,255)" }}
                      />
                      <FaStar
                        className="star_filled"
                        style={{ color: "rgba(251,174,0,255)" }}
                      />
                      <CiStar className="star_empty" />
                    </div>
                    <h5> ${item.price}</h5>
                    <button
                      onClick={() => handleAddtoCart(item)}
                      disabled={clickedItems[item.id]}
                    >
                      <span>
                        {clickedItems[item.id] ? (
                          <FaRegCheckCircle
                            style={{ width: "72.58px", height: "12px" }}
                          />
                        ) : (
                          "Add to Cart"
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
