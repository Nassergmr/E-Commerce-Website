import { useState } from "react";
import "./App.scss";
import Nave_menu from "./Components/Header/Navebar/nave_menu";
import Navebar from "./Components/Header/Navebar/navebar";
import Hero from "../src/Components/Header/Hero/hero";
import Banner_products from "./Components/Body/Banner_Products/banner_products";
import Animated_text from "./Components/Body/Animated_Text/animated_text";
import Banner_sm from "./Components/Body/Banner_Small/banner_sm";
import Main_card_men from "./Components/Body/Men_Clothes_Component/main_card_men";
import Main_card_Women from "./Components/Body/Women_Clothes_Component/main_card_women";
import New_arrivals from "./Components/Body/New_Arrivals/new_arrivals";
import Banner_1 from "./Components/Body/Banner_1/banner_1";
import Banner_2 from "./Components/Body/Banner_2/banner_2";
import Footer from "./Components/Footer/footer";
import Cart from "./Components/Body/Cart/cart";
// import Shopping_cart from "./Components/Body/Shopping_Cart/shopping_cart";

function App() {
  const [menuhide, setMenuhide] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <>
      <div>
        <Navebar
          menuhide={menuhide}
          setMenuhide={setMenuhide}
          cart={cart}
          setCart={setCart}
        />
        <div>
          <Cart cart={cart} setCart={setCart} />
        </div>
        <Nave_menu menuhide={menuhide} setMenuhide={setMenuhide}/>
        <Hero />
        <Banner_products />
        <Animated_text />
        <Banner_sm />
        <New_arrivals />
        <Banner_1 />
        <Main_card_men />
        <Banner_2 />
        <Main_card_Women />
        <Footer />
      </div>
    </>
  );
}

export default App;
