import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import React, { HTMLAttributes } from "react";


interface ICartItem {
  img: StaticImageData;
  title: string;
  price: number;

}

interface IButton extends HTMLAttributes<HTMLButtonElement | HTMLDivElement> {
  showArrow?: boolean;
  name: string;
}

const cartItem: NextPage<ICartItem> = ({ img, title, price,  }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center gap-3">
        <Image alt="" src={img} className="h-[100px] w-[100px] " />
        <div>
          <h2 className="text-14px">{title}</h2>
          <h3 className="text-[14px]">
            1kg x{" "}
            <span className="text-[14px] font-semibold">{`${price}`}</span>
          </h3>
        </div>
      </div>
      
    </div>
  );
};

export default cartItem;
