import "./cart.scss";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../../Redux/cartSlice";
import { IoMdClose } from "react-icons/io";
import cart_img from "/Images/Product_Men_Imgs/cart_img.jpg";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquareRemove } from "react-icons/ci";

/* eslint-disable-next-line react/prop-types */
export default function Cart({ cart, setCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const cartRef = useRef(null);

  function handle_cart() {
    setCart(!cart);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCart(false);
      }
    }
    if (cart) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent scrolling when drawer is open
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Re-enable scrolling when drawer is closed
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Clean up by enabling scrolling on unmount
    };
  }, [cart, setCart]);

  useEffect(() => {
    if (cart) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [cart]);

  return (
    <>
      {cart && <div className="overlay" onClick={handle_cart} />}

      <div ref={cartRef} className={`cart ${cart ? "true_" : "false_"}`}>
        <div className="cart_container">
          {cartItems.length === 0 ? (
            <div className="cart_empty">
              <h3>Your cart is empty, start SHOPPING</h3>
              <img src={cart_img} alt="" />
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="img_container">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="details">
                  <h3>${(item.price * item.quantity).toFixed(2)}</h3>

                  <i
                    className="plus_minus_delete"
                    onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                  >
                    <CiSquarePlus />
                  </i>

                  <h3>{item.quantity}</h3>

                  <i
                    className="plus_minus_delete"
                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                  >
                    <CiSquareMinus />
                  </i>

                  <i
                    className="plus_minus_delete"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    <CiSquareRemove />
                  </i>
                </div>
              </div>
            ))
          )}
        </div>

        <i className="close_i" onClick={handle_cart}>
          <IoMdClose />
        </i>
      </div>
    </>
  );
}
