import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Image2 from '@/public/images/categories1.png'
import AddToCart from '@/public/icons/add_to_cart.svg'
interface IPopularData {
    image : StaticImageData;
    name : string;
    price : number;
    className?:string;
}


const PopularProducts : React.FC <IPopularData> = ({image,name,price,className}) => {
  return (
    <div className={` h-[330px] border text-black hover:border-successDark hover:text-successDark hover:shadow-xl p-5 ${className} mx-2 `}>
        <Image alt='' src={image} className='w-[250px] h-[230px]'/>
        <div className='flex justify-between items-center mt-4'>
            <div>
                <h4 className='text-[16px]'>
                {name}
                </h4>
                <h3 className='text-[18px] font-medium text-black'>${price}</h3>

            </div>
            <Image alt='' src={AddToCart}/>
        </div>
    </div>
  
  )
}

export default PopularProducts