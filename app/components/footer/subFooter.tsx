
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
    <div className='h-[180px] w-full bg-gray-950 flex justify-between items-center  p-10 mt-20'>
      <div className='flex justify-start gap-8 items-center'>

      <Image alt='' src={Mail} />
      <div className="flex flex-col ">
        <h2 className='text-white text-[24px] font-medium text-start'>Subscribe to our Newsletter</h2>
        <p className='text-[14px] text-white text-start'>Pellentesque eu nibh eget mauris congue mattis matti.</p>
      </div>
      </div>
      <div className='relative'>
        <input type="email" className='border-none rounded-3xl h-[52px] w-[460px] p-5 relative bg-gray-700 text-white' placeholder='Your email address' style={{ outline: 'none' }} />
        <ButtonRounded className='bg-green-500 absolute right-0 -mr-6 bottom-0 h-[52px]' name='Subscribe' showArrow={false} />
      </div>
      <div className="flex justify-evenly items-center hover:text-green-600 gap-10">
                    <FaFacebook className="text-white mr-2 h-[18px] w-[18px]" />
                    <FaTwitter className="text-white h-6" />
                    <FaInstagram className="text-white" />
                    <FaPinterest className="text-white" />
                  </div>
    </div>
  );
};

export default SubFooter;
