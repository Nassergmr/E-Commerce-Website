/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import cart_img from "/Images/Product_Men_Imgs/cart_img.jpg";
import { CartContext } from "../../../App";
import { CiSquarePlus, CiSquareMinus, CiSquareRemove } from "react-icons/ci";
import "./cart.scss";

export default function Cart({ cart, setCart, clickedItems, setClickedItems }) {
  const cartRef = useRef(null);
  const [cartItems, setCartItems] = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, [setCartItems]);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cart"); // Clear localStorage if cart is empty
    }
  }, [cartItems]);

  // Handle closing the cart when clicking outside
  function handle_cart() {
    setCart(!cart);
  }

  // Set initial quantities to 1 for all items in the cart
  useEffect(() => {
    const initialQuantities = cartItems.reduce((acc, item) => {
      acc[item.id] = quantities[item.id] || 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cartItems]);

  // Increase quantity of an item
  const increaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] + 1,
    }));
    setClickedItems({ ...clickedItems, [itemId]: true });
  };

  // Decrease quantity of an item
  const decreaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] > 1 ? prevQuantities[itemId] - 1 : 1,
    }));
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    setClickedItems((prevItems) => ({
      ...prevItems,
      [itemId]: false,
    }));
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });
    localStorage.setItem(
      "items",
      JSON.stringify({ ...clickedItems, [itemId]: false })
    );
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * quantities[item.id],
      0
    );
  };

  return (
    <>
      {cart && <div className="overlay" onClick={handle_cart} />}

      <div ref={cartRef} className={`cart ${cart ? "true_" : "false_"}`}>
        <div className="cart_container">
          {cartItems.length === 0 ? (
            <div className="cart_empty">
              <h3>Your cart is empty, start SHOPPING</h3>
              <img src={cart_img} alt="Empty Cart" />
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="img_container">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="details">
                  <h3 className="price">
                    ${(item.price * quantities[item.id]).toFixed(2)}
                  </h3>

                  <i
                    className="plus_minus_delete"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <CiSquarePlus />
                  </i>
                  <h3 className="quantity">{quantities[item.id]}</h3>
                  <i
                    className="plus_minus_delete"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <CiSquareMinus />
                  </i>

                  <i
                    className="plus_minus_delete"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <CiSquareRemove />
                  </i>
                </div>
              </div>
            ))
          )}
          <div
            className={`${cartItems.length === 0 ? "hidden_total" : "total"}`}
          >
            <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
            <button>Checkout</button>
          </div>
        </div>

        <i className="close_i" onClick={handle_cart}>
          <IoMdClose />
        </i>
      </div>
    </>
  );
}
