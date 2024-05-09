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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const items = useSelector((state: RootState) => state.cart);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      <nav className="border-b-2">
        <ContainerWrapper>
          <div className="flex justify-between items-center h-[40px]">
            <div className="flex items-center space-x-2">
              <Image alt="loction" src={Location} />
              <p className="text-sm text-gray-600">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Link href="#" className="text-sm text-gray-600">Sign In</Link>
              <span>|</span>
              <Link href="#" className="text-sm text-gray-600">Sign Up</Link>
            </div>
          </div>
        </ContainerWrapper>
      </nav>
      <nav className="py-4 ">
        <ContainerWrapper>
          <div className="md:flex md:justify-between md:items-center">
            <div>
              <Link href="/">
                <Image alt="logo" src={Logo} />
              </Link>
            </div>
            <div className="flex justify-between gap-10 items-center mt-5 mb-5">

           
            <div className="relative flex items-center">
              <div className="flex items-center border rounded-lg border-r-0 pr-0 p-2">
                <Image alt="search" src={Search} className="pr-1" />
                <input
                  type="search"
                  placeholder="Search"
                  className="border-none focus:outline-none w-full"
                  onChange={handleSearch}
                />
              </div>
              <Button />
            </div>
            <div className="flex items-center space-x-2">
              <Image alt="wishlist" src={Wishlist} className="w-8 h-8 hidden md:block" />
              <div className="relative cursor-pointer" onClick={handleToggleCart}>
                <Image alt="Cart" src={Bag} className="w-8 h-8" />
                <div className="absolute top-0 right-0 w-4 h-4 bg-green-600 text-white text-xs flex items-center justify-center rounded-full">{items.products.length}</div>
              </div>
              <CartPopup isOpen={isCartOpen} onClose={handleToggleCart} />
              <div className="hidden md:block">
                <h4 className="text-sm text-gray-600">Shopping Cart</h4>
                <h3 className="text-sm text-gray-600 font-medium">${items.totalPrice}</h3>
              </div>
            </div>
            </div>
          </div>
          {searchTerm && (
            <div className="absolute bg-white p-4 z-10">
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
        </ContainerWrapper>
      </nav>
      <nav className="bg-black py-5">
        <ContainerWrapper>
          <div className="flex justify-between items-start">
            <div className="md:hidden">
              <button className="text-white focus:outline-none" onClick={handleToggleMenu}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            <div className={`flex items-start gap-10 md:items-center space-x-2 ${isMenuOpen ? 'flex-col' : 'hidden md:flex'}`}>




              <Link href="/" className={`text-gray-400 hover:text-white text-sm font-medium ${activeLink === 'home' ? 'text-white' : ''}`} onClick={() => handleLinkClick('home')}>
                Home
              </Link>
              <Link href="/shop" className={`text-gray-400 hover:text-white text-sm font-medium ${activeLink === 'shop' ? 'text-white' : ''}`} onClick={() => handleLinkClick('shop')}>
                Shop
              </Link>
              <Link href="/about" className={`text-gray-400 hover:text-white text-sm font-medium ${activeLink === 'about' ? 'text-white' : ''}`} onClick={() => handleLinkClick('about')}>
                About Us
              </Link>
              <Link href="/contact" className={`text-gray-400 hover:text-white text-sm font-medium ${activeLink === 'contact' ? 'text-white' : ''}`} onClick={() => handleLinkClick('contact')}>
                Contact Us
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={Phone} alt="phone" className="w-6 h-6" />
              <h3 className="text-white text-sm font-medium">7806XXXXXX</h3>
            </div>
          </div>
        </ContainerWrapper>
      </nav>
    </>
  );
};

export default Navbar;
