import React from "react";
import Navbar from "../components/navbar/navbar";
import Hero from "@/public/images/hero.png";
import Image from "next/image";
import ArrowRight from "@/public/icons/arrow_right.svg";

import PopularCategoriesCard from "../components/cards/popularCategoriesCard";
import PopularProducts from "../components/cards/popularProducts";
import MembersCard from "../components/cards/membersCard";
import ImageOverlay from "../components/cards/membersCard";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import ClientTestiomialCard from "../components/testiomial/clientTestiomial";
import SubFooter from "../components/footer/subFooter";
import {
  categoriesData,
  clienttestiomialData,
  featuredData,
  membersData,
  popularProductData,
} from "../data/data";
import ContainerWrapper from "../components/containerWrapper";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div>
        <div
          data-aos="fade-up"
          className="bg-gray-100 mx-auto max-w-[1520px] h-[700px] flex justify-center items-center relative "
        >
          <div className="pl-10">
            <h4 className="text-green-500 text-[14px] font-medium uppercase">
              Welcome to shopery
            </h4>
            <h1 className="text-[56px] font-semibold uppercase">
              Fresh & Healthy Organic Food
            </h1>
            <h3 className="text-[18px] font-normal uppercase">
              Sale up to{" "}
              <span className="text-orange-400 text-[32px] font-semibold">
                30% OFF
              </span>{" "}
            </h3>
            <p className="text-[18px]">
              Free shipping on all your order. we deliver, you enjoy
            </p>
          </div>
          <Image alt="image" src={Hero} className="items-center" />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="absolute mx-auto w-[1400px] h-[130px] bg-white flex justify-center items-center bottom-0 left-0 right-0 shadow-md  "
      >
        {featuredData.map((data) => (
          <div className="flex items-center gap-5 m-8">
            <Image alt="/" src={data.image} />
            <div>
              <h3 className="text-[16px] font-semibold">{data.name}</h3>
              <h4 className="text-[14px] text-gray-400">{data.desc}</h4>
            </div>
          </div>
        ))}
      </div>
      <ContainerWrapper>
        {/* popular categories */}

        <div>
          <div
            className="flex justify-between items-center mt-40 mb-10"
            data-aos="fade-up"
          >
            <h1 className=" font-semibold text-[32px]">Popular Categories</h1>
            <div className="flex items-center gap-4 hover:scale-110 transition duration-500 cursor-pointer">
              <h3 className="text-[16px] text-green-600 font-medium">
                View All
              </h3>
              <Image alt="" src={ArrowRight} />
            </div>
          </div>
          <div
            className="grid grid-rows-2 grid-cols-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {categoriesData.map((data) => (
              <div className="mb-5">
                <PopularCategoriesCard image={data.image} name={data.name} />
              </div>
            ))}
          </div>
        </div>
        {/* popular products */}
        <div>
          <div
            className="flex justify-between items-center mt-20 mb-10"
            data-aos="fade-up"
          >
            <h1 className=" font-semibold text-[32px]">Popular Products</h1>
            <Link href={"/shop"}>
            <div className="flex items-center gap-4 hover:scale-110 transition duration-500 cursor-pointer">
              <h3 className="text-[16px] text-green-600 font-medium">
                View All
              </h3>
              <Image alt="" src={ArrowRight} />
            </div>
            </Link>
          </div>

          <div
            className="grid grid-rows-2 grid-cols-5 gap-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {popularProductData.map((data) => (
              <div className="mb-5">
                <Link href={`/shop/${data.id}`}>
                <PopularProducts
                  image={data.image}
                  name={data.name}
                  price={data.price}
                  />
                  </Link>
              </div>
            ))}
          </div>
        </div>
        {/* members  */}
        <div>
          <div className="flex flex-col justify-center items-center mt-20 mb-10">
            <p
              className="text-[14px] font-medium text-green-600"
              data-aos="fade-up"
            >
              Team
            </p>
            <h1
              className=" font-semibold text-[32px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our Professional Members
            </h1>
          </div>
          {/* <MembersCard/> */}
          <div className="flex justify-between items-center m-3">
            {membersData.map((data) => (
              <div data-aos="zoom-in" data-aos-delay="500">
                <MembersCard
                  src={data.image}
                  alt="Image Alt Text"
                  overlayColor="black"
                  title={data.title}
                  desc={data.desc} // Set the overlay color
                >
                  {/* Additional content to overlay on the image */}
                  <div className="absolute inset-0 flex items-center justify-around opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out hover:text-green-600">
                    <FaFacebook className="text-white mr-2" />
                    <FaTwitter className="text-white h-6" />
                    <FaInstagram className="text-white" />
                    <FaPinterest className="text-white" />
                  </div>
                </MembersCard>
              </div>
            ))}
          </div>
        </div>
        {/* testiomial */}
        <div className="w-full h-[550px] bg-gray-200 mt-20 py-10">
          <h2
            className="text-green-500 text-[14px] font-medium text-center"
            data-aos="fade-up"
          >
            CLIENT TESTIOMIAL
          </h2>
          <h1
            className="text-[36px] font-semibold text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            What our Client Says
          </h1>
          <div
            className="flex justify-between items-center mx-12 my-10"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {clienttestiomialData.map((data) => (
              <ClientTestiomialCard
                image={data.image}
                name={data.name}
                review={data.review}
              />
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default HomePage;
