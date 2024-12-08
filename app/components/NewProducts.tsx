// import React from 'react'
// import NewProductCard from './NewProductCard'
// import { Button } from '@/components/ui/button'
// import { ViewIcon } from 'lucide-react'
// import ViewButtton from '@/components/ui/ViewButton'

// const NewProducts = () => {

//     const NewProductDetails = [
//         {
//             src:"/images/hero image.png",
//             title:"The Dandy chair",
//             price:250,
//         },
//         {
//             src:"/images/hero image.png",
//             title:"The Dandy chair",
//             price:250,
//         },
//         {
//             src:"/images/hero image.png",
//             title:"The Dandy chair",
//             price:250,
//         },
//         {
//             src:"/images/hero image.png",
//             title:"The Dandy chair",
//             price:250,
//         },
     
//     ]

//   return (
//     <div className='w-full h-[761] bg-white py-[80px] px-[80px]'>
//         <h2 className='text-h2 text-primary font-clash font-[300]'>New ceramics</h2>
//       <div className='flex items-center justify-between'>
//         {
//             NewProductDetails.map((item:{src: string, title: string, price: number},index: number) => (
//                 <NewProductCard src={item.src} title={item.title}  price={item.price} />
//             ))
//         }
//       </div>

//       <div className='flex items-center justify-center'>       
//       {/* <Button
//               className="text-h5 text-black bg-muted hover:bg-accent mt-10 font-[300] rounded-none py-[24px] leading-none px-[32px]"
//             >
//               View Colletion
//             </Button> */}
//             <ViewButtton />
//       </div>
//     </div>
//   )
// }

// export default NewProducts


import React from 'react';
import NewProductCard from './NewProductCard';
import ViewButtton from '@/components/ui/ViewButton';

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
    <div className="w-full h-auto bg-white py-[24px] px-6 md:py-[80px] md:px-[80px]">
      {/* Heading */}
      <h2 className="text-h2 text-primary font-clash font-[300] mb-8 md:mb-10">New ceramics</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 items-center">
        {NewProductDetails.map((item, index) => (
          <NewProductCard key={index} src={item.src} title={item.title} price={item.price} />
        ))}
      </div>

      {/* View Button */}
      <div className="flex justify-center mt-12">
        <ViewButtton />
      </div>
    </div>
  );
};

export default NewProducts;



