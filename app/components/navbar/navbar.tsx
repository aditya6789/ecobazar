'use client'
import React, { useState } from "react";
import Location from "@/public/icons/location.svg";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/logo.svg";
import Search from "@/public/icons/search.svg";
import Button from "../button/button";
import Wishlist from "@/public/icons/wishlist.svg";
import Bag from "@/public/icons/bag.svg";
import Phone from "@/public/icons/phone.svg";
import ContainerWrapper from "../containerWrapper";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import CartPopup from "@/app/cart/cartPop";
import { popularProductData } from "@/app/data/data";
interface Product {
  id: number;
  image: any; // You might want to define the type for the 'image' property
  name: string;
  price: number;
  category: string;
}



const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const items = useSelector((state: RootState) => state.cart);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredResults = popularProductData.filter((product) =>
      product.name.toLowerCase().includes(term)
    );

    setSearchResults(filteredResults);
  };



  return (
    <>
      <nav className="  border-b-2">
        <ContainerWrapper>
          <div className="flex justify-between items-center h-[40px]">


        <div className="flex justify-between items-center">
          <Image alt="loction" src={Location} />
          <h4 className="text-gray-600 pl-2 text-[14px]">Store Location: Lincoln- 344, Illinois, Chicago, USA</h4>
        </div>
        <div className="flex justify-between items-center">
          <Link href={"#"} className="text-gray-600 pr-2 text-[14px]">Sign In</Link>
          |
          <Link href={"#"} className="text-gray-600 pl-2 text-[14px]">Sign Up</Link>
        </div>
          </div>
        </ContainerWrapper>
      </nav>
      <nav className="  ">
        <ContainerWrapper>
          <div className="flex justify-between items-center h-[100px]">


        <div>
          <Link href={"/"}>
          
          <Image alt="logo" src={Logo} />
          </Link>
        </div>
        <div className="relative">


        <div className="flex items-center">
          <div className="flex items-center border rounded-lg border-r-0 pr-0 p-2">
            <Image alt="search" src={Search} className="pr-1" />
            <input
              type="search"
              placeholder=" Search"
              className=" border-none focus:outline-0 "
              onChange={handleSearch}
              />
          </div>
          <Button />
        </div>
        {searchTerm && (
        <div className="bg-white p-4 absolute z-50">
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
              <Link href={`/shop/${result.id}`}>
              {result.name}
              </Link>
            </li>
            ))}
          </ul>
        </div>
      )}
        </div>
        <div className="flex items-center gap-2">
          <Image alt="wishlist" src={Wishlist} className="w-[32px] h-[32px]" />
        

          |<div className="relative cursor-pointer" onClick={handleToggleCart}>

          <Image alt="Cart" src={Bag} className="w-[32px] h-[32px] "/>
          <div className="rounded-full h-[16px] w-[16px] bg-green-600 text-center absolute top-0 right-0 text-[10px] text-white">{items.products.length}</div>
          </div>
          
          <CartPopup isOpen={isCartOpen} onClose={handleToggleCart} />
          <div>
            <h4 className="text-gray-600 pl-2 text-[11px]">Shopping Cart</h4>
            <h3 className="text-gray-600 pl-2 text-[14px] font-medium">${items.totalPrice}</h3>
          </div>
        </div>
              </div>
              </ContainerWrapper>
      </nav>
      <nav className="bg-black">
        <ContainerWrapper>
          <div className="flex items-center justify-between  h-[60px]">


        <div className="flex items-center justify-between gap-5">
          <Link href={"/"}   className={`text-gray-400 hover:text-white text-[14px] font-medium ${
            activeLink === 'home' ? 'text-white' : ''
          }`}
          onClick={() => handleLinkClick('home')}>
            Home
          </Link>
          <Link href={"/shop"}   className={`text-gray-400 hover:text-white text-[14px] font-medium ${
            activeLink === 'shop' ? 'text-white' : ''
          }`}
          onClick={() => handleLinkClick('shop')}>
            Shop
          </Link>
          
       
          <Link href={"/about"}   className={`text-gray-400 hover:text-white text-[14px] font-medium ${
            activeLink === 'about' ? 'text-white' : ''
          }`}
          onClick={() => handleLinkClick('about')}>
            About Us
          </Link>
          <Link href={"/contact"}   className={`text-gray-400 hover:text-white text-[14px] font-medium ${
            activeLink === 'contact' ? 'text-white' : ''
          }`}
          onClick={() => handleLinkClick('contact')}>
            Contact Us
          </Link>
         
        </div>
        <div className="flex items-center  gap-2">
          <Image src={Phone} alt="phone" />
          <h3 className='text-white text-[14px] font-medium'>7806XXXXXX</h3>
        </div>
          </div>
        </ContainerWrapper>
      </nav>
     
    </>
  );
};

export default Navbar;
