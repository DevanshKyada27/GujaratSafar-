import React, { useEffect } from 'react'
import { IoIosSend } from "react-icons/io";
import { Button } from '@/components/ui/button';
import { GetPlaceDetails } from '@/service/GlobalApi';
import BackgroundSlider from './BackgroundSlider';

function InfoSection({trip}) {
  return (
    <div>
        {/* <img src="/FeedbackForm_bg.jpg" className='h-[340px] w-full object-cover rounded-xl' /> */}
        <div className='overflow-hidden rounded-xl'>
          <BackgroundSlider trip={trip} />
        </div>

        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.destination}</h2>
                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md lg:text-lg'>🗓️ {trip?.userSelection?.noOfDays} Day</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md lg:text-lg'>💰 {trip?.userSelection?.budget} Budget</h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md lg:text-lg'>🥂 Number of Traveller: {trip?.userSelection?.traveler}</h2>
                </div>
            </div>
            <button><IoIosSend className='text-white' /></button>  
        </div>
    </div>
  )
}

export default InfoSection