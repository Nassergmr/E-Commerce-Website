/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import "./animated_text.scss";
import SplitstringUsingRegex from "./a_t";
import { motion } from "framer-motion";

const heading = "BLACK FRIDAY SALE!";
const text =
  "PAY ONLY FOR YOUR LOVING PRODUCTS. DON'T MISS OUT ON OUR LIMITED TIME OFFERS AND SPECIAL DEALS JUST FOR YOU!";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const staggerChildren = {
  staggerChildren: 0.05,
};

export default function Animated_text() {
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimationTriggered(true);
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    }, options);

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const headingChars = SplitstringUsingRegex(heading);
  const textChars = SplitstringUsingRegex(text);

  return (
    <div className="animated_text">
      <div className="text_container">
        <motion.h1
          ref={headingRef}
          initial="hidden"
          animate={isAnimationTriggered ? "reveal" : "hidden"}
          transition={staggerChildren}
        >
          {headingChars.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.5 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          ref={textRef}
          initial="hidden"
          animate={isAnimationTriggered ? "reveal" : "hidden"}
          transition={staggerChildren}
        >
          {textChars.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.35 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}
