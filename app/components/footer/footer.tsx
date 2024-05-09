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
      <div className="h-[180px] w-full p-5 md:p-10 mt-20 mb-10 md:mb">
        <ContainerWrapper>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex justify-start gap-4 items-center">
              <Image alt="" src={Mail} />
              <div className="flex flex-col">
                <h2 className="text-lg md:text-2xl font-medium text-start">
                  Subscribe to our Newsletter
                </h2>
                <p className="text-sm md:text-base text-start">
                  Pellentesque eu nibh eget mauris congue mattis matti.
                </p>
              </div>
            </div>
            <div className="relative md:mt-0 mt-10 mb-10">
              <input
                type="email"
                className="border rounded-3xl h-[40px] md:h-[52px] w-full md:w-[460px] p-3 md:p-5 relative"
                placeholder="Your email address"
                style={{ outline: "none" }}
              />
              <ButtonRounded
                className="bg-green-500 absolute right-0 -mr-6 bottom-0 h-[40px] md:h-[52px]"
                name="Subscribe"
                showArrow={false}
              />
            </div>
            <div className="hidden md:flex justify-evenly items-center mt-3 md:mt-0 md:ml-5 gap-4">
              <FaFacebook className="h-[18px] w-[18px]" />
              <FaTwitter className="h-6" />
              <FaInstagram />
              <FaPinterest />
            </div>
          </div>
        </ContainerWrapper>
      </div>
      <footer className="bg-footer-bg bg-cover bg-no-repeat bg-gray-950  ">
        <ContainerWrapper>
          <div className="flex flex-col md:flex-row justify-between items-center py-14">
            <div className="flex flex-col justify-start gap-10 items-center md:items-start">
              <Image alt="" src={Logo} />
              <p className="text-sm md:text-base text-gray-500 hover:text-white w-full md:w-[300px] mt-4 md:mt-0">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magn.
              </p>
              <div className="flex justify-evenly items-center w-full mt-4 md:mt-0 md:w-auto gap-4">
                <FaFacebook className="text-white h-[18px] w-[18px]" />
                <FaTwitter className="text-white h-6" />
                <FaInstagram className="text-white" />
                <FaPinterest className="text-white" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:flex sm:justify-between items-center mt-10 md:w-auto md:mt-0">


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
          </div>
        </ContainerWrapper>
        <div className="relative flex items-center justify-center mt-5">
          <Image
            alt=""
            src={Leaf}
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
          />
          <div className="h-[1px] bg-gray-500 w-full"></div>
        </div>
        <ContainerWrapper>
          <div className="md:flex md:justify-between md:items-center mt-10 pb-10 ">
            <p className="text-sm text-gray-500">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>
            <div className=" flex items-center gap-3 mt-10 md:mt-0">
              <Image alt="" src={ApplePay} />
              <Image alt="" src={Visa} />
              <Image alt="" src={Discover} />
              <Image alt="" src={MasterCard} />
              <Image alt="" src={Payment} />
            </div>
          </div>
        </ContainerWrapper>
      </footer>
    </>
  );
};

export default Footer;
