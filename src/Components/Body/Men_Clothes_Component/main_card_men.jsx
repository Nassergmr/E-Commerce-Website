import "./main_card_men.scss";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { useGetproduct_dataByNameQuery } from "../../../Redux/product_data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cartSlice";

export default function Main_card_men() {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetproduct_dataByNameQuery(
    "product-collections?populate=*"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Extract product titles
  const productTitles = data.data.map(
    (productData) => productData.attributes.product_title
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1020, // max-width 950px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 950, // max-width 950px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 630, // max-width 630px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <>
      <div className="main_card_container">
        <div className="left" id="men">
          <div className="left_container">
            <div className="card">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2>Men's Fashion</h2>
              {productTitles.map((title, index) => (
                <p key={index}>{title}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <Slider {...settings}>
            {data.data.map((productData) => {
              const product = productData.attributes;

              return (
                <div key={productData.id} className="card">
                  <div className="img_container">
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}${
                        product.product_img.data[0].attributes.url
                      }`}
                      alt={product.product_title}
                    />
                  </div>
                  <div className="content">
                    <h3>{product.product_title}</h3>
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
                    <h5> ${product.product_price}</h5>
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: productData.id,
                            title: product.title,
                            price: product.product_price,
                            img: `${import.meta.env.VITE_BASE_URL}${
                              product.product_img.data[0].attributes.url
                            }`,
                          })
                        )
                      }
                    >
                      Add To Cart
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
