import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'
import Member1 from '@/public/images/members1.png'

interface ImageOverlayProps {
  src: StaticImageData;
  alt: string;
  overlayColor: string;
  children: ReactNode;
  title : string;
  desc: string;
}

const MembersCard:React.FC<ImageOverlayProps> = ({src,alt,overlayColor,children, title, desc}) => {
  return (
    <div className='md:w-[310px] md:h-[380px] border hover:shadow-2xl'>
        <div className="relative group">
      <Image src={src} alt={alt} className="md:w-[310px] md:h-[298px] w-full" />
      <div className={`absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 bg-${overlayColor} transition duration-300 ease-in-out`}>
        {children}
      </div>
    </div>
        <div className='m-4'>
            <h2 className='text-[18px] font-medium mt-2'>{title}</h2>
            <p className='text-[14px] mt-1 mb-3 '>{desc}</p>
        </div>
    </div>
  )
}

export default MembersCard

// import Image, { StaticImageData } from 'next/image';
// import React, { ReactNode } from 'react';

// interface ImageOverlayProps {
//   src: StaticImageData;
//   alt: string;
//   overlayColor: string;
//   children: ReactNode;
// }

// const ImageOverlay: React.FC<ImageOverlayProps> = ({ src, alt, overlayColor, children }) => {
//   return (
//     <div className="relative group">
//       <Image src={src} alt={alt} className="w-full h-auto" />
//       <div className={`absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 bg-${overlayColor} transition duration-300 ease-in-out`}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default ImageOverlay;
