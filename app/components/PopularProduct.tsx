import React from 'react'
import NewProductCard from './NewProductCard'
import ViewButtton from '@/components/ui/ViewButton'

const PopularProduct = () => {
  return (
    <section className='w-full h-[744px] px-6 py-6 md:pt-[64px] md:px-[80px]'>
        <h2 className='text-primary text-h4 md:text-h2 font-clash font-[300]'>Our popular products</h2>

        {/* <div className='mt-5 flex items-center justify-between '> */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 items-center'>
         <div className='sm:col-span-2'>
         <NewProductCard
             src='/images/large.png' 
             title='The Poplar suede sofa' price={980}
             className='md:w-fit'
             />
         </div>

             <NewProductCard
              src='/images/hero image.png'
              title='The Dandy chair'
              price={250}
              />

             <NewProductCard
              src='/images/dark chair.png'
              title='The Dandy chair'
              price={250}
              />
        </div>

        <div className='flex items-center justify-center'>
            <ViewButtton />
        </div>


    </section>
  )
}

export default PopularProduct
