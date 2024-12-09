import React from "react";

interface PROPS {
    src: string,
    title: string,
    price: number,
    className?: string
}

const NewProductCard = ({src, title, price , className}: PROPS) => {
  return (
    <div className={`mt-6 hover:scale-105 h-fit w-26  md:w-[305px] text-primary md:h-[462px] ${className}`}>
      <img
        src={src}
        alt="product image"
        className="md:h-[80%] h-56 w-full"
      />
      <div className="flex justify-between gap-2 py-2 md:py-4 flex-col">
        <h4 className="text-h4 tracking-tight font-clash font-[300]">{title}</h4>
        <p className="text-[18px] font-satoshi font-[300]">£{price}</p>
      </div>
    </div>
  );
};

export default NewProductCard;
