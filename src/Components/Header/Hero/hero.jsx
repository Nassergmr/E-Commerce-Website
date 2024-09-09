import "./hero.scss";
import { MdArrowForward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaTruckFast} from "react-icons/fa6";
import { PiMoney } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="col_1">
          <div className="hero_container">
            <Swiper
              speed={500}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="row_1_A">
                  <div className="content">
                    <h3>LIFESTYLE COLLECTION</h3>
                    <h1>MEN</h1>
                    <h3>
                      SALE UP TO <span>30% OFF</span>
                    </h3>
                    <p>Get Free Shipping on orders over $80.00</p>
                    <button>Shop Now</button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="row_1_B">
                  <div className="content">
                    <h3>LIFESTYLE COLLECTION</h3>
                    <h1>WOMEN</h1>
                    <h3>
                      SALE UP TO <span>70% OFF</span>
                    </h3>
                    <p>New arrivals every week</p>
                    <button>Shop Now</button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="row_2">
              <div className="box_1">
                <div className="content">
                  <p>NEW ARRIVAL</p>
                  <h3>WINTER COLLECTION</h3>
                  <h3>SALE 20% OFF</h3>
                  <div className="button_cont">
                    <p>Shop Now</p>
                    <i>
                      <MdArrowForward />
                    </i>
                  </div>
                </div>
              </div>

              <div className="box_2">
                <div className="content">
                  <p>GAMING 4K</p>
                  <h3>DESKTOPS &</h3>
                  <h3>LAPTOPS</h3>
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
        </div>

        <div className="col_2">
              <div className="col_2_container">

                <div className="box">
                  <i> <FaTruckFast /> </i>
                  <div className="content">
                    <h3>Fast Delivery</h3>
                    <p>Start from $10</p>
                  </div>
                </div>

                <div className="box">
                  <i> <PiMoney/> </i>
                  <div className="content">
                    <h3>Money Guarantee</h3>
                    <p>7 Days Back</p>
                  </div>
                </div>

                <div className="box">
                  <i> <LuCalendarDays/> </i>
                  <div className="content">
                    <h3>365 Days</h3>
                    <p>For free return</p>
                  </div>
                </div>

                <div className="box">
                  <i> <MdOutlinePayments/> </i>
                  <div className="content">
                    <h3>Payment</h3>
                    <p>Secure system</p>
                  </div>
                </div>

              </div>
        </div>
      </div>
    </>
  );
}
