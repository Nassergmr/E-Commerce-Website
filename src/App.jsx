import { useState, createContext } from "react";
import "./App.scss";
import Nave_menu from "./Components/Header/Navebar/nave_menu";
import Navebar from "./Components/Header/Navebar/navebar";
import Hero from "../src/Components/Header/Hero/hero";
import Animated_text from "./Components/Body/Animated_Text/animated_text";
import Banner_sm from "./Components/Body/Banner_3/banner_sm";
import Main_card_men from "./Components/Body/Men_Clothes/men";
import Main_card_Women from "./Components/Body/Women_Clothes/women";
import New_arrivals from "./Components/Body/New_Arrivals_Clothes/new_arrivals";
import Banner_1 from "./Components/Body/Banner_1/banner_1";
import Banner_2 from "./Components/Body/Banner_2/banner_2";
import Footer from "./Components/Footer/footer";
import Cart from "./Components/Body/Cart/cart";
export const CartContext = createContext(null);

function App() {
  const [menuhide, setMenuhide] = useState(false);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [clickedItems, setClickedItems] = useState({});

  return (
    <>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <Navebar
          menuhide={menuhide}
          setMenuhide={setMenuhide}
          cart={cart}
          setCart={setCart}
        />
        <Cart
          cart={cart}
          setCart={setCart}
          clickedItems={clickedItems}
          setClickedItems={setClickedItems}
        />
        <Nave_menu menuhide={menuhide} setMenuhide={setMenuhide} />
        <Hero />
        <Animated_text />
        <Banner_sm />
        <New_arrivals
          clickedItems={clickedItems}
          setClickedItems={setClickedItems}
        />
        <Banner_1 />
        <Main_card_men
          clickedItems={clickedItems}
          setClickedItems={setClickedItems}
        />
        <Banner_2 />
        <Main_card_Women
          clickedItems={clickedItems}
          setClickedItems={setClickedItems}
        />
        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
