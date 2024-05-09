// import Image from 'next/image';
// import React, { HTMLAttributes } from 'react';
// import Arrow from '@/public/icons/arrow_right.svg';



// interface IButtonRounded {
//   className?: string;
//   showArrow?: boolean;
//   name:string;
//   button: 
// }

// const ButtonRounded: React.FC<IButtonRounded> = ({ className, showArrow = true , name , onClick }) => {
//   const defaultClassName = 'bg-green text-white';

//   return (
//     <button
//       className={`rounded-3xl p-2 w-[150px] text-[14px] font-semibold flex items-center justify-center gap-2 ${defaultClassName} ${className}`} onClick={onClick}
//     >
//       {name} {showArrow && <span><Image alt='arrow' src={Arrow} /></span>}
//     </button>
//   );
// };

// export default ButtonRounded;

import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import Arrow from '@/public/icons/arrow_right.svg';

interface IButtonRounded extends HTMLAttributes<HTMLButtonElement> {
  showArrow?: boolean;
  name: string;
}

const ButtonRounded: React.FC<IButtonRounded> = ({ className, showArrow = true, name, onClick, ...rest }) => {
  const defaultClassName = 'bg-green text-white';

  return (
    <button
      className={`rounded-3xl p-2 w-[150px] text-[14px] font-semibold flex items-center justify-center gap-2 ${defaultClassName} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {name} {showArrow && <span><Image alt='arrow' src={Arrow} /></span>}
    </button>
  );
};

export default ButtonRounded;
