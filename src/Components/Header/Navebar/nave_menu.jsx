import "./nave_menu.scss";
import { FiShoppingBag } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import { FaBicycle } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { FiGift } from "react-icons/fi";
import { FiMusic } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiFeather } from "react-icons/fi";
import { useEffect, useRef } from "react";

/* eslint-disable-next-line react/prop-types */
export default function Nave_menu({ menuhide, setMenuhide }) {
  const menuRef = useRef(null);

    const toggleMenu = () => {
      setMenuhide(!menuhide);
    }
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuhide(false);
      }
    }
    if (menuhide) {
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
  }, [menuhide, setMenuhide]);

  return (
    <>
      {menuhide && (
        <div
          className="overlay"
          onClick={toggleMenu}
        />
      )}
      <nav onClick={toggleMenu} ref={menuRef} className={`nave_menu ${menuhide ? "true" : "false"}`}>
        <ul>
          <li className="hover">
            <i>
              <FiShoppingBag />
            </i>
            <h5>Fashion</h5>
          </li>

          <li className="hover">
            <i>
              <FiMonitor />
            </i>
            <h5>Electronics</h5>
          </li>

          <li>
            <i>
              <FaBicycle />
            </i>
            <h5>Bikes</h5>
          </li>

          <li>
            <i>
              <FiHome />
            </i>
            <h5>Home & Garden</h5>
          </li>

          <li>
            <i>
              <FiGift />
            </i>
            <h5>Gifts</h5>
          </li>

          <li>
            <i>
              <FiMusic />
            </i>
            <h5>Music</h5>
          </li>

          <li>
            <i>
              <FiHeart />
            </i>
            <h5>Health & Beauty</h5>
          </li>

          <li>
            <i>
              <FiFeather />
            </i>
            <h5>Pets</h5>
          </li>
        </ul>
      </nav>
    </>
  );
}
