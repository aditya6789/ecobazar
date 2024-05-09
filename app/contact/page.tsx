"use client";
import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import LinkBackground from "../components/navbar/linkBackground";
import ContainerWrapper from "../components/containerWrapper";

import Map from "@/public/images/map.png";

import Image from "next/image";
import Input from "../components/input/input";
import ButtonRounded from "../components/button/buttonRounded";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { contactData } from "../data/data";

const ContactPage = () => {
  const items = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <div>
        <ContainerWrapper>
          <div
            className="md:flex  items-center gap-10 mt-20"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="md:w-[312px] w-full h-[517px] shadow-xl bg-white ">
              {contactData.map((data , index) => (
                <div className="my-12 mx-10 flex flex-col justify-center items-center" key={index}>
                  <Image
                    alt=""
                    src={data.image}
                    className="w-[51px] h-[51px] mb-5 "
                  />
                  <h2 className="text-[16px] text-center">{data.name}</h2>
                </div>
              ))}
            </div>
            <div
              className="w-full md:w-[986px] h-[507px] shadow-xl p-6"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h2 className="text-[14px] md:text-[24px] font-semibold">Just Say Hello!</h2>
              <p className="text-[12px] md:text-[16px] md:w-[480px] w-[300px]">
                Do you fancy saying hi to me or you want to get started with
                your project and you need my help? Feel free to contact me.
              </p>
              <div className="flex justify-between items-center gap-5 mb-5 mt-10">
                <Input placeholder="Template Cookie" type="text" className="text-xs md:text-lg" />
                <Input placeholder="zakirsoft@gmail.com" type="email" className="text-xs md:text-lg"  />
              </div>
              <Input placeholder="Title" type="text" className="text-xs md:text-lg mb-5" />
              <Input
                placeholder="Subjects"
                type="text"
                className="h-[100px] mb-5 text-xs md:text-lg"
              />
              <ButtonRounded
                name="Send Message"
                className="bg-green-500 text-white"
                showArrow={false}
              />
            </div>
            {items.products.map((data , index) => (
              <div key={index}>
                {data.name}
                {data.category}
                {data.price}
              </div>
            ))}
          </div>
        </ContainerWrapper>
        <div>
          <Image alt="" src={Map} className="mt-20" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
