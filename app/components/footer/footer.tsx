"use client";
import React, { useState } from "react";
import Mail from "@/public/icons/mail.svg";
import Logo from "@/public/icons/logo_white.svg";
import Leaf from "@/public/icons/leaf.svg";
import ApplePay from "@/public/icons/apple_pay.svg";
import Visa from "@/public/icons/visa.svg";
import Discover from "@/public/icons/discover.svg";
import MasterCard from "@/public/icons/mastercard.svg";
import Payment from "@/public/icons/secure_payment.svg";






import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import ButtonRounded from "../button/buttonRounded";
import ContainerWrapper from "../containerWrapper";
import Link from "next/link";
import Menu from "./footerMenu";

const Footer = () => {
  const [activeLink, setActiveLink] = useState<string>("account");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    // Additional logic if needed
  };

  const accountItems = [
    { href: "#", text: "My Account" },
    { href: "#", text: "Order History" },
    { href: "#", text: "Shopping Cart" },
    { href: "#", text: "Wishlist" },
  ];
  const helpItems = [
    { href: "#", text: "Contact" },
    { href: "#", text: "Faqs" },
    { href: "#", text: "Terms & Condition" },
    { href: "#", text: "Privacy Policy" },
  ];
  const proxyItems = [
    { href: "#", text: "About" },
    { href: "#", text: "Shop" },
    { href: "#", text: "Product" },
    { href: "#", text: "Track Order" },
  ];

  return (
    <>
      <div className="h-[180px] w-full    p-10 mt-20">
        <ContainerWrapper>
          <div className="flex justify-between items-center" >
            <div className="flex justify-start gap-8 items-center">
              <Image alt="" src={Mail} />
              <div className="flex flex-col ">
                <h2 className=" text-[24px] font-medium text-start">
                  Subscribe to our Newsletter
                </h2>
                <p className="text-[14px]  text-start">
                  Pellentesque eu nibh eget mauris congue mattis matti.
                </p>
              </div>
            </div>
            <div className="relative">
              <input
                type="email"
                className="border rounded-3xl h-[52px] w-[460px] p-5 relative  "
                placeholder="Your email address"
                style={{ outline: "none" }}
              />
              <ButtonRounded
                className="bg-green-500 absolute right-0 -mr-6 bottom-0 h-[52px]"
                name="Subscribe"
                showArrow={false}
              />
            </div>
            <div className="flex justify-evenly items-center hover:text-green-600 gap-10">
              <FaFacebook className=" mr-2 h-[18px] w-[18px]" />
              <FaTwitter className=" h-6" />
              <FaInstagram className="" />
              <FaPinterest className="" />
            </div>
          </div>
        </ContainerWrapper>
      </div>
      <footer className="bg-footer-bg bg-cover bg-gray-950 h-[400px]">
        <div>
          <ContainerWrapper>
            <div className="flex justify-between items-center py-14">
              <div>
                <Image alt="" src={Logo} />
                <p className="text-[14px] text-gray-500 hover:text-white w-[300px] mt-4">
                  Morbi cursus porttitor enim lobortis molestie. Duis gravida
                  turpis dui, eget bibendum magn.
                </p>
                <div className="flex justify-evenly items-center w-[185px] hover:text-green-600 gap-10 mt-3">
                  <FaFacebook className="text-white mr-2 h-[18px] w-[18px]" />
                  <FaTwitter className="text-white h-6" />
                  <FaInstagram className="text-white" />
                  <FaPinterest className="text-white" />
                </div>
              </div>
              <div className="flex items-start justify-between w-[600px]">
                <Menu
                  menuItems={accountItems}
                  activeLink={activeLink}
                  handleLinkClick={handleLinkClick}
                  title="My Account"
                />
                <Menu
                  menuItems={helpItems}
                  activeLink={activeLink}
                  handleLinkClick={handleLinkClick}
                  title="Helps"
                />
                <Menu
                  menuItems={proxyItems}
                  activeLink={activeLink}
                  handleLinkClick={handleLinkClick}
                  title="Proxy"
                />
              </div>
              ghdjguyhjmyf
            </div>
          </ContainerWrapper>
        </div>
        <div>



        
        <div className="relative flex items-center">
          <Image
            alt=""
            src={Leaf}
            className="absolute left-12 top-1/2 transform -translate-y-1/2"
            />
          <div className="h-[1px] bg-gray-500 flex-grow"></div>
        </div>
        <div>

            <ContainerWrapper>
        <div className="flex justify-between items-center mt-5">
            <p className="text-[14px] text-gray-500">Ecobazar eCommerce © 2021. All Rights Reserved</p>
            <div className="flex justify-evenly items-center gap-3">
                <Image alt="" src={ApplePay}/>
                <Image alt="" src={Visa}/>
                <Image alt="" src={Discover}/>
                <Image alt="" src={MasterCard}/>
                <Image alt="" src={Payment}/>


                

            </div>

        </div>
            </ContainerWrapper>
        </div>
            </div>
      </footer>
    </>
  );
};

export default Footer;
