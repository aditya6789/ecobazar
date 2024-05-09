import React from "react";
import Navbar from "../components/navbar/navbar";

import LinkBackground from "../components/navbar/linkBackground";
import ContainerWrapper from "../components/containerWrapper";
import Image from "next/image";
import AboutImage1 from "@/public/images/about_image1.png";
import AboutImage2 from "@/public/images/about_image2.png";
import AboutImage3 from "@/public/images/about_image3.png";
import Original from "@/public/icons/original.svg";
import Feedback from "@/public/icons/feedback.svg";
import Delivery from "@/public/icons/delivery.svg";
import Support from "@/public/icons/customer_support.svg";
import Payment from "@/public/icons/package.svg";
import box from "@/public/icons/package.svg";
import ButtonRounded from "../components/button/buttonRounded";
import Member1 from "@/public/images/members1.png";
import Member2 from "@/public/images/members2.png";
import Member3 from "@/public/images/members3.png";
import Member4 from "@/public/images/members1.png";
import user1 from "@/public/icons/user1.png";
import user2 from "@/public/icons/user2.png";
import user3 from "@/public/icons/user3.png";

import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import MembersCard from "../components/cards/membersCard";
import ClientTestiomialCard from "../components/testiomial/clientTestiomial";
import Footer from "../components/footer/footer";
import Link from "next/link";
import { clienttestiomialData, membersData } from "../data/data";

const AboutPage = () => {
  return (
    <div>
     

      {/* first row */}
      <ContainerWrapper>
        <div className=" md:flex justify-between items-center mt-20">
          <div>
            <h1
              className="text-[30px] md:text-[56px]  font-semibold"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              100% Trusted <br /> Organic Food Store
            </h1>
            <p
              className="md:text-[18px] text-md text-gray-400 md:mt-10  w-[590px] mb-10 md:mb-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <Image alt="" src={AboutImage1} />
        </div>
      </ContainerWrapper>
      {/* Second row */}

      <div className=" md:flex justify-between items-center mt-20">
        <Image alt="" src={AboutImage2} />
        <ContainerWrapper>
          <div>
            <h1
              className=" md:text-[56px] text-[30px] font-semibold"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              100% Trusted <br /> Organic Food Store
            </h1>
            <p
              className="md:text-[18px] text-md mt-10  md:mt-10 text-gray-400 w-[590px]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
        </ContainerWrapper>
      </div>
      {/* third row */}
      <ContainerWrapper>
        <div className=" md:flex justify-between items-center mt-20 gap-10">
          <div>
            <h1
              className=" md:text-[56px] text-[30px] font-semibold"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              We Delivered, You
              <br /> Enjoy Your Order.
            </h1>
            <p
              className="md:text-[18px] text-md mt-10 md:mt-10 text-gray-400 w-[590px]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            <div data-aos="fade-up" data-aos-delay="500">
              <Link href={"/shop"}>
                <ButtonRounded
                  name="Shop Now"
                  showArrow={true}
                  className="bg-green-600 text-white mt-10"
                />
              </Link>
            </div>
          </div>
          <Image alt="" src={AboutImage3} className="w-full h-full" />
        </div>
      </ContainerWrapper>
      {/* members  */}
      <div className="bg-gray-50   ">
        <ContainerWrapper>
          <div className="flex flex-col justify-center items-center mt-20 mb-10">
            <p
              className="text-[14px] font-medium text-green-600 mt-10"
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
          <div className=" md:flex justify-between items-center   ">
            {membersData.map((data , index) => (
              <div data-aos="zoom-in" data-aos-delay="500" className="mb-20" key={index}>
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
        </ContainerWrapper>
      </div>
      {/* testiomial */}
      <div className="w-full  bg-gray-200 mt-20 py-10">
        <div>
          <ContainerWrapper>
            <h2
              className=" text-[48px] font-semibold text-start"
              data-aos="fade-up"
            >
              CLIENT TESTIOMIAL
            </h2>

            <div
              className=" md:flex justify-between items-center gap-10  my-10"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              {clienttestiomialData.map((data , index) => (
                <ClientTestiomialCard
                  image={data.image}
                  name={data.name}
                  review={data.review}
                  key={index}
                />
              ))}
            </div>
          </ContainerWrapper>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
