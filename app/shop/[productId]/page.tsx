'use client';
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Product from "@/public/images/product1.png";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

import { useRouter } from "next/navigation";
import ContainerWrapper from "@/app/components/containerWrapper";
import ButtonRounded from "@/app/components/button/buttonRounded";
import { popularProductData } from "@/app/data/data";
import Footer from "@/app/components/footer/footer";
import { useDispatch } from "react-redux";
import { IProduct, add } from "@/app/redux/cartSlice";

const ProductView = ({ params }: { params: { productId: string } }) => {
  const dispatch = useDispatch();
  const selectedProduct = popularProductData.find(
    (product) => product.id.toString() === params.productId
  ) as
    | {
        id: number;
        image: StaticImageData;
        name: string;
        price: number;
        category: string;
      }
    | undefined;

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  const { name, price, category, image } = selectedProduct;
  const addToCart =(selectedProduct:IProduct)=>{
    dispatch(add(selectedProduct))


  }

  return (
    <>
      <ContainerWrapper>
        <section className="md:flex justify-start items-center gap-10 h-screen">
          <Image alt="" src={image} className="h-[550px] w-[550px]" data-aos='fade-right' />
          <div className="" data-aos='fade-left'>
            <h1 className="text-[36px] font-semibold mb-4 ">{name}</h1>
            <h2 className="text-[24px] text-green-700 font-medium">${price}</h2>
            <div className="w-full h-[1px]  bg-black mb-5 mt-5"></div>
            <div className="flex justify-between items-center gap-10">
              <div className="flex justify-start items-center gap-1">
                <p className=" text-[14px] ">Brand</p>
                <h2 className="text-xs md:text-lg font-medium">Sabji Bazar</h2>
              </div>
              <div className="flex justify-start items-start ml-4">
                <p>Share items:</p>
                <div className="flex justify-evenly items-center hover:text-green-600 gap-5">
                  <FaFacebook className=" mr-2 h-[18px] w-[18px]" />
                  <FaTwitter className=" h-6" />
                  <FaInstagram className="" />
                  <FaPinterest className="" />
                </div>
              </div>
            </div>
            <div className="w-full h-[1px]  bg-gray-500 mb-5 mt-5"></div>
            <p className="text-[14px] text-gray-400 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              magnam autem! Reiciendis iure commodi minima, voluptate cum
              tempora dolor sit amet consectetur adipisicing elit. Natus, magnam
              autem! Reiciendis iure commodi minima, voluptate cum t amet at?
            </p>
            {/* <div className="w-full h-[1px]  bg-black mb-5 mt-5 text-gray-400"></div> */}
            <ButtonRounded
              name="Add to Cart"
              className="bg-green-500 text-white items-center w-[200px] hover:text-green-500 hover:bg-white hover:border hover:border-green-500"
              showArrow={false}
              onClick={()=>{addToCart(selectedProduct)}}
            />
            <div className="w-full h-[1px]  bg-black mb-5 mt-5"></div>

            <h2 className="text-[14px] font-medium">
              Category:{" "}
              <span className="text-[14px] text-gray-400">{category}</span>
            </h2>
          </div>
        </section>
      </ContainerWrapper>
    </>
  );
};

export default ProductView;
