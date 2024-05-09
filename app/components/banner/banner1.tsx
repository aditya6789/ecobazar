import React from "react";
import ButtonRounded from "../button/buttonRounded";

const Banner1 = () => {
  return (
    <div className="bg-banner1 w-[870px] h-[600px]">
      <h2>Fresh & Healthy Organic Food</h2>
      <div className="flex items-center">
        <h4>Sale up to</h4>
        <p>Free shipping on all your order</p>
        <ButtonRounded name="" />
      </div>
    </div>
  );
};

export default Banner1;
