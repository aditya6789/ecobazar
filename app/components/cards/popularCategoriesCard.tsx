import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface IPopularCategoriesData {
    image: StaticImageData;
    name : string;
}

const PopularCategoriesCard :React.FC<IPopularCategoriesData> = ({image , name}) => {
  return (
    <div className='h-[200px] w-[200px] flex flex-col items-center justify-center rounded-lg  border hover:border-successDark text-black hover:text-successDark hover:shadow-lg'>
        <Image alt='' src={image}/>
        <h2 className='text-[18px] font-medium k '>{name}</h2>
 
    </div>
  )
}

export default PopularCategoriesCard