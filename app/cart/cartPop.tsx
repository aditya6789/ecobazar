// CartPopup.tsx
'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store'; // Replace with the correct path
import CartItem from './cartItem'; // Create this component to render individual cart items
import Image from 'next/image';
import Close from '@/public/icons/close.svg'
import { remove } from '../redux/cartSlice';
import ButtonRounded from '../components/button/buttonRounded';

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartPopup: React.FC<CartPopupProps> = ({ isOpen, onClose }) => {
  const items = useSelector((state: RootState) => state.cart.products);
  const total = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (id:number) => {
    dispatch(remove(id));
  };


  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 backdrop-blur-md" onClick={onClose}></div>
      )}
      <div className={`z-50 fixed top-0 right-0 h-full w-full md:w-[456px] bg-white shadow-lg p-6 transition-transform ${isOpen ? 'translate-x-0 md:w-[456px]' : 'translate-x-full md:w-[0px]'}`}>
        <div className='justify-between '>
          <div>
            <div className='flex justify-between items-center'>
              <h1 className='text-black text-[20px] '>Shopping Cart {`(${items.length})`}</h1>
              <div onClick={onClose}>
                <Image alt='' src={Close} className='stroke-black cursor-pointer'/>
              </div>
            </div>
            {items.map((data, index) => (
              <div className='mt-5 flex justify-between items-center' key={index} >
                <CartItem img={data.image} title={data.name} price={data.price}/>
                <div className="border rounded-full items-center w-[30px] h-[30px]" onClick={() => handleRemove(data.id)}>
                  <Image alt="" src={Close} className="h-[16px] w-[16px]" />
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-between items-center mt-10 '>
            <h2>{`${items.length}  Products`}</h2>
            <h2 className='font-semibold'>${total.totalPrice}</h2>
          </div>
          <ButtonRounded name='CheckOut' className='bg-green-500 text-white w-full items-end mt-10' showArrow={false}/>
        </div>
      </div>
    </>
  );
};

export default CartPopup;
