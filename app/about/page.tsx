'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import  {Scrollbar}  from "swiper/modules";
// import Scrollbar from "swiper/modules/scrollbar";
import { Search, X } from "lucide-react";
// import React from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";


export default function page() {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Plant pots" },
        { name: "Ceramics" },
        { name: "Tables" },
        { name: "Chairs" },
        { name: "Crockery" },
        { name: "Tableware" },
        { name: "Cutlery" },
      ];

  const categories = [
    "All products",
    "Plant pots",
    "Ceramics",
    "Tables",
    "Chairs",
    "Crockery",
    "Tableware",
    "Cutlery",
  ];

  return (
    <div>
        <div className="w-full h-[41px] text-white bg-primary flex items-center justify-center relative">
        <h6 className="text-xs md:text-h6 font-satoshi font-[200] text-center">
          Free delivery on all orders over £50 with code easter checkout
        </h6>
        <span className="absolute right-4 md:right-5 cursor-pointer">X</span>
      </div>

     
      
      <div className="w-full h-fit md:h-[134px] py-[30px] px-[28px]">
      {/* Top Section */}
      <div className="w-full h-1/2 pb-[20px] flex justify-between items-center">
        {/* Left: Search Icon */}
        <h1 className="font-clash font-[400] text-h3 cursor-pointer">Anino</h1>

         {/* Right: Desktop Actions (Unchanged) */}
       <div className="flex items-center gap-[47px]">
            <div className="font-satoshi flex text-[#726E8D] items-center 
            gap-3
            md:gap-8 font-[400] text-h5">
                <h5>About us</h5>
                <h5>Contact</h5>
                <h5>Blog</h5>
            </div>

            <div className="hidden md:flex items-center gap-4">
        <Image
            className="cursor-pointer"
            src="/icons/search.png"
            alt="shopping-cart"
            height={20}
            width={20}
          />
        <Link href='/cart'>
        <Image
            className="cursor-pointer"
            src="/icons/shoping-cart.png"
            alt="shopping-cart"
            height={20}
            width={20}
          />
        </Link>


          <Image
            className="cursor-pointer"
            src="/icons/user-avatar.png"
            alt="user-avatar"
            height={20}
            width={20}
          />
        </div>

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
                {navLinks.map((item: {name: string}, index: number) => (
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
      

      {/* Navigation Links for Desktop (Unchanged for md/lg Screens) */}
      <div className="w-full bg-muted h-1/2 pb-[20px] hidden md:flex items-center pt-[20px] justify-center">
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



    </div>
  )
}
