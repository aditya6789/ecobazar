'use client'
import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import PopularProducts from '../components/cards/popularProducts';
import ContainerWrapper from '../components/containerWrapper';
import Accordion from '../components/accordion/accordion';
// import ProductView from './[slug]';
import {categoriesData,popularProductData} from '../data/data';
import ProductView from './[productId]/page';
import Link from 'next/link';

const ShopPage = () => {
  const [showProductView, setShowProductView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category:any) => {
    setSelectedCategory(category);
  };

  const filteredProductData = selectedCategory
    ? popularProductData.filter((product) => product.category === selectedCategory)
    : popularProductData;

  return (
    <div className='relative '>
      <ContainerWrapper>
      <div className='text-end'><h1 className='text-end text-[16px] my-8'><span className='text-[16px] font-semibold mr-1'>{popularProductData.length}</span>Result</h1></div>
        <div className='flex flex-col md:flex justify-start items-start mt-20'>
          <Accordion title='All Categories'>
            {categoriesData.map((data) => (
              <div className='flex items-center mb-4' key={data.name}>
                <input
                  type='radio'
                  name='radio-colors'
                  id={data.name}
                  className='mr-5 h-[20px] w-[20px] form-radio text-green-500'
                  onChange={() => handleCategoryChange(data.name)}
                  checked={selectedCategory === data.name}
                />
                <label htmlFor={data.name} className='text-[14px]'>
                  {data.name}
                </label>
              </div>
            ))}
          </Accordion>

          <div className='md:grid grid-rows-2 grid-cols-5 gap-0  '>
            {filteredProductData.map((data) => (
              <Link href= {`/shop/${data.id}`}  key={data.id} >
              
              <div className='mb-5'onClick={() => setShowProductView(true)}>
                <PopularProducts key={data.id} image={data.image} name={data.name} price={data.price} />
              </div>
              </Link>
            ))}
          </div>

        </div>
      </ContainerWrapper>
    </div>
  );
};

export default ShopPage;
