import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div>
        <Header />
        <div className='w-full md:h-fit md:py-[64px] md:px-[188px] bg-muted'>
            <h1 className='text-h1 font-clash font-[300]'>Your shopping cart</h1>
            <div className='grid md:grid-cols-5 md:gap-x-52 w-full md:mt-10 items-center'>
                <div className='col-span-3 hidden md:block '>
                    <h6 className='text-h6 font-clash font-[200]'>Product</h6>
                </div>
                <div className='hidden md:block'>
                    <h6 className='text-h6 font-clash font-[200]'>Quantity</h6>
                </div>
                <div className='hidden md:block '>
                    <h6 className='text-h6 font-clash font-[200]'>Total</h6>
                </div>
    
                {/* //////////////// //////////////////////////////*/}




                <div className='col-span-3 pt-5 '>
                    <div className='h-[180px] w-[400px] flex items-center '>
                        <img src="/images/Product Image.png" alt="product"
                        className='h-full w-1/2'
                        />

                        <div className='p-[20px] h-full w-full flex flex-col justify-between'>
                            <h6 className='font-clash font-[400] 
                            text-h4
                            '>Graystone vase</h6>

                            <p className='font-satoshi font-[200] 
                            text-h6'>A timeless ceramic vase with a tri color grey glaze.</p>

                            <h1 className='text-h5 font-satoshi font-[200]'>£85</h1>

                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <h6 className='text-h6 font-satoshi  font-[200]'>1</h6>
                </div>
                <div className='hidden md:block'>
                    <h6 className='text-h6 font-clash font-[200]'>£85</h6>
                </div>


                {/* ////////////////////////////////////////////////// */}
                <div className='col-span-3 pt-5 '>
                    <div className='h-[180px] w-[400px] flex items-center '>
                        <img src="/images/Product Image.png" alt="product"
                        className='h-full w-1/2'
                        />

                        <div className='p-[20px] h-full w-full flex flex-col justify-between'>
                            <h6 className='font-clash font-[400] 
                            text-h4
                            '>Graystone vase</h6>

                            <p className='font-satoshi font-[200] 
                            text-h6'>A timeless ceramic vase with a tri color grey glaze.</p>

                            <h1 className='text-h5 font-satoshi font-[200]'>£85</h1>

                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <h6 className='text-h6 font-satoshi  font-[200]'>1</h6>
                </div>
                <div className='hidden md:block'>
                    <h6 className='text-h6 font-clash font-[200]'>£85</h6>
                </div>



            </div>

            <div className='w-full  h-fit mb-10 flex md:mt-[28px]    justify-end'>
                <div className='w-fit md:ml-auto text-right  h-fit justify-start'>
                    <h4 className='text-primary text-h4 font-clash font-[200]'>Subtotal &nbsp;&nbsp; <span className='text-black font-[300]'>£85</span> </h4>
                    <p className='text-primary font-satoshi font-[200] text-h6'>Taxes and shipping are calculated at checkout</p>
                    <Button className="text-h5 text-white bg-primary hover:bg-secondary hover:text-white mt-3 md:mt-6 font-[300] rounded-none py-[24px] leading-none px-[32px]">
                    Go to checkout
      </Button>
                </div>
            </div>


        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}
