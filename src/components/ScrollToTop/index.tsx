"use client";
import React from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-10 right-10">
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-main-green flex justify-center items-center cursor-pointer"
      >
        <FaChevronUp className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

export default ScrollToTop;
