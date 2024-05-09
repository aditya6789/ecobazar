import React from 'react';
import Mail from '@/public/icons/mail.svg';
import Image from 'next/image';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import ButtonRounded from '../button/buttonRounded';

const SubFooter = () => {
  return (
    <div className='h-[180px] w-full bg-gray-950 flex flex-col md:flex-row justify-between items-center p-5 md:p-10 mt-20'>
      <div className='flex flex-col md:flex-row justify-start gap-8 items-center'>
        <Image alt='' src={Mail} />
        <div className="flex flex-col ">
          <h2 className='text-white text-[18px] md:text-[24px] font-medium text-start'>Subscribe to our Newsletter</h2>
          <p className='text-[12px] md:text-[14px] text-white text-start'>Pellentesque eu nibh eget mauris congue mattis matti.</p>
        </div>
      </div>
      <div className='mt-5 md:mt-0 relative'>
        <input type="email" className='border-none rounded-3xl h-[40px] md:h-[52px] w-full md:w-[460px] p-3 md:p-5 relative bg-gray-700 text-white' placeholder='Your email address' style={{ outline: 'none' }} />
        <ButtonRounded className='bg-green-500 absolute right-0 -mr-6 bottom-0 h-[40px] md:h-[52px]' name='Subscribe' showArrow={false} />
      </div>
      <div className="flex justify-evenly items-center mt-5 md:mt-0 hover:text-green-600">
        <FaFacebook className="text-white h-[18px] md:h-[24px] w-[18px] md:w-[24px]" />
        <FaTwitter className="text-white h-[18px] md:h-6" />
        <FaInstagram className="text-white h-[18px] md:h-6" />
        <FaPinterest className="text-white h-[18px] md:h-6" />
      </div>
    </div>
  );
};

export default SubFooter;
