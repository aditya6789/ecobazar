import React from "react";
import ContainerWrapper from "../containerWrapper";
import Image from "next/image";
import home from '@/public/icons/home.svg'

interface ILinkBackground{
    name : string;
}

const LinkBackground:React.FC<ILinkBackground> = ({name}) => {
  return (
    <div className="w-full h-[120px] bg-link-background  ">
      <ContainerWrapper>
        <div className="flex justify-start items-center gap-3 ">
          <Image alt="" src={home} className="mt-8" />
          <p className="text-green-600 text-[16px] mt-8"> {">"} {name}</p>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default LinkBackground;
