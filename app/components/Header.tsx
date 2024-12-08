"use client";
// import { Search } from 'lucide-react'
// import React from 'react'
// import Image from 'next/image'

// const Header = () => {

//     const navLinks = [
//         {
//         name:"Plant pots",
//     },
//         {
//         name:"Ceramics",
//     },
//         {
//         name:"Tables",
//     },

//     {
//         name:"Chairs",
//     },

//     {
//         name:"Crockery",
//     },

//     {
//         name:"Tableware",
//     },
//     {
//         name:"Cutlery",
//     },
// ]

//   return (
//     <div className='w-full h-[132px] pt-[20px]  px-[20px] '>
//         <div className='w-full h-1/2 pb-[20px]  flex justify-between items-center '>
//             <Search height={20} width={20} className='cursor-pointer' />

//             <h1 className='font-clash font-[400] text-h3 cursor-pointer '>Anino</h1>
//             <div className='flex items-center   gap-6 '>
//                 <Image className='cursor-pointer' src="/icons/shoping-cart.png" alt='shoping-cart' height={20} width={20}  />  
//                 <Image className='cursor-pointer' src="/icons/user-avatar.png" alt='shoping-cart' height={20} width={20}  />  
//             </div>
//          </div>

//          <hr />
//         <div className='w-full h-1/2 pb-[20px] flex items-center pt-[20px] justify-center'>
//             <div className='flex items-center gap-[40px]'>{
//                navLinks.map((item: {name: string} , index: number)=>(
//                 <h5 className='cursor-pointer text-h5 text-[#726E8D]'>{item.name}</h5>
//                ) )
//             }</div>
//         </div>
//     </div>
//   )
// }

// export default Header







"use client";

import { Search, X } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navLinks = [
    { name: "Plant pots" },
    { name: "Ceramics" },
    { name: "Tables" },
    { name: "Chairs" },
    { name: "Crockery" },
    { name: "Tableware" },
    { name: "Cutlery" },
  ];

  return (
    <div className="w-full h-fit md:h-[132px] pt-[20px] px-[20px]">
      {/* Top Section */}
      <div className="w-full h-1/2 pb-[20px] flex justify-between items-center">
        {/* Left: Search Icon */}
        <Search height={20} width={20} className="cursor-pointer" />

        {/* Center: Logo */}
        <h1 className="font-clash font-[400] text-h3 cursor-pointer">Anino</h1>

        {/* Right: Desktop Actions (Unchanged) */}
        <div className="hidden md:flex items-center gap-6">
          <Image
            className="cursor-pointer"
            src="/icons/shoping-cart.png"
            alt="shopping-cart"
            height={20}
            width={20}
          />
          <Image
            className="cursor-pointer"
            src="/icons/user-avatar.png"
            alt="user-avatar"
            height={20}
            width={20}
          />
        </div>

        {/* Mobile Actions: Search + Hamburger */}
        <div className="flex items-center gap-6 md:hidden bg-red-900">
          <Sheet>
            <SheetTrigger>
              <Image
                className="cursor-pointer"
                src="/icons/menu.png"
                alt="menu"
                height={24}
                width={24}
              />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Menu</h2>
                <SheetTrigger>
                  <X className="cursor-pointer" height={24} width={24} />
                </SheetTrigger>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4">
                {navLinks.map((item, index) => (
                  <h5
                    key={index}
                    className="cursor-pointer text-base text-[#726E8D] hover:text-black"
                  >
                    {item.name}
                  </h5>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Navigation Links for Desktop (Unchanged for md/lg Screens) */}
      <div className="w-full h-1/2 pb-[20px] hidden md:flex items-center pt-[20px] justify-center">
        <div className="hidden md:flex items-center gap-[40px]">
          {navLinks.map((item, index) => (
            <h5
              key={index}
              className="cursor-pointer text-h5 text-[#726E8D]"
            >
              {item.name}
            </h5>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;