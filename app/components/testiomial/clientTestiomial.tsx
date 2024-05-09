import Image, { StaticImageData } from "next/image";
import React from "react";
import testiomial from "@/public/icons/testiomial.svg";
import user1 from "@/public/icons/user1.png";

interface IClientTestiomialCard{
  image: StaticImageData;
  
  name:String;
  review:String;
}


const ClientTestiomialCard:React.FC<IClientTestiomialCard> = ({image,name,review}) => {
  return (
    <div className="md:w-[384px] md:h-[254px] bg-white p-4 shadow-sm">
      <Image alt="" src={testiomial} />
      <p className="mt-6 text-[14px] text-gray-400">
       {review}
      </p>
      <div className="flex justify-start items-center gap-3 mt-5">
        <Image alt="" src={image}/>
        <div className="">

        <h2 className="text-[16px] font-medium">{name}</h2>
        <p className="text-[14px]">Customer</p>
        </div>
      </div>
    </div>
  );
};

export default ClientTestiomialCard;
