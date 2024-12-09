import React from 'react';
import NewProductCard from './NewProductCard';
import ViewButtton from '@/components/ui/ViewButton';
import Link from 'next/link';

const NewProducts = () => {
  const NewProductDetails = [
    {
      src: '/images/hero image.png',
      title: 'The Dandy chair',
      price: 250,
    },
    {
      src: '/images/hero image.png',
      title: 'The Dandy chair',
      price: 250,
    },
    {
      src: '/images/hero image.png',
      title: 'The Dandy chair',
      price: 250,
    },
    {
      src: '/images/hero image.png',
      title: 'The Dandy chair',
      price: 250,
    },
  ];

  return (
    <div className="w-full h-auto  bg-white py-[24px] px-6 md:px-[80px] md:py-[80px]">
      {/* Heading */}
      <h2 className="text-h2 text-primary font-clash font-[300] mb-8 md:mb-2">New ceramics</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 items-center">
        {NewProductDetails.map((item, index) => (
          <Link key={index} href='/productlist'><NewProductCard key={index} src={item.src} title={item.title} price={item.price} /></Link>
        ))}
      </div>

      {/* View Button */}
      <div className="flex justify-center mt-8">
        <ViewButtton />
      </div>
    </div>
  );
};

export default NewProducts;



