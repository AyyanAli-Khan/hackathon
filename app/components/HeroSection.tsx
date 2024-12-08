// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import React from "react";


// const HeroSection = () => {
//   return (
//     <section
//       className={`font-clash font-[300] px-[60px] py-[80px] flex items-center justify-center`}
//     >
//       <div className="w-[1280px] flex h-[584px] bg-emerald-500">
//         {/*  text div */}
//         <div className="p-[60px] bg-primary h-full flex flex-col justify-between w-[60%]">
//           <div>
//             <h2 className="text-h2 w-[513px] text-white leading-[150%]">
//               The furniture brand for the future, with timeless designs
//             </h2>

//             <Button
//               className="text-h5 text-white bg-secondary mt-10 font-[300] rounded-none py-[24px] leading-none px-[32px]"
//             >
//               View Colletion
//             </Button>
//           </div>

//           <div>
//             <h1 className='text-large text-white font-satoshi w-[602px]'>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</h1>
//           </div>
//         </div>

//         <div className="bg-primary hidden  w-[60%] md:flex items-center justify-center overflow-hidden  h-full">
//             <Image src='/images/hero image.png' alt="hero image" height={10000} width={10000} className="h-hull w-full object-fit" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className={`font-clash font-[300]  px-4 py-1 md:px-[0px]  md:py-[80px] flex items-center justify-center`}
    >
      <div className="w-full md:w-[1280px] flex bg-primary  flex-col md:flex-row h-auto md:h-[584px]">
        {/* Text Content */}
        <div className="p-6 md:p-[60px]  flex flex-col justify-between w-full md:w-[60%] h-auto md:h-full">
          {/* Header Text and Button */}
          <div>
            <h2 className="text-h4 md:text-h2 text-white leading-[150%] w-full md:w-[513px]">
              The furniture brand for the future, with timeless designs
            </h2>
            <Button
              className="text-sm md:text-h5 text-white bg-secondary mt-6 md:mt-10 font-[300] rounded-none py-3 md:py-[24px] px-6 md:px-[32px]"
            >
              View Collection
            </Button>
          </div>

          {/* Additional Text */}
          <div className="mt-8 md:mt-0">
            <h1 className="text-base md:text-large text-white font-satoshi w-full md:w-[602px]">
              A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
            </h1>
          </div>
        </div>

        {/* Hero Image */}
        <div className="bg-primary w-full hidden md:w-[60%] md:flex items-center justify-center overflow-hidden h-64 md:h-full">
          <Image
            src="/images/hero image.png"
            alt="hero image"
            height={10000}
            width={10000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

