"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useState, useEffect } from "react";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    // Set initial state based on Swiper's current position
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    // Swiper event listeners to update state when the user changes slides
    const updateButtonState = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    // Attach event listener for slide change
    swiper.on("slideChange", updateButtonState);

    // Cleanup event listeners on unmount
    return () => {
      swiper.off("slideChange", updateButtonState);
    };
  }, [swiper]);

  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} ${isBeginning ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => !isBeginning && swiper.slidePrev()}
        disabled={isBeginning}
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        className={`${btnStyles} ${isEnd ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => !isEnd && swiper.slideNext()}
        disabled={isEnd}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
