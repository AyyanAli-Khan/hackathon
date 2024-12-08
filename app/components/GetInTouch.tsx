import { Button } from '@/components/ui/button'
import React from 'react'

export default function GetInTouch() {
  return (
    <div className='w-full h-[603px] flex items-center'>
        <div className='h-full w-1/2 pt-[72px]  px-[84px] flex flex-col justify-between'>
            <div>
            <h3 className='text-h3 font-clash font-[300] text-primary'>
            From a studio in London to a global brand with over 400 outlets
            </h3>
            <p className='font-satoshi text-[#505977] pt-[25px] font-[300]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            </div>

            <div>
                <Button className='font-satoshi mb-[54px] bg-muted rounded-none font-[300] text-h5 hover:bg-destructive py-5 px-8'>Get in touch</Button>
            </div>
        </div>
        <div className='h-full w-1/2'>
            <img src='/images/bigImage.png' alt='image' height={100} width={100} className='h-full w-full object-cover' />
        </div>
    </div>
  )
}
